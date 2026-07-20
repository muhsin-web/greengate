import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function GenderSexIcon({
  size = 22,
  color = "#000",
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 22 22" fill="none" {...props}>
      <Path
        d="M17.875 2.063h-3.437a.687.687 0 000 1.374h1.778L14.054 5.6a5.5 5.5 0 10-4.429 9.481v1.42H7.563a.687.687 0 100 1.375h2.062v2.063a.687.687 0 101.375 0v-2.063h2.063a.687.687 0 100-1.375H11v-1.42a5.493 5.493 0 003.94-8.422l2.248-2.249v1.779a.687.687 0 101.375 0V2.75a.687.687 0 00-.688-.688zM10.313 13.75a4.125 4.125 0 110-8.25 4.125 4.125 0 010 8.25z"
        fill={color}
      />
    </Svg>
  );
}
