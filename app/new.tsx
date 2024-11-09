import { View, Text, StyleSheet, TextInput, Alert, ScrollView, Platform, TouchableOpacity } from "react-native";
import { theme } from "@/theme";
import { PlantlyImage } from "@/components/plantly-image";
import PlantlyButton from "@/components/plantly-button";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { usePlantStore } from "@/store/plantStore";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";

export default function NewScreen() {
  const [name, setName] = useState<string>();
  const [days, setDays] = useState<string>();
  const [imageUri, setImageUri] = useState<string>();

  const router = useRouter();

  const addPlant = usePlantStore((state) => state.addPlant);

  const handleSubmit = () => {
    if (!name) {
      return Alert.alert("Validation Error", "Give your plant a name");
    }

    if (!days) {
      return Alert.alert("Validation Error", `How often does ${name} need to be watered?`);
    }

    if (Number.isNaN(Number(days))) {
      return Alert.alert("Validation Error", "Watering frequency must be a be a number");
    }

    addPlant(name, Number(days), imageUri);
    router.navigate("/");
  };

  const handleChooseImage = async () => {
    if (Platform.OS === "web") {
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <TouchableOpacity style={{ alignItems: "center" }} activeOpacity={0.8} onPress={handleChooseImage}>
        <PlantlyImage imageUri={imageUri} />
      </TouchableOpacity>
      <View style={{ margin: 8, marginHorizontal: 18 }}>
        <Text style={styles.label}>Name</Text>
        <TextInput value={name} onChangeText={setName} placeholder="Cactus" style={styles.input} />
      </View>
      <View style={{ margin: 8, marginHorizontal: 18 }}>
        <Text style={styles.label}>Watering Frequency (every x days)</Text>
        <TextInput
          value={days}
          onChangeText={setDays}
          placeholder="Eg. 6"
          style={styles.input}
          keyboardType="number-pad"
        />
      </View>
      <View style={{ margin: 8, marginHorizontal: 18 }}>
        <PlantlyButton title="Add Plant" onPress={handleSubmit} />
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  label: {
    fontSize: 18,
  },
  input: {
    borderColor: theme.colorLightGrey,
    padding: 8,
    borderWidth: 1,
    marginTop: 4,
    fontSize: 18,
  },
});
