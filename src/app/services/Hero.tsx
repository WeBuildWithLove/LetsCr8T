const Hero = () => {
  return (
    <section className="pt-[50px] lg:px-[80px]  px-6">
      <div className=" flex justify-end lg:text-base text-[15px] lg:leading-6 leading-[22.5px] font-poppins font-light text-cr8tLightBlack">
        <p className="lg:w-[388px] w-[273px]">
          LetsCr8T
          <br />
          BRINGING BUSINESSES AND CUSTOMERS TOGETHER WITH DESIGN THAT DELIVERS
          RESULTS.
        </p>
      </div>
      <div className="lg:pt-[100px] pt-[50px] font-grotesk xl:text-[150px] lg:text-[100px] md:text-[80px]  text-[32px] font-normal text-cr8tBlack xl:leading-[150px]  leading-[44px]  md:leading-[110px] px-[28px] md:px-0 ">
        <h1>Your Vision</h1>

        <div className="flex items-end justify-end lg:gap-[50px] gap-[21px]">
          <h1>
            {" "}
            <span className="font-urban text-cr8tOrange ">Our</span> Craft
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
