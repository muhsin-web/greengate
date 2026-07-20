import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function FileArrowUp({
  size = 22,
  color = "#000",
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 22 22" fill="none" {...props}>
      <Path
        d="M18.361 7.076L13.55 2.264a.687.687 0 00-.486-.201h-8.25a1.375 1.375 0 00-1.375 1.374v15.126a1.375 1.375 0 001.374 1.375h12.375a1.375 1.375 0 001.375-1.375v-11a.687.687 0 00-.2-.487zM13.75 4.41l2.465 2.466H13.75V4.409zm3.438 14.154H4.813V3.438h7.562v4.124a.687.687 0 00.688.688h4.124v10.313zm-3.64-6.674a.686.686 0 01-.222 1.122.687.687 0 01-.75-.15l-.889-.889v3.84a.687.687 0 11-1.374 0v-3.84l-.89.89a.686.686 0 01-1.173-.487.688.688 0 01.201-.486l2.063-2.063a.687.687 0 01.972 0l2.063 2.063z"
        fill={color}
      />
    </Svg>
  );
}
