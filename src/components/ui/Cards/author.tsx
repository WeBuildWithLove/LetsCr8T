import Image from "next/image";
import React, { FC } from "react";

interface AuthorProps {
  name: string;
  src: string;
}

const Author: FC<AuthorProps> = ({ src, name }) => {
  return (
    <div className="w-[186px] gap-[10px] flex items-center">
      <Image src={src} alt="Preye Omusuku" width={46} height={46} />
      <p className="text-base font-poppins font-semibold text-cr8tBlack ">
        {name}
      </p>
    </div>
  );
};

export default Author;
