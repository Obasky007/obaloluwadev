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
      title: "Obaloluwa.dev — We make websites people remember",
      content: (
        <>
          <Hero />
          <Projects featured />
          <AboutPreview />
        </>
      ),
    },
    "/work": {
      title: "Selected Work — Obaloluwa.dev Studio",
      content: (
        <>
          <PageHero
            eyebrow="01 / SELECTED WORK"
            title="Proof, not promises."
            description="A selection of brand-led websites and digital experiences built to make good ideas easier to understand, trust, and act on."
            image="/project-calcpro.jpg"
            imageAlt="CalcPro interactive web application preview"
            stamp="BUILT TO BE USED"
            index="01"
          />
          <Projects />
        </>
      ),
    },
    "/about": {
      title: "Studio — Obaloluwa.dev",
      content: (
        <>
          <PageHero
            eyebrow="02 / THE STUDIO"
            title="A small studio with a sharp point of view."
            description="Obaloluwa.dev creates clear, expressive websites and web experiences for ambitious businesses, products, and teams working worldwide."
            image="/project-octagon.jpg"
            imageAlt="Octagon Omega information-led web experience preview"
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
      title: "Start a Project — Obaloluwa.dev",
      content: (
        <>
          <PageHero
            eyebrow="03 / START A PROJECT"
            title="Bring the good idea. We’ll shape the experience."
            description="Share the challenge, the ambition, or the rough direction. Obaloluwa.dev works with teams and businesses worldwide to make digital experiences clearer and more useful."
            image="/project-chapel.jpg"
            imageAlt="Chapel of Grace community platform preview"
            stamp="MADE TO MOVE"
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
