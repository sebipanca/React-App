import React from "react";

import { Img, Text } from "components";

type DashboardNba1Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "time" | "title"
> &
  Partial<{ time: string; title: string }>;

const DashboardNba1: React.FC<DashboardNba1Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-end w-full">
          <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-full">
            <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
              <div className="flex flex-row gap-1 items-center justify-start w-full">
                <Img
                  className="h-3.5 w-3.5"
                  src="images/img_clock_blue_gray_900.svg"
                  alt="clock"
                />
                <Text
                  className="flex-1 text-blue_gray-900 text-xs tracking-[0.15px] w-auto"
                  size="txtOpenSansRomanBold12Bluegray900"
                >
                  {props?.time}
                </Text>
              </div>
              <Text
                className="text-blue_gray-900 text-xl w-full"
                size="txtOverpassRomanBold20Bluegray900"
              >
                {props?.title}
              </Text>
            </div>
            <Img
              className="h-[7px] max-h-[7px] sm:w-[] cursor-pointer"
              src="images/img_arrowdown_blue_gray_900.svg"
              alt="arrowdown"
            />
          </div>
        </div>
      </div>
    </>
  );
};

DashboardNba1.defaultProps = { time: "2 min", title: "UI / UX excellence" };

export default DashboardNba1;
