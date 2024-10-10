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
      className=" rounded-[15px] md:px-[30px] px-[10px] mb-5 md:text-lg text-base leading-[23px] md:leading-none font-poppins font-[450px] text-cr8tBlack  flex flex-col  bg-[#F8F8F8] gap-[17px] md:w-[641px] w-[342px] "
    >
      <AccordionTrigger className="h-[60px] text-left">
        {question}
      </AccordionTrigger>
      <AccordionContent className="md:w-[582px] font-normal text-cr8tLightBlack w-[283px]">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};

const FAQ = () => {
  return (
    <section className="md:pt-[200px] pt-[50px] flex justify-between md:px-[80px] flex-wrap md:flex-nowrap px-[24px]">
      <div className="">
        <div className="md:w-[571px] w-[285px]">
          <h1 className=" text-cr8tOrange font-urban md:text-2xl font-normal text-base">
            FAQs
          </h1>
          <p className=" font-semibold md:text-5xl text-2xl leading-9 md:leading-[62px] text-Cr8tGray pt-[5px] md:pt-[10px]">
            What would you like to know about LetsCr8T?
          </p>
        </div>
        <div className="md:block hidden">
          <Image
            src={QuestionMarkIcon}
            alt="question mark icon"
            width={243}
            height={244}
          />
        </div>
      </div>

      <div className="md:w-[701px] w-[342px] flex flex-col justify-center items-center mx-auto mt-[25px] md:mt-0">
        <Accordion type="single" collapsible className="">
          {FAQS.map((faq, index) => (
            <ReviewItem
              question={faq.question}
              answer={faq.answer}
              key={index}
            />
          ))}
        </Accordion>
        <div className="md:hidden mt-[25px] md:mt-0  ">
          <Image
            src={QuestionMarkIcon}
            alt="question mark icon"
            width={342}
            height={343}
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
