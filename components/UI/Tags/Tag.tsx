import { Colors } from "@/constants/Colors";
import Typography from "@/constants/Typography";
import { ThemeContext } from "@/ctx/ThemeContext";
import { useContext } from "react";
import { Pressable, Text } from "react-native";

interface Props {
  title: string;
  selected?: boolean;
  onPress: () => void;
}

export default function Tag({ selected, title, onPress }: Props) {
  const { theme } = useContext(ThemeContext);

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
          : theme === "light"
          ? Colors.others.white
          : Colors.dark._1,
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
