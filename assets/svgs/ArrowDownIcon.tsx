import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function ArrowDownIcon({
  size = 24,
  color = "#58C185",
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M19.281 14.03l-6.75 6.75a.747.747 0 01-1.061 0l-6.75-6.75a.75.75 0 111.061-1.06l5.47 5.47V3.75a.75.75 0 111.5 0v14.69l5.469-5.47a.75.75 0 111.061 1.06z"
        fill={color}
      />
    </Svg>
  );
}
