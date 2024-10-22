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
      <Advert />
    </Layout>
  );
};

export default page;
