import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function EyeOpenIcon({
  size = 20,
  color = "#7E7E7E",
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M10 2.5c4.493 0 8.232 3.233 9.015 7.5-.783 4.267-4.522 7.5-9.015 7.5-4.494 0-8.232-3.233-9.016-7.5C1.768 5.733 5.506 2.5 10 2.5zm0 13.333c3.53 0 6.55-2.456 7.314-5.833a7.504 7.504 0 00-14.629 0A7.504 7.504 0 0010 15.833zm0-2.083a3.75 3.75 0 110-7.5 3.75 3.75 0 010 7.5zm0-1.667a2.083 2.083 0 100-4.166 2.083 2.083 0 000 4.166z"
        fill={color}
      />
    </Svg>
  );
}
