// TeamImages.tsx
import React from "react";
import Image from "next/image";

interface TeamImagesProps {
  src: string;
  hoverSrc: string;
  normalWidth: number;
  normalHeight: number;
  hoverWidth?: number;
  hoverHeight?: number;
  isDimmed?: boolean;
}

const TeamImages: React.FC<TeamImagesProps> = ({
  src,
  hoverSrc,
  normalWidth,
  normalHeight,
  hoverWidth,
  hoverHeight,
  isDimmed,
}) => {
  return (
    <div
      className={`group relative transition-all duration-500 ease-in-out  ${
        isDimmed ? "opacity-10 scale-[0.95]" : "opacity-100 scale-100"
      }`}
      style={{
        width: hoverWidth || normalWidth,
        height: hoverHeight || normalHeight,
      }}
    >
      {/* Normal image */}

      <Image
        src={src}
        alt="Team member"
        className="absolute group-hover:hidden transition-all ease-out duration-250  "
        width={normalWidth}
        height={normalHeight}
        priority
      />

      {/* Hover image with scaling */}
      <Image
        src={hoverSrc}
        alt="Team member hover"
        className={`absolute hidden group-hover:block  transition-all ease-in hover:scale-[1.08] duration-300 `}
        style={{
          width: hoverWidth || normalWidth,
          height: hoverHeight || normalHeight,
          transformOrigin: "center",
          // scale: hoverScale,
        }}
        width={hoverWidth || normalWidth}
        height={hoverHeight || normalHeight}
        priority
      />
    </div>
  );
};

export default TeamImages;
