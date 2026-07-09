import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function QuestIcon({ size = 22, color = "#000", ...props }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 22 22" fill="none" {...props}>
      <Path
        d="M16.5 8.25c0 2.45-2.103 4.478-4.813 4.775v.725a.687.687 0 11-1.374 0v-1.375a.687.687 0 01.687-.688c2.275 0 4.125-1.541 4.125-3.437S13.275 4.812 11 4.812 6.875 6.354 6.875 8.25a.688.688 0 11-1.375 0c0-2.654 2.467-4.813 5.5-4.813s5.5 2.16 5.5 4.813zM11 16.5a1.375 1.375 0 100 2.75 1.375 1.375 0 000-2.75z"
        fill={color}
      />
    </Svg>
  );
}
