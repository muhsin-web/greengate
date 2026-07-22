import { useRequestFxPayout } from "@/api";
import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import Input from "@/components/ui/Input";
import { useModal } from "@/hooks/useModal";
import {
  BuyFiatFormValues,
  buyFiatSchema,
} from "@/utils/validation/buyFiatSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WalletType } from "..";

interface TrxnDetails extends WalletType {
  amount: string;
}

const defaultValues = {
  accountName: "",
  bankName: "",
  accountNumber: "",
  bankCountry: "",
  routingType: "",
  swiftCode: "",
  iban: "",
  sortCode: "",
  routingNumber: "",
  bankAddress: "",
  narration: "",
};
const RecipientDetailsScreen = ({
  trxnDetails,
}: {
  trxnDetails: TrxnDetails;
}) => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<BuyFiatFormValues>({
    resolver: zodResolver(buyFiatSchema),
    mode: "onChange",
    defaultValues,
  });

  console.log(errors, "error", isValid);

  const makePayout = useRequestFxPayout();
  const { showModal } = useModal();

  const handleSend = (values: BuyFiatFormValues) => {
    router.navigate({
      pathname: "/wallets/trade-fiat/confirmation",
      params: {
        trxnDetails: JSON.stringify({
          ...trxnDetails,
          ...values,
        }),
      },
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-primary-foreground px-4">
      <HeaderBar title="Recipient Details" />
      <ScrollView className="mt-3" showsVerticalScrollIndicator={false}>
        <View className="gap-6 mt-3">
          <Text className="font-sans text-[#525252]">
            Where should we send the $250.00?
          </Text>

          <Controller
            control={control}
            shouldUnregister
            name="accountName"
            render={({ field: { value, onChange } }) => (
              <Input
                value={value}
                onChangeText={onChange}
                placeholder="Beneficiary name"
                error={errors.accountName?.message}
              />
            )}
          />

          <Controller
            control={control}
            shouldUnregister
            name="bankName"
            render={({ field: { value, onChange } }) => (
              <Input
                value={value}
                onChangeText={onChange}
                placeholder="Bank name"
                error={errors?.bankName?.message}
              />
            )}
          />

          <Controller
            control={control}
            shouldUnregister
            name="accountNumber"
            render={({ field: { value, onChange } }) => (
              <Input
                value={value}
                onChangeText={onChange}
                placeholder="Account number"
                error={errors?.accountNumber?.message}
              />
            )}
          />

          <Controller
            control={control}
            shouldUnregister
            name="bankCountry"
            render={({ field: { value, onChange } }) => (
              <Input
                value={value}
                onChangeText={onChange}
                placeholder="Bank country"
                error={errors?.bankCountry?.message}
              />
            )}
          />

          <Controller
            control={control}
            shouldUnregister
            name="routingType"
            render={({ field: { value, onChange } }) => (
              <Input
                value={value}
                onChangeText={onChange}
                keyboardType="numeric"
                inputMode="numeric"
                placeholder="Routing type"
                error={errors?.routingType?.message}
              />
            )}
          />

          <Controller
            control={control}
            shouldUnregister
            name="swiftCode"
            render={({ field: { value, onChange } }) => (
              <Input
                value={value}
                onChangeText={onChange}
                placeholder="Swift code"
                error={errors?.swiftCode?.message}
              />
            )}
          />

          <Controller
            control={control}
            shouldUnregister
            name="iban"
            render={({ field: { value, onChange } }) => (
              <Input
                value={value}
                onChangeText={onChange}
                placeholder="Iban"
                error={errors?.iban?.message}
              />
            )}
          />

          <Controller
            control={control}
            shouldUnregister
            name="sortCode"
            render={({ field: { value, onChange } }) => (
              <Input
                value={value}
                onChangeText={onChange}
                placeholder="Sort code"
                error={errors?.sortCode?.message}
              />
            )}
          />

          <Controller
            control={control}
            shouldUnregister
            name="routingNumber"
            render={({ field: { value, onChange } }) => (
              <Input
                value={value}
                onChangeText={onChange}
                placeholder="Routing number"
                error={errors?.routingNumber?.message}
              />
            )}
          />

          <Controller
            control={control}
            shouldUnregister
            name="bankAddress"
            render={({ field: { value, onChange } }) => (
              <Input
                value={value}
                onChangeText={onChange}
                placeholder="Bank Address"
                error={errors?.bankAddress?.message}
              />
            )}
          />

          <Controller
            control={control}
            shouldUnregister
            name="narration"
            render={({ field: { value, onChange } }) => (
              <Input
                value={value}
                onChangeText={onChange}
                placeholder="Narration"
                error={errors?.narration?.message}
              />
            )}
          />

          <View className="h-12" />
        </View>
      </ScrollView>

      <Button
        disabled={!isValid}
        onPress={handleSubmit(handleSend)}
        title="Review purchase"
        type="secondary"
      />
    </SafeAreaView>
  );
};

export default RecipientDetailsScreen;

const styles = StyleSheet.create({});
