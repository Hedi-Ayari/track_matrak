import React from "react";

import { Img, Line, Text } from "components";
import "./styles.css"
const HomepagePage = () => {
  return (
    <>
      <div className="bg-gradient  font-oswald h-[1088px] mx-auto relative shadow-bs w-full">
        <div className="h-[1088px] m-auto md:px-5 w-full">
          <div className="absolute bottom-[0] h-[1023px] inset-x-[0] mx-auto w-full">
            <Img
              className="h-[1023px] m-auto object-cover w-full"
              src="images/img_citybuildingsnight.png"
              alt="citybuildingsni"
            />
            <div className="absolute bg-black-900_bc flex flex-col gap-[7px] h-full inset-[0] justify-center m-auto p-3.5 w-full">
              <Img
                className="h-[43px] md:h-auto md:ml-[0] ml-[49px] mr-[1170px] mt-[33px] object-cover w-[14%]"
                src="images/img_sanstitre1er.png"
                alt="sanstitre1er"
              />
              
            <div className="relative w-[10%] h-[857px] md:h-[912px] mb-[55px] mr-[1274px]">
              <br/> 
              <div style={{width : "1000px" , position : "relative" , top : "20%" , right : "450px"}}>
              <Text
         className="m-auto rotate-[-90deg] sm:text-[39px] md:text-[45px] text-[36px] text-white-A700 w-full"
    size="txtOswaldBold49"
  >
    We are one people but we live as if
    <Text
    className="absolute right-[5%] left-[10%] sm:text-[39px] md:text-[45px] text-[36px] text-deep_orange-500  sm:w-full"
    size="txtOswaldBold49Deeporange500"
  >
    Divided … everything is connected
         </Text>
          </Text>

         </div>
          </div>


            </div>
          </div>
          <Img
            className="absolute h-[1088px] inset-y-[0] my-auto object-cover right-[0] w-[42%]"
            src="images/img_fpdl1.png"
            alt="fpdlOne"
          />
        </div>
        <div className="absolute inset-x-[0] mx-auto overflow-x-auto top-[0] w-full">
          <div className="bg-deep_orange-500 flex md:flex-col flex-row md:gap-5 items-start justify-end overflow-auto pl-[17px] py-[17px] w-full">
            <Text
              className="mb-[3px] text-black-900 text-lg positionBreakingnews"
              size="txtOswaldBold18"
            >
              BREAKING NEWS
            </Text>
            <Img
              className="h-5 md:mt-0 mt-0.5 w-5"
              src="images/img_arrowright.svg"
              alt="arrowright"
            />
            <Text
              className="ml-1.5 md:ml-[0] text-base text-black-900 tracking-[6.24px] move-words"
              size="txtOswaldRegular16"
            >
              WE ARE LIVE!
            </Text>
            <Text
              className="md:ml-[0] ml-[21px] text-base text-black-900 tracking-[6.24px] move-words"
              size="txtOswaldRegular16"
            >
              WE ARE LIVE!
            </Text>
            <Text
              className="md:ml-[0] ml-[21px] text-base text-black-900 tracking-[6.24px] move-words"
              size="txtOswaldRegular16"
            >
              WE ARE LIVE!
            </Text>
            <Text
              className="md:ml-[0] ml-[21px] text-base text-black-900 tracking-[6.24px] move-words"
              size="txtOswaldRegular16"
            >
              WE ARE LIVE!
            </Text>
            <Text
              className="md:ml-[0] ml-[21px] text-base text-black-900 tracking-[6.24px] move-words"
              size="txtOswaldRegular16"
            >
              WE ARE LIVE!
            </Text>
            <Text
              className="md:ml-[0] ml-[21px] text-base text-black-900 tracking-[6.24px] move-words"
              size="txtOswaldRegular16"
            >
              WE ARE LIVE!
            </Text>
            <Text
              className="md:ml-[0] ml-[21px] text-base text-black-900 tracking-[6.24px] move-words"
              size="txtOswaldRegular16"
            >
              WE ARE LIVE!
            </Text>
            <Text
              className="md:ml-[0] ml-[21px] text-base text-black-900 tracking-[6.24px] move-words"
              size="txtOswaldRegular16"
            >
              WE ARE LIVE!
            </Text>
          </div>
        </div>
        <div className="absolute bottom-[9%] flex flex-col items-center justify-start md:px-5 right-[8%] w-[77%]">
          <div className="bg-deep_orange-500 flex md:flex-col flex-row md:gap-5 items-center justify-start p-3 w-full">
            <Text
              className="md:ml-[0] ml-[22px] text-lg text-white-A700"
              size="txtOswaldSemiBold18"
            >
              LISTEN LIVE
            </Text>
            <a
              href="javascript:"
              className="md:ml-[0] ml-[27px] text-lg text-white-A700"
            >
              <Text size="txtOswaldSemiBold18">CONTACT US</Text>
            </a>
            <Text
              className="md:ml-[0] ml-[26px] text-lg text-white-A700"
              size="txtOswaldSemiBold18"
            >
              GET THE APP
            </Text>
            <Img
              className="h-[18px] md:ml-[0] ml-[631px] w-[18px]"
              src="images/img_warning.svg"
              alt="warning"
            />
            <Img
              className="h-[18px] ml-2 md:ml-[0] w-[18px]"
              src="images/img_info.svg"
              alt="info"
            />
            <Img
              className="h-[18px] ml-2 md:ml-[0] w-[18px]"
              src="images/img_facebook.svg"
              alt="facebook"
            />
          </div>
          <div className="md:h-[1293px] h-[726px] sm:h-[794px] relative w-full">
            <div className="absolute bg-white-A700 flex flex-col inset-x-[0] items-center justify-start mx-auto pb-[212px] top-[0] w-full">
              <div className="bg-black-900 flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[90%] md:w-full">
                    <Img
                      className="h-[27px] w-[27px]"
                      src="images/img_clock.svg"
                      alt="clock"
                    />
                    <div className="h-[285px] md:ml-[0] ml-[21px] relative w-[32%] md:w-full">
                      <Img
                        className="h-[285px] m-auto object-cover w-full"
                        src="images/img_rectangle149.png"
                        alt="rectangle149"
                      />
                      <div className="absolute bg-black-900_ad flex flex-col h-full inset-[0] items-start justify-center m-auto p-[17px] w-full">
                        <Text
                          className="ml-1.5 md:ml-[0] mt-[191px] text-lg text-white-A700"
                          size="txtOswaldBold18WhiteA700"
                        >
                          TRACK MATRAK
                        </Text>
                        <Text
                          className="ml-1.5 md:ml-[0] mt-1 text-lg text-white-A700"
                          size="txtOswaldRegular18"
                        >
                          20.12.203
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="h-[285px] sm:h-auto ml-0.5 md:ml-[0] object-cover w-[28%] md:w-full"
                      src="images/img_rectangle150.png"
                      alt="rectangle150"
                    />
                    <Img
                      className="h-[285px] sm:h-auto ml-0.5 md:ml-[0] object-cover w-[32%] md:w-full"
                      src="images/img_rectangle151.png"
                      alt="rectangle151"
                    />
                    <Img
                      className="h-[27px] md:ml-[0] ml-[19px] w-[27px]"
                      src="images/img_arrowright_white_a700.svg"
                      alt="arrowright_One"
                    />
                  </div>
                  <div className="bg-white-A700 gap-3.5 grid sm:grid-cols-1 md:grid-cols-4 grid-cols-7 items-center justify-start pr-3 py-3 w-full">
                    <Text
                      className="flex-1 text-black-900 text-lg w-full"
                      size="txtOswaldBold18"
                    >
                      FOLLOW FOR MORE
                    </Text>
                    <Text
                      className="flex-1 text-black-900 text-lg w-full"
                      size="txtOswaldBold18"
                    >
                      FOLLOW FOR MORE
                    </Text>
                    <Text
                      className="flex-1 text-black-900 text-lg w-full"
                      size="txtOswaldBold18"
                    >
                      FOLLOW FOR MORE
                    </Text>
                    <Text
                      className="flex-1 text-black-900 text-lg w-full"
                      size="txtOswaldBold18"
                    >
                      FOLLOW FOR MORE
                    </Text>
                    <Text
                      className="flex-1 text-black-900 text-lg w-full"
                      size="txtOswaldBold18"
                    >
                      FOLLOW FOR MORE
                    </Text>
                    <Text
                      className="flex-1 text-black-900 text-lg w-full"
                      size="txtOswaldBold18"
                    >
                      FOLLOW FOR MORE
                    </Text>
                    <Text
                      className="flex-1 text-black-900 text-lg w-full"
                      size="txtOswaldBold18"
                    >
                      FOLLOW FOR MORE
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[0] h-[387px] inset-x-[0] mx-auto w-full">
              <Img
                className="h-[387px] m-auto object-cover w-full"
                src="images/img_rectangle148.png"
                alt="rectangle148"
              />
              <div className="absolute bg-black-900_ad flex flex-col h-full inset-[0] items-center justify-center m-auto p-[116px] md:px-10 sm:px-5 w-full">
                <Img
                  className="h-[102px] mb-[53px] w-[102px]"
                  src="images/img_arrowright_white_a700_102x102.svg"
                  alt="arrowright_Two"
                />
              </div>
            </div>
            <Text
              className="absolute right-[0] text-black-900 text-lg top-[41%]"
              size="txtOswaldBold18"
            >
              FOLL
            </Text>
          </div>
          <Line className="bg-deep_orange-500 h-0.5 w-full" />
        </div>
      </div>
    </>
  );
};

export default HomepagePage;
