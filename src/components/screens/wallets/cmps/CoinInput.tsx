import { cn } from "@/libs/cn";
import { formatCurrency } from "@/utils/currency";
import { formatAmountInput } from "@/utils/format-currency";
import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const CoinInput = ({
  balance,
  code,
  title,
  value,
  onValueChange,
  isCrypto,
}: {
  balance: string;
  code: string;
  title?: string;
  value: string;
  isCrypto?: boolean;
  onValueChange: (e: string) => void;
}) => {
  const [selection, setSelection] = React.useState({ start: 0, end: 0 });
  const inputRef = React.useRef<TextInput>(null);

  const amounts = [50, 100, 250, 500];
  const percents = [0.25, 0.5, 1];

  React.useEffect(() => {
    const position = value.length;
    setSelection({ start: position, end: position });
  }, [value]);

  return (
    <View className="items-center gap-6">
      {title ? (
        <Text className="text-[#525252] font-sans text-sm">{title}</Text>
      ) : (
        <Text className="text-[#393939] font-sans-medium text-sm">
          Available ·{" "}
          <Text className="font-sans-semibold">
            {balance}
            {code}
          </Text>
        </Text>
      )}

      <View className="w-full items-center">
        <TextInput
          ref={inputRef}
          placeholder="0.00"
          className="font-sans-semibold px-2 top-0 h-full text-secondary opacity-0 bg-red-500 absolute z-10 text-5xl text-center self-center"
          value={value}
          autoFocus
          selection={selection}
          maxLength={8}
          onSelectionChange={(e) => setSelection(e.nativeEvent.selection)}
          onChangeText={(e) => onValueChange(formatAmountInput(e))}
          keyboardType="number-pad"
          inputMode="numeric"
        />
        <Text
          className={cn(
            "text-5xl font-sans-medium text-secondary",
            !value && "text-secondary-text",
          )}
        >
          {value ? formatCurrency(Number(value)) : "0.00"}
          <Text className="text-[#8A8B8D] text-xl">{code}</Text>
        </Text>
      </View>

      <View className="flex-row items-center gap-3">
        {isCrypto ? (
          <>
            {percents.map((item, index) => (
              <Pressable
                onPress={() => {
                  const amt = Number(balance) * item;
                  onValueChange(item == 1 ? balance : amt?.toString());
                }}
                key={index}
                className="py-1.5 px-3 rounded-full bg-[#F3F3F3]"
              >
                <Text className="text-[#393939] font-sans-medium text-lg">
                  {item == 1 ? "max" : `${item * 100}%`}
                </Text>
              </Pressable>
            ))}
          </>
        ) : (
          <>
            {amounts.map((item, index) => (
              <Pressable
                onPress={() => onValueChange(item?.toString())}
                key={index}
                className="py-1.5 px-3 rounded-full bg-[#F3F3F3]"
              >
                <Text className="text-[#393939] font-sans-medium text-lg">
                  {formatCurrency(item, code)?.replace(".00", "")}
                </Text>
              </Pressable>
            ))}
          </>
        )}
      </View>
    </View>
  );
};

export default CoinInput;

const styles = StyleSheet.create({});
