import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/ob-logo.png.asset.json";
import cnnImg from "@/assets/project-cnn.jpg";
import fxImg from "@/assets/project-fx.jpg";
import evImg from "@/assets/project-ev.jpg";
import bookingImg from "@/assets/project-booking.jpg";
import garmentsImg from "@/assets/project-garments.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Owishik Biswas — Portfolio" },
      {
        name: "description",
        content:
          "Owishik Biswas — Virtual Assistant & Digital Marketing Specialist. Top Rated on Upwork with a 100% Job Success Score across 30+ projects.",
      },
      { property: "og:title", content: "Owishik Biswas — Portfolio" },
      {
        property: "og:description",
        content:
          "Bridging Technology, Business & Digital Growth. Top Rated Upwork freelancer (100% JSS, 30+ projects).",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "upwork", label: "Upwork" },
  { id: "certifications", label: "Certifications" },
  { id: "feedback", label: "Feedback" },
  { id: "contact", label: "Contact" },
];

const THESIS = {
  img: cnnImg,
  title: "Detecting Brain Tumor Using CNN",
  desc: "Developed an applied machine learning model utilizing Convolutional Neural Networks for automated image classification and medical diagnostics.",
};

const ACADEMIC_PROJECTS = [
  {
    img: bookingImg,
    title: "SmartBooking – Multi-Tenant SaaS Appointment Booking Platform",
    desc: "Built a secure multi-tenant SaaS appointment booking platform with role-based access control, tenant-isolated data, real-time scheduling, booking validation, and business administration tools.",
  },
  {
    img: fxImg,
    title: "International Currency Portfolio Analysis",
    desc: "Analyzed the risk-return profiles and historical performance of global currency pairs from 2021–2023.",
  },
  {
    img: evImg,
    title: "DBS Auto's Electric Two-Wheelers Project",
    desc: "Conducted cash-flow and capital-budgeting analysis to evaluate electric two-wheeler market integration and investment feasibility.",
  },
  {
    img: garmentsImg,
    title: "Garments Industry Employee Welfare Study",
    desc: "Examined employee compensation, fair-pay compliance, and labor-welfare practices within Bangladesh’s garments industry.",
  },
];

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-5 mt-12 flex items-center gap-3 font-display text-sm font-semibold uppercase tracking-[0.18em] text-foreground/80 first:mt-0">
      <span className="h-px w-6 bg-primary" />
      {children}
    </h3>
  );
}

type Education = {
  degree: string;
  org: string;
  years: string;
  note?: string;
};

const EDUCATION: Education[] = [
  {
    degree: "MBA, Finance",
    org: "North South University (NSU)",
    years: "2023 – 2026",
    note: "Financial & cash-flow analysis, capital budgeting.",
  },
  {
    degree: "B.Sc. in CSE (Information Systems)",
    org: "American International University-Bangladesh (AIUB)",
    years: "2018 – 2023",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    org: "Milestone College",
    years: "2015 – 2017",
  },
];

