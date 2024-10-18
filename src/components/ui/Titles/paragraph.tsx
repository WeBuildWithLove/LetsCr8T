interface ParagraphProps {
  message: string;
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ message, className }) => {
  return (
    <p className={` ${className} font-poppins font-light text-cr8tLightBlack`}>
      {message}
    </p>
  );
};

export default Paragraph;
