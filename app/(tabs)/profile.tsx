import { Text, View, StyleSheet, Button } from "react-native";
import { theme } from "../../theme";
import { useUserStore } from "@/store/userStore";
import PlantlyButton from "@/components/plantly-button";

export default function ProfileScreen() {
  const toggleHasOnboarded = useUserStore((state) => state.toggleHadOnboarded);
  return (
    <View style={styles.container}>
      <PlantlyButton title="Go back to onboarding" onPress={toggleHasOnboarded} />
    </View>
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
});
