import React from "react";
import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "@/theme";

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
