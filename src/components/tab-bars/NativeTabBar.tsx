import { NativeTabs } from "expo-router/unstable-native-tabs";
import { StyleSheet } from "react-native";

const NativeTabBar = () => {
  return (
    <NativeTabs
      labelStyle={{
        fontFamily: "BricolageGrotesque-Medium",
        fontSize: 12,
      }}
      tintColor="#2A2A2A"
      minimizeBehavior="onScrollDown"
    >
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Icon
          src={{
            default: require("@/assets/images/tabIcons/house.png"),
            selected: require("@/assets/images/tabIcons/house.png"),
          }}
          renderingMode="template"
        />
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="wallet">
        <NativeTabs.Trigger.Icon
          src={{
            default: require("@/assets/images/tabIcons/cardholder.png"),
            selected: require("@/assets/images/tabIcons/cardholder.png"),
          }}
          renderingMode="template"
        />
        <NativeTabs.Trigger.Label>Wallet</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="swap">
        <NativeTabs.Trigger.Icon
          src={{
            default: require("@/assets/images/tabIcons/swap.png"),
            selected: require("@/assets/images/tabIcons/swap.png"),
          }}
          renderingMode="template"
        />
        <NativeTabs.Trigger.Label>Swap</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="settings">
        <NativeTabs.Trigger.Icon
          src={{
            default: require("@/assets/images/tabIcons/gear.png"),
            selected: require("@/assets/images/tabIcons/gear.png"),
          }}
          renderingMode="template"
        />
        <NativeTabs.Trigger.Label>Settings</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
};

export default NativeTabBar;

const styles = StyleSheet.create({});
