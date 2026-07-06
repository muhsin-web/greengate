// lib/cssInterop.ts
import { cssInterop } from "nativewind";
import { Text, View } from "react-native";

// Map "textClass" -> style on Text
cssInterop(Text, {
  textClass: "style",
  className: "style",
});

// Map "titleClass" -> style on Text (if Title is a separate wrapper, target that instead)
cssInterop(View, {
  containerClass: "style",
  btnClass: "style",
  className: "style",
});
