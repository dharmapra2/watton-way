"use client";
import { useEffect } from "react";
import Footer from "@/components/footer";
import Hero from "@/components/Hero";
import HeroHeader from "@/components/HeroHeader";
import Navbar from "@/components/Navbar";

export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade, .fade-left, .fade-right, .fade-scale");

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
