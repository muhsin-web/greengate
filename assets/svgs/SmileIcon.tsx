import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function SmileIcon({
  size = 24,
  color = "#00BE71",
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M12 2.25A9.75 9.75 0 1021.75 12 9.76 9.76 0 0012 2.25zm0 18A8.25 8.25 0 1120.25 12 8.26 8.26 0 0112 20.25zM7.5 10.125a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm9 0a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zm-.1 4.5c-.965 1.668-2.57 2.625-4.4 2.625-1.83 0-3.434-.956-4.399-2.625a.75.75 0 111.298-.75c.7 1.21 1.8 1.875 3.101 1.875 1.3 0 2.4-.666 3.1-1.875a.75.75 0 011.3.75z"
        fill={color}
      />
    </Svg>
  );
}
