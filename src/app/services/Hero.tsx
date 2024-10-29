import ButtonIcon from "@/components/Global/ButtonIcon";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="pt-[50px] px-[80px]">
      <div className=" flex justify-end text-base leading-6 font-poppins font-light text-cr8tLightBlack">
        <p className="w-[388px]">
          LetsCr8T
          <br />
          Crafting meaningful connections between businesses and people.
        </p>
      </div>
      <div className="pt-[100px] font-grotesk text-[150px] font-normal text-cr8tBlack leading-[150px]">
        <h1>Your Vision</h1>
        {/* <span className="font-urban text-cr8tOrange ">,</span> */}
        <div className="flex items-end justify-end gap-[50px]">
          <h1 className=" font-urban text-cr8tOrange">&</h1>
          <h1>Our Craft</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
