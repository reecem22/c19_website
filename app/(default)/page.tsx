import PageIllustration from "@/components/ui/page-illustration";
import Hero from "@/components/ui/hero-home";
import WorkFlows from "@/components/ui/workflow";
import Features from "@/components/ui/features";

export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <WorkFlows/>
      <Features/>

    </>
  );
}
