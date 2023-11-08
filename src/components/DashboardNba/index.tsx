import React from "react";

import { Button, Img, Text } from "components";

type DashboardNbaProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "time" | "title" | "description" | "realworldfeedback" | "moreactions"
> &
  Partial<{
    time: string;
    title: string;
    description: string;
    realworldfeedback: string;
    moreactions: string;
  }>;

const DashboardNba: React.FC<DashboardNbaProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-end w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-1 items-start justify-start w-full">
              <div className="flex flex-row gap-1 items-center justify-start w-full">
                <Img
                  className="h-3.5 w-3.5"
                  src="images/img_clock.svg"
                  alt="clock"
                />
                <Text
                  className="flex-1 text-white-A700 text-xs tracking-[0.15px] w-auto"
                  size="txtOpenSansRomanBold12"
                >
                  {props?.time}
                </Text>
              </div>
              <Text
                className="text-white-A700 text-xl w-full"
                size="txtOverpassRomanBold20"
              >
                {props?.title}
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pb-4 pt-2 w-full">
            <Text
              className="max-w-[355px] md:max-w-full text-sm text-white-A700"
              size="txtOpenSansRomanRegular14WhiteA700"
            >
              {props?.description}
            </Text>
          </div>
          <div className="flex flex-row gap-6 items-center justify-start w-auto">
            <Button
              className="!text-teal-400 cursor-pointer font-bold font-opensans leading-[normal] min-w-[231px] text-base text-center"
              shape="round"
              color="white_A700"
              size="xs"
              variant="fill"
            >
              {props?.realworldfeedback}
            </Button>
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <Text
                className="text-sm text-white-A700 w-auto cursor-pointer"
                size="txtOpenSansRomanBold14WhiteA700"
              >
                {props?.moreactions}
              </Text>
              <Img
                className="h-[7px] cursor-pointer"
                src="images/img_arrowdown.svg"
                alt="arrowdown"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DashboardNba.defaultProps = {
  time: "5 min",
  title: "Understanding Your Users.",
  description:
    "Ensuring that the visual structure and presentation of information on an application is intuitive and correlated with existing user mental models and expectations is a cornerstone of the UX design.",
  realworldfeedback: "Real World Feedback",
  moreactions: "More actions",
};

export default DashboardNba;