function Index() {
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Verify CDN script has loaded
    const emailjsInstance = (window as unknown as { emailjs?: { sendForm: Function } }).emailjs;

    if (!emailjsInstance) {
      alert("Email service is still loading. Please check your internet connection or try again in a few seconds.");
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjsInstance.sendForm(
        "service_xbnes0w",
        "template_ng0aw75",
        formRef.current,
        "ENAO8rwvM8ziPREzS"
      );
      alert("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <button
            onClick={() => scrollTo("about")}
            aria-label="Back to top"
            className="transition-opacity hover:opacity-80"
          >
            <img
              src={logo.url}
              alt="OB logo"
              width={1774}
              height={887}
              className="h-9 w-auto md:h-10"
            />
          </button>
          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                  active === item.id
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <button
            onClick={() => scrollTo("contact")}
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            Let's talk
          </button>
          <button
            aria-label="Toggle menu"
            className="md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-foreground" />
              <span className="block h-0.5 w-6 bg-foreground" />
              <span className="block h-0.5 w-6 bg-foreground" />
            </div>
          </button>
        </div>
        {menuOpen && (
          <nav className="grid grid-cols-2 gap-1 border-t border-border/70 px-5 py-3 md:hidden">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="rounded-md px-3 py-2 text-left text-sm font-medium text-muted-foreground hover:bg-secondary"
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </header>

      {/* HERO / ABOUT */}
      <section id="about" className="grain relative overflow-hidden">
        <div className="hero-glow pointer-events-none absolute inset-0" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-24">
          <div className="reveal">
            <p className="eyebrow">About Me</p>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl">
              Owishik <span className="text-primary">Biswas</span>
            </h1>
            <p className="mt-3 text-lg font-medium text-foreground/80 md:text-xl">
              Virtual Assistant &amp; Digital Marketing Specialist
            </p>
            <p className="mt-6 inline-block border-l-2 border-primary pl-4 font-display text-xl font-medium tracking-tight text-foreground md:text-2xl">
              Bridging Technology, Business{" "}
              <span className="text-primary">&amp; Digital Growth.</span>
            </p>
            <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                I'm a Virtual Assistant &amp; Certified Digital Marketing
                Professional, helping businesses with data management,
                e-commerce, SEO, web research, and administrative operations. As
                a Top Rated freelancer on Upwork with a 100% Job Success Score,
                I’ve worked with clients across a variety of projects and
                workflows.
              </p>
              <p>
                With a background spanning technology, business, and finance, I
                bring a practical approach to problem-solving, with a strong
                focus on accuracy, reliability, and getting things done right.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo("education")}
                className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                View work
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Get in touch
              </button>
            </div>
          </div>

          <div className="reveal flex flex-col items-center md:items-end">
            <div className="relative">
              <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-secondary" />
              <img
                src="./owishik-portrait.png"
                alt="Owishik Biswas"
                width={1254}
                height={1254}
                className="aspect-square w-72 rounded-[1.5rem] border border-primary/30 object-contain shadow-[0_20px_60px_-20px_oklch(0.72_0.15_245/0.5)] md:w-96"
              />
              <div className="absolute -bottom-4 -left-4 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg">
                <p className="font-display text-2xl font-bold text-emerald">
                  100%
                </p>
                <p className="text-xs text-muted-foreground">Job Success</p>
              </div>
            </div>
           
          </div>
        </div>
      </section>

      <div className="rule mx-auto max-w-6xl" />

      {/* EDUCATION */}
      <Section id="education" eyebrow="Education" title="Academic foundation">
        <SubHeading>Academic Background</SubHeading>
        <div className="grid gap-4 md:grid-cols-3">
          {EDUCATION.map((e) => (
            <div
              key={e.degree}
              className="card-surface p-6 hover:-translate-y-1"
            >
              <p className="text-sm font-semibold text-primary">{e.years}</p>
              <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                {e.degree}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{e.org}</p>
              {e.note && (
                <p className="mt-3 text-sm text-muted-foreground">{e.note}</p>
              )}
            </div>
          ))}
        </div>

        <SubHeading>Thesis</SubHeading>
        <article className="card-surface group grid overflow-hidden md:grid-cols-2">
          <div className="overflow-hidden">
            <img
              src={THESIS.img}
              alt={THESIS.title}
              loading="lazy"
              width={1024}
              height={768}
              className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center p-6 md:p-10">
            <span className="eyebrow">Thesis</span>
            <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">
              {THESIS.title}
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {THESIS.desc}
            </p>
          </div>
        </article>

        <SubHeading>Academic Projects</SubHeading>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ACADEMIC_PROJECTS.map((p) => (
            <article
              key={p.title}
              className="card-surface group flex flex-col overflow-hidden hover:-translate-y-1"
            >
              <div className="overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-semibold leading-snug text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" eyebrow="Skills" title="Core skills & tools" alt>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              group: "Business Operations",
              items: [
                "Workflow Coordination",
                "Data Management",
                "Process Documentation",
                "Reporting",
                "Quality Assurance",
                "Client Communication",
              ],
            },
            {
              group: "IT & Systems Support",
              items: [
                "Hardware/Software Troubleshooting",
                "User Support",
                "System Maintenance",
                "Data Extraction",
                "Database Fundamentals",
              ],
            },
            {
              group: "Platforms & Productivity",
              items: [
                "Microsoft Excel, Word, PowerPoint",
                "Google Workspace",
                "Airtable",
                "Monday.com",
                "Jotform",
                "Shopify",
                "WordPress",
              ],
            },
            {
              group: "Technical Knowledge",
              items: [
                "MySQL",
                "C",
                "C++",
                "C#",
                "Java",
                "Data Analysis",
                "Financial & Cash Flow Analysis",
              ],
            },
          ].map((g) => (
            <div key={g.group} className="card-surface p-6">
              <h3 className="font-display text-lg font-semibold text-foreground">
                {g.group}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section id="services" eyebrow="Services" title="What I do">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              t: "Virtual Assistance",
              d: "High-volume data entry, online research, data extraction, spreadsheet cleanup, file organization, and recurring administrative workflows with close attention to accuracy.",
            },
            {
              t: "Digital Marketing",
              d: "Shopify & WordPress product listings, inventory updates, image management, SEO metadata, and content formatting that keep storefronts sharp.",
            },
            {
              t: "Data Management",
              d: "Structured data in Excel, Google Sheets, Airtable, Monday.com, and Jotform — with quality checks, troubleshooting, and clean deliverables.",
            },
            {
              t: "IT & Systems Support",
              d: "Hardware and software troubleshooting, user support, system maintenance, and database fundamentals to keep operations running.",
            },
            {
              t: "Business Operations",
              d: "Workflow coordination, process documentation, reporting, and client communication that align teams and move work forward.",
            },
            {
              t: "Financial Analysis",
              d: "Cash-flow analysis, capital budgeting, and reporting drawing on an MBA in Finance — translating numbers into decisions.",
            },
          ].map((s) => (
            <div
              key={s.t}
              className="card-surface p-6 transition-transform hover:-translate-y-1"
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-emerald">
                <span className="font-display text-lg font-bold">
                  {s.t.charAt(0)}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {s.t}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* UPWORK ACHIEVEMENTS */}
      <Section
        id="upwork"
        eyebrow="Upwork Achievements"
        title="A track record on Upwork"
      >
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { stat: "30+", label: "Projects delivered" },
            { stat: "100%", label: "Job Success Score" },
            { stat: "Top Rated", label: "Freelancer status" },
            { stat: "Global", label: "International clients" },
          ].map((s) => (
            <div key={s.label} className="card-surface p-6 text-center">
              <p className="font-display text-4xl font-bold text-emerald">
                {s.stat}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 card-surface p-6">
          <h3 className="font-display text-lg font-semibold text-foreground">
            Freelance Virtual Assistant & Digital Marketing Specialist
          </h3>
          <p className="mt-1 text-sm font-medium text-copper">
            Upwork · Remote · Dec 2024 – Present
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              "Completed 30+ projects for international clients while maintaining Top Rated status and a 100% Job Success Score.",
              "Managed high-volume data entry, online research, data extraction, spreadsheet cleanup, file organization, and recurring administrative workflows with close attention to accuracy.",
              "Managed Shopify and WordPress product listings, inventory updates, images, SEO metadata, and content formatting.",
              "Used Excel, Google Sheets, Airtable, Monday.com, Jotform, Google Workspace, and AI tools to organize information, troubleshoot, run quality checks, and coordinate deliverables.",
            ].map((b) => (
              <li key={b} className="flex gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* CERTIFICATIONS */}
      <Section
        id="certifications"
        eyebrow="Certifications"
        title="Credentials"
        alt
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card-surface p-6">
            <p className="text-sm font-semibold text-copper">
              Mar 2024 – Oct 2024
            </p>
            <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
              Professional Digital Marketing Certification
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Creative IT Institute · Grade A+
            </p>
            <a
              href="https://certificate.citsmp.com/?certificate_id=U+DM-24030311"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              View Certificate
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-3.5 w-3.5"
              >
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </a>
          </div>
          <div className="card-surface p-6">
            <p className="text-sm font-semibold text-copper">Extracurricular</p>
            <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
              Leadership & Memberships
            </h3>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>First Joint Convener — PUSAG</li>
              <li>Founding Member — EKOJ Jagorone</li>
              <li>Executive — NSU MBA Club</li>
              <li>Member — AIUB Computer Club</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* CLIENT FEEDBACK */}
      <Section
        id="feedback"
        eyebrow="Client Feedback"
        title="What clients say"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              q: "Delivered exactly what we needed, ahead of schedule, and with spotless accuracy. Our go-to for data cleanup.",
              a: "E-commerce client",
            },
            {
              q: "Organized hundreds of product listings on Shopify without a single error. Professional and easy to work with.",
              a: "Storefront owner",
            },
            {
              q: "Clear communication and reliable recurring workflows. The 100% JSS is well earned.",
              a: "Agency partner",
            },
          ].map((f, i) => (
            <figure key={i} className="card-surface p-6">
              <div className="mb-3 flex gap-1 text-copper">
                {"★★★★★".split("").map((s, idx) => (
                  <span key={idx}>{s}</span>
                ))}
              </div>
              <blockquote className="font-display text-lg italic leading-snug text-foreground">
                “{f.q}”
              </blockquote>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                — {f.a}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Representative of the recurring themes across 30+ completed Upwork
          engagements. Full reviews available on the Upwork profile.
        </p>
      </Section>

      {/* CONTACT */}
      <Section id="contact" eyebrow="Contact" title="Let's work together" alt>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-base leading-relaxed text-muted-foreground">
              Have a project, a recurring workflow, or a data challenge? I'm
              available for freelance work and open to full-time roles bridging
              technology and finance.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {CONTACTS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="card-surface group flex items-center gap-3 px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-primary/50"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <BrandIcon name={item.icon} />
                  </span>
                  <span className="text-sm font-semibold tracking-wide text-foreground">
                    {item.label}
                  </span>
                  {item.external ? (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="ml-auto h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    >
                      <path d="M7 17 17 7M9 7h8v8" />
                    </svg>
                  ) : null}
                </a>
              ))}
            </div>
          </div>
          <form
            ref={formRef}
            className="card-surface p-6"
            onSubmit={handleContactSubmit}
          >
            <div className="grid gap-4">
              <Field
                name="name"
                label="Your name"
                placeholder="Jane Doe"
                required
              />
              <Field
                name="email"
                label="Your email"
                placeholder="jane@email.com"
                type="email"
                required
              />
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-foreground">
                  Message
                </span>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project…"
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </label>
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>
            </div>
          </form>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-center text-sm text-muted-foreground md:flex-row md:text-left">
          <p>© 2026 Owishik Biswas. All rights reserved.</p>
          <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-foreground/85">
            More Than Skills.{" "}
            <span className="text-primary">
              A Mindset to Make Things Happen
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  alt,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  alt?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 ${alt ? "bg-secondary/30" : ""}`}
    >
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {title}
        </h2>
        <div className="rule mt-5 mb-8 w-24" />
        {children}
      </div>
    </section>
  );
}

const WHATSAPP_URL =
  "https://wa.me/8801757702567?text=Hi%20Owishik%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20with%20you.";

const CONTACTS: {
  label: string;
  icon: string;
  href: string;
  external: boolean;
}[] = [
  {
    label: "Email Me",
    icon: "gmail",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=owishikofficial@gmail.com&su=Project%20Inquiry",
    external: true,
  },
  {
    label: "LinkedIn",
    icon: "linkedin",
    href: "https://www.linkedin.com/in/owishikbiswas/",
    external: true,
  },
  {
    label: "Upwork",
    icon: "upwork",
    href: "https://www.upwork.com/freelancers/owishik",
    external: true,
  },
  {
    label: "WhatsApp",
    icon: "whatsapp",
    href: WHATSAPP_URL,
    external: true,
  },
];

const BRAND_PATHS: Record<string, string> = {
  gmail:
    "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z",
  linkedin:
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  upwork:
    "M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z",
  whatsapp:
    "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z",
};

function BrandIcon({ name }: { name: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path d={BRAND_PATHS[name] ?? ""} />
    </svg>
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
  required = false,
}: {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </label>
  );
}
