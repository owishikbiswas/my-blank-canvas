import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Owishik Biswas — Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Owishik Biswas — designer and developer building thoughtful digital products.",
      },
      { property: "og:title", content: "Owishik Biswas — Portfolio" },
      {
        property: "og:description",
        content:
          "Portfolio of Owishik Biswas — designer and developer building thoughtful digital products.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projects = [
  {
    number: "01",
    title: "Aurora",
    description: "A minimal weather app with ambient motion and typographic craft.",
    role: "Product Design · 2025",
  },
  {
    number: "02",
    title: "Marginalia",
    description: "A reading app that turns annotations into a living notebook.",
    role: "Full-Stack · 2024",
  },
  {
    number: "03",
    title: "Field Kit",
    description: "An offline-first field research tool for naturalists.",
    role: "Design + Engineering · 2023",
  },
  {
    number: "04",
    title: "Slow Mail",
    description: "A calendar that reframes your week around what matters most.",
    role: "Product Design · 2023",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground antialiased">
      <header className="sticky top-0 z-30 border-b border-border bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-lg font-medium tracking-tight">
            Owishik Biswas
          </a>
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#work" className="transition-colors hover:text-foreground">
              Work
            </a>
            <a href="#about" className="transition-colors hover:text-foreground">
              About
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="pt-24 pb-20 sm:pt-32">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            Designer & Developer — based in Dhaka
          </p>
          <h1 className="mt-8 font-display text-[clamp(3rem,9vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.02em] text-balance">
            Owishik
            <br />
            <span className="italic">Biswas</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I design and build quiet, considered digital products — the kind
            that feel obvious only after they exist. Available for select
            freelance work.
          </p>
          <a
            href="#work"
            className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-accent"
          >
            View selected work
            <span aria-hidden="true">→</span>
          </a>
        </section>

        <hr className="border-border" />

        {/* About */}
        <section id="about" className="grid gap-10 py-20 sm:grid-cols-12">
          <div className="sm:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              About
            </p>
          </div>
          <div className="sm:col-span-8">
            <p className="max-w-xl text-pretty text-xl leading-relaxed">
              I work at the seam between design and engineering — building
              interfaces that read as calm and considered, with the discipline
              to ship them well.
            </p>
            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
              I care about typography, performance, and the small details that
              make a product feel trustworthy. When I'm not building, I'm
              reading, walking, or sketching type.
            </p>
            <dl className="mt-8 grid max-w-md grid-cols-2 gap-y-4 border-t border-border pt-6 font-mono text-xs">
              <dt className="uppercase tracking-[0.15em] text-muted-foreground">
                Based
              </dt>
              <dd>Dhaka, BD</dd>
              <dt className="uppercase tracking-[0.15em] text-muted-foreground">
                Status
              </dt>
              <dd>Available for work</dd>
              <dt className="uppercase tracking-[0.15em] text-muted-foreground">
                Focus
              </dt>
              <dd>Design · Engineering</dd>
            </dl>
          </div>
        </section>

        <hr className="border-border" />

        {/* Work */}
        <section id="work" className="py-20">
          <div className="flex items-baseline justify-between">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              Selected work
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
              2023 — 2025
            </p>
          </div>
          <ol className="mt-8">
            {projects.map((project) => (
              <li key={project.number}>
                <a
                  href="#contact"
                  className="group grid items-baseline gap-x-6 gap-y-2 border-b border-border py-7 transition-colors hover:bg-foreground/[0.03] sm:grid-cols-12"
                >
                  <span className="font-mono text-xs text-muted-foreground sm:col-span-1">
                    {project.number}
                  </span>
                  <span className="font-display text-2xl font-medium tracking-tight sm:col-span-4 sm:text-3xl">
                    {project.title}
                  </span>
                  <span className="text-sm text-muted-foreground sm:col-span-5">
                    {project.description}
                  </span>
                  <span className="text-sm text-muted-foreground sm:col-span-2 sm:text-right">
                    {project.role}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </section>

        <hr className="border-border" />

        {/* Contact */}
        <section id="contact" className="py-24">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            Contact
          </p>
          <h2 className="mt-8 max-w-3xl font-display text-[clamp(2rem,6vw,4rem)] font-medium italic leading-[1.05] tracking-[-0.02em] text-balance">
            Let's make something that lasts.
          </h2>
          <a
            href="mailto:hello@owishik.dev"
            className="mt-8 inline-block text-xl tracking-tight text-accent sm:text-2xl"
          >
            hello@owishik.dev
          </a>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
            <a href="#contact" className="transition-colors hover:text-foreground">
              GitHub
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground">
              LinkedIn
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground">
              Read.cv
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Owishik Biswas — Dhaka</span>
          <a href="#top" className="transition-colors hover:text-foreground">
            Back to top
          </a>
        </div>
      </footer>
    </div>
  );
}
