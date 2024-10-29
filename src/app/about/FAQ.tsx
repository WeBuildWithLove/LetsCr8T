import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "../../../constants";
import Image from "next/image";
import QuestionMarkIcon from "../../../public/question-mark.svg";

type FAQITEM = {
  question: string;
  answer: string;
};

const ReviewItem = ({ question, answer }: FAQITEM) => {
  return (
    <AccordionItem
      value={question}
      className="rounded-[15px] md:px-[30px] px-[10px] mb-5 font-poppins font-normal text-cr8tBlack flex flex-col bg-[#F8F8F8] gap-[10px] md:w-[641px] w-[342px] overflow-hidden  "
    >
      <AccordionTrigger className="h-[60px] text-left md:text-lg text-base min-h-[60px] flex items-center transition-all duration-300 ease-in-out">
        {question}
      </AccordionTrigger>
      <AccordionContent className="md:w-[582px] font-light text-cr8tLightBlack w-[303px] md:leading-7 leading-6 md:text-lg text-base overflow-hidden transition-all duration-300 ease-in-out ">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};

const FAQ = () => {
  return (
    <section className="md:pt-[150px] pt-[50px] flex md:px-[80px] xl:px-[80px] lg:px-[30px] flex-wrap lg:flex-nowrap px-6 items-start">
      <div className="md:w-[571px] xl:w-[571px] lg:w-[400px] w-[285px] flex flex-col items-start">
        <h1 className="text-cr8tOrange font-urban md:text-2xl font-normal text-base">
          FAQs
        </h1>
        <p className="font-semibold md:text-5xl xl:text-5xl lg:text-3xl text-2xl leading-9 md:leading-[62px] text-Cr8tGray pt-[5px] md:pt-[10px]">
          What would you like to know about LetsCr8T?
        </p>
        <Image
          src={QuestionMarkIcon}
          alt="question mark icon"
          width={243}
          height={244}
          className="mt-5"
        />
      </div>

      <div className="md:w-[701px] xl:w-[701px] lg:w-[301px] w-[342px] flex flex-col justify-center items-center mx-auto mt-[25px] lg:mt-0   h-[502px] ">
        <Accordion type="single" collapsible>
          {FAQS.map((faq, index) => (
            <ReviewItem
              question={faq.question}
              answer={faq.answer}
              key={index}
            />
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
