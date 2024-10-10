import { SVGProps } from "react";

const Logo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="139"
      height="50"
      viewBox="0 0 139 50"
      fill="none"
      {...props}
    >
      <g mask="url(#mask0_15_95)">
        <path
          d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="square"
        />
      </g>
    </svg>
  );
};

export default Logo;
