import React from "react";
import clsx from "clsx";
import LockIcon from "@/app/assets/icons/LockIcon";

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  to?: string;
  onClick?: () => void;
  withHeartbeat?: boolean; // New prop to control heartbeat animation
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  className,
  to,
  onClick,
  withHeartbeat = false, // Default is false
}) => {
  const baseClasses = `
    group px-5 py-2.5 h-9 default-transition relative z-10 overflow-hidden flex items-center justify-center gap-3 rounded-full text-center text-mobileButton leading-mobileButton block
    before:left-0 before:absolute before:-z-[1] before:rounded-full before:w-[0%] before:top-0 before:bottom-0 before:transition before:[transition-property:width] before:[transition-duration:500ms]
    hover:before:w-full bg-cr8tBlack text-cr8tWhite dark:bg-cr8tOrange 
    before:bg-cr8tOrange before:dark:bg-cr8tBlack font-manrope font-semibold text-base
  `;

  return to ? (
    <a href={to} className={clsx(baseClasses, className)}>
      {children}
      {/* Apply animation to LockIcon on parent hover if withHeartbeat is true */}
      {withHeartbeat && (
        <div
          className="ml-2 flex-shrink-0 w-[26px] h-[26px] relative overflow-visible"
          style={{ display: "inline-block" }}
        >
          {/* Ensure the LockIcon is positioned absolutely to prevent movement of other elements */}
          <LockIcon className="absolute left-0 top-0 group-hover:animate-heartbeat transform-origin-center" />
        </div>
      )}
    </a>
  ) : (
    <button onClick={onClick} className={clsx(baseClasses, className)}>
      {children}
      {/* Apply animation to LockIcon on parent hover if withHeartbeat is true */}
      {withHeartbeat && (
        <div
          className="flex-shrink-0 w-[26px] h-[26px] relative overflow-visible"
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
