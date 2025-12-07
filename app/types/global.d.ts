type UnknownObject = Record<string, unknown>;

interface IconType extends React.SVGProps<SVGSVGElement> {
  color?: string;
  width?: number;
  height?: number;
}

type Breakpoint = "mobile" | "tablet" | "desktop";
