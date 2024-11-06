import Commitment from "@/components/Home/Commitment";
import HomeHero from "@/components/Home/HomeHero";
import Layout from "@/layout";
import HomeClient from "@/components/Home/HomeClient";
import HomeServices from "@/components/Home/HomeServices";
import FAQs from "@/components/Home/FAQs";

export default function Home() {
  return (
    <Layout>
      <HomeHero />
      <HomeServices />
      <Commitment />
      <HomeClient />
      <FAQs />
    </Layout>
  );
}
