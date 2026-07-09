import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function GreengateGrayIcon({
  size = 24,
  color = "#787373",
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M0 8c0-4.418 3.61-8 8.013-8v8H0zM8.013 0h8.014v8H8.013V0zM0 8h8.013v8H0V8zM0 16h8.013v8C3.61 24 0 20.418 0 16zM8.013 16h8.014v8H8.013v-8zM16.027 16H24c0 4.418-3.57 8-7.973 8v-8z"
        fill="#2A2A2A"
      />
      <Path d="M16.027 8H24v8h-7.973V8z" fill={color} />
      <Path d="M8.013 8h8.014v8H8.013V8z" fill="#BEBEBE" />
    </Svg>
  );
}
