import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function ArrowRightIcon({
  size = 22,
  color = "#000",
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M13.476 9.167l-4.47-4.47 1.179-1.179L16.667 10l-6.482 6.482-1.179-1.179 4.47-4.47H3.333V9.167h10.143z"
        fill={color}
      />
    </Svg>
  );
}
