import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function SearchIcon({
  size = 22,
  color = "#7E7E7E",
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 22 22" fill="none" {...props}>
      <Path
        d="M19.737 18.764l-4.303-4.303a7.572 7.572 0 10-.972.973l4.302 4.302a.69.69 0 001.174-.486.69.69 0 00-.201-.486zm-16.3-9.139a6.188 6.188 0 116.188 6.188 6.195 6.195 0 01-6.187-6.188z"
        fill={color}
      />
    </Svg>
  );
}
