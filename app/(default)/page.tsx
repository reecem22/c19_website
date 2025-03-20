import PageIllustration from "@/components/ui/page-illustration";
import Hero from "@/components/ui/hero-home";
import WorkFlows from "@/components/ui/workflow";

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

    </>
  );
}
