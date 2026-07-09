import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function ExistIcon({ size = 22, color = "#000", ...props }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 22 22" fill="none" {...props}>
      <Path
        d="M10.313 18.563a.687.687 0 01-.688.687h-5.5a.687.687 0 01-.688-.688V3.438a.688.688 0 01.688-.687h5.5a.687.687 0 110 1.375H4.812v13.75h4.813a.687.687 0 01.688.688zm9.423-8.05L16.3 7.077a.688.688 0 00-.973.973l2.264 2.264H9.625a.687.687 0 100 1.374h7.965l-2.264 2.264a.688.688 0 10.973.973l3.437-3.438a.688.688 0 000-.972z"
        fill={color}
      />
    </Svg>
  );
}
