"use client";
import React, { useState } from "react";
import TeamImages from "./TeamImages";
import Gift from "../../../public/gift.svg";
import Gift2 from "../../../public/gift2.svg";
import Preye from "../../../public/PREYE.svg";
import Preye2 from "../../../public/PREYE2.svg";
import Abraham from "../../../public/abraham.svg";
import Abraham2 from "../../../public/abraham2.svg";
import Shalom from "../../../public/shalom.svg";
import Shalom2 from "../../../public/shalom2.svg";
import Kufre from "../../../public/kufre.svg";
import Kufre2 from "../../../public/kufre2.svg";
import Aniebet from "../../../public/aniebet.svg";
import Aniebet2 from "../../../public/aniebet2.svg";
import Chris from "../../../public/chris.svg";
import Chris2 from "../../../public/chris2.svg";
import Jubril from "../../../public/jubril.svg";
import Jubril2 from "../../../public/jubril2.svg";
import Mfoniso from "../../../public/mfon.svg";
import Mfoniso2 from "../../../public/mfon2.svg";

const OurTeam = () => {
  const [selectedGroup, setSelectedGroup] = useState<
    "developers" | "designers" | null
  >(null);

  // Handler function to select group
  const handleGroupSelection = (group: "developers" | "designers") => {
    setSelectedGroup(group === selectedGroup ? null : group); // Toggle selection on click
  };

  return (
    <section className="mt-[150px] px-[80px] mb-[-187px]">
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

      {/* Team members */}
      <div className="flex justify-end flex-col items-end translate-y-[-130px]">
        {/* Developers section */}
        <div
          className="flex gap-[5px] items-center cursor-pointer"
          onClick={() => handleGroupSelection("developers")}
        >
          {/* Developers Button */}
          <div
            className={`w-[135px] h-[135px] bg-cr8tOrange rounded-full flex flex-col items-center justify-center font-semibold font-poppins text-cr8tWhite text-lg ${
              selectedGroup === "developers" && "opacity-50"
            }`}
          >
            Developers
          </div>
          <div className="translate-y-[-40px]">
            <TeamImages
              src={Kufre}
              hoverSrc={Kufre2}
              normalWidth={180}
              normalHeight={180}
              hoverScale={1.05}
              isDimmed={selectedGroup === "designers"} // Dimmed if Designers are selected
            />
          </div>
        </div>

        {/* Second row of team members (including Gift in the correct spot) */}
        <div className="flex mt-[6px] gap-[21px] translate-y-[-40px] items-center">
          <div className="flex gap-[34px] items-center">
            <div className="translate-y-[50px] translate-x-[20px]">
              <TeamImages
                src={Gift}
                hoverSrc={Gift2}
                normalWidth={270}
                normalHeight={270}
                hoverScale={1.05}
                isDimmed={selectedGroup === "designers"} // Gift is a developer
              />
            </div>
            <div
              className="w-[135px] h-[135px] bg-cr8tBlack leading-[27px] rounded-full flex flex-col items-center justify-center font-semibold font-poppins text-cr8tWhite text-lg cursor-pointer"
              onClick={() => handleGroupSelection("designers")}
            >
              <span className="text-3xl font-semibold">UX</span> DESIGNERS
            </div>
          </div>

          {/* Remaining team members */}
          <div className="flex gap-[15px] items-center">
            <div className="translate-x-[-10px]">
              <TeamImages
                src={Preye}
                hoverSrc={Preye2}
                normalWidth={270}
                normalHeight={270}
                hoverScale={1.05}
                isDimmed={selectedGroup === "designers"}
              />
            </div>
            <div className="translate-y-[-40px]">
              <TeamImages
                src={Mfoniso}
                hoverSrc={Mfoniso2}
                normalWidth={180}
                normalHeight={180}
                hoverScale={1.05}
                isDimmed={selectedGroup === "developers"}
              />
            </div>
          </div>
        </div>

        {/* Additional team members */}
        <div className="flex gap-[15px] translate-y-[-20px] items-center">
          <div className="translate-y-[-80px] translate-x-[-20px]">
            <TeamImages
              src={Abraham}
              hoverSrc={Abraham2}
              normalWidth={270}
              normalHeight={270}
              hoverScale={1.05}
              isDimmed={selectedGroup === "developers"}
            />
          </div>
          <div className="flex gap-[2px] items-center">
            <div className="translate-y-[-50px] translate-x-[-25px]">
              <TeamImages
                src={Aniebet}
                hoverSrc={Aniebet2}
                normalWidth={180}
                normalHeight={180}
                hoverScale={1.05}
                isDimmed={selectedGroup === "designers"}
              />
            </div>
            <div className="translate-y-[-150px] translate-x-[-45px]">
              <TeamImages
                src={Shalom}
                hoverSrc={Shalom2}
                normalWidth={180}
                normalHeight={180}
                hoverScale={1.05}
                isDimmed={selectedGroup === "developers"}
              />
            </div>
          </div>
        </div>

        {/* Last row of team members */}
        <div className="flex gap-[105px] items-center translate-y-[-120px]">
          <div className="translate-y-[-50px] translate-x-[70px]">
            <TeamImages
              src={Jubril}
              hoverSrc={Jubril2}
              normalWidth={180}
              normalHeight={180}
              hoverScale={1.05}
              isDimmed={selectedGroup === "designers"}
            />
          </div>
          <div className="translate-y-[-70px] translate-x-[30px]">
            <TeamImages
              src={Chris}
              hoverSrc={Chris2}
              normalWidth={270}
              normalHeight={270}
              hoverScale={1.05}
              isDimmed={selectedGroup === "developers"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
