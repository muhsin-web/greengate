import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function CopyIcon({
  size = 22,
  color = "#1A4B4A",
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 22 22" fill="none" {...props}>
      <Path
        d="M18.563 2.75h-11a.688.688 0 00-.688.688v3.437H3.437a.688.688 0 00-.687.688v11a.687.687 0 00.688.687h11a.687.687 0 00.687-.688v-3.437h3.438a.687.687 0 00.687-.688v-11a.687.687 0 00-.688-.687zM13.75 17.875H4.125V8.25h9.625v9.625zm4.125-4.125h-2.75V7.562a.687.687 0 00-.688-.687H8.25v-2.75h9.625v9.625z"
        fill={color}
      />
    </Svg>
  );
}
