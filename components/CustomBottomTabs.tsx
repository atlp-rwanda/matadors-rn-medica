import CustomTabBarIcon from "@/components/UI/CustomTabBarIcon";
import { Colors } from "@/constants/Colors";
import Typography from "@/constants/Typography";
import { ThemeContext } from "@/ctx/ThemeContext";
import { useSegments } from "expo-router";
import { useContext, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function CustomBottomTabs({ state, navigation, descriptors }) {
  const { theme } = useContext(ThemeContext);

  const [tabVisible, setTabVisible] = useState(false);
  const segments = useSegments();

  return (
    <>
      <View
        style={{
          display: tabVisible ? "flex" : "none",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor:
            theme === "dark" ? Colors.dark._1 : Colors.others.white,
          paddingHorizontal: 30,
          paddingVertical: 25,
        }}
      >
        {state.routes.map((route) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = route.name === state.routes[state.index].name;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.key}
              id={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                display: route.name === "index" ? "none" : "flex",
              }}
            >
              <CustomTabBarIcon name={route.name} isFocused={isFocused} />
              <Text
                style={[
                  isFocused ? Typography.bold.xSmall : Typography.medium.xSmall,
                  {
                    color: isFocused
                      ? Colors.main.primary._500
                      : Colors.grayScale._500,
                  },
                ]}
              >
                {String(label).slice(0, 8)}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
}
