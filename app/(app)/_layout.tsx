import React from "react";
import { AppointmentIcon } from "@/assets/icons/AppointmentSvg";
import { ArticleIcon } from "@/assets/icons/ArticleSvg";
import { HistoryIcon } from "@/assets/icons/HistorySvg";
import { HomeIcon } from "@/assets/icons/HomeSvg";
import { ProfileIcon } from "@/assets/icons/ProfileSvg";
import CustomTabBarIcon from "@/components/UI/CustomTabBarIcon";
import { Colors } from "@/constants/Colors";
import Typography from "@/constants/Typography";
import { ThemeContext } from "@/ctx/ThemeContext";
import { Tabs, useRouter, useSegments } from "expo-router";
import { useContext, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { useRoute } from "@react-navigation/native";

export default function Layout() {
  const { theme } = useContext(ThemeContext);

  const [tabVisible, setTabVisible] = useState(false);
  const segments = useSegments();

  const route = useRoute();

  console.log(route)

  return (
    <>
      <Tabs
        tabBar={({ state, navigation, descriptors }) => {
          if (state.routeNames.includes(segments[segments.length - 1])) {
            setTabVisible(true);
          } else {
            setTabVisible(false);
          }

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

                  const isFocused =
                    route.name === state.routes[state.index].name;

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
                        display: route.name === "index" ? "none" : "none",
                      }}
                    >
                      <CustomTabBarIcon
                        name={route.name}
                        isFocused={isFocused}
                      />
                      <Text
                        style={[
                          isFocused
                            ? Typography.bold.xSmall
                            : Typography.medium.xSmall,
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
        }}
        screenOptions={{
          tabBarStyle: {
            height: 70,
          },
          tabBarItemStyle: {
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            flexDirection: "column",
          },
          tabBarIconStyle: {
            padding: 0,
            margin: 0,
          },
          tabBarLabelStyle: {
            padding: 0,
            margin: 0,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
            tabBarStyle: { display: "none" },
            href: null,
          }}
        />
        <Tabs.Screen
          name="ActionMenu"
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <SvgXml xml={HomeIcon} />;
            },
            title: "Home",
          }}
        />
        <Tabs.Screen
          name="Appointments"
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <SvgXml xml={AppointmentIcon} />;
            },
            title: "Appointments",
          }}
        />
        <Tabs.Screen
          name="History"
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <SvgXml xml={HistoryIcon} />;
            },
            title: "History",
          }}
        />
        <Tabs.Screen
          name="Articles"
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <SvgXml xml={ArticleIcon} />;
            },
            title: "Articles",
          }}
        />
        <Tabs.Screen
          name="Profile"
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <SvgXml xml={ProfileIcon} />;
            },
            title: "Profile",
          }}
        />
      </Tabs>
    </>
  );
}
