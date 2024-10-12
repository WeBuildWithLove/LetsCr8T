import React from "react";
import clsx from "clsx";
import LockIcon from "@/app/assets/icons/LockIcon";
import SettingsIcon from "@/app/assets/icons/SettingsIcon";

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  withHeartbeat?: boolean;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  className,
  onClick,
  withHeartbeat = false,
}) => {
  const baseClasses = `
    group default-transition relative z-10 overflow-hidden flex items-center justify-center gap-[5px] rounded-full text-center text-mobileButton leading-mobileButton block
    before:left-0 before:absolute before:-z-[1] before:rounded-full before:w-[0%] before:top-0 before:bottom-0 before:transition before:[transition-property:width] before:[transition-duration:500ms]
    hover:before:w-full bg-cr8tBlack text-cr8tWhite dark:bg-cr8tOrange 
    before:bg-cr8tOrange before:dark:bg-cr8tBlack font-manrope font-semibold text-base shadow-[0.15] 
  `;

  return (
    <button onClick={onClick} className={clsx(baseClasses, className)}>
      {children}

      {withHeartbeat && (
        <div
          className="flex-shrink-0 w-[26px] h-[26px] relative overflow-visible "
          style={{ display: "inline-block" }}
        >
          {/* Ensure the LockIcon is positioned absolutely to prevent movement of other elements */}
          <LockIcon className="absolute left-0 top-0 group-hover:animate-heartbeat transform-origin-center" />
        </div>
      )}
    </button>
  );
};

export default AnimatedButton;
