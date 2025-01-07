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
  const width = hoverWidth || normalWidth;
  const height = hoverHeight || normalHeight;

  return (
    <div
      className={`group relative transition-transform duration-500 ease-in-out ${
        isDimmed ? "opacity-10 scale-[0.95]" : "opacity-100 scale-100"
      }`}
      style={{ width, height }}
    >
      {/* Normal Image */}
      <Image
        src={src}
        alt="Team member"
        className="absolute transition-opacity group-hover:hidden"
        width={normalWidth}
        height={normalHeight}
        priority
      />

      {/* Hover Image */}
      <Image
        src={hoverSrc}
        alt="Team member hover"
        className="absolute hidden group-hover:block transition-transform duration-300 hover:scale-[1.08]"
        width={width}
        height={height}
        priority
      />
    </div>
  );
};

export default TeamImages;
