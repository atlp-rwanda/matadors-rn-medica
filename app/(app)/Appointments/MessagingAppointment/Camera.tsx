import { circleWithDots } from "@/components/UI/icons/circleWithDots";
import { BlackFilterIcon } from "@/components/UI/icons/filterIcon";
import { Colors } from "@/constants/Colors";
import { ThemeContext } from "@/ctx/ThemeContext";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useContext, useRef, useState } from "react";
import {
  Button,
  Pressable,
  Text,
  TouchableOpacity,
  View 
} from "react-native";
import { SvgXml } from "react-native-svg";
import { CameraView, useCameraPermissions} from "expo-camera";
import { backArrowWhite } from "@/components/UI/icons/backArrow";
import { whiteSwitchCamera } from "@/components/UI/icons/cameraIcon";
import { WhiteFlashLight } from "@/components/UI/icons/flashLight";
import * as MediaLibrary from 'expo-media-library';

function CameraComponent() {
  const { theme, changeTheme } = useContext(ThemeContext);
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState("back");
  const [flashMode, setFlashMode] = useState(false)
  const [voiceRecorder, setVoiceRecorder] = useState(false)
  const cameraRef = useRef(null)

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View>
        <Text>We need permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }
  function toggleFlashMode(){
    setFlashMode(!flashMode)
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        console.log(photo.uri);
        const asset = await MediaLibrary.createAssetAsync(photo.uri);
        await MediaLibrary.saveToLibraryAsync(asset);
        console.log("Picture saved to gallery!");
      } catch (error) {
        console.error("Error taking picture:", error);
      }
    } else {
      console.log("Camera reference is not set");
    }
  };


  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <CameraView
     facing={facing}
     enableTorch={flashMode}
     ref={cameraRef}
      style={{ flex: 1, justifyContent: "space-between", paddingVertical: 100 }} >
        <Pressable
          onPress={() => router.back()}
          style={{
            paddingHorizontal: 60
          }}
        >
          <SvgXml xml={backArrowWhite} />
        </Pressable >
        <View style={{flexDirection: "row", alignItems: "center", gap: 40,justifyContent: "center" }}>
          <TouchableOpacity
          onPress={toggleFlashMode}
            style={{backgroundColor:"rgba(240, 240, 240, 0.2)", padding: 20, borderRadius: 100  }}
          >
          <SvgXml xml={WhiteFlashLight}/>

          </TouchableOpacity>
          <TouchableOpacity
            onPress={takePicture}
            style={{  alignItems: "center", borderWidth: 5, width: 100, height: 100, borderColor: Colors.main.primary._500, borderRadius: 100 }}
          >
            <View style={{backgroundColor:"rgba(240, 240, 240, 0.7)", width: "100%", height: "100%", borderRadius: 100 }}></View>
           
          </TouchableOpacity>
          <TouchableOpacity
            onPress={toggleCameraFacing}
            style={{backgroundColor:"rgba(240, 240, 240, 0.2)", padding: 20, borderRadius: 100  }}
          >
            <SvgXml xml={whiteSwitchCamera}/>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}
export default CameraComponent;
