import React from "react";
import { Button } from "../ui/button";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="container mx-auto mt-[215px]">
      <div className="bg-[url(/images/bg-footer.webp)] p-20 w-full h-[520px] bg-no-repeat bg-cover bg-center flex justify-center md:items-start items-center flex-col">
        <p className="font-bold text-center md:text-start text-[20px] md:text-[44px] text-white">
          Make your comfort
          <br />
          is our happiness
        </p>
        <Button
          variant={"secondary"}
          className="w-fit  p-5 rounded-none  md:rounded-sm"
        >
          Book now
        </Button>
      </div>
      <div className="flex justify-between px-5 lg:px-20 py-[55px]">
        {/* <div className="flex-1 flex flex-col "> */}
        <div>
          <p className="font-medium text-[13px] md:text-[28px] ">Quick Links</p>
          <div className="mt-[47px] font-light text-[12px] md:text-[20px] flex flex-col gap-[12px] md:gap-[24px]">
            <p>About</p>
            <p>Facility</p>
            <p>Gallery</p>
          </div>
        </div>
        {/* </div> */}
        {/* <div className="flex-1 flex flex-col "> */}
        <div>
          <p className="font-medium text-[13px] md:text-[28px] ">
            Room Categories
          </p>
          <div className="mt-[47px] font-light text-[12px] md:text-[20px] flex flex-col gap-[12px] md:gap-[24px]">
            <p>4 Bedroom Villa</p>
            <p>2 Bedroom Villa</p>
            <p>Joglo House</p>
            <p>Bamboo Studio</p>
            <p>Bamboo House</p>
          </div>
        </div>
        {/* </div> */}
        {/* <div className="flex-1 flex flex-col "> */}
        <div>
          <p className="font-medium text-[13px] md:text-[28px] ">Contact Us</p>
          <div className="mt-[47px]  font-light text-[12px] md:text-[20px] hidden md:flex flex-col gap-[12px] md:gap-[24px]">
            <div className="flex gap-2 items-start">
              <FaLocationDot size={20} />
              <p>
                Jl. Bukit Pelangi, Gunung Geulis, <br /> Sukaraja, Kab. Bogor,
                Jawa Barat
              </p>
            </div>
            <div className="flex gap-2 items-start">
              <BsFillTelephoneFill size={20} />

              <p>+ 62812345678</p>
            </div>
            <div className="flex gap-2 items-start">
              <MdEmail size={20} />
              <p>example@gmail.com</p>
            </div>
          </div>
          <div className="flex md:hidden gap-2 mt-[47px]">
            <FaLocationDot size={20} />
            <BsFillTelephoneFill size={20} />
            <MdEmail size={20} />
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Footer;
