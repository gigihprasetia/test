"use client";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { dummyMenu } from "@/dummy";
import { useIsVisible } from "@/Store/IsVisible";

const Navbar = () => {
  const { visible } = useIsVisible();

  return (
    <div
      className={`fixed px-5 lg:px-20 justify-between items-center top-0 container p-5  z-10 left-[50%] -translate-x-[50%] flex select-none duration-500 ${
        visible ? "bg-transparent" : "bg-white/50"
      }`}
    >
      <Popover>
        <PopoverTrigger asChild>
          <GiHamburgerMenu
            size={35}
            className={`duration-500 ${
              visible ? "text-white" : "text-primary"
            }`}
          />
        </PopoverTrigger>
        <PopoverContent
          side="bottom"
          alignOffset={0}
          align="start"
          className=" w-fit rounded-sm rounded-tl-none p-[3px]"
        >
          <div className="flex flex-col gap-0">
            {dummyMenu.map((e, i) => {
              return (
                <Popover key={i}>
                  <PopoverTrigger asChild>
                    <p className="p-2 border-b-[1px] text-[12px] select-none  border-collapse">
                      {e.key}
                    </p>
                  </PopoverTrigger>
                  <PopoverContent
                    side="right"
                    align="start"
                    alignOffset={25}
                    className="translate-x-[5px] w-fit rounded-sm rounded-tl-none p-2"
                  >
                    {e.data.map((v, i) => {
                      return (
                        <div key={i} className="p-1 text-[12px]">
                          {v.subData}
                        </div>
                      );
                    })}
                  </PopoverContent>
                </Popover>
              );
            })}
          </div>
        </PopoverContent>
      </Popover>
      <div className="hidden md:flex gap-4 ">
        <Button
          variant={"ghost"}
          className="rounded-none text-white hover:bg-transparent"
        >
          Contact US
        </Button>
        <Button className="rounded-none">Login</Button>
      </div>
    </div>
  );
};

export default Navbar;
