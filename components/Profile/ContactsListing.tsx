import { Colors } from "@/constants/Colors";
import Typography from "@/constants/Typography";
import { Pressable, Text, View } from "react-native";

interface Props {
  icon: () => React.JSX.Element;
  title: string;
  onPress: () => void;
}

export default function ContactsListing({ icon, title, onPress }: Props) {
  return (
    <Pressable
      onPress={() => {
        onPress();
      }}
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 20,
        padding: 20,
        backgroundColor: Colors.others.white,
        elevation: 20,
        shadowColor: Colors.grayScale._400,
        borderRadius: 20,
      }}
    >
      {icon()}
      <Text style={[Typography.bold.xLarge, { color: Colors.grayScale._900 }]}>
        {title}
      </Text>
    </Pressable>
  );
}
