export interface RoutesIcon {
  dark: string;
  white: string;
  alt: string;
}

export interface RoutesConst {
  path: string;
  name: string;
  icon?: RoutesIcon;
}

export interface RoutesType extends RoutesConst {
  element: JSX.Element;
  wid?: boolean;
}
