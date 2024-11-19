import Layout from "@/layout";
import Hero from "./Hero";
// import PortfolioWorks from "./PortfolioWorks";
import Advert from "@/components/Global/Advert";
import Works from "./Works";

const page = () => {
  return (
    <Layout>
      <Hero />
      <Works />
      {/* <PortfolioWorks /> */}
      <Advert />
    </Layout>
  );
};

export default page;
