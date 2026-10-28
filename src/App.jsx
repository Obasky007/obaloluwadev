import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PageHero from "./components/PageHero";
import Projects from "./components/ProjectCard";
import Services from "./components/Services";
import Process from "./components/Process";
import AboutPreview from "./components/AboutPreview";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const pages = {
    "/": {
      title: "Obaloluwa.dev — Frontend Developer & Web Designer",
      content: (
        <>
          <Hero />
          <Projects featured />
          <AboutPreview />
        </>
      ),
    },
    "/work": {
      title: "Selected Work — Obaloluwa.dev",
      content: (
        <>
          <PageHero
            eyebrow="01 / SELECTED WORK"
            title="A little proof in the pudding."
            description="Websites and digital experiences, made to look good and do useful things."
            image="/project-calcpro.jpg"
            imageAlt="CalcPro live website preview"
            stamp="BUILT TO BE USED"
            index="01"
          />
          <Projects />
        </>
      ),
    },
    "/about": {
      title: "About — Obaloluwa.dev",
      content: (
        <>
          <PageHero
            eyebrow="02 / THE PERSON BEHIND THE PIXELS"
            title="Curious by design. Careful by build."
            description="A frontend developer and designer in Nigeria, working with people who want to make something meaningful online."
            image="/project-octagon.jpg"
            imageAlt="Octagon technology website preview"
            stamp="DETAILS MATTER"
            index="02"
          />
          <AboutPreview isPage />
          <Services />
          <Process />
        </>
      ),
    },
    "/contact": {
      title: "Contact — Obaloluwa.dev",
      content: (
        <>
          <PageHero
            eyebrow="03 / LET'S MAKE A GOOD THING"
            title="Got a good idea? Let's give it a home."
            description="Tell me what you're working on, what needs to change, or what you'd love to bring to life."
            image="/project-chapel.jpg"
            imageAlt="Chapel of Grace community website preview"
            stamp="MADE FOR PEOPLE"
            index="03"
          />
          <ContactCTA />
        </>
      ),
    },
  };
  const page = pages[path] || pages["/"];

  useEffect(() => {
    document.title = page.title;
  }, [page.title]);

  return (
    <>
      <CustomCursor />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-ink focus:text-cream focus:px-4 focus:py-2 focus:rounded-full focus:text-[13px] focus:font-mono"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">{page.content}</main>
      <Footer />
    </>
  );
}
