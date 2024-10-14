import { SVGProps } from "react";

const Twitter = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 26 24"
      fill="none"
      {...props}
    >
      <g mask="url(#mask0_345_37556)">
        <path
          d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="square"
        />
      </g>
    </svg>
  );
};

export default Twitter;
