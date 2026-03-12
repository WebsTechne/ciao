import Link from "next/link";

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

  return (
    <section className="relative h-dvh overflow-clip">
      <header className="max:w-1200 bg-primary text-primary-foreground absolute top-0 left-1/2 z-1000 flex h-16 w-full -translate-x-1/2 items-center justify-between px-4 py-2">
        <Link
          href="/"
          className="hover:text-secondary/90 text-secondary logo inline-block text-4xl font-extrabold tracking-tight duration-200 [-webkit-text-stroke:3px_var(--secondary-foreground)]"
        >
          CIAO
        </Link>

        <button
          type="button"
          className="hover:bg-background/80 border-secondary-foreground text-secondary-foreground bg-background rounded-xl border-2 border-r-3 border-b-3 px-3 py-1 text-base font-semibold duration-270"
        >
          {hero.cta1}
        </button>
      </header>

      <div
        id="hero"
        className="slant-top bg-primary text-primary-foreground h-[80vh] overflow-clip"
      >
        <div className="absolute top-53/100 left-11 -translate-y-1/2">
          <h1 className="hero-title text-left">{hero.heading}</h1>
          <p className="max-w-165 text-left text-xl md:text-2xl">
            {hero.description}
          </p>

          <div className="mt-8 flex items-center gap-7">
            <button
              type="button"
              className="hover:bg-foreground/10 border-secondary-foreground text-secondary-foreground bg-secondary rounded-2xl border-2 border-r-4 border-b-4 px-5 py-2 text-lg font-bold duration-270"
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
        className="slant-bottom bg-secondary text-secondary-foreground -mt-[7.5%] h-[80vh] overflow-clip"
      >
        <div className="absolute top-53/100 left-11 -translate-y-1/2">
          <h1 className="hero-title text-left">{hero.heading}</h1>
          <p className="max-w-165 text-left text-xl md:text-2xl">
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

      <div className="bg-background border-foreground absolute top-1/2 right-11 h-120 w-80 -translate-y-1/2 rounded-3xl border-3 border-r-5 border-b-5 p-2"></div>
    </section>
  );
}
