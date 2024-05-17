import { Logo } from "@/assets/icons/Logo";
import { ThreeDotCircle } from "@/assets/icons/ThreeDotCircle";
import Header from "@/components/UI/Header";
import Typography from "@/constants/Typography";
import { Stack } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: () => (
            <Header
              title="Profile"
              options={{
                leftComponent: () => {
                  return (
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 15,
                      }}
                    >
                      <SvgXml xml={Logo} />
                      <Text style={Typography.heading._4}>Profile</Text>
                    </View>
                  );
                },
                rightComponent: () => {
                  return (
                    <Pressable onPress={() => {}}>
                      <SvgXml xml={ThreeDotCircle} />
                    </Pressable>
                  );
                },
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="EditProfile"
        options={{
          header: () => <Header title="Edit Profile" />,
        }}
      />
      <Stack.Screen
        name="Notification"
        options={{ header: () => <Header title="Notification" /> }}
      />
      <Stack.Screen
        name="Payment"
        options={{ header: () => <Header title="Payment" /> }}
      />
      <Stack.Screen
        name="Security"
        options={{ header: () => <Header title="Security" /> }}
      />
      <Stack.Screen
        name="InviteFriends"
        options={{ header: () => <Header title="Invite Friends" /> }}
      />
      <Stack.Screen
        name="Languages"
        options={{ header: () => <Header title="Languages" /> }}
      />
      <Stack.Screen
        name="HelpCenter"
        options={{
          header: () => (
            <Header
              title="Help Center"
              options={{
                rightComponent: () => {
                  return <SvgXml xml={ThreeDotCircle} />;
                },
              }}
            />
          ),
        }}
      />
    </Stack>
  );
}
