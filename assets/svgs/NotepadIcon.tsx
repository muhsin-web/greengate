import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function NotepadIcon({
  size = 22,
  color = "#000",
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 22 22" fill="none" {...props}>
      <Path
        d="M14.438 11a.687.687 0 01-.688.688h-5.5a.687.687 0 110-1.376h5.5a.687.687 0 01.688.688zm-.688 2.063h-5.5a.687.687 0 100 1.374h5.5a.687.687 0 100-1.374zm4.813-9.626v13.75a2.75 2.75 0 01-2.75 2.75H6.187a2.75 2.75 0 01-2.75-2.75V3.438a.688.688 0 01.688-.687h2.063v-.688a.688.688 0 111.375 0v.688h2.75v-.688a.687.687 0 111.374 0v.688h2.75v-.688a.687.687 0 111.376 0v.688h2.062a.687.687 0 01.688.688zm-1.375.688h-1.375v.688a.687.687 0 11-1.376 0v-.688h-2.75v.688a.687.687 0 11-1.374 0v-.688h-2.75v.688a.688.688 0 11-1.375 0v-.688H4.813v13.063a1.375 1.375 0 001.375 1.375h9.625a1.375 1.375 0 001.374-1.375V4.124z"
        fill={color}
      />
    </Svg>
  );
}
