import React, { useEffect } from "react";
import { Link, Stack } from "expo-router";
import { Linking, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "@/theme";

// To set index as underlying screen in order to get the back button
// Especially on ios, the back button is not shown if the initial route is not set
export const unstable_settings = {
  initialRoutName: "index",
};

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerRight: () => (
            <Link href="/new" asChild>
              <Pressable hitSlop={20}>
                <AntDesign name="pluscircleo" size={24} color={theme.colorGreen} />
              </Pressable>
            </Link>
          ),
          headerTitle: "Home",
        }}
      />
      <Stack.Screen name="plants/[plantId]" options={{ headerTitle: "" }} />
    </Stack>
  );
};

export default Layout;
