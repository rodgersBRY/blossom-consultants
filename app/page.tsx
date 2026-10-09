import { About } from "@/components/about";
import { ChildTherapy } from "@/components/child-therapy";
import { Contact } from "@/components/contact";
import { Expertise } from "@/components/expertise";
import { Hero } from "@/components/hero";
import { Organizations } from "@/components/organizations";
import { Pathways } from "@/components/pathways";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Pathways />
        <ChildTherapy />
        <About />
        <Expertise />
        <Organizations />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
