import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Image, Pressable, View } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
  focused: boolean;
}) {
  const iconColor = props.focused ? "#ff5a00" : props.color;
  return (
    <FontAwesome
      size={28}
      {...props}
      color={iconColor}
    />
  );
}
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        tabBarStyle: {
          height: 100,
          paddingBottom: 20,
          position: 'relative'
        },
      }}
    >
      <Tabs.Screen
        name="map"
        options={{
          title: "Mapa",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon focused={focused} name="map" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="geosek"
        options={{
          title: "Geosek",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon focused={focused} name="key" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          tabBarItemStyle: {
            top: 5
          },
          tabBarLabelStyle: {
            marginTop: -30,
          },
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon focused={focused} name="qrcode" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="elevate"
        options={{
          tabBarItemStyle: {
            backgroundColor: '#0e2ca1',
            borderRadius: 50,
            bottom: 50,
            zIndex: 3,
            left: '42%',
            position: 'absolute',
            height: 60,
            width: 60
          },
          tabBarLabelStyle: {
            color: 'white',
            marginBottom: -25,
            paddingBottom: 8
          },
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <Image
              style={{
                tintColor: 'white',
                width: 20,
                height: 20
              }}
              source={require('@/assets/images/KigoSquareLogo.png')}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="status"
        options={{
          title: "Estatus",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon focused={focused} color={color} name="clock-o" />
          ),
        }}
      />
      <Tabs.Screen
        name="moreOptions"
        options={{
          title: "Más",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon focused={focused} color={color} name="ellipsis-h" />
          ),
        }}
      />
    </Tabs>
  );
}
