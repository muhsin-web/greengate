import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function AtIcon({ size = 22, color = "#000", ...props }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 22 22" fill="none" {...props}>
      <Path
        d="M11 2.063a8.938 8.938 0 000 17.875c1.848 0 3.79-.557 5.193-1.49a.687.687 0 10-.761-1.145c-1.166.776-2.867 1.26-4.432 1.26A7.562 7.562 0 1118.563 11c0 2.273-.935 2.75-1.72 2.75-.783 0-1.718-.477-1.718-2.75V7.562a.687.687 0 10-1.375 0v.367a4.125 4.125 0 10.51 5.594c.515 1.031 1.405 1.602 2.584 1.602 1.937 0 3.093-1.542 3.093-4.125A8.947 8.947 0 0011 2.062zm0 11.687a2.75 2.75 0 110-5.5 2.75 2.75 0 010 5.5z"
        fill={color}
      />
    </Svg>
  );
}
