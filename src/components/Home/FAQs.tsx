import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { FAQS } from "../../../constants";
import Image from "next/image";
import QuestionMarkIcon from "../../../public/question-mark.svg";

const FAQs = () => {
  return (
    <section className="lg:px-[80px] md:pt-[150px] pt-[50px] px-6 relative  ">
      <div className="flex lg:justify-between flex-wrap lg:flex-nowrap gap-[25px] lg:gap-0  relative justify-center ">
        <div className=" flex flex-col lg:gap-[25px] gap-5px relative z-10">
          <h1 className="text-cr8tOrange font-urban md:text-2xl font-normal text-base">
            FAQs
          </h1>
          <p className="font-semibold md:text-5xl xl:text-5xl lg:text-3xl text-2xl leading-9 md:leading-[62px] text-Cr8tGray pt-[5px] md:pt-[10px] md:w-[571px] w-[285px] lg:w-[350px]  xl:w-[571px] ">
            What would you like to know about LetsCr8T?
          </p>

          <Image
            src={QuestionMarkIcon}
            alt="question mark icon"
            width={243}
            height={244}
            className="mt-5 lg:block hidden pointer-events:none;"
          />
        </div>
        <Accordion
          type="single"
          collapsible
          className="lg:h-[500px] h-[530px] "
        >
          {FAQS.map((item, index) => (
            <AccordionItem
              value={item.id}
              key={index}
              className="rounded-[15px] md:px-[30px] px-[10px] mb-5 font-poppins font-normal text-cr8tBlack flex flex-col bg-[#F8F8F8] gap-[10px] md:w-[641px] xl:w-[641px] lg:w-[450px] w-[342px] overflow-hidden   "
            >
              <AccordionTrigger className="h-[60px] text-left md:text-lg text-base min-h-[60px] flex items-center transition-all duration-300 ease-in-out z-10">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="md:w-[582px] font-light text-cr8tLightBlack w-[303px] md:leading-7 leading-6 md:text-lg text-base transition-all duration-300 ease-in-out">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
          <Image
            src={QuestionMarkIcon}
            alt="question mark icon"
            width={342}
            height={343}
            className="lg:hidden block opacity-30 absolute top-[300px] md:top-[400px] left-1/2 transform -translate-x-1/2  pointer-events-none z-0"
          />
        </Accordion>
      </div>
    </section>
  );
};

export default FAQs;
