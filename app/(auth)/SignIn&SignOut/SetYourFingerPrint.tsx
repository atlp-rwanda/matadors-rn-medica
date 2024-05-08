import ModalScreen from "@/app/modal";
import { Text, View } from "@/components/Themed";
import Button from "@/components/UI/Button";
import { Colors } from "@/constants/Colors";
import Typography from "@/constants/Typography";
import { Image, SafeAreaView, ScrollView } from "react-native";
import { ThemeContext } from "@/ctx/ThemeContext";
import React, { useContext, useEffect } from "react";
import * as LocalAuthentication from "expo-local-authentication";
import ModalContainer from "@/components/UI/Modal";
import { useModal } from "@/ctx/ModalContext";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { Pressable } from "react-native";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { LoadingIcon } from "@/components/UI/Icons";
import Booking_Appointment from "@/app/(app)/Booking/Booking_Appointment";

export default function SetYourFingerPrint() {
  const { theme, changeTheme } = useContext(ThemeContext);
  const modal = useModal();
  changeTheme("light")


  const rotationValue = useSharedValue(0);

  useEffect(() => {
    rotationValue.value = withRepeat(withTiming(1, { duration: 2000 }), -1);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationValue.value * 360}deg` }],
  }));

  async function handleAuth() {
    try {
      const { success } = await LocalAuthentication.authenticateAsync();
      console.log(success);

      if (success) {
        modal.show({
          children: (
            <View
              style={{
                padding: 40,
                alignItems: "center",
                gap: 20,
                borderRadius: 48,
                backgroundColor:
                  theme === "light"
                    ? Colors.others.white
                    : Colors.grayScale._900,
              }}
            >
              <Image
                source={require("@/assets/images/SetYourFingerPrintModalAccountImage.png")}
              />
              <View
                style={{
                  gap: 20,
                  backgroundColor:
                    theme === "light"
                      ? Colors.others.white
                      : Colors.grayScale._900,
                }}
              >
                <Text
                  style={[
                    Typography.heading._4,
                    {
                      color: Colors.main.primary._500,
                      textAlign: "center",
                    },
                  ]}
                >
                  Congratulations!
                </Text>
                <Text
                  style={[
                    Typography.regular.large,
                    {
                      textAlign: "center",
                      color:
                        theme === "light"
                          ? Colors.grayScale._900
                          : Colors.others.white,
                    },
                  ]}
                >
                  Your account is ready to use. You will be redirected to the
                  Home page in a few seconds..
                </Text>
              </View>
              <Animated.View style={[animatedStyle]}>
                <LoadingIcon fillColor={Colors.main.primary._500} />
              </Animated.View>
            </View>
          ),
        });

        setTimeout(() => {
          modal.hide();
          router.push("/(app)/ActionMenu/HomeScreen");
        }, 3000);
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  return (
    
    <>
     <Pressable onPress={() => router.back()} style={{
        paddingTop: 100,
        flexDirection: "row",
        alignItems: "center",
        gap: 30,
        padding:30,
        backgroundColor:
        theme === "light" ? Colors.others.white : Colors.others.black,
            }}>
          <MaterialIcons name="arrow-back" size={25} style={{alignSelf: "center",
}} />
          <Text style={{ 
            fontSize: 24,
            fontWeight: "600",}}
            >Set Your Fingerprint</Text>
        </Pressable>
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingVertical: 50,
        padding:30,
        height: "100%",
        backgroundColor:
          theme === "light" ? Colors.others.white : Colors.others.black,
      }}
    >
      <View
        style={{
          height: "100%",
          justifyContent: "space-between",
          paddingVertical: 20,
          backgroundColor:
            theme === "light" ? Colors.others.white : Colors.others.black,
        }}
      >
        <Text
          style={[
            Typography.regular.xLarge,
            {
              textAlign: "center",
              color:
                theme === "light"
                  ? Colors.grayScale._900
                  : Colors.others.white,
            },
          ]}
        >
          Add a fingerprint to make your account more secure.
        </Text>

        <Image source={require("@/assets/images/fingerprint.png")} />

        <View
          style={{
            gap: 60,
            backgroundColor:
              theme === "light" ? Colors.others.white : Colors.others.black,
          }}
        >
          <Text
            style={[
              Typography.regular.xLarge,
              { textAlign: "center" },
              {
                shadowColor: "red",
                shadowOffset: { width: -2, height: 20 },
                shadowOpacity: 1,
                shadowRadius: 20,
                color:
                  theme === "light"
                    ? Colors.grayScale._900
                    : Colors.others.white,
              },
            ]}
          >
            Please put your finger on the fingerprint scanner to get started.
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              gap: 4,
              backgroundColor:
                theme === "light" ? Colors.others.white : Colors.others.black,
            }}
          >
            <Text
              style={[
                Typography.regular.xLarge,
                { textAlign: "center" },
                {
                  shadowColor: "red",
                  shadowOffset: { width: -2, height: 20 },
                  shadowOpacity: 1,
                  shadowRadius: 20,
                  color:
                    theme === "light"
                      ? Colors.grayScale._900
                      : Colors.others.white,
                },
              ]}
            >
          
              Please put your finger on the fingerprint scanner to get started.
            </Text>
            <View
              style={{
                flexGrow: 1,
                backgroundColor:
                  theme === "light"
                    ? Colors.others.white
                    : Colors.others.black,
              }}
            >
              <Button
                backgroundColor={Colors.main.primary._100}
                title="Skip"
                textColor={{ color: Colors.main.primary._500 }}
                onPress={() => {}}
              />
            </View>
            <View
              style={[
                { flexGrow: 1 },
                {
                  shadowColor: "red",
                  shadowOffset: { width: 6, height: 6 },
                  shadowOpacity: 1,
                  shadowRadius: 20,
                  backgroundColor:
                    theme === "light"
                      ? Colors.others.white
                      : Colors.others.black,
                },
              ]}
            >
              <Button
                backgroundColor={Colors.main.primary._500}
                title="Continue"
                shadowColor={Colors.main.primary._500}
                onPress={handleAuth}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  </>
)}
