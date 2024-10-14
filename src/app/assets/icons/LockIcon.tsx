import { SVGProps } from "react";

const LockIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      className="lock-icon transition-all duration-300 ease-in-out"
      {...props}
    >
      <g mask="url(#mask0_345_37556)">
        <path
          d="M15.1667 16.9616V10.8333M15.1667 10.8333H9.03841M15.1667 10.8333L6.10571 19.8943M11.0968 22.5634C14.1813 23.1743 17.504 22.2846 19.8943 19.8943C23.7019 16.0866 23.7019 9.91332 19.8943 6.10571C16.0866 2.2981 9.91332 2.2981 6.10571 6.10571C3.71537 8.49605 2.82564 11.8187 3.43651 14.9032"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default LockIcon;
