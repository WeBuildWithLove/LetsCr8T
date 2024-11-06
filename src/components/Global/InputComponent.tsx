import React from "react";

type InputComponentProps = {
  value: string;
  placeholder: string;
  type: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputComponent: React.FC<InputComponentProps> = ({
  placeholder,
  type,
  className,
  onChange,
  value,
}) => {
  return (
    <input
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={`border  h-14 text-base text-cr8tLightBlack font-poppins focus:outline-none  focus:ring-cr8tOrange rounded-[5px] pl-[10px]  disabled:cursor-not-allowed  font-light text-opacity-25 focus:ring-[1px] ${className}`}
    />
  );
};

export default InputComponent;
