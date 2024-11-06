const Hero = () => {
  return (
    <section className="pt-[50px] lg:px-[80px] px-6">
      <div className=" flex justify-end text-base font-poppins font-light text-cr8tLightBlack lg:text-base text-[15px] lg:leading-6 leading-[22.5px] ">
        <p className="lg:w-[388px] w-[224px]">
          LetsCr8T
          <br />
          WE DESIGN AND BUILD LOVABLE DIGITAL PRODUCTS, BRANDS, AND EXPERIENCES.
        </p>
      </div>
      <div className="lg:pt-[100px] pt-[50px] font-grotesk  xl:text-[150px] lg:text-[100px] md:text-[80px] text-[32px] font-normal text-cr8tBlack  xl:leading-[150px]  leading-[44px] md:leading-[110px] px-[28px] md:px-0 flex flex-col">
        <h1>Creativity</h1>
        <div className="flex md:justify-between justify-center gap-[21px] ">
          <h1 className=" font-urban text-cr8tOrange">&</h1>
          <h1>Innovation</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
