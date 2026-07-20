import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function IdentificationIcon({
  size = 24,
  color = "#0062BE",
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M7.05 18.6a.75.75 0 001.05-.15 4.874 4.874 0 017.8 0 .75.75 0 101.2-.9 6.363 6.363 0 00-2.569-2.033 3.75 3.75 0 10-5.057 0A6.363 6.363 0 006.9 17.55a.75.75 0 00.15 1.05zM12 10.5a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zm6.75-8.25H5.25a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V3.75a1.5 1.5 0 00-1.5-1.5zm0 18H5.25V3.75h13.5v16.5zM8.25 6A.75.75 0 019 5.25h6a.75.75 0 110 1.5H9A.75.75 0 018.25 6z"
        fill={color}
      />
    </Svg>
  );
}
