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
      { title: "Owishik Biswas | Portfolio" },
      {
        name: "description",
        content:
          "Owishik Biswas — Virtual Assistant & Digital Marketing Specialist. Top Rated on Upwork with a 100% Job Success Score across 30+ projects.",
      },
      { property: "og:title", content: "Owishik Biswas | Portfolio" },
      {
        property: "og:description",
        content:
          "Bridging Technology, Business & Digital Growth. Top Rated Upwork freelancer (100% JSS, 30+ projects).",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
  }),
  component: Index,
});

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "services", label: "Services" },
  { id: "freelancing", label: "Freelancing" },
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

const EDUCATION = [
  {
    short: "NSU",
    org: "North South University (NSU)",
    degree: "Master of Business Administration (MBA)",
    major: "Major - Finance",
    years: "2023–2026",
  },
  {
    short: "AIUB",
    org: "American International University-Bangladesh (AIUB)",
    degree: "B.Sc. in Computer Science and Engineering (CSE)",
    major: "Major - Information Systems",
    years: "2018–2023",
  },
  {
    short: "MCU",
    org: "Milestone College Uttara",
    degree: "Higher Secondary Certificate (HSC)",
    major: "Group - Science",
    years: "2017",
  },
];

const SKILLS = [
  {
    group: "Computer Science & Information Systems",
    items: ["Information Systems", "Database Management & SQL", "Data Analysis", "Power BI & Data Visualization", "Microsoft Excel & Google Sheets", "IT & Computer Fundamentals"],
  },
  {
    group: "Virtual Assistance & Business Support",
    items: ["General Virtual Assistance", "Data Entry & Data Management", "Web Research", "CRM & Database Management", "Data Cleaning & Organization", "Financial Analysis & Reporting", "Bengali ↔ English Translation", "Bengali Transcription"],
  },
  {
    group: "Digital Marketing",
    items: ["Social Media Account Creation & Management", "Content Scheduling & Publishing", "On-Page SEO", "SEO Content Optimization", "Keyword Research", "Meta Titles & Descriptions", "Image Alt Text Optimization", "Internal Linking", "AI Image Generation"],
  },
  {
    group: "E-commerce & Website Management",
    items: ["Shopify & WooCommerce", "WordPress", "Product & Catalog Management", "Product Data Management", "CSV Import & Export", "Variants & Metafields", "Inventory Management", "Website Content Management"],
  },
];

const TOOLS: { group: string; items: [string, string][] }[] = [
  { group: "Productivity & Data", items: [["Microsoft Excel", "excel.cloud.microsoft"], ["Microsoft Word", "word.cloud.microsoft"], ["Microsoft PowerPoint", "powerpoint.cloud.microsoft"], ["Google Sheets", "sheets.google.com"], ["Google Docs", "docs.google.com"], ["Google Drive", "drive.google.com"], ["Power BI", "powerbi.microsoft.com"]] },
  { group: "E-commerce & Web", items: [["Shopify", "shopify.com"], ["WooCommerce", "woocommerce.com"], ["WordPress", "wordpress.org"]] },
  { group: "SEO & Marketing", items: [["Rank Math", "rankmath.com"], ["Yoast SEO", "yoast.com"], ["Ahrefs", "ahrefs.com"], ["Google Business Profile", "business.google.com"], ["Meta Business Suite", "business.facebook.com"], ["Mailchimp", "mailchimp.com"]] },
  { group: "Social & Content", items: [["Facebook", "facebook.com"], ["Instagram", "instagram.com"], ["LinkedIn", "linkedin.com"], ["TikTok", "tiktok.com"], ["Pinterest", "pinterest.com"], ["YouTube", "youtube.com"], ["Threads", "threads.net"], ["X", "x.com"]] },
  { group: "AI & Creative", items: [["ChatGPT Plus", "chatgpt.com"], ["Gemini Pro", "gemini.google.com"], ["Claude", "claude.ai"], ["Google Flow / Veo", "labs.google"], ["Canva", "canva.com"], ["CapCut", "capcut.com"]] },
  { group: "VA & Workflow", items: [["Jotform", "jotform.com"], ["PDFfiller", "pdffiller.com"], ["Notion", "notion.so"], ["Slack", "slack.com"], ["ClickUp", "clickup.com"], ["Asana", "asana.com"], ["Trello", "trello.com"]] },
];

