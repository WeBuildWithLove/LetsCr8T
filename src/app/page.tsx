import Commitment from "@/components/Home/Commitment";
import HomeHero from "@/components/Home/HomeHero";
import Layout from "@/layout";
import HomeClient from "@/components/Home/HomeClient";
import HomeServices from "@/components/Home/HomeServices";
import FAQs from "@/components/Home/FAQs";
import BlogPost from "@/components/Home/BlogPost";
import ServiceDisplay from "@/components/Home/ServiceDisplay";
import ClientChallenges from "@/components/Home/ClientChallenges";
import HowItWorks from "@/components/Home/HowItWorks";

export default function Home() {
  return (
    <Layout>
      <HomeHero />
      <ServiceDisplay />
      <ClientChallenges />
      <HowItWorks />
      <HomeClient />
      <HomeServices />
      <Commitment />
      <FAQs />
      <BlogPost />
    </Layout>
  );
}
