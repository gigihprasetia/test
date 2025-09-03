import Image from "next/image";
import React from "react";
import Card from "../shared/Card";
import { dataAvatars, dummyCard } from "@/dummy";
import { Button } from "../ui/button";
import { Quotes } from "../shared/Icons";
import { HiArrowLongRight } from "react-icons/hi2";

const Content = () => {
  return (
    <div className="container px-5 md:px-20 mx-auto">
      <div className="mt-40">
        <p className="font-medium text-[16px] md:text-[40px]">
          About Villa <span className="text-primary">Amadaha</span>
        </p>
        <div className="mt-5 md:mt-40 flex flex-wrap gap-4">
          <div className="border-[1px] border-primary w-fit translate-x-2">
            <img
              draggable={false}
              alt="bg-villa"
              width={100}
              height={100}
              src={"/images/bg-villa.webp"}
              className="w-[368px] h-[368px] -translate-2 shadow-md shadow-gray-300"
            />
          </div>
          <div className=" ml-0 md:ml-[108px] flex  flex-col justify-between">
            <p className="min-w-0 max-w-[497px] text-[14px] md:text-[20px]">
              Villa Amadaha consist of Two Luxury Villas and one Traditional
              Javanese House surrounded by a tranquil rain forest setting,
              traditional Indonesian houses anda a farm overlooking the area.
            </p>
            <div className="flex gap-[46px] mt-4 md:mt-0">
              <div>
                <p className="text-[20px] md:text-[36px]">
                  +6 <span className="text-primary">/ Room</span>{" "}
                </p>
                <p className=" text-[16px] md:text-[20px]">Room options</p>
              </div>
              <div>
                <p className="text-[20px] md:text-[36px]">
                  +2 <span className="text-primary">/ Facilities</span>{" "}
                </p>
                <p className="text-[16px]  md:text-[20px]">
                  Facilities available
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ///////////////////////// */}

        <p className="font-medium text-[16px] md:text-[40px] text-start md:text-center mt-10 md:mt-[147px]">
          Our choise of{" "}
          <span className="text-primary font-medium ">Villa Studios</span>{" "}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 mt-[48px] gap-[26px] ">
          {dummyCard.map((e, index) => {
            return (
              <Card
                key={index}
                bad={e.beds}
                facilities={e.mainFacilities}
                name={e.name}
                src={e.src}
                persons={e.persons}
                price={e.pricePerNight}
              />
            );
          })}
        </div>
        <div className="flex justify-center mt-[48px]">
          <Button
            variant={"ghost"}
            className="rounded-none text-primary text-[12px] md:text-[20px] p-3 md:p-5"
          >
            Load More
          </Button>
        </div>

        {/* /////////////////////////////////////////////// */}

        <div className=" mt-[50px] md:mt-[159px] flex flex-col md:flex-row gap-[53px] relative flex-wrap md:flex-nowrap">
          <div className=" w-[200px] h-[150px] md:w-[576px] md:h-[326px] bg-[#F1F6F6] absolute -z-20 right-0 top-[80%] md:top-[30%]" />
          <div className="w-full max-w-[412px] flex flex-col  items-center md:items-start gap-2">
            <p className="w-40 text-center md:text-start md:w-full text-[16px] md:text-[40px] font-bold">
              Various <span className="text-primary">facilities</span> that you
              can enjoy
            </p>
            <p className="text-[14px] md:text-[20px] font-light text-[#9E9E9E]">
              We bring you together with your dream holiday
            </p>
            <Button className="hidden md:block rounded-sm text-[20px] w-fit font-light h-10 ">
              Explore
            </Button>
          </div>
          <img
            src={"/images/bg-section1.webp"}
            width={100}
            height={100}
            className="hidden md:block w-full max-w-[319px] h-full max-h-[319px] shadow-md"
            alt="1"
          />
          <img
            src={"/images/bg-section2.webp"}
            width={100}
            height={100}
            className=" hidden md:block w-full max-w-[319px] h-full max-h-[319px] shadow-md"
            alt="2"
          />
          <div className=" md:hidden flex gap-3">
            <img
              src={"/images/bg-section1.webp"}
              width={100}
              height={100}
              className="flex-1  h-full  shadow-md"
              alt="1"
            />
            <img
              src={"/images/bg-section2.webp"}
              width={100}
              height={100}
              className="flex-1   h-full  shadow-md"
              alt="2"
            />
          </div>
        </div>

        {/* //////////////////////////////////////////////////// */}
        <div className="mt-30 md:mt-40 mb-[48px] relative flex justify-between items-center">
          <div className=" w-[120px] h-[120px] absolute -z-10 bottom-15 -left-18 bg-[#CFE1E04D] hidden md:flex justify-center items-center rounded-full">
            <Quotes />
          </div>
          <p className="text-[16px] md:text-[40px]  font-semibold">
            What Our <span className="text-primary">Customer</span> <br /> Are
            Saying
          </p>

          <div className="hidden md:flex items-center">
            <HiArrowLongRight size={28} className="text-[#9E9E9E] rotate-180" />
            <HiArrowLongRight size={70} className="text-primary" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {dataAvatars.map((e, i) => {
            return (
              <div
                key={i}
                className="shadow-md p-[24px] h-[240px] flex flex-col justify-center gap-2  "
              >
                <p>&quot; {e.comment} &quot;</p>
                <div className="flex items-center gap-2">
                  <img
                    src={e.profileImage}
                    className="w-10 h-10"
                    alt={`${i}`}
                  />
                  <div>
                    <p className="text-primary">{e.name}</p>
                    <p className="text-gray-500 text-xs">{e.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-[16px] md:text-[40px] text-center mt-[50px] md:mt-[147px]">
          Our
          <span className="text-primary font-medium "> Gallery</span>{" "}
        </p>
        <div className="grid grid-rows-2 grid-flow-col gap-2.5 h-52  md:h-[515px] mt-[28px] md:mt-[48px]">
          <div
            className={`bg-[url(/images/bg-gallery1.webp)] w-full h-full bg-cover bg-center row-span-2`}
          />
          <div
            className={`bg-[url(/images/bg-gallery2.webp)] w-full h-full bg-cover bg-center`}
          />
          <div
            className={`bg-[url(/images/bg-gallery3.webp)] w-full h-full bg-cover bg-center`}
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
