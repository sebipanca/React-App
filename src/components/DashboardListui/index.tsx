import React from "react";

import { Img, List, Text } from "components";

type DashboardListuiProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "ui"
  | "fiftysix"
  | "fifty"
  | "uxconsulting"
  | "onehundredtwentytwo"
  | "zero"
  | "research"
  | "p92s"
  | "nine"
> &
  Partial<{
    ui: string;
    fiftysix: string;
    fifty: string;
    uxconsulting: string;
    onehundredtwentytwo: string;
    zero: string;
    research: string;
    p92s: string;
    nine: string;
  }>;

const DashboardListui: React.FC<DashboardListuiProps> = (props) => {
  return (
    <>
      <List className={props.className} orientation="horizontal">
        <div className="flex flex-col gap-1.5 items-start justify-start w-full">
          <div className="flex flex-row gap-1 items-start justify-start w-[178px]">
            <Text
              className="text-blue_gray-900 text-lg w-auto"
              size="txtOverpassRomanRegular18"
            >
              {props?.ui}
            </Text>
            <Img
              className="h-5 w-5"
              src="images/img_download.svg"
              alt="download"
            />
          </div>
          <div className="flex flex-row items-start justify-start md:pr-10 sm:pr-5 pr-[98px] w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900"
              size="txtOverpassRomanExtraBold36"
            >
              {props?.fiftysix}
            </Text>
            <Text
              className="ml-1 mt-[22px] text-blue_gray-900 text-xs tracking-[0.15px]"
              size="txtOpenSansRomanRegular12"
            >
              {props?.fifty}
            </Text>
            <Img
              className="h-[9px] ml-1 mt-[27px] w-[9px]"
              src="images/img_maximize.svg"
              alt="maximize"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-row gap-1 items-start justify-start w-[193px]">
            <Text
              className="text-blue_gray-900 text-lg w-auto"
              size="txtOverpassRomanRegular18"
            >
              {props?.uxconsulting}
            </Text>
            <Img
              className="h-5 w-5"
              src="images/img_download.svg"
              alt="download"
            />
          </div>
          <div className="flex flex-row items-start justify-start mt-1 md:pr-10 pr-24 sm:pr-5 w-[99%] md:w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900"
              size="txtOverpassRomanExtraBold36"
            >
              {props?.onehundredtwentytwo}
            </Text>
            <Text
              className="h-[17px] ml-[5px] mt-[23px] text-blue_gray-900 text-xs tracking-[0.15px]"
              size="txtOpenSansRomanRegular12"
            >
              {props?.zero}
            </Text>
            <Img
              className="h-[9px] ml-1 mt-[27px] w-[9px]"
              src="images/img_arrowright.svg"
              alt="arrowright"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5 items-start justify-start w-full">
          <div className="flex flex-row gap-1 items-start justify-start w-[193px]">
            <Text
              className="text-blue_gray-900 text-lg w-auto"
              size="txtOverpassRomanRegular18"
            >
              {props?.research}
            </Text>
            <Img
              className="h-5 w-5"
              src="images/img_download.svg"
              alt="download"
            />
          </div>
          <div className="flex flex-row items-start justify-start sm:pr-5 pr-[21px] w-[61%] md:w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900"
              size="txtOverpassRomanExtraBold36"
            >
              {props?.p92s}
            </Text>
            <Text
              className="ml-1.5 mt-[22px] text-blue_gray-900 text-xs tracking-[0.15px]"
              size="txtOpenSansRomanRegular12"
            >
              {props?.nine}
            </Text>
            <Img
              className="h-[9px] ml-[5px] mt-[27px] w-[9px]"
              src="images/img_signal.svg"
              alt="signal"
            />
          </div>
        </div>
      </List>
    </>
  );
};

DashboardListui.defaultProps = {
  ui: "UI",
  fiftysix: "56",
  fifty: "+50%",
  uxconsulting: "UX Consulting",
  onehundredtwentytwo: "122",
  zero: "0%",
  research: "Research",
  p92s: "92s",
  nine: "-9",
};

export default DashboardListui;
