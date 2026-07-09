import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function QrCodeIcon({
  size = 20,
  color = "#142B07",
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M13.333 14.167v-.834h-2.5v-2.5h2.5V12.5H15v1.667h-.833v1.666H12.5V17.5h-1.667V15H12.5v-.833h.833zM17.5 17.5h-3.333v-1.667h1.666v-1.666H17.5V17.5zm-15-15h6.667v6.667H2.5V2.5zm1.667 1.667V7.5H7.5V4.167H4.167zM10.833 2.5H17.5v6.667h-6.667V2.5zM12.5 4.167V7.5h3.333V4.167H12.5zm-10 6.666h6.667V17.5H2.5v-6.667zM4.167 12.5v3.333H7.5V12.5H4.167zM15 10.833h2.5V12.5H15v-1.667zM5 5h1.667v1.667H5V5zm0 8.333h1.667V15H5v-1.667zM13.333 5H15v1.667h-1.667V5z"
        fill={color}
      />
    </Svg>
  );
}
