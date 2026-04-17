"use client";
import { useEffect } from "react";
import Footer from "@/components/footer";
import Hero from "@/components/Hero";
import HeroHeader from "@/components/HeroHeader";
import Navbar from "@/components/Navbar";

export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => observer.observe(el));

    // Fallback: reveal everything after 1.5s in case observer misses elements
    const fallback = setTimeout(() => {
      els.forEach((el) => el.classList.add("show"));
    }, 1500);

    return () => {
      observer.disconnect();
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
