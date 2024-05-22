import Input from "@/components/UI/Input";
import { Pressable, StyleSheet, View } from "react-native";
import { ScrollView, Text } from "react-native";
import Button from "@/components/UI/Button";
import { Colors } from "@/constants/Colors";
import { SvgXml } from "react-native-svg";
import {
  CalenderIcon,
  CalenderIconDark,
  DropDownIcon,
  DropDownIconDark,
  MessageIcon,
  MessageIconDark,
} from "@/assets/icons/Profile/Icons";
import { Dropdown } from "react-native-element-dropdown";
import { useContext, useState } from "react";
import Typography from "@/constants/Typography";
import { typedCountries } from "@/constants/Languages";
import { ThemeContext } from "@/ctx/ThemeContext";

interface Props {}

export default function EditProfile() {
  const [value, setValue] = useState<string>("United States");
  const [isFocus, setIsFocus] = useState(false);
  const { theme } = useContext(ThemeContext);

  const countryNames: { label: string; value: string }[] = Object.keys(
    typedCountries
  ).map((key: string) => {
    return { label: typedCountries[key].name, value: typedCountries[key].name };
  });

  return (
    <>
      <ScrollView
        style={{
          backgroundColor:
            theme === "light" ? Colors.others.white : Colors.dark._1,
          height: "100%",
        }}
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View
          style={{
            gap: 20,
            paddingHorizontal: 20,
            paddingVertical: 20,
            height: "100%",
          }}
        >
          <Input placeholder="First Name" value="Andrew Ainsley" />
          <Input placeholder="Last Name" value="Andrew" />
          <Input
            placeholder="Birth Date"
            value="12/27/1995"
            rightElement={() => {
              return (
                <Pressable>
                  <SvgXml
                    xml={theme === "light" ? CalenderIcon : CalenderIconDark}
                  />
                </Pressable>
              );
            }}
          />
          <Input
            placeholder="Email"
            value="andrew_ainsley@yourdomain.com"
            rightElement={() => {
              return (
                <Pressable>
                  <SvgXml
                    xml={theme === "light" ? MessageIcon : MessageIconDark}
                  />
                </Pressable>
              );
            }}
          />
          {/* <Input placeholder="Country" value="United States" /> */}
          <Dropdown
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
                  theme === "light"
                    ? Colors.grayScale._900
                    : Colors.others.white,
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
            }}
            data={countryNames}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "Select item" : "..."}
            searchPlaceholder="Search..."
            value={value}
            search
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValue(item.value);
              setIsFocus(false);
            }}
            renderRightIcon={() => (
              <SvgXml
                xml={theme === "light" ? DropDownIcon : DropDownIconDark}
              />
            )}
            itemTextStyle={{
              color:
                theme === "light" ? Colors.grayScale._900 : Colors.others.white,
            }}
          />
          <Input placeholder="+250" value="+1 111 467 378 399" />
          <Input placeholder="Gender" value="Male" />
          <View style={{ marginTop: "auto" }}>
            <Button
              title="Update"
              onPress={() => {}}
              shadowColor={Colors.main.primary._500}
              backgroundColor={Colors.main.primary._500}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
