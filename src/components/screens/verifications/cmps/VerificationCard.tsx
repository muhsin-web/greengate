import Button from "@/components/ui/Button";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Verification } from "..";

const VerificationCard = ({ data }: { data: Verification }) => {
  const Icon = data?.icon;
  return (
    <View
      style={{ backgroundColor: data.colors.bg }}
      className="justify-center items-center p-6 rounded-3xl"
    >
      <View
        style={{ backgroundColor: data.colors.accent }}
        className="p-1 rounded-full gap-2 flex-row items-center pr-4"
      >
        <Icon size={30} />
        <Text className="text-sm capitalize font-sans-medium text-secondary">
          {data?.title}
        </Text>
      </View>
      <Text className="font-sans-medium my-5 text-secondary">
        {data?.requirement}
      </Text>

      <Button
        title="Start"
        btnClass="!h-10 px-6 !w-1/3"
        textClass="!text-white"
        style={{ backgroundColor: data.colors.btn }}
        onPress={() => router.navigate(data?.path as any)}
      />
    </View>
  );
};

export default VerificationCard;

const styles = StyleSheet.create({});
