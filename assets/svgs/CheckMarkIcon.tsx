import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function CheckMarkIcon({
  size = 16,
  color = "#0DAE2B",
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        d="M2.667 8a5.333 5.333 0 1110.666 0A5.333 5.333 0 012.667 8zM8 1.333a6.667 6.667 0 100 13.334A6.667 6.667 0 008 1.333zm3.638 4.972l-.943-.943-3.362 3.362-1.861-1.862-.943.943 2.804 2.805 4.305-4.305z"
        fill={color}
      />
    </Svg>
  );
}
