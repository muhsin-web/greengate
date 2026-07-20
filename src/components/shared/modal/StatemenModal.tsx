import Button from "@/components/ui/Button";
import { cn } from "@/libs/cn";
import { ModalPayloads, useModalStore } from "@/store/modal.store";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ModalWrapper from "./modal-wrapper";

const period = [
  { title: "Last 7 days", from: null, to: null },
  { title: "Last 30 days", from: null, to: null },
  { title: "Last 3 months", from: null, to: null },
  { title: "Last 6 months", from: null, to: null },
  { title: "This year", from: null, to: null },
  { title: "Last last year", from: null, to: null },
  { title: "All time", from: null, to: null },
];
const StatemenModal = () => {
  const payload = useModalStore(
    (s) => s.payload as ModalPayloads["statement_modal"],
  );
  const insets = useSafeAreaInsets();
  const [selectedPeriod, setSelectedPeriod] = React.useState("0");
  const [format, setFormat] = React.useState("");

  return (
    <ModalWrapper title={payload?.title}>
      <View>
        <View className="gap-2.5 mt-3">
          <Text className="font-sans-medium text-sm text-secondary-textlight">
            Period
          </Text>
          <View className="flex-row flex-wrap gap-3">
            {period?.map((item, index) => (
              <Pressable
                key={index}
                onPress={() => setSelectedPeriod(index?.toString())}
                className={cn(
                  "bg-primary-accent-lighter rounded-full px-5 py-3",
                  selectedPeriod == index.toString() &&
                    " border border-secondary",
                )}
              >
                <Text
                  className={cn(
                    "text-secondary-text font-sans-medium",
                    index.toString() == selectedPeriod && "text-secondary",
                  )}
                >
                  {item?.title}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        <View className="my-6">
          <Text className="font-sans-medium text-sm text-secondary-textlight">
            Format
          </Text>
          <View className="flex-row flex-wrap gap-3">
            {["PDF", "CSV"]?.map((item, index) => (
              <Pressable
                key={item}
                onPress={() => setFormat(item)}
                className={cn(
                  "bg-primary-accent-lighter rounded-full px-5 py-3",
                  format == item && " border border-secondary",
                )}
              >
                <Text
                  className={cn(
                    "text-secondary-text font-sans-medium",
                    item == format && "text-secondary",
                  )}
                >
                  {item}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        <Button
          style={{ marginBottom: insets.bottom }}
          type="secondary"
          disabled={!selectedPeriod || !format}
          title="Email my statement"
        />
      </View>
    </ModalWrapper>
  );
};

export default StatemenModal;

const styles = StyleSheet.create({});
