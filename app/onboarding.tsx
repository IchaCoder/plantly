import { Text, View, StyleSheet, Button, Platform } from "react-native";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "expo-router";
import PlantlyButton from "@/components/plantly-button";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { PlantlyImage } from "@/components/plantly-image";

export default function OnboardingScreen() {
  const router = useRouter();

  const toggleOnboarded = useUserStore((state) => state.toggleHadOnboarded);
  const handlePress = () => {
    toggleOnboarded();
    router.replace("/");
  };
  return (
    <LinearGradient colors={[theme.colorGreen, theme.colorAppleGreen, theme.colorLimeGreen]} style={styles.container}>
      <StatusBar style="light" />
      <View>
        <Text style={styles.heading}>Plantly</Text>
        <Text style={styles.tagline}>Keep your plants healthy and hydrated</Text>
      </View>
      <PlantlyImage />
      <PlantlyButton title="Let me in" onPress={handlePress} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
  text: {
    fontSize: 24,
  },
  heading: {
    fontSize: 42,
    color: theme.colorWhite,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  tagline: {
    fontSize: 30,
    fontFamily: Platform.select({
      ios: "Caveat-Regular",
      android: "Caveat_400Regular",
    }),
    color: theme.colorWhite,
    textAlign: "center",
    marginHorizontal: 8,
  },
});
