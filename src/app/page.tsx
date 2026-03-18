"use client";

import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap, { SplitText } from "gsap/all";
import { useRef } from "react";

export default function Home() {
  const hero = {
    heading: (
      <>
        Socialize with <br /> the world
      </>
    ),
    description:
      "Connect. Share. Discover. Meet new people and experiences that spark your world.",
    cta1: "Socialize",
    cta2: "Join waitlist",
  };
  const hero2 = {
    heading: (
      <>
        Meet beyond <br /> your circle
      </>
    ),
    description:
      "Break out of the same old feed. Discover new people, new conversations, and unexpected connections every day.",
    cta1: "Discover",
    cta2: "Join waitlist",
  };

  const container = useRef(null);

  useGSAP(
    () => {
      const heroSplit1 = new SplitText(".hero-1 .title", {
        type: "lines, words",
      });
      const heroSplit2 = new SplitText(".hero-2 .title", {
        type: "lines, words",
      });

      const text1 = new SplitText(".hero-1 .text", {
        type: "lines",
      });
      const text2 = new SplitText(".hero-2 .text", {
        type: "lines",
      });

      const tl = gsap.timeline();

      tl.from(heroSplit1.words, {
        yPercent: 120,
        opacity: 0,
        rotation: 3,
        duration: 1,
        ease: "expo.out",
        stagger: 0.08,
      })
        .from(
          heroSplit2.words,
          {
            yPercent: 120,
            opacity: 0,
            rotation: 3,
            duration: 1,
            ease: "expo.out",
            stagger: 0.08,
          },
          "<",
        )
        .from(
          text1.lines,
          {
            yPercent: 120,
            opacity: 0,

            duration: 0.8,
            ease: "expo.out",
            stagger: 0.06,
          },
          "<0.6",
        )
        .from(
          text2.lines,
          {
            yPercent: 120,
            opacity: 0,

            duration: 0.8,
            ease: "expo.out",
            stagger: 0.06,
          },
          "<",
        );

      gsap.from(".card", {
        x: 120,
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        delay: 0.5,
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          endTrigger: "main",
          end: "bottom top",
          pin: ".hero-1 .content",
          pinSpacing: false,
          anticipatePin: 1,
          // scrub: true,
        },
      });
      gsap.timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          endTrigger: "main",
          end: "bottom top",
          pin: ".hero-2 .content",
          pinSpacing: false,
          anticipatePin: 1,
          // scrub: true,
        },
      });
      gsap.timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          endTrigger: "main",
          end: "bottom top",
          pin: ".hero-3 .content",
          pinSpacing: false,
          anticipatePin: 1,
          // scrub: true,
        },
      });
      gsap.timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          endTrigger: "main",
          end: "bottom top",
          pin: ".hero-4 .content",
          pinSpacing: false,
          anticipatePin: 1,
          // scrub: true,
        },
      });
    },
    { scope: container },
  );

  return (
    <main ref={container} className="relative">
      <section className="relative h-[130dvh] overflow-clip border-b-2!">
        <header className="max:w-1200 bg-primary text-primary-foreground absolute top-0 left-1/2 z-1000 flex h-16 w-full -translate-x-1/2 items-center justify-between px-4 py-2">
          <Link
            href="/"
            className="hover:text-secondary/90 text-secondary logo inline-block text-4xl font-extrabold tracking-tight duration-200 [-webkit-text-stroke:3px_var(--secondary-foreground)]"
          >
            CIAO
          </Link>

          <button
            type="button"
            className="hover:bg-background/80 border-secondary-foreground text-secondary-foreground bg-background rounded-xl border-2 px-3 py-1 text-base font-semibold duration-270"
          >
            {hero.cta1}
          </button>
        </header>

        <div
          id="hero"
          className="hero-1 bg-primary text-primary-foreground h-[83vh] overflow-clip"
        >
          <div className="content absolute top-0 left-11 flex h-screen flex-col items-start justify-center">
            <h1 className="hero-text hero-title title w-max text-left">
              {hero.heading}
            </h1>
            <p className="text max-w-165 text-left text-xl md:text-2xl">
              {hero.description}
            </p>

            <div className="mt-8 flex items-center gap-7">
              <button
                type="button"
                className="hover:bg-secondary/90 border-secondary-foreground text-secondary-foreground bg-secondary rounded-2xl border-2 border-r-4 border-b-4 px-5 py-2 text-lg font-bold duration-270"
              >
                {hero.cta1}
              </button>

              <button
                type="button"
                className="hover:bg-background/80 border-secondary-foreground text-secondary-foreground bg-background rounded-2xl border-2 border-r-4 border-b-4 px-5 py-2 text-lg font-bold duration-270"
              >
                {hero.cta2}
              </button>
            </div>
          </div>
        </div>

        <div
          id="second-hero"
          className="hero-2 bg-secondary text-secondary-foreground -mt-25 h-[83vh] overflow-clip"
        >
          <div className="content absolute top-0 left-11 flex h-screen flex-col items-start justify-center">
            <h1 className="title hero-title w-max text-left">{hero.heading}</h1>
            <p className="text max-w-165 text-left text-xl md:text-2xl">
              {hero.description}
            </p>

            <div className="mt-8 flex items-center gap-7">
              <button
                type="button"
                className="hover:bg-background/80 border-secondary-foreground text-secondary-foreground bg-background rounded-2xl border-2 border-r-4 border-b-4 px-5 py-2 text-lg font-bold duration-270"
              >
                {hero.cta1}
              </button>

              <button
                type="button"
                className="hover:bg-foreground/10 border-secondary-foreground text-secondary-foreground bg-secondary rounded-2xl border-2 border-r-4 border-b-4 px-5 py-2 text-lg font-bold duration-270"
              >
                {hero.cta2}
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-background border-foreground absolute top-1/2 right-11 h-120 w-80 -translate-y-1/2 rounded-3xl border-3 border-r-5 border-b-5 p-2"></div>
      </section>

      <section id="section-2" className="h-dvh overflow-clip">
        <div
          id="third-hero"
          className="hero-3 bg-secondary text-secondary-foreground h-[83vh] overflow-clip"
        >
          <div className="content absolute top-0 left-11 flex h-screen flex-col items-start justify-center">
            <h1 className="title hero-title w-max text-left">
              {hero2.heading}
            </h1>
            <p className="text max-w-165 text-left text-xl md:text-2xl">
              {hero2.description}
            </p>

            <div className="mt-8 flex items-center gap-7">
              <button
                type="button"
                className="hover:bg-background/80 border-secondary-foreground text-secondary-foreground bg-background rounded-2xl border-2 border-r-4 border-b-4 px-5 py-2 text-lg font-bold duration-270"
              >
                {hero2.cta1}
              </button>

              <button
                type="button"
                className="hover:bg-foreground/10 border-secondary-foreground text-secondary-foreground bg-secondary rounded-2xl border-2 border-r-4 border-b-4 px-5 py-2 text-lg font-bold duration-270"
              >
                {hero2.cta2}
              </button>
            </div>
          </div>
        </div>

        <div
          id="fourth-hero"
          className="hero-4 bg-primary text-primary-foreground -mt-25 h-[83vh] overflow-clip"
        >
          <div className="content absolute top-0 left-11 flex h-screen flex-col items-start justify-center">
            <h1 className="hero-text hero-title title w-max text-left">
              {hero2.heading}
            </h1>
            <p className="text max-w-165 text-left text-xl md:text-2xl">
              {hero2.description}
            </p>

            <div className="mt-8 flex items-center gap-7">
              <button
                type="button"
                className="hover:bg-secondary/90 border-secondary-foreground text-secondary-foreground bg-secondary rounded-2xl border-2 border-r-4 border-b-4 px-5 py-2 text-lg font-bold duration-270"
              >
                {hero2.cta1}
              </button>

              <button
                type="button"
                className="hover:bg-background/80 border-secondary-foreground text-secondary-foreground bg-background rounded-2xl border-2 border-r-4 border-b-4 px-5 py-2 text-lg font-bold duration-270"
              >
                {hero2.cta2}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="section-3"
        className="bg-background h-dvh overflow-clip"
      ></section>
    </main>
  );
}
