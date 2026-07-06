import Button from "@/components/ui/Button";
import SplashData from "@/libs/data/onboarding.json";
import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import {
   Dimensions,
   FlatList,
   NativeScrollEvent,
   NativeSyntheticEvent,
   StyleSheet,
   View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Indicator from "./cmps/Indicator";
import SplashItems from "./cmps/SplashItems";

const { width } = Dimensions.get("screen");
const OnboardingScreen = () => {
  const insets = useSafeAreaInsets();
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const x = e.nativeEvent.contentOffset.x;
    const index = Math.floor(x / width);
    if (index < 0 || index > SplashData.length - 1) return;
    setCurrentIndex(index);
    console.log(index);
  };
  return (
    <View style={{ flex: 1 }} className="bg-primary-accent-green">
      <View
        style={{ marginTop: insets.top + 24 }}
        className="justify-center items-center"
      >
        <Image
          style={{ width: 34, height: 34 }}
          contentFit="contain"
          source={require("@/assets/images/app-logo/g-logo.png")}
        />
      </View>
      <FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={SplashData}
        onScroll={onScroll}
        renderItem={({ item, index }) => (
          <SplashItems title={item?.title} desc={item?.description} />
        )}
      />
      <Indicator current={currentIndex} length={SplashData.length} />
      <View
        className="flex-row items-center gap-2.5 mx-4"
        style={{ marginBottom: insets.bottom + 10 }}
      >
        <Button
          title="Login"
          onPress={() => router.navigate("/auth/login")}
          btnClass="flex-1 !bg-secondary"
          textClass="!text-primary"
        />
        <Button
          title="Create account"
          btnClass="flex-1"
          onPress={() => router.navigate("/auth/sign-up")}
        />
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
