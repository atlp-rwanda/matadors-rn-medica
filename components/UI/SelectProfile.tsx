import { EditBlueIcon } from "@/assets/icons/EditBlueIcon";
import {
  EmptyImageContainer,
  EmptyImageContainerDark,
} from "@/assets/icons/EmptyImageContainer";
import { useContext, useState } from "react";
import { Image, Pressable } from "react-native";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";
import * as ImagePicker from "expo-image-picker";
import React from "react";
import { ThemeContext } from "@/ctx/ThemeContext";

interface Props {
  image?: string | null;
  setImage: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function SelectProfile({ image, setImage }: Props) {
  const { theme } = useContext(ThemeContext);

  async function pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  return (
    <>
      <View style={{ position: "relative" }}>
        {image ? (
          <View style={{width: 200, height:200}}>
             <Image
            source={{ uri: image }}
            style={{ width: 170, height: 170, borderRadius: 100 }}
          />
          </View>
        ) : (
          <SvgXml
            xml={
              theme === "light" ? EmptyImageContainer : EmptyImageContainerDark
            }
          />
        )}
        <Pressable
          onPress={pickImage}
          style={{
            position: "absolute",
            bottom: 5,
            right: 15,
          }}
        >
          <SvgXml xml={EditBlueIcon} />
        </Pressable>
      </View>
    </>
  );
}
