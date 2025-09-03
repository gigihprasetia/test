import React from "react";
import DatePick from "../shared/DatePick";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { BsFillCaretDownFill } from "react-icons/bs";
import { LuCalendarDays } from "react-icons/lu";
import { IoCalendar } from "react-icons/io5";
import { Popover, PopoverContent } from "../ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";

const Bookings = () => {
  return (
    <div className="relative h-0">
      <div className="w-full absolute top-[-50px] left-[50%] translate-x-[-50%] container px-5 md:px-20 h-[112px] ">
        <div className="w-full h-full bg-white shadow-md rounded-none md:rounded-md grid grid-cols-2 p-5 md:grid-cols-4 place-content-center place-items-center gap-1">
          <div className="border-r-0 md:border-r-[1px] md:border-b-0 border-b-[1px] border-gray-500  w-full flex justify-center col-span-2 md:col-span-1">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"ghost"}
                  className="text-[19px] font-light rounded-none"
                >
                  Room
                  <BsFillCaretDownFill className="text-primary" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-2">
                <div>
                  <p>Room 1</p>
                  <p>Room 2</p>
                  <p>Room 3</p>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <div className="border-r-[1px] border-gray-500  w-full flex justify-center">
            <DatePick>
              <Button
                variant={"ghost"}
                className="text-[19px] font-light rounded-none"
              >
                <IoCalendar className="text-primary" />
                Check In
              </Button>
            </DatePick>
          </div>
          <div>
            <DatePick>
              <Button
                variant={"ghost"}
                className="text-[19px] font-light rounded-none"
              >
                <IoCalendar className="text-primary" />
                Check Out
              </Button>
            </DatePick>
          </div>

          <div className="hidden md:block col-span-2 md:col-span-1">
            <Button
              variant={"default"}
              className="text-[19px] p-5 font-light rounded-sm"
            >
              Check Availbility
            </Button>
          </div>
        </div>
        <Button className="rounded-none w-full block md:hidden ">
          Check Availbility
        </Button>
      </div>
    </div>
  );
};

export default Bookings;
