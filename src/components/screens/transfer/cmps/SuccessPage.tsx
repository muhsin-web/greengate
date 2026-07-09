import { formatAmountDisplay } from "@/utils/format-currency";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("screen");
const SuccessPage = ({ type }: { type: "bank" | "user" }) => {
  const amount = "14000.21";

  return (
    <SafeAreaView className="flex-1 bg-white px-4">
      <View className="flex-1 justify-end">
        <View className="flex-[0.6] justify-between">
          <View>
            <View className="justify-center items-center mb-4">
              <Image
                style={{ width: width / 2, aspectRatio: 1 / 1 }}
                source={require("@/assets/images/success-3d_icon.png")}
              />
            </View>
            <Text className="text-xl text-center font-sans-medium text-black">
              Transaction Successful
            </Text>

            <View className="bg-[#F6F6F6] self-center mt-4 rounded-full py-4 px-6">
              <Text className="font-sans-medium text-secondary text-4xl text-center">
                ₦{formatAmountDisplay(amount)?.split(".")[0]}.
                <Text className="font-sans-medium text-[#8A8B8D] text-4xl text-center">
                  {formatAmountDisplay(amount)?.split(".")[1]}
                </Text>
              </Text>
            </View>
          </View>

          <View className="flex-row gap-2">
            <Pressable
              onPress={() =>
                router.navigate({
                  pathname: "/(dashboard)/transfer/receipt",
                  params: {
                    type,
                  },
                })
              }
              className="bg-[#F6F6F6] items-center flex-1 rounded-full py-5"
            >
              <Text className="font-sans text-secondary">Receipt</Text>
            </Pressable>
            <Pressable
              onPress={() => router.dismissTo("/(dashboard)/tabs")}
              className="bg-[#F6F6F6] items-center flex-1 rounded-full py-5"
            >
              <Text className="font-sans text-secondary">Home</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SuccessPage;

const styles = StyleSheet.create({});
