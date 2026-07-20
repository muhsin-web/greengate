import { useRegister } from "@/api";
import { CheckMarkIcon } from "@/assets/svgs/CheckMarkIcon";
import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import Input from "@/components/ui/Input";
import {
  passwordRules,
  SignupFormValues,
  signupSchema,
} from "@/utils/validation/signupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Device from "expo-device";
import { router } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Platform, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignupScreen = () => {
  const register = useRegister();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  const passwordValue = watch("password");

  const onSubmit = (values: SignupFormValues) => {
    register.mutate(
      {
        email: values.email,
        password: values.password,
        phone: "+234" + values.phone,
        referralCode: "username",
        platform: Platform.OS,
        model: `${Device.deviceYearClass} ${Device.brand} ${Device.deviceName}`,
      },
      {
        onSuccess: () => router.replace({ pathname: "/auth/sign-up/verify" }),
      },
    );
  };

  console.log(register.error);

  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-primary-foreground px-4">
      <HeaderBar title="Create account" />
      <ScrollView keyboardShouldPersistTaps="handled">
        <View className="my-6">
          <Text className="text-base font-sans text-primary-text">
            To create account enter the necessary information
          </Text>
        </View>

        <View className="gap-6">
          <Controller
            control={control}
            shouldUnregister
            name="email"
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder="Enter email address"
                value={value}
                onChangeText={onChange}
                keyboardType="email-address"
                inputMode="email"
                autoCapitalize="none"
                info={
                  !errors.email ? "Use an email you have access to" : undefined
                }
                error={errors.email?.message}
              />
            )}
          />

          <View className="gap-3 flex-row items-start">
            <Controller
              control={control}
              name="firstName"
              render={({ field: { value, onChange } }) => (
                <Input
                  containerClassName="flex-1"
                  value={value}
                  onChangeText={onChange}
                  placeholder="First name"
                  error={errors.firstName?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="lastName"
              render={({ field: { value, onChange } }) => (
                <Input
                  containerClassName="flex-1"
                  value={value}
                  onChangeText={onChange}
                  placeholder="Last name"
                  error={errors.lastName?.message}
                />
              )}
            />
          </View>

          <Controller
            control={control}
            name="phone"
            render={({ field: { value, onChange } }) => (
              <Input
                value={value}
                trailing={<Text className="font-sans-semibold">+234 |</Text>}
                onChangeText={onChange}
                inputMode="numeric"
                keyboardType="numeric"
                maxLength={10}
                placeholder="Phone number"
                error={errors.phone?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { value, onChange } }) => (
              <Input
                isPassword
                value={value}
                onChangeText={onChange}
                placeholder="Password"
                error={errors.password?.message}
              />
            )}
          />

          {/* Live checklist — updates on every keystroke via `watch` */}
          {passwordValue && (
            <View className="gap-1 -mt-3">
              {passwordRules.map((rule) => {
                const passed = rule.test(passwordValue ?? "");
                return (
                  <View
                    key={rule.label}
                    className="flex-row items-center gap-2"
                  >
                    <CheckMarkIcon color={passed ? "#0DAE2B" : "#D74A04"} />
                    <Text
                      className={`text-sm font-sans ${passed ? "text-[#0DAE2B]" : "text-[#D74A04]"}`}
                    >
                      {rule.label}
                    </Text>
                  </View>
                );
              })}
            </View>
          )}

          <Controller
            control={control}
            name="confirmPassword"
            render={({ field: { value, onChange } }) => (
              <Input
                isPassword
                value={value}
                onChangeText={onChange}
                placeholder="Confirm password"
                error={errors.confirmPassword?.message}
              />
            )}
          />
        </View>

        {register.isError && (
          <Text className="text-red-500 text-xs mt-3">
            {(register.error as any)?.response?.data?.message ??
              "Something went wrong. Try again."}
          </Text>
        )}
      </ScrollView>

      <Button
        title="Continue"
        onPress={handleSubmit(onSubmit)}
        disabled={!isValid || register.isPending}
        btnClass="!bg-secondary"
        textClass="!text-primary"
      />
    </SafeAreaView>
  );
};

export default SignupScreen;
