import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function UserCircleIcon({
  size = 22,
  color = "#000",
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 22 22" fill="none" {...props}>
      <Path
        d="M11 2.063A8.938 8.938 0 1019.938 11 8.947 8.947 0 0011 2.062zm-4.634 14.91a5.5 5.5 0 019.268 0 7.548 7.548 0 01-9.268 0zm1.884-6.66a2.75 2.75 0 115.5 0 2.75 2.75 0 01-5.5 0zm8.401 5.707a6.846 6.846 0 00-3.099-2.471 4.125 4.125 0 10-5.104 0 6.846 6.846 0 00-3.1 2.47 7.562 7.562 0 1111.303 0z"
        fill={color}
      />
    </Svg>
  );
}
