import { Image, Text, View } from "react-native";
import Button from "../UI/Button";
import { Colors } from "@/constants/Colors";
import { Pressable } from "react-native";
import Typography from "@/constants/Typography";
import OutlineButton from "../UI/OutlineButton";
import { useContext } from "react";
import { ThemeContext } from "@/ctx/ThemeContext";

interface Props {
  imageUrl: string;
  name: string;
  phone: string;
}

export default function FriendsListing({ imageUrl, name, phone }: Props) {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: 20,
          width: "100%",
        }}
      >
        <Image source={imageUrl} />
        <View style={{ gap: 2 }}>
          <Text
            style={[
              Typography.bold.xLarge,
              {
                color:
                  theme === "light"
                    ? Colors.grayScale._900
                    : Colors.others.white,
              },
            ]}
          >
            {name}
          </Text>
          <Text
            style={[
              Typography.medium.medium,
              {
                color:
                  theme === "light"
                    ? Colors.grayScale._900
                    : Colors.others.white,
              },
            ]}
          >
            {phone}
          </Text>
        </View>
        <OutlineButton title="Invite" onPress={() => {}} />
      </View>
    </>
  );
}
