import React from "react";
import { Button } from "../ui/button";

const Jumbotron = () => {
  return (
    // <div className="container mx-auto">
    <div
      className={`bg-[url(/images/bg-main.webp)]  w-full h-[966px] bg-no-repeat bg-cover bg-center flex items-center`}
    >
      <div className="container mx-auto px-5 lg:px-20 text-white">
        <p className="text-white text-center md:text-start font-bold text-[20px] md:text-[40px]">
          Make your comfort <br />
          is our happiness
        </p>
        <p className="text-center md:text-start text-sm md:text-base">
          Studio villa made of bamboo, located near the top of Mount Geulis{" "}
          <br />
          with a stunning 180 degree bird&apos;s eye view.
        </p>
        <div className="mt-5 flex justify-center md:justify-start">
          <Button variant={"secondary"} className="rounded-xs p-5 w-fit ">
            Explore Rooms
          </Button>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Jumbotron;
