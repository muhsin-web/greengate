import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function CircleHalfIcon({
  size = 22,
  color = "#000",
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 22 22" fill="none" {...props}>
      <Path
        d="M11 2.063A8.938 8.938 0 1019.938 11 8.947 8.947 0 0011 2.062zM3.437 11A7.571 7.571 0 0111 3.437v15.126A7.571 7.571 0 013.437 11z"
        fill={color}
      />
    </Svg>
  );
}
