import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function CalendarDotIcon({
  size = 22,
  color = "#000",
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 22 22" fill="none" {...props}>
      <Path
        d="M17.875 2.75h-2.063v-.688a.687.687 0 10-1.374 0v.688H7.561v-.688a.688.688 0 10-1.375 0v.688H4.126A1.375 1.375 0 002.75 4.125v13.75a1.375 1.375 0 001.375 1.375h13.75a1.375 1.375 0 001.375-1.375V4.125a1.375 1.375 0 00-1.375-1.375zM6.187 4.125v.688a.688.688 0 101.375 0v-.688h6.875v.688a.687.687 0 101.376 0v-.688h2.062v2.75H4.125v-2.75h2.063zm11.688 13.75H4.125V8.25h13.75v9.625zm-5.5-4.813a1.375 1.375 0 11-2.75 0 1.375 1.375 0 012.75 0z"
        fill={color}
      />
    </Svg>
  );
}
