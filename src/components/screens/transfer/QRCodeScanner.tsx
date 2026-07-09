import HeaderBar from "@/components/ui/HeaderBar";
import { CameraView, FlashMode } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import React from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const QRCodeScanner = () => {
  const [mode, setMode] = React.useState<FlashMode>("off");
  const [image, setImage] = React.useState<string | null>(null);

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert(
        "Permission required",
        "Permission to access the media library is required.",
      );
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView className="flex-1 px-4 bg-primary-foreground">
      <HeaderBar title="Scan QR code" />

      <View className="flex-1">
        <View className="flex-1 justify-center">
          <CameraView
            flash={mode}
            style={{
              backgroundColor: "#F6F6F6",
              aspectRatio: 1 / 1,
              borderRadius: 16,
            }}
            barcodeScannerSettings={{
              barcodeTypes: ["qr"],
            }}
          />
        </View>
      </View>
      <View className="flex-row gap-3">
        <Pressable
          onPress={() => {
            setMode((prev) => {
              if (prev == "off") return "on";
              return "off";
            });
          }}
          className="bg-[#F6F6F6] rounded-full h-14 justify-center items-center flex-1"
        >
          <Text className="text-secondary font-sans">Turn {mode} flash</Text>
        </Pressable>
        <Pressable
          onPress={pickImage}
          className="bg-[#F6F6F6] rounded-full h-14 justify-center items-center flex-1"
        >
          <Text className="text-secondary font-sans">Select photo</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default QRCodeScanner;

const styles = StyleSheet.create({});
