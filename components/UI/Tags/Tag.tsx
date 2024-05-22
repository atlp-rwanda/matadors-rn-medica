import { Colors } from "@/constants/Colors";
import Typography from "@/constants/Typography";
import { Pressable, Text } from "react-native";

interface Props {
  title: string;
  selected?: boolean;
  onPress: () => void;
}

export default function Tag({ selected, title, onPress }: Props) {
  return (
    <Pressable
      onPress={() => {
        onPress();
      }}
      style={{
        paddingHorizontal: 15,
        paddingVertical: 4,
        borderWidth: 2,
        borderColor: Colors.main.primary._500,
        borderRadius: 100,
        backgroundColor: selected
          ? Colors.main.primary._500
          : Colors.others.white,
      }}
    >
      <Text
        style={[
          Typography.semiBold.large,
          { color: selected ? Colors.others.white : Colors.main.primary._500 },
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}
