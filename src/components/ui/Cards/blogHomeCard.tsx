import Link from "next/link";
import Image from "next/image";
import Crown from "../../../../public/crown2.svg";
import { ChevronRight } from "lucide-react";

type BlogCardProps = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  recentDay: string;
  recentMonth: string;
};

const BlogHomeCard: React.FC<BlogCardProps> = ({
  id,
  title,
  excerpt,
  image,
  recentMonth,
  recentDay,
}) => (
  <Link href={`/blog/${id}`}>
    <div className="bg-white max-w-[426px] rounded-[20px] h-[520px] ">
      <div className="px-[30px] py-[30px]">
        <div className="h-[60px] w-[60px] rounded-br-[5px] rounded-tl-[15px] bg-cr8tOrange font-poppins font-medium text-[13px] text-white items-center flex text-center  justify-center absolute">
          <p>
            {recentDay}
            <br />
            {recentMonth}
          </p>
        </div>
        <Image
          src={image}
          alt={title}
          width={366}
          height={227}
          className="rounded-[15px]"
          // placeholder="blur"
        />
        <div className="text-base font-poppins leading-6 w-[297px] pt-[20px]">
          <h1 className="text-cr8tBlack font-bold">{title}</h1>
          <p className="font-light text-cr8tLightBlack pt-[10px]">{excerpt}</p>
        </div>

        <div className="mt-5 w-full  border"></div>
        <div className="pt-[30px] flex justify-between">
          <div className="flex">
            <Image
              src={Crown}
              alt="letscr8t crown logo"
              width={27}
              height={17}
            />
            <p className=" text-Cr8tGray text-[21px] font-medium font-poppins">
              LetsCr8T Official
            </p>
          </div>

          <ChevronRight color="#ADADAD" className="" />
        </div>
      </div>
    </div>
  </Link>
);

export default BlogHomeCard;
