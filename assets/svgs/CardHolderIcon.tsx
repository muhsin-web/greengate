import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function CardHolderIcon({
  size = 24,
  color = "#2A2A2A",
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M19.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5zM3.75 9h16.5v1.5H15a.75.75 0 00-.75.75 2.25 2.25 0 01-4.5 0A.75.75 0 009 10.5H3.75V9zm.75-3h15a.75.75 0 01.75.75v.75H3.75v-.75A.75.75 0 014.5 6zm15 12h-15a.75.75 0 01-.75-.75V12h4.575a3.75 3.75 0 007.35 0h4.575v5.25a.75.75 0 01-.75.75z"
        fill={color}
      />
    </Svg>
  );
}
