import OnboardingScreen from "@/components/screens/onboarding";
import { useUserStore } from "@/store/user.store";
import { Redirect } from "expo-router";
import { StyleSheet } from "react-native";

const Screen = () => {
  const hasOnboarded = useUserStore((s) => s.hasOnboarded);
  console.log(hasOnboarded);
  if (hasOnboarded) {
    return <Redirect href={"/auth/login"} />;
  }
  return <OnboardingScreen />;
};

export default Screen;

const styles = StyleSheet.create({});
