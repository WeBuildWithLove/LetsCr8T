import Layout from "@/layout";
import Hero from "./Hero";
import Advert from "@/components/Global/Advert";
import Works from "./Works";

const page = () => {
  return (
    <Layout>
      <Hero />
      <Works />
      <Advert />
    </Layout>
  );
};

export default page;
