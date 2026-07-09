import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function LockIcon({ size = 22, color = "#000", ...props }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 22 22" fill="none" {...props}>
      <Path
        d="M17.875 6.875h-2.75V4.812a4.125 4.125 0 00-8.25 0v2.063h-2.75A1.375 1.375 0 002.75 8.25v9.625a1.375 1.375 0 001.375 1.375h13.75a1.375 1.375 0 001.375-1.375V8.25a1.375 1.375 0 00-1.375-1.375zM8.25 4.812a2.75 2.75 0 115.5 0v2.063h-5.5V4.812zm9.625 13.063H4.125V8.25h13.75v9.625z"
        fill={color}
      />
    </Svg>
  );
}
