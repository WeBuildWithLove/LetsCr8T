import React, { useEffect, useRef } from "react";

// Define prop types for the DotLottieAnimation component
interface DotLottieAnimationProps {
  src: string; // The source URL for the .lottie or .json file
  width?: string; // Width of the animation player
  height?: string; // Height of the animation player
  loop?: boolean; // Whether the animation should loop
  autoplay?: boolean; // Whether the animation should start automatically
}

const ServiceAnimate: React.FC<DotLottieAnimationProps> = ({
  src,
  width = "300px",
  height = "300px",
  loop = true,
  autoplay = true,
}) => {
  const lottieRef = useRef<HTMLElement | null>(null); // Reference for the lottie player

  useEffect(() => {
    // Load the dotlottie-player script dynamically
    if (
      !document.querySelector(
        `script[src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"]`
      )
    ) {
      const script = document.createElement("script");
      script.src =
        "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
      script.type = "module";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Use the dotlottie-player with TypeScript support */}
      <dotlottie-player
        ref={lottieRef}
        src={src}
        background="transparent"
        speed={1}
        style={{ width, height }}
        loop={loop}
        autoplay={autoplay}
      ></dotlottie-player>
    </div>
  );
};

export default ServiceAnimate;
