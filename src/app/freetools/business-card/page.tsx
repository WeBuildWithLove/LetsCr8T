import Layout from "@/layout";
import React from "react";

const BusinessCard = () => {
  return (
    <Layout>
      <div className="relative w-[50%] h-0 mx-auto  pt-[58.8235%] mt-[1.6em] mb-[0.9em] overflow-hidden rounded-[8px] will-change-transform ">
        <iframe
          loading="lazy"
          className="absolute w-full h-[50%] top-0 left-0 border-none"
          src="https://www.canva.com/design/DAGV7z95RuU/6v4j_guIOVeUY4o_8gSAZA/view?embed"
          allow="fullscreen"
        ></iframe>
      </div>
      <a
        href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGV7z95RuU&#x2F;6v4j_guIOVeUY4o_8gSAZA&#x2F;view?utm_content=DAGV7z95RuU&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
        target="_blank"
        rel="noopener"
      ></a>{" "}
      by Preye Omusuku
    </Layout>
  );
};

export default BusinessCard;
