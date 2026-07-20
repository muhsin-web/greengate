import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function EnvelopeIcon({
  size = 22,
  color = "#000",
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 22 22" fill="none" {...props}>
      <Path
        d="M19.632 7.678l-8.25-5.5a.688.688 0 00-.764 0l-8.25 5.5a.688.688 0 00-.305.572v8.938a1.375 1.375 0 001.374 1.375h15.126a1.375 1.375 0 001.375-1.375V8.25a.687.687 0 00-.306-.572zm-11.32 5.385L3.438 16.5V9.585l4.874 3.478zm1.407.687h2.562l4.867 3.438H4.852l4.867-3.438zm3.97-.687l4.873-3.478V16.5l-4.874-3.437zM11 3.576l7.04 4.693-5.759 4.106h-2.56L3.962 8.27 11 3.576z"
        fill={color}
      />
    </Svg>
  );
}