const SERVICES = [
  { t: "Virtual Assistant & Data Support", d: "Reliable administrative support for businesses, including data management, research, CRM maintenance, document organization, and recurring operational tasks." },
  { t: "E-commerce & Website Support", d: "Support for Shopify, WooCommerce, and WordPress businesses to keep product catalogs, website content, inventory information, and store data accurate and organized." },
  { t: "Digital Marketing Support", d: "Execution-focused support for social media, SEO, content publishing, website optimization, and maintaining a consistent online presence." },
  { t: "Bengali Translation & Transcription", d: "Bengali-English translation and transcription support for audio, video, documents, subtitles, proofreading, and language-data projects." },
];

const UP = "https://www.upwork.com/freelancers/~01898cd7b3eeeec67e?p=";

const PROJECTS = [
  { img: "/social-media-account-setup-branding.png", title: "Social Media Account Setup & Profile Branding", url: UP + "2100783316556517376", skills: ["Digital Marketing", "Social Media Account Setup", "Social Media Management"], desc: "Built and branded a consistent social media presence for a lifestyle brand across Facebook, Instagram, LinkedIn, Pinterest, TikTok, YouTube, Threads, and X. Added the client’s logos, cover images, business details, website links, and platform-specific bios to maintain a consistent brand identity across all platforms. Organized the account information and prepared screenshots and handover details for the client. The attached portfolio shows the profiles and branding completed during the project." },

  { img: "/shopify-product-listings-catalog-cleanup.png", title: "Shopify Product Listings & Catalog Data Cleanup", url: UP + "2100774454229536768", skills: ["Shopify", "Product Audit", "Product Listings", "Virtual Assistance", "Digital Marketing"], desc: "Supported catalog cleanup for 600+ active and draft products in a Shopify store. The project began with linking product images and expanded to checking listing statuses and correcting product heights, dimensions, and package weights. Uploaded visual assets and updated product information to improve catalog consistency. After an initial walkthrough, I completed the expanded scope independently and delivered ahead of the client’s deadline." },

  { img: "/bengali-transcription-audio-annotation.png", title: "Bengali Transcription, Audio Annotation & Quality Review", url: UP + "2053354638211764224", skills: ["Translation", "Bengali to English Translation", "Data Labeling", "Bengali", "Data Annotation"], desc: "Provided Bengali transcription, audio annotation, and quality review across projects with Skyfall AI and Processor.ai. Listened to Bengali recordings, prepared transcripts, added timestamps and speaker labels, and reviewed completed work for errors. Followed project-specific guidelines for transcription accuracy, audio segmentation, and labeling." },

  { img: "/ai-image-generation-250-illustrations.png", title: "AI Image Generation: 250 Custom Illustrations", url: UP + "2087331226470473728", skills: ["AI Image Generation", "AI Image Editing", "AI Image Generator"], desc: "Created 250 custom AI-generated illustrations for Patronus Energy LLC using Gemini Nano Banana Pro and ChatGPT Plus. Developed prompts based on the client’s requirements to produce high-resolution images and delivered the project within a tight deadline. This portfolio includes two selected illustrations from the completed project, showing industrial environments and detailed scenes created for the client." },

  { img: "/historical-census-data-excel-cleanup.png", title: "Historical Census Data Extraction & Excel Cleanup", url: UP + "1923081214315855872", skills: ["Data Entry", "Microsoft Excel", "Data Extraction", "Online Research", "Virtual Assistance"], desc: "Extracted historical demographic and healthcare data from archival census reports and organized it into structured Excel spreadsheets. Recorded hospital counts, bed counts, locations, years, and administrative categories. Standardized the data layout and checked entries across columns to identify inconsistencies." },

  { img: "/wordpress-rank-math-seo.png", title: "WordPress Blog Publishing & Rank Math On-Page SEO", url: UP + "1837043452588658688", skills: ["On-Page SEO", "Blog Writing", "WordPress"], desc: "Formatted and published blog posts for a home appliance website using WordPress and Rank Math. Organized supplied drafts with headings, images, and media embeds. Updated focus keywords, meta titles, meta descriptions, URL slugs, image alt text, and relevant internal and external links. The attached samples show published content and the WordPress dashboard, including a post with a Rank Math score of 100/100." },

  { img: "/financial-data-extraction-analysis.png", title: "Financial Data Extraction & Multi-Year Analysis", url: UP + "1923079171475898368", skills: ["Virtual Assistance", "Data Entry", "Financial Report", "Data Extraction", "Online Research"], desc: "Collected public school district financial and state aid data from the Texas Education Agency’s online reports. Organized figures in Excel by district code and reporting year, calculated averages across multiple years, and applied consistent formatting. Checked entries against source reports and reviewed calculations for errors. The attached samples show the source portal and the spreadsheet prepared for comparison and reporting." },
];

