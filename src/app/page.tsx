import Commitment from "@/components/Home/Commitment";
import HomeHero from "@/components/Home/HomeHero";
import Layout from "@/layout";
import HomeClient from "@/components/Home/HomeClient";
import FAQ from "./about/FAQ";
import HomeServices from "@/components/Home/HomeServices";

export default function Home() {
  return (
    <Layout>
      <HomeHero />
      <HomeServices />
      <Commitment />
      <HomeClient />
      <FAQ />
    </Layout>
  );
}
