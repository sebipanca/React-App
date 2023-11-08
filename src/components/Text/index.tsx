import React from "react";

const sizeClasses = {
  txtOverpassRomanExtraBold36: "font-extrabold font-overpass",
  txtOverpassRomanBold20: "font-bold font-overpass",
  txtOverpassRomanBold24: "font-bold font-overpass",
  txtOverpassRomanRegular18: "font-normal font-overpass",
  txtOpenSansRomanRegular14WhiteA700: "font-normal font-opensans",
  txtOpenSansRomanSemiBold14: "font-opensans font-semibold",
  txtOverpassRomanBold20Bluegray900: "font-bold font-overpass",
  txtOpenSansRomanRegular12: "font-normal font-opensans",
  txtOpenSansRomanRegular14: "font-normal font-opensans",
  txtOpenSansRomanBold14: "font-bold font-opensans",
  txtOpenSansRomanBold12Bluegray900: "font-bold font-opensans",
  txtOpenSansRomanBold14WhiteA700: "font-bold font-opensans",
  txtOpenSansRomanBold14Bluegray800: "font-bold font-opensans",
  txtOpenSansRomanBold12: "font-bold font-opensans",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
