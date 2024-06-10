import { DropDownIcon, DropDownIconDark } from "@/assets/icons/Profile/Icons";
import { Colors } from "@/constants/Colors";
import Typography from "@/constants/Typography";
import { ThemeContext } from "@/ctx/ThemeContext";
import React, { useContext, useState } from "react";
import { View } from "react-native";
import { Dropdown as DropDownInput } from "react-native-element-dropdown";
import { SvgXml } from "react-native-svg";

interface Props {
  data: { label: string; value: string }[];
  leftIcon?: () => React.JSX.Element;
  rightIcon?: () => React.JSX.Element;
  search?: boolean;
}

export default function DropDown({ data, leftIcon, rightIcon, search }: Props) {
  const { theme } = useContext(ThemeContext);
  const [value, setValue] = useState<string>(data[0].label);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <>
      <DropDownInput
        style={{
          backgroundColor:
            theme === "light" ? Colors.grayScale._50 : Colors.dark._2,
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 20,
        }}
        placeholderStyle={[Typography.semiBold.medium]}
        selectedTextStyle={[
          Typography.semiBold.medium,
          {
            color:
              theme === "light" ? Colors.grayScale._900 : Colors.others.white,
          },
        ]}
        containerStyle={{
          borderRadius: 20,
          backgroundColor:
            theme === "light" ? Colors.others.white : Colors.dark._2,
          borderWidth: 0,
        }}
        inputSearchStyle={{
          height: 40,
          fontSize: 16,
          // borderColor: theme === "light" ? Colors.others.white : Colors.others.
          borderRadius: 10,
          flexDirection: "row",
          paddingHorizontal: 20,
          gap: 20,
        }}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Select item" : "..."}
        searchPlaceholder="Search..."
        value={value}
        search={search}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <>
            {leftIcon && <View style={{ marginRight: 8 }}>{leftIcon()}</View>}
          </>
        )}
        renderRightIcon={() => (
          <>
            {rightIcon ? (
              rightIcon()
            ) : (
              <SvgXml
                xml={theme === "light" ? DropDownIcon : DropDownIconDark}
              />
            )}
          </>
        )}
        itemTextStyle={{
          color:
            theme === "light" ? Colors.grayScale._900 : Colors.others.white,
        }}
      />
    </>
  );
}
