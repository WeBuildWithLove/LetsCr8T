import Image from "next/image";

interface TeamImagesProps {
  src: string;
}

const TeamImages: React.FC<TeamImagesProps> = ({ src }) => {
  return (
    <div>
      <Image src={src} alt="teamate picture" />
    </div>
  );
};

export default TeamImages;
