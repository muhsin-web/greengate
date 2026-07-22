import { useFxRates } from "@/api";
import BottomSpacer from "@/components/shared/BottomSpacer";
import HeaderBar from "@/components/ui/HeaderBar";
import { cn } from "@/libs/cn";
import { formatCurrency, getCurrencyIcon } from "@/utils/currency";
import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export type WalletType = {
  title: string;
  code: string;
  amount: string;
  icon: any;
  isCrypto: boolean;
};
const tabs = {
  fiat: [
    {
      title: "Naira",
      code: "NGN",
      amount: "₦2,450,000.00",
      icon: require("@/assets/images/country/naira.png"),
    },
    {
      title: "Dollar",
      code: "USD",
      amount: "$350.00",
      icon: require("@/assets/images/country/usa.png"),
    },
    {
      title: "Pound Sterling",
      code: "GBP",
      amount: "£120.00",
      icon: require("@/assets/images/country/pound.png"),
    },
    {
      title: "Euro",
      code: "EUR",
      amount: "€0.00",
      icon: require("@/assets/images/country/euro.png"),
    },
    {
      title: "Canadian Dollar",
      code: "CAD",
      amount: "€0.00",
      icon: require("@/assets/images/country/cad.jpg"),
    },
  ],
  crypto: [
    {
      title: "Bitcoin",
      code: "BTC",
      amount: "0.00",
      icon: require("@/assets/images/coins/btc.png"),
    },
    {
      title: "Stellar",
      code: "XLM",
      amount: "0.00",
      icon: require("@/assets/images/coins/steller.png"),
    },
    {
      title: "Usdc",
      code: "USDC",
      amount: "0.00",
      icon: require("@/assets/images/coins/usdt.png"),
    },
    {
      title: "Usdt",
      code: "USDT",
      amount: "0.00",
      icon: require("@/assets/images/coins/tether.png"),
    },
  ],
};
const WalletsScreen = () => {
  const [activeTab, setActiveTab] = React.useState<"crypto" | "fiat">("fiat");
  const { data: fxlist } = useFxRates();

  const fiatList = [
    {
      rate_id: "ngn_nigeria_naira",
      base_id: "019f17d5-e191-73dd-af77-f05e63504ef1",
      base_symbol: "NGN",
      base_name: "Nigerian Naira",
      base_decimals: 2,
      quote_id: "019f17d5-e191-713d-b117-a6858c2cc61c",
      quote_symbol: "NGN",
      buy_rate: "1",
      sell_rate: "1",
      mid_rate: "1",
      captured_at: new Date(),
      source: "seed",
    },
    ...[...(fxlist?.data || [])],
  ];
  const tablIst = Object.keys(tabs);

  return (
    <SafeAreaView className="flex-1 bg-primary-foreground px-4">
      <HeaderBar title="Wallets" />
      <ScrollView showsVerticalScrollIndicator={false} className="mt-4">
        <View>
          <View className="self-center flex-row items-center bg-primary-accent-light rounded-full p-1.5 w-2/3">
            {tablIst?.map((tab: any, index) => (
              <Pressable
                className={cn(
                  "py-3 flex-1",
                  tab == activeTab && "bg-white rounded-full",
                )}
                key={index}
                onPress={() => setActiveTab(tab)}
              >
                <Text className="capitalize font-sans-medium text-sm text-center">
                  {tab}
                </Text>
              </Pressable>
            ))}
          </View>

          <View className="gap-1 mt-6">
            <>
              {activeTab == "fiat" && (
                <>
                  {fiatList?.map((item, index) => {
                    const foundIcon = tabs[activeTab]?.find(
                      (d) =>
                        d.code?.toLowerCase() ==
                        item?.base_symbol?.toLowerCase(),
                    )?.icon;
                    return (
                      <Pressable
                        onPress={() =>
                          router.navigate({
                            pathname: "/(dashboard)/wallets",
                            params: {
                              details: JSON.stringify({
                                ...item,
                                icon: foundIcon,
                                isCrypto: false,
                              }),
                            },
                          })
                        }
                        className="bg-[#F6F6F6] p-4 rounded-full gap-2 flex-row"
                        key={index}
                      >
                        {foundIcon && (
                          <Image
                            source={foundIcon}
                            style={{ width: 40, height: 40, borderRadius: 20 }}
                          />
                        )}
                        <View className="flex-1 flex-row items-center">
                          <View className="flex-1">
                            <Text className="text-sm font-sans-medium text-[#393939]">
                              {item?.base_name}
                            </Text>
                            <Text className="font-sans-medium text-[#8A8B8D] text-xs">
                              {item?.base_symbol}
                            </Text>
                          </View>
                          <View>
                            <Text className="font-sans-medium text-right text-[#393939]">
                              {formatCurrency(0, item?.base_symbol)}
                            </Text>
                            <Text className="text-sm font-sans text-secondary-text text-right">
                              {formatCurrency(
                                Number(item?.buy_rate),
                                item?.base_symbol,
                              )}
                              /{getCurrencyIcon(item?.base_symbol)}
                            </Text>
                          </View>
                        </View>
                      </Pressable>
                    );
                  })}
                </>
              )}
            </>
            {/* {tabs?.[activeTab]?.map((item, index) => (
              <Pressable
                onPress={() =>
                  router.navigate({
                    pathname: "/(dashboard)/wallets",
                    params: {
                      details: JSON.stringify({
                        ...item,
                        isCrypto: activeTab == "crypto",
                      }),
                    },
                  })
                }
                className="bg-[#F6F6F6] p-4 rounded-full gap-2 flex-row"
                key={index}
              >
                {item?.icon && (
                  <Image
                    source={item?.icon}
                    style={{ width: 40, height: 40, borderRadius: 20 }}
                  />
                )}
                <View className="flex-1 flex-row items-center">
                  <View className="flex-1">
                    <Text className="text-sm font-sans-medium text-[#393939]">
                      {item?.title}
                    </Text>
                    <Text className="font-sans-medium text-[#8A8B8D] text-xs">
                      {item?.code}
                    </Text>
                  </View>
                  <View>
                    <Text className="text-sm font-sans-medium text-[#393939]">
                      {item?.amount}
                    </Text>
                  </View>
                </View>
              </Pressable>
            ))} */}
          </View>
        </View>
        <BottomSpacer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default WalletsScreen;

const styles = StyleSheet.create({});
