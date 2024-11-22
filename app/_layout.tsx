import { SplashScreen, Stack } from "expo-router";

export default function RootLayout() {
  SplashScreen.preventAutoHideAsync();
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false, animation: "fade" }} />
      <Stack.Screen name="onboarding" options={{ headerTitle: "Onboarding", headerShown: false, animation: "fade" }} />
      <Stack.Screen
        name="new"
        options={{ headerTitle: "New Plant", presentation: "modal", animation: "slide_from_bottom" }}
      />
    </Stack>
  );
}
