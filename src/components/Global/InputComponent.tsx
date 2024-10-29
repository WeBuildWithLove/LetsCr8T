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
      className={`border border-cr8tOrange h-14 text-base text-cr8tLightBlack opacity-[0.5] font-poppins   focus:border-cr8tOrange rounded-[5px] pl-[10px] transition-colors duration-300 ${className}`}
    />
  );
};

export default InputComponent;
