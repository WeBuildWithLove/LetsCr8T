import Image from "next/image";
import React from "react";
import BlogImage from "../../../../public/blog-image.svg";
import { Clock, Eye } from "lucide-react";
import Preye from "../../../../public/PREYE.svg";
import Aside from "./Aside";

const IndividualPost = () => {
  return (
    <div className="flex">
      <div className="">
        <Image src={BlogImage} alt="Blog Image" width={803} height={346} />
      </div>
      <div className="flex gap-[5px]">
        <Clock color="#ADADAD" size={17} />
        <p>2024/11/03</p>
      </div>
      <div className="flex gap-[5px]">
        <Eye color="#ADADAD" size={17} />
        <p>2000 Viewers</p>
      </div>
      <div className="w-[186px] gap-[10px] flex items-center">
        <Image src={Preye} alt="Preye Omusuku" width={46} height={46} />
        <p className="text-base font-poppins font-semibold text-cr8tBlack ">
          Preye Omusuku
        </p>
      </div>
      <Aside />
    </div>
  );
};

export default IndividualPost;
