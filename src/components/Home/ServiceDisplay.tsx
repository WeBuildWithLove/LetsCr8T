import React from "react";
import AnimatedContainer from "../Animations/AnimatedContainer";

const ServiceDisplay: React.FC = () => {
  return (
    <section className="md:pt-[100px] pt-[70px] px-[32px] md:px-0 flex items-center">
      <AnimatedContainer className="flex flex-col items-center justify-center mx-auto">
        <video
          autoPlay
          loop
          muted
          width="300"
          height="400"
          className="object-contain md:mr-[15px] md:mb-[-15px] mr-[10px] mb-[-10px]"
        >
          <source src="/service_video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </AnimatedContainer>
    </section>
  );
};

export default ServiceDisplay;
