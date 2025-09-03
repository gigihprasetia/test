"use client";
import React, { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { useIsVisible } from "@/Store/IsVisible";

const Jumbotron = () => {
  const { setVisible } = useIsVisible();

  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // setIsVisible(entry.isIntersecting);
        setVisible(entry.isIntersecting);
      },
      { threshold: 0 } // elemen terlihat 50% baru dianggap terlihat
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    // <div className="container mx-auto">
    <div
      ref={targetRef}
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
