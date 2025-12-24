"use client";
import HeroSection from "@/components/hero-section";
import {
  FullScreenFXAPI,
  FullScreenScrollFX,
} from "@/components/full-screen-scroll-fx";
import Features from "@/components/features-10";
import TeamSection from "@/components/team";
import { ShaderAnimation } from "@/components/shader-animation";
import Footer from "@/components/footer";
import React from "react";
import Image from "next/image";

const sections = [
  {
    leftLabel: "AIR 1 2016",
    title: (
      <>
        2016 - AIR 1 <br />
        In Endurance{" "}
      </>
    ),
    rightLabel: "Endurance",
    background: "/images/baja-1.jpg",
    audioSrc: "/sfx/click-01.mp3",
  },
  {
    leftLabel: "AIR 2 2017",
    title: (
      <>
        2017 - AIR 2 <br />
        In Cost <br /> &Durability
      </>
    ),
    rightLabel: "Cost & Durability",
    background: "/images/baja-2.jpg",
    audioSrc: "/sfx/whoosh-02.mp3",
  },
  {
    leftLabel: "AIR 1 2018",
    title: (
      <>
        2018 - AIR 1 <br />
        In Cost & Sales
      </>
    ),
    rightLabel: "Cost & Sales",
    background: "/images/baja-3.jpg",
    audioSrc: "/sfx/whoosh-02.mp3",
  },
  {
    leftLabel: "AIR 1 2020",
    title: (
      <>
        2020 - AIR 1 <br />
        In ATVC{" "}
      </>
    ),
    rightLabel: "ATVC",
    background: "/images/hero.jpg",
    audioSrc: "/sfx/whoosh-02.mp3",
  },
  // ...
];

const page = () => {
  const apiRef = React.useRef<FullScreenFXAPI>(null);

  return (
    <div className="min-h-screen w-full">
      <HeroSection />
      <section className="relative z-10 bg-background overflow-visible">
        <Features />
      </section>
      <FullScreenScrollFX
        sections={sections}
        header={
          <>
            <div>Our Legacy</div>
          </>
        }
        footer={<div></div>}
        showProgress
        durations={{ change: 0.7, snap: 800 }}
      />
      <TeamSection />
      <div className="relative flex h-162.5 w-full flex-col items-center justify-center overflow-hidden">
        <ShaderAnimation />
        <span className="absolute pointer-events-none z-10 flex items-center gap-4 text-center text-5xl md:text-7xl leading-none font-semibold tracking-tighter whitespace-nowrap text-white">
          <Image
            src="/images/logo-final.png"
            alt="VidyutAshwa Logo"
            width={50}
            height={50}
          />
          <h1 className="">VidyutAshwa</h1>
        </span>
      </div>
      <Footer />
    </div>
  );
};

export default page;
