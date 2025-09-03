import Image from "next/image";
import React, { FC } from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { IoMdBed } from "react-icons/io";

interface ICardProps {
  src: string;
  name: string;
  facilities: string;
  bad: number;
  persons: number;
  price: number;
}

const Card: FC<ICardProps> = ({
  bad,
  facilities,
  name,
  persons,
  price,
  src,
}) => {
  return (
    <div className="shadow-lg shadow-gray-400 rounded-md hover:bg-primary min-w-0 max-w-[368px] h-[224px] md:h-[580px] duration-500 p-[8px] md:p-[24px] group flex flex-col gap-4 select-none">
      <img
        alt="img"
        src={src}
        width={100}
        height={100}
        className="w-full object-fill h-[322px]"
        draggable={false}
      />
      <p className="hidden md:block text-primary group-hover:text-white text-[16px] duration-500">
        {name}
      </p>
      <div className="hidden md:flex  group-hover:text-white duration-500">
        <p className="text-sm flex-1">Main Facilities</p>{" "}
        <p className="w-[161px] flex-1 text-sm">{facilities}</p>
      </div>
      <div className="hidden md:flex group-hover:text-white duration-500">
        <div className="flex items-center flex-1 gap-2">
          <IoMdBed />
          <p>{bad}</p>
        </div>
        <div className="flex items-center flex-1 gap-2">
          <AiOutlineUsergroupAdd />
          <p>{persons}</p>
        </div>
      </div>
      <p className="mt-auto group-hover:text-white duration-500 flex">
        <span className="text-primary group-hover:text-white duration-500 ">
          {" "}
          Rp {price.toLocaleString("id")}{" "}
        </span>
        <span className="hidden md:block">/night</span>
      </p>
    </div>
  );
};

export default Card;
