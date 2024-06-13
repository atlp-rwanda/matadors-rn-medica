import { FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Chips from "./UI/ChipsComponent";

interface Props {
  timeSlots: string[];
  onChange: React.Dispatch<React.SetStateAction<string>>;
}
export default function SelectHour({ timeSlots, onChange }: Props) {
  const [selectedHour, setSelectedHour] = useState<string>(timeSlots[0]);

  useEffect(() => {
    onChange(selectedHour);
  }, [selectedHour]);

  return (
    <FlatList
      data={timeSlots}
      renderItem={(item) => {
        return (
          <>
            <Chips
              selected={selectedHour === item.item}
              text={item.item}
              type="border"
              size="large"
              style={{
                paddingHorizontal: 5,
                width: "32%",
                marginRight: 5,
              }}
              onPress={() => setSelectedHour(item.item)}
            />
          </>
        );
      }}
      numColumns={3}
      contentContainerStyle={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        gap: 10,
        flexWrap: "wrap",
      }}
    />
  );
}
