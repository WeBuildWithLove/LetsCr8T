// import React from "react";

// type ButtonProps = {
//   fill?: string;
//   type: "outlined" | "filled";
//   text: string;
//   onClick?: () => void;
//   disabled?: boolean;
// };

// function Button({ type, fill, text, onClick, disabled }: ButtonProps) {
//   return (
//     <button
//       disabled={disabled}
//       onClick={onClick}
//       className={`${
//         type === "outlined"
//           ? "h-[45px] lg:h-[50px] border text-black border-[#E1E1E1]"
//           : "h-[40px] lg:h-[50px] text-white"
//       }  w-full font-manrope flex items-center space-x-[10px]
//       } rounded-[8px] justify-center`}
//       style={{
//         backgroundColor: `${type === "outlined" ? "white" : fill}`,
//       }}
//     >
//       <p className="font-[600] text-[12px] lg:text-[18px] uppercase leading-[30px]">
//         {text}
//       </p>
//     </button>
//   );
// }

// export default Button;
