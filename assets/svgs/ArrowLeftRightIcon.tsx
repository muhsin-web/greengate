import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function ArrowLeftRightIcon({
  size = 24,
  color = "#000",
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        d="M20.03 17.031l-3 3a.75.75 0 11-1.06-1.061l1.72-1.72H4.5a.75.75 0 110-1.5h13.19l-1.72-1.719a.75.75 0 111.06-1.061l3 3a.748.748 0 010 1.061zm-13.06-6A.75.75 0 108.03 9.97L6.31 8.25H19.5a.75.75 0 100-1.5H6.31l1.72-1.719A.75.75 0 106.97 3.97l-3 3a.75.75 0 000 1.061l3 3z"
        fill={color}
      />
    </Svg>
  );
}
