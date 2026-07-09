import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function CloseIcon({
  size = 22,
  color = "#7E7E7E",
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 22 22" fill="none" {...props}>
      <Path
        d="M17.674 16.701a.688.688 0 01-.973.973L11 11.972l-5.701 5.702a.688.688 0 11-.973-.973L10.028 11 4.326 5.299a.688.688 0 11.973-.973l5.7 5.702 5.702-5.702a.688.688 0 11.973.973l-5.702 5.7 5.702 5.702z"
        fill={color}
      />
    </Svg>
  );
}