const REVIEWS = [
  { t: "AI Image Designer", q: ["Working with Owishik was an excellent experience. He recently created a technical AI-generated image for our company, and the result was absolutely fantastic.", "The image looks 100% natural, realistic, and highly professional. He clearly has an excellent understanding of AI image generation and knows how to achieve a polished result without making the image look artificial.", "We are extremely happy with the final result and would definitely recommend Owishik to anyone looking for high-quality AI-generated visuals.", "Excellent work, Owishik. Thank you!"] },
  { t: "Outlook Email & CFPB Account Creation", q: ["Exceeded my expectations! His attention to detail, communication, and professionalism were top-notch. The final delivery was even better than I imagined. I’ll be hiring him again. Highly recommended to anyone looking for quality and reliability."] },
  { t: "Bengali Language Transcription", q: ["Thanks you so much, it was a great collaboration. All the best."] },
  { t: "Marketing Promotion Help", q: ["This freelancer finished the project quickly and according to the documentation. Thank you!"] },
  { t: "Account Creation for 300 websites", q: ["Job well done and great experience"] },
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

  setIsSubmitting(true);

  try {
    const formData = new FormData(formRef.current);

    const response = await fetch("/contact-form.html", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formData as any).toString(),
    });

    if (!response.ok) {
      throw new Error("Form submission failed");
    }

    alert("Message sent successfully!");
    formRef.current.reset();
  } catch (error) {
    console.error("Failed to send message:", error);
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
              src="/ob-logo.png"
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

      {/* PROFESSIONAL SKILLS */}
      <Section id="skills" eyebrow="Skills" title="Professional Skills">
        <div className="grid gap-5 md:grid-cols-2">
          {SKILLS.map((g) => (
            <div key={g.group} className="card-surface p-6">
              <h3 className="font-display text-lg font-semibold text-foreground">
                {g.group}
              </h3>
              <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                {g.items.map((s) => (
                  <li key={s} className="flex gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <SubHeading>Tools &amp; Platforms</SubHeading>
        <div className="grid gap-5 md:grid-cols-2">
          {TOOLS.map((c) => (
            <div key={c.group} className="card-surface p-6">
              <h4 className="font-display text-base font-semibold text-foreground">
                {c.group}
              </h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.items.map(([name, domain]) => (
                  <span key={name} className="chip">
                    <img
                      src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
                      alt=""
                      width={16}
                      height={16}
                      loading="lazy"
                      className="h-4 w-4 shrink-0 rounded-sm"
                    />
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* EDUCATION & CERTIFICATIONS */}
      <Section
        id="education"
        eyebrow="Education"
        title="Education & Certifications"
        alt
      >
        <SubHeading>Academic Qualifications</SubHeading>
        <div className="grid gap-4 md:grid-cols-3">
          {EDUCATION.map((e) => (
            <div key={e.org} className="card-surface flex gap-4 p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-secondary font-display text-sm font-bold text-primary">
                {e.short}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-primary">{e.years}</p>
                <h3 className="mt-1 font-display text-base font-semibold text-foreground">
                  {e.org}
                </h3>
                <p className="mt-1 text-sm text-foreground/85">{e.degree}</p>
                <p className="mt-1 text-sm text-muted-foreground">{e.major}</p>
              </div>
            </div>
          ))}
        </div>

        <SubHeading>Certifications</SubHeading>
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
              <ArrowIcon />
            </a>
          </div>
        </div>

        <SubHeading>Academic Thesis &amp; Projects</SubHeading>
        <div className="grid gap-4 md:grid-cols-2">
          {[{ ...THESIS, tag: "Thesis" }, ...ACADEMIC_PROJECTS.map((p) => ({ ...p, tag: "Project" }))].map((p) => (
            <article
              key={p.title}
              className={`card-surface flex gap-4 overflow-hidden p-4 ${p.tag === "Thesis" ? "md:col-span-2" : ""}`}
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={1024}
                height={768}
                className="aspect-[4/3] w-24 shrink-0 rounded-lg object-cover sm:w-32"
              />
              <div className="min-w-0">
                <span className="eyebrow">{p.tag}</span>
                <h3 className="mt-1 font-display text-base font-semibold leading-snug text-foreground">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section id="services" eyebrow="Services" title="What I Do">
        <div className="grid gap-5 md:grid-cols-2">
          {SERVICES.map((s) => (
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

      {/* FREELANCING PROFILE */}
      <Section
        id="freelancing"
        eyebrow="Top-Rated Freelancer"
        title="Freelancing Profile"
        alt
      >
        <div className="card-surface flex flex-col items-start justify-between gap-5 p-6 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <BrandIcon name="upwork" />
            </span>
            <div>
              <p className="font-display text-xl font-semibold text-foreground">
                Top-Rated Freelancer on Upwork
              </p>
              <p className="text-sm text-muted-foreground">
                100% Job Success Score · 30+ projects for international clients
              </p>
            </div>
          </div>
          <a
            href={UPWORK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            View My Upwork Profile
            <ArrowIcon />
          </a>
        </div>

        <SubHeading>Completed Projects</SubHeading>
        <div className="grid gap-5 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <article key={p.title} className="card-surface flex flex-col p-5">
              <div className="overflow-hidden rounded-lg bg-secondary">
                <img
  src={p.img}
  alt={`${p.title} project thumbnail`}
  loading="lazy"
  decoding="async"
  width={960}
  height={720}
  className="aspect-[4/3] w-full object-contain"
/>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-foreground/70">
                Skills &amp; Deliverables
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {p.skills.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Project Portfolio
                <ArrowIcon />
              </a>
            </article>
          ))}
        </div>
      </Section>

      {/* CLIENT FEEDBACK */}
      <Section
        id="feedback"
        eyebrow="Client Feedback"
        title="Some Examples of What My Clients Say"
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((f) => (
            <figure key={f.t} className="card-surface flex flex-col p-6">
              <h3 className="font-display text-base font-semibold text-foreground">
                {f.t}
              </h3>
              <div className="mt-2 mb-3 flex gap-1 text-copper" aria-label="5 stars">
                ★★★★★
              </div>
              <blockquote className="space-y-3 text-sm italic leading-relaxed text-muted-foreground">
                {f.q.map((para, i) => (
                  <p key={i}>
                    {i === 0 ? "“" : ""}
                    {para}
                    {i === f.q.length - 1 ? "”" : ""}
                  </p>
                ))}
              </blockquote>
            </figure>
          ))}
        </div>
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-surface group flex items-center gap-3 px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-primary/50"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <BrandIcon name={item.icon} />
                  </span>
                  <span className="text-sm font-semibold tracking-wide text-foreground">
                    {item.label}
                  </span>
                  <span className="ml-auto text-muted-foreground">
                    <ArrowIcon />
                  </span>
                </a>
              ))}
            </div>
          </div>
          <form
  ref={formRef}
  name="contact"
  method="POST"
  data-netlify="true"
  className="card-surface p-6"
  onSubmit={handleContactSubmit}
>
  <input type="hidden" name="form-name" value="contact" />
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

const UPWORK_URL = "https://www.upwork.com/freelancers/owishik";

function ArrowIcon() {
  return (
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
  );
}

const CONTACTS = [
  {
    label: "LinkedIn",
    icon: "linkedin",
    href: "https://www.linkedin.com/in/owishikbiswas/",
  },
  { label: "WhatsApp", icon: "whatsapp", href: WHATSAPP_URL },
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
