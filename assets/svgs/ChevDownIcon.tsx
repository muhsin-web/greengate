import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function ChevDownIcon({
  size = 22,
  color = "#2A2A2A",
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 22 22" fill="none" {...props}>
      <Path
        d="M18.362 8.736l-6.875 6.875a.689.689 0 01-.973 0L3.639 8.736a.688.688 0 11.973-.973L11 14.153l6.389-6.39a.688.688 0 01.973.973z"
        fill={color}
      />
    </Svg>
  );
}
