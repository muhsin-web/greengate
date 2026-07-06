import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function ArrowLeftIcon({
  size = 22,
  color = "#7E7E7E",
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 22 22" fill="none" {...props}>
      <Path
        d="M19.25 11a.688.688 0 01-.687.688H5.097l5.014 5.013a.69.69 0 01-.486 1.174.687.687 0 01-.486-.201L2.95 11.486a.687.687 0 010-.972L9.14 4.326a.688.688 0 01.973.973l-5.015 5.013h13.466a.687.687 0 01.687.688z"
        fill={color}
      />
    </Svg>
  );
}
