"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "../providers/theme-provider";
import { LenisProvider } from "../providers/lenis-provider";

import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function LayoutContent({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LenisProvider>{children}</LenisProvider>
    </ThemeProvider>
  );
}
