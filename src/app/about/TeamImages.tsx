import React from "react";
import Image from "next/image";

interface TeamImagesProps {
  src: string;
  hoverSrc: string;
  normalWidth: number;
  normalHeight: number;
  hoverScale: number;
  isDimmed?: boolean;
}

const TeamImages: React.FC<TeamImagesProps> = ({
  src,
  hoverSrc,
  normalWidth,
  normalHeight,
  hoverScale,
  isDimmed,
}) => {
  return (
    <div
      className={`group relative transition-all duration-500 ease-in-out ${
        isDimmed ? "opacity-10 scale-[0.95]" : "opacity-100 scale-100"
      }`}
      style={{ width: normalWidth, height: normalHeight }} // Fixed size container
    >
      {/* Normal image */}
      <Image
        src={src}
        alt="Team member"
        className={`absolute group-hover:hidden transition duration-500 ease-in-out transform group-hover:opacity-0 group-hover:scale-95`}
        width={normalWidth}
        height={normalHeight}
        priority
      />

      {/* Hover image with scaling */}
      <Image
        src={hoverSrc}
        alt="Team member hover"
        className={`absolute hidden group-hover:block transition duration-500 ease-in-out transform group-hover:opacity-100 group-hover:scale-[${hoverScale}]`}
        style={{ transformOrigin: "center" }} // Apply scaling on hover
        width={normalWidth}
        height={normalHeight}
        priority
      />
    </div>
  );
};

export default TeamImages;
