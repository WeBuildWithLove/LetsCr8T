import { Clock, Eye } from "lucide-react";
import React, { FC } from "react";

interface DateViewsProps {
  date: string;
  views: number;
}

const DateViews: FC<DateViewsProps> = ({ date, views }) => {
  return (
    <div className="flex gap-5 text-Cr8tGray font-medium font-poppins text-[13px]">
      <div className="flex items-center gap-[5px]">
        <Clock size={17} color="#ADADAD" />
        <span>{date}</span>
      </div>
      <div className="flex items-center gap-[5px]">
        <Eye size={17} color="#ADADAD" />
        <span>{views} Views</span>
      </div>
    </div>
  );
};

export default DateViews;
