import Layout from "@/layout";
import Hero from "./Hero";
import PortfolioWorks from "./PortfolioWorks";
import Advert from "@/components/Global/Advert";

const page = () => {
  return (
    <Layout>
      <Hero />
      <PortfolioWorks />
      <Advert />
    </Layout>
  );
};

export default page;
