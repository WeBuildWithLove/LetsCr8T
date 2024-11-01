import Layout from "@/layout";
import Hero from "./Hero";
import OurStory from "./OurStory";
import OurTeam from "./OurTeam";
import Advert from "@/components/Global/Advert";

const page = () => {
  return (
    <Layout>
      <Hero />
      <OurStory />
      <OurTeam />
      <div className="flex flex-col items-center justify-center mx-auto ">
        <Advert />
      </div>
    </Layout>
  );
};

export default page;
