
import Hero from "./homeblocks/Hero";
import AboutUs from "./homeblocks/AboutUs";
import OurServices from "./homeblocks/OurServices";

import OurClients from "./homeblocks/OurClients";
import OurModels from "./homeblocks/OurModels";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
    <Hero />
    <AboutUs />
    <OurServices />
    <OurClients />
    <OurModels />
    <CTA />
    </>
  );
}
