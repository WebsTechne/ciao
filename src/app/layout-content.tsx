import { ReactNode } from "react";
import { ThemeProvider } from "../providers/theme-provider";
import { LenisProvider } from "../providers/lenis-provider";

export default function LayoutContent({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LenisProvider>{children}</LenisProvider>
    </ThemeProvider>
  );
}
