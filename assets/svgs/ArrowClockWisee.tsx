import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function ArrowClockWise({
  size = 22,
  color = "#000",
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M17.5 3.75V7.5a.625.625 0 01-.625.625h-3.75a.625.625 0 110-1.25h2.241l-1.143-1.143a6.215 6.215 0 00-4.385-1.83h-.035A6.212 6.212 0 005.437 5.68a.625.625 0 01-.874-.893 7.5 7.5 0 0110.547.061l1.14 1.143V3.75a.625.625 0 111.25 0zm-2.937 10.57a6.25 6.25 0 01-8.786-.052l-1.143-1.143h2.241a.625.625 0 000-1.25h-3.75a.625.625 0 00-.625.625v3.75a.625.625 0 101.25 0v-2.241l1.143 1.143a7.455 7.455 0 005.263 2.196h.042a7.45 7.45 0 005.24-2.135.626.626 0 00-.874-.893z"
        fill={color}
      />
    </Svg>
  );
}
