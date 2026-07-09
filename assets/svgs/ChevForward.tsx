import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function ChevForwardIcon({
  size = 22,
  color = "#000",
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 22 22" fill="none" {...props}>
      <Path
        d="M15.611 11.486l-6.875 6.875a.688.688 0 01-.973-.973L14.153 11 7.763 4.61a.688.688 0 11.973-.973l6.875 6.876a.688.688 0 010 .972z"
        fill={color}
      />
    </Svg>
  );
}
