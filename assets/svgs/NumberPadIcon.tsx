import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function NumberpadIcon({
  size = 22,
  color = "#000",
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 22 22" fill="none" {...props}>
      <Path
        d="M6.875 4.125a1.375 1.375 0 11-2.75 0 1.375 1.375 0 012.75 0zM11 2.75a1.375 1.375 0 100 2.75 1.375 1.375 0 000-2.75zm5.5 2.75a1.375 1.375 0 100-2.75 1.375 1.375 0 000 2.75zm-11 2.063a1.375 1.375 0 100 2.75 1.375 1.375 0 000-2.75zm5.5 0a1.375 1.375 0 100 2.75 1.375 1.375 0 000-2.75zm5.5 0a1.375 1.375 0 100 2.75 1.375 1.375 0 000-2.75zm-11 4.812a1.375 1.375 0 100 2.75 1.375 1.375 0 000-2.75zm5.5 0a1.375 1.375 0 100 2.75 1.375 1.375 0 000-2.75zm0 4.813a1.375 1.375 0 100 2.75 1.375 1.375 0 000-2.75zm5.5-4.813a1.375 1.375 0 100 2.75 1.375 1.375 0 000-2.75z"
        fill={color}
      />
    </Svg>
  );
}
