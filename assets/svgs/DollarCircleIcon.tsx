import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function DollarCircleIcon({
  size = 32,
  color = "#142B07",
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 3a13 13 0 1013 13A13.013 13.013 0 0016 3zm0 24a11 11 0 1111-11 11.012 11.012 0 01-11 11zm5-8.5a3.5 3.5 0 01-3.5 3.5H17v1a1 1 0 01-2 0v-1h-2a1 1 0 010-2h4.5a1.5 1.5 0 100-3h-3a3.5 3.5 0 110-7h.5V9a1 1 0 012 0v1h2a1 1 0 010 2h-4.5a1.5 1.5 0 100 3h3a3.5 3.5 0 013.5 3.5z"
        fill={color}
      />
    </Svg>
  );
}
