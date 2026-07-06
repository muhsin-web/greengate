import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function BellIcon({
  size = 22,
  color = "#7E7E7E",
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 22 22" fill="none" {...props}>
      <Path
        d="M14.438 19.25a.687.687 0 01-.688.688h-5.5a.687.687 0 110-1.375h5.5a.687.687 0 01.688.687zm4.627-2.75a1.357 1.357 0 01-1.19.688H4.125A1.375 1.375 0 012.94 15.12c.477-.822 1.186-3.145 1.186-6.182a6.875 6.875 0 0113.75 0c0 3.036.71 5.36 1.187 6.182a1.366 1.366 0 01.002 1.38h.001zm-1.19-.688c-.664-1.14-1.375-3.776-1.375-6.874a5.5 5.5 0 00-11 0c0 3.098-.711 5.735-1.375 6.874h13.75z"
        fill={color}
      />
    </Svg>
  );
}
