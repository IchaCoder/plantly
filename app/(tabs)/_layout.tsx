import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import { Link, Redirect, SplashScreen, Tabs } from "expo-router";
import React from "react";
import { theme } from "../../theme";
import { useUserStore } from "@/store/userStore";
import { Pressable } from "react-native";

type Props = {};

export default function Layout({}: Props) {
  SplashScreen.hideAsync();
  const hasFinishedOnboarding = useUserStore((state) => state.hasFinishedOnboarding);
  if (!hasFinishedOnboarding) {
    return <Redirect href={"/onboarding"} />;
  }
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorGreen }}>
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => <Entypo name="leaf" size={size} color={color} />,
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => <Feather name="user" size={size} color={color} />,
          tabBarShowLabel: false,
        }}
      />
    </Tabs>
  );
}
