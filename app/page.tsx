"use client";
import { useEffect } from "react";
import Footer from "@/components/footer";
import Hero from "@/components/Hero";
import HeroHeader from "@/components/HeroHeader";
import Navbar from "@/components/Navbar";

export default function Home() {
  useEffect(() => {
    // Scroll-reveal for fade elements
    const els = document.querySelectorAll(".fade, .fade-left, .fade-right, .fade-scale");
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            revealObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => revealObs.observe(el));

    // Footer + funding-wrap trigger
    const triggers = document.querySelectorAll(".footer, .funding-wrap");
    const triggerObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            triggerObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    triggers.forEach((el) => triggerObs.observe(el));

    // Active nav link on scroll
    const sections = document.querySelectorAll("section[id], header[id]");
    const navLinks = document.querySelectorAll(".nav-links a");
    const activeObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((a) => {
              a.classList.toggle("active", (a as HTMLAnchorElement).hash === `#${entry.target.id}`);
            });
          }
        });
      },
      { threshold: 0.35 }
    );
    sections.forEach((s) => activeObs.observe(s));

    const fallback = setTimeout(() => {
      els.forEach((el) => el.classList.add("show"));
      triggers.forEach((el) => el.classList.add("show"));
    }, 1500);

    return () => {
      revealObs.disconnect();
      triggerObs.disconnect();
      activeObs.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <>
      <Navbar />
      <HeroHeader />
      <Hero />
      <Footer />
    </>
  );
}
