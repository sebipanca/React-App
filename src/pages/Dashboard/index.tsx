import React from "react";

import { Button, Img, Line, List, Text } from "components";
import DashboardListui from "components/DashboardListui";
import DashboardNba from "components/DashboardNba";
import DashboardNba1 from "components/DashboardNba1";

const DashboardPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-opensans items-center justify-start mx-auto w-full">
        <div className="h-[1040px] sm:h-[1233px] md:h-[2138px] md:px-5 relative w-full">
          <div className="bg-gray-900 h-[1040px] my-auto w-[8%]"></div>
          <div className="absolute flex flex-col gap-[43px] h-full inset-[0] items-center justify-center m-auto w-full">
            <div className="flex md:flex-col flex-row gap-8 items-start justify-between w-[98%] md:w-full">
              <div className="flex flex-col items-center justify-start w-[8%] md:w-full">
                <div className="bg-gray-900 md:h-[239px] sm:h-[280px] h-[768px] py-[15px] relative w-full">
                  <div className="bg-teal-600 flex flex-col h-full items-center justify-start mt-[84px] mx-auto px-1.5 py-3 w-24">
                    <div className="flex flex-col gap-1 items-center justify-start w-full">
                      <Img
                        className="h-5 w-6"
                        src="images/img_iconssidenavdashboard.svg"
                        alt="iconssidenavdas"
                      />
                      <Text
                        className="text-center text-white-A700 text-xs tracking-[0.15px] w-full"
                        size="txtOpenSansRomanBold12"
                      >
                        Menu label
                      </Text>
                    </div>
                  </div>
                  <div className="absolute flex flex-col md:gap-10 gap-[81px] inset-x-[0] items-center justify-start mx-auto top-[2%] w-full">
                    <Img
                      className="h-[67px]"
                      src="images/img_frame.svg"
                      alt="frame"
                    />
                    <List
                      className="flex flex-col gap-2 items-center w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 flex-col items-center justify-start p-1.5 w-full">
                        <div className="flex flex-col items-center justify-start my-[5px] px-2 w-full">
                          <Img
                            className="h-5 cursor-pointer"
                            src="images/img_iconssidenavanalytics.svg"
                            alt="iconssidenavana"
                          />
                          <Text
                            className="mt-[3px] text-center text-white-A700 text-xs tracking-[0.15px] cursor-pointer"
                            size="txtOpenSansRomanBold12"
                          >
                            Menu label
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start p-1.5 w-full">
                        <div className="flex flex-col items-center justify-start my-[5px] px-2 w-full">
                          <Img
                            className="h-5 cursor-pointer"
                            src="images/img_iconssidenavwebsite.svg"
                            alt="iconssidenavweb"
                          />
                          <Text
                            className="mt-[3px] text-center text-white-A700 text-xs tracking-[0.15px] cursor-pointer"
                            size="txtOpenSansRomanBold12"
                          >
                            Menu label
                          </Text>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-overpass items-center justify-start pt-[67px] w-[37%] md:w-full">
                <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                  <div className="bg-white-A700 flex flex-col items-start justify-start p-8 sm:px-5 rounded-[20px] shadow-bs1 w-[483px] sm:w-full">
                    <div className="flex flex-col items-end justify-start w-full">
                      <div className="flex flex-col items-start justify-start pb-6 w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                          size="txtOverpassRomanBold24"
                        >
                          I am looking for...
                        </Text>
                      </div>
                      <div className="flex flex-col font-opensans gap-6 items-start justify-start w-auto sm:w-full">
                        <DashboardNba className="bg-teal-400 flex flex-col items-end justify-end sm:px-5 px-8 py-6 rounded-[20px] w-[419px] sm:w-full" />
                        <List
                          className="flex flex-col gap-6 items-center w-full"
                          orientation="vertical"
                        >
                          <DashboardNba1 className="bg-gray-100 flex sm:flex-1 flex-col items-end justify-end p-6 sm:px-5 rounded-[20px] w-[419px] sm:w-full" />
                          <DashboardNba1
                            className="bg-gray-100 flex sm:flex-1 flex-col items-end justify-end p-6 sm:px-5 rounded-[20px] w-[419px] sm:w-full"
                            time="10 min"
                            title="Dreaming in code"
                          />
                        </List>
                      </div>
                      <div className="flex flex-col font-opensans items-center justify-start pt-6 w-full">
                        <div className="flex flex-row gap-2 items-center justify-end w-auto">
                          <Text
                            className="text-sm text-teal-400 w-auto cursor-pointer"
                            size="txtOpenSansRomanBold14"
                          >
                            Expand
                          </Text>
                          <Img
                            className="h-[15px] w-[15px] cursor-pointer"
                            src="images/img_arrowdown_teal_400.svg"
                            alt="arrowdown_One"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="font-opensans sm:h-[1043px] h-[849px] md:h-[944px] relative w-[52%] md:w-full">
                <div className="flex flex-col h-full items-center justify-start ml-auto mr-4 pt-6 w-[16%]">
                  <div className="flex flex-row gap-2 items-end justify-start w-auto">
                    <Img
                      className="h-[17px] w-[15px]"
                      src="images/img_user.svg"
                      alt="user"
                    />
                    <div className="flex flex-col items-center justify-start w-auto ">
                      <Text
                        className="text-blue_gray-800 text-sm w-auto "
                        size="txtOpenSansRomanBold14Bluegray800"
                      >
                        My account
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-col font-overpass h-full inset-[0] items-center justify-center m-auto pt-[67px] w-full">
                  <div className="flex flex-col gap-8 items-start justify-start w-auto md:w-full">
                    <div className="bg-white-A700 flex flex-col items-center justify-center p-[29px] sm:px-5 rounded-[20px] shadow-bs1 w-full">
                      <Text
                        className="mt-0.5 text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900"
                        size="txtOverpassRomanExtraBold36"
                      >
                        Design Thinking
                      </Text>
                      <Text
                        className="text-center text-gray-900_01 text-sm w-full"
                        size="txtOpenSansRomanRegular14"
                      >
                        <>
                          The visual appeal of your product has an extensive
                          impact on users. Although a product&#39;s Information
                          Architecture is important, it doesn&#39;t facilitate
                          engagement on its own.{" "}
                        </>
                      </Text>
                      <Img
                        className="h-[226px] mt-3"
                        src="images/img_previewplaceholder.svg"
                        alt="previewplacehol"
                      />
                      <Button
                        className="cursor-pointer font-bold font-opensans leading-[normal] mb-[3px] min-w-[245px] mt-3 text-base text-center"
                        shape="round"
                        color="teal_400"
                        size="xs"
                        variant="fill"
                      >
                        From paper to product
                      </Button>
                    </div>
                    <div className="bg-white-A700 flex flex-col items-start justify-start max-w-[691px] p-8 sm:px-5 rounded-[20px] shadow-bs1 w-full">
                      <div className="flex flex-col items-end justify-start w-full">
                        <div className="flex flex-row gap-3 items-center justify-start pb-6 w-full">
                          <Img
                            className="h-[25px] w-[30px]"
                            src="images/img_iconswidgetanalytics.svg"
                            alt="iconswidgetanal"
                          />
                          <Text
                            className="flex-1 text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                            size="txtOverpassRomanBold24"
                          >
                            Front-End Development
                          </Text>
                        </div>
                        <Line className="bg-gray-200 h-px w-full" />
                        <div className="flex flex-col items-start justify-start pt-8 w-full">
                          <DashboardListui className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full" />
                        </div>
                        <div className="flex flex-col font-opensans gap-6 items-end justify-start pt-8 w-full">
                          <Line className="bg-gray-200 h-px w-full" />
                          <div className="flex flex-row gap-2 items-center justify-end w-auto">
                            <a
                              href="javascript:"
                              className="text-sm text-teal-400 w-auto"
                            >
                              <Text size="txtOpenSansRomanBold14">
                                View more
                              </Text>
                            </a>
                            <Img
                              className="h-[15px] w-[15px] cursor-pointer"
                              src="images/img_arrowright_teal_400.svg"
                              alt="arrowright"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col h-[148px] md:h-auto items-start justify-start max-w-[1366px] md:pl-10 pl-[136px] pr-8 pt-10 sm:px-5 w-full">
              <div className="flex flex-col gap-2 items-center justify-center w-full">
                <Line className="bg-gray-200 h-px w-full" />
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-center py-10 w-[587px] sm:w-full">
                  <Text
                    className="text-gray-700 text-sm w-auto"
                    size="txtOpenSansRomanSemiBold14"
                  >
                    Footer menu item
                  </Text>
                  <div className="bg-gray-200 h-3 rotate-[-90deg] w-[1%]"></div>
                  <Text
                    className="text-gray-700 text-sm w-auto"
                    size="txtOpenSansRomanSemiBold14"
                  >
                    Footer menu item
                  </Text>
                  <div className="bg-gray-200 h-3 rotate-[-90deg] w-[1%]"></div>
                  <Text
                    className="text-gray-700 text-sm w-auto"
                    size="txtOpenSansRomanSemiBold14"
                  >
                    Footer menu item
                  </Text>
                  <div className="bg-gray-200 h-3 rotate-[-90deg] w-[1%]"></div>
                  <Text
                    className="text-gray-700 text-sm w-auto"
                    size="txtOpenSansRomanSemiBold14"
                  >
                    Footer menu item
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
