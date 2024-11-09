import AnimatedButton from "@/components/ui/animatedButton";

import Layout from "@/layout";
import Link from "next/link";
import React from "react";

const FreeTools = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center gap-3">
        <div className="w-[300px] h-[200px] border rounded-xl border-cr8tOrange  items-center flex justify-center">
          <Link href="/freetools/color-palette" className="">
            <AnimatedButton className="md:w-[200px] w-[130px] p-2 h-[56px] flex flex-col">
              Try color pallete
            </AnimatedButton>
          </Link>
        </div>
        <div className="w-[300px] h-[200px] border rounded-xl border-cr8tBlack text-cr8tOrange items-center flex justify-center">
          <Link href="/freetools/business-card" className="">
            <AnimatedButton className="md:w-[200px] w-[130px] p-2 h-[56px] flex flex-col">
              create business card
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default FreeTools;
