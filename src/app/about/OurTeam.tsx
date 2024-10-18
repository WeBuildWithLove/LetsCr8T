import React from "react";
import TeamImages from "./TeamImages";
import GiftImage from "../../../public/gift.svg";

const OurTeam = () => {
  return (
    <section className="mt-[150px] px-[80px] mb-[87px]">
      <h3 className="text-Cr8tGray font-semibold text-5xl font-grotesk text-center">
        Our Team
      </h3>

      <div className="w-[807px] pt-[50px]">
        <p className="font--semibold text-[70px] font-grotesk text-cr8tBlack leading-[82px] ">
          “When Love And Skill Work Together, Expect A Masterpiece”
        </p>
        <span className="text-lg font-poppins font-medium italic text-cr8tLightBlack pt-5">
          John Ruskin
        </span>
      </div>
      <div className="flex justify-end">
        <div className="">
          <TeamImages src={GiftImage} />
        </div>
        <div className="w-[704px] h-[799px] border flex">
          <div className="w-[135px] h-[135px] bg-cr8tBlack leading-[27px] rounded-full flex flex-col items-center justify-center font-semibold font-poppins text-cr8tWhite text-lg">
            UX DISIGNERS
          </div>
          <div className="w-[135px] h-[135px] bg-cr8tOrange rounded-full flex flex-col items-center justify-center font-semibold font-poppins text-cr8tWhite text-lg">
            Developers
          </div>

          <TeamImages src={GiftImage} />
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
