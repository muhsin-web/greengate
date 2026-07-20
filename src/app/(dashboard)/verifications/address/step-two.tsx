import { CloseIcon } from "@/assets/svgs/CloseIcon";
import { FileArrowUp } from "@/assets/svgs/FileArrowUp";
import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import React from "react";
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AddressStepTwo = () => {
  const [doc, setDoc] = React.useState<ImagePicker.ImagePickerAsset | null>(
    null,
  );

  const handlePick = async () => {
    const status = ImagePicker.PermissionStatus;
    if (!status.GRANTED) {
      await ImagePicker.requestMediaLibraryPermissionsAsync();
      return;
    }

    Alert.alert("Choose method", "Pick file from gallary or documents", [
      {
        text: "Gallery",
        onPress: async () => {
          const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: false,
            aspect: [9, 11],
            mediaTypes: ["images"],
            presentationStyle:
              ImagePicker.UIImagePickerPresentationStyle.POPOVER,
            quality: 1,
            selectionLimit: 1,
            base64: true,
          });
          if (!result.canceled) {
            setDoc(result?.assets[0]);
          }
        },
      },
      {
        text: "Camera",
        onPress: async () => {
          await ImagePicker.launchCameraAsync({
            allowsEditing: false,
            aspect: [9, 11],
            mediaTypes: ["images"],
            presentationStyle:
              ImagePicker.UIImagePickerPresentationStyle.POPOVER,
            quality: 1,
            selectionLimit: 1,
            base64: true,
          });
        },
      },
    ]);
  };
  return (
    <SafeAreaView className="flex-1 bg-primary-foreground px-4">
      <HeaderBar title="Proof of address" />
      <View className="self-center items-center flex-row gap-1 my-6">
        <View className="py-3 px-6 rounded-full bg-[#FFF5E1]">
          <Text className="text-secondary font-sans text-sm">Address</Text>
        </View>
        <View className="h-0.5 bg-[#DDDDDD] w-5" />
        <View className="py-3 px-6 rounded-full bg-[#FFF5E1]">
          <Text className="text-secondary font-sans text-sm">File upload</Text>
        </View>
      </View>

      <ScrollView>
        <View className="mt-6 gap-6">
          <Text className="font-sans text-[#8D8B8B]">
            Upload the supporting document *
          </Text>
          <Pressable
            onPress={handlePick}
            disabled={doc}
            className="gap-6 justify-center border border-secondary border-dashed rounded-3xl aspect-video"
          >
            {doc ? (
              <View>
                <View className="flex-row self-center bg-primary-[#F8F8F8] pr-3 mx-5 items-center gap-2 rounded-full">
                  <Image
                    source={{ uri: doc.uri }}
                    className="size-11 rounded-l-full"
                  />
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="middle"
                    className="font-sans text-sm text-secondary-textlight"
                  >
                    {doc?.fileName}
                  </Text>
                  <Pressable onPress={() => setDoc(null)}>
                    <CloseIcon />
                  </Pressable>
                </View>
                <Pressable onPress={handlePick} className="mt-6">
                  <Text className="text-[#4272DD] font-sans text-sm underline text-center">
                    Change document
                  </Text>
                </Pressable>
              </View>
            ) : (
              <>
                <View className="self-center w-10 h-10 rounded-full bg-[#F2F2F2] justify-center items-center">
                  <FileArrowUp />
                </View>
                <View>
                  <Text className="font-sans text-sm text-[#00133E] text-center">
                    <Text className="text-[#4272DD] font-sans text-sm">
                      Upload
                    </Text>
                    a file or drag and drop
                  </Text>
                  <Text className="font-sans text-xs text-secondary-text text-center">
                    PNG, JPG, PDF up to 10MB
                  </Text>
                </View>
              </>
            )}
          </Pressable>
        </View>
      </ScrollView>

      <Button
        onPress={() =>
          router.navigate("/(dashboard)/verifications/address/step-two")
        }
        title="Continue"
        type="secondary"
      />
    </SafeAreaView>
  );
};

export default AddressStepTwo;

const styles = StyleSheet.create({});
