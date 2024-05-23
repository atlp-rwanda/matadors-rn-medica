import index from "@/app/(app)/Articles";
import { HorizontalLine } from "@/assets/icons/HorizantalLine";
import { FilterIcon, SearchIcon } from "@/assets/icons/Profile/Icons";
import { Colors } from "@/constants/Colors";
import Typography from "@/constants/Typography";
import { ScrollView, Text, View } from "react-native";
import { TextInput } from "react-native";
import { SvgXml } from "react-native-svg";
import HorizontalSeparator from "./HorizontalSeparator";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";
import { useState } from "react";

interface Props {
  onchange: () => void;
}
export default function Search({ onchange }: Props) {
  const [selectedItem, setSelectedItem] = useState("1");
  const [focused, setFocused] = useState(false);

  return (
    <>
      <View
        style={{
          position: "relative",
          zIndex: 200,
          alignItems: "center",
        }}
      >
        <AutocompleteDropdown
          clearOnFocus={false}
          closeOnBlur={true}
          closeOnSubmit={false}
          dataSet={[
            { id: "1", title: "Alpha" },
            { id: "2", title: "Beta" },
            { id: "3", title: "Gamma" },
          ]}
          LeftComponent={<SvgXml xml={SearchIcon} />}
          RightIconComponent={<SvgXml xml={FilterIcon} />}
          containerStyle={{
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 20,
          }}
          suggestionsListTextStyle={{
            borderRadius: 20,
          }}
          suggestionsListContainerStyle={{
            borderRadius: 15,
            paddingHorizontal: 15,
          }}
          showChevron={false}
          showClear={false}
          inputContainerStyle={{
            alignItems: "center",
            paddingHorizontal: 20,
            paddingVertical: 8,
            borderRadius: 20,
            backgroundColor: focused
              ? Colors.transparent.blue
              : Colors.grayScale._100,
            borderWidth: 1,
            borderColor: focused
              ? Colors.main.primary._500
              : Colors.grayScale._100,
          }}
          textInputProps={{
            style: { color: Colors.grayScale._900 },
            placeholderTextColor: Colors.grayScale._500,
            placeholder: "Search",
          }}
          onFocus={() => {
            setFocused((prevVal) => !prevVal);
          }}
        />
      </View>
    </>
  );
}
