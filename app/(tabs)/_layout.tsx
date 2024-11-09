import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import { Link, Redirect, Tabs } from "expo-router";
import React from "react";
import { theme } from "../../theme";
import { useUserStore } from "@/store/userStore";
import { Pressable } from "react-native";

type Props = {};

export default function Layout({}: Props) {
  const hasFinishedOnboarding = useUserStore((state) => state.hasFinishedOnboarding);
  if (!hasFinishedOnboarding) {
    return <Redirect href={"/onboarding"} />;
  }
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorGreen }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => <Entypo name="leaf" size={size} color={color} />,
          tabBarShowLabel: false,
          headerRight: () => (
            <Link href="/new" asChild>
              <Pressable hitSlop={20} style={{ marginRight: 18 }}>
                <AntDesign name="pluscircleo" size={24} color={theme.colorGreen} />
              </Pressable>
            </Link>
          ),
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
