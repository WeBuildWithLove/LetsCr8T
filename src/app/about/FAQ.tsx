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
      className=" rounded-[15px] px-[30px] mb-5 text-lg font-poppins font-medium text-cr8tBlack flex flex-col  bg-[#F8F8F8] gap-[17px] w-[641px] "
    >
      <AccordionTrigger className="h-[60px]">{question}</AccordionTrigger>
      <AccordionContent className="w-[582px] h-[112px] font-normal text-cr8tLightBlack">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};

const FAQ = () => {
  return (
    <section className="pt-[200px] flex justify-between px-[80px]">
      <div className="w-[571px]">
        <h1 className=" text-cr8tOrange font-urban text-2xl font-normal">
          FAQs
        </h1>
        <p className=" font-semibold text-5xl leading-[62px] text-Cr8tGray pt-[10px]">
          What would you like to know about LetsCr8T?
        </p>
        <Image
          src={QuestionMarkIcon}
          alt="question mark icon"
          width={243}
          height={244}
        />
      </div>
      <div className="w-[701px]">
        <Accordion type="single" collapsible className="">
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
