import { BackSpaceIcon } from "@/assets/svgs/BackSpaceIcon";
import keys from "@/libs/data/keypad-keys.json";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";

interface KeyPadProps {
  onChange: (e: string) => void;
  value: string;
  isDecimal?: boolean;
  maxLength?: number;
}

const { width } = Dimensions.get("screen");
const KeyPad = ({
  value,
  onChange,
  maxLength,
  isDecimal = false,
}: KeyPadProps) => {
  const onKeyPress = (key: string) => {
    if (value.length == maxLength) return;
    onChange(value + key);
  };

  const handleBackspace = () => {
    onChange(value?.slice(0, -1));
  };

  console.log(value);
  return (
    <View style={{ width: width * 0.75 }} className="self-center">
      <View className="mt-6">
        {keys.map((row, index) => (
          <View key={index} className="flex-row">
            {row.map((key, idx) => {
              if (key == "id") {
                if (isDecimal) {
                  return (
                    <Pressable
                      onPress={() => onKeyPress(".")}
                      key={`key_${key}_${row}`}
                      className="flex-1 justify-center items-center aspect-[1/0.8]"
                    >
                      <Text className="!font-sans-medium text-3xl">{"˙"}</Text>
                    </Pressable>
                  );
                }
                return <View className="flex-1" key={"unknown"} />;
              }
              if (key == "back") {
                return (
                  <Pressable
                    onPress={() => handleBackspace()}
                    key={`key_${key}_${row}`}
                    className="flex-1 justify-center items-center aspect-[1/0.8]"
                  >
                    <BackSpaceIcon />
                  </Pressable>
                );
              }
              return (
                <Pressable
                  onPress={() => onKeyPress(key)}
                  key={`key_${key}_${row}`}
                  className="flex-1 justify-center items-center aspect-[1/0.8]"
                >
                  <Text className="!font-sans-medium text-3xl">{key}</Text>
                </Pressable>
              );
            })}
          </View>
        ))}
      </View>
    </View>
  );
};

export default KeyPad;

const styles = StyleSheet.create({});
