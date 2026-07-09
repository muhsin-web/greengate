import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function ArrowUpRightIcon({
  size = 22,
  color = "#000",
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 22 22" fill="none" {...props}>
      <Path
        d="M17.187 5.5v8.938a.687.687 0 11-1.375 0V7.159l-9.826 9.827a.688.688 0 11-.973-.972l9.827-9.826H7.562a.687.687 0 010-1.375H16.5a.687.687 0 01.687.687z"
        fill={color}
      />
    </Svg>
  );
}
