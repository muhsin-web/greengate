import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function HoueIcon({ size = 24, color = "#000", ...props }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M20.56 10.189l-7.5-7.5a1.5 1.5 0 00-2.12 0l-7.5 7.5A1.487 1.487 0 003 11.25v9a.75.75 0 00.75.75h16.5a.75.75 0 00.75-.75v-9a1.487 1.487 0 00-.44-1.061zM19.5 19.5h-15v-8.25l7.5-7.5 7.5 7.5v8.25z"
        fill={color}
      />
    </Svg>
  );
}
