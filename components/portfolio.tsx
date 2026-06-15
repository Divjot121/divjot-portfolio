"use client";
<meta name="google-site-verification" content="Am3-O9IUWx-B-bijs6mrKA3htlh27aUjKt8_oN61-og" />
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  BookOpen,
  Braces,
  ChevronRight,
  CircleCheck,
  Code2,
  ExternalLink,
  Github,
  Globe2,
  Linkedin,
  Mail,
  Menu,
  Mic2,
  MoveUpRight,
  Network,
  Rocket,
  Sparkles,
  Terminal,
  Trophy,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  ["About", "#about"],
  ["Work", "#work"],
  ["Journey", "#journey"],
  ["Speaking", "#speaking"],
];

const projects = [
  {
    title: "Literating India",
    eyebrow: "Social impact platform",
    description:
      "Bridging the digital divide by bringing practical technology literacy to grassroots communities across India.",
    image: "/literating-india.png",
    href: "https://literatingindia.vercel.app/",
    tags: ["Non-profit", "Digital India", "Education"],
    number: "01",
    color: "lime",
  },
  {
    title: "CalmNest",
    eyebrow: "Mental wellness product",
    description:
      "A calm-technology concept designed to reduce digital noise, create clarity, and make online experiences feel more intentional.",
    image: "/calmnest.jpg",
    tags: ["Product", "React", "Mental wellness"],
    number: "02",
    color: "cyan",
  },
  {
    title: "Community Hub",
    eyebrow: "Community infrastructure",
    description:
      "A platform concept enabling student-led technology communities to organize, thrive, and scale their collective impact.",
    image: "/community.jpg",
    tags: ["Community", "Platform", "Firebase"],
    number: "03",
    color: "violet",
  },
];

const timeline = [
  {
    year: "Now",
    title: "Building useful systems",
    copy: "Developing SaaS products, AI workflows, community platforms, and practical learning experiences in public.",
    icon: Rocket,
  },
  {
    year: "2026",
    title: "National stages & recognition",
    copy: "TEDx speaker and one of the youngest national finalists at the Viksit Bharat Young Leaders Dialogue.",
    icon: Mic2,
  },
  {
    year: "2023—Present",
    title: "Growth Lead, GDG Ludhiana",
    copy: "Leading growth and community initiatives that have reached 1,000+ developers and helped students begin in technology.",
    icon: Users,
  },
  {
    year: "2023",
    title: "Josh Talks speaker",
    copy: "Shared a message about starting early, learning through execution, and building before feeling fully ready.",
    icon: Sparkles,
  },
  {
    year: "Earlier",
    title: "Author & self-starting builder",
    copy: "Authored coding books and began turning curiosity into practical tools, products, and opportunities for others.",
    icon: BookOpen,
  },
];

const skillGroups = [
  { label: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"] },
  { label: "Backend", skills: ["Node.js", "Python", "FastAPI", "PostgreSQL", "MongoDB"] },
  { label: "AI systems", skills: ["OpenAI", "LangChain", "Vector DBs", "RAG", "Prompt Engineering"] },
  { label: "Making", skills: ["Firebase", "Vercel", "Git", "Figma", "Community Building"] },
];

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fade}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHead({ kicker, title, copy }: { kicker: string; title: string; copy?: string }) {
  return (
    <Reveal className="section-head">
      <p className="eyebrow"><span />{kicker}</p>
      <div className="section-head-grid">
        <h2>{title}</h2>
        {copy && <p>{copy}</p>}
      </div>
    </Reveal>
  );
}

export function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => setMounted(true), []);

  return (
    <main className="site-shell">
      <motion.div className="scroll-progress" style={{ width: progress }} />
      <div className="noise" aria-hidden="true" />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="nav-wrap">
        <nav className="nav container" aria-label="Primary navigation">
          <Link href="#top" className="brand" aria-label="Divjot Singh Arora, home">
            <span className="brand-mark">D</span>
            <span className="brand-name">Divjot Singh</span>
          </Link>
          <div className="nav-links">
            {navItems.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          </div>
          <Button asChild variant="outline" className="nav-cta">
            <Link href="mailto:contact@divjotsingh.com">Let&apos;s talk <ArrowUpRight /></Link>
          </Button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
        {menuOpen && (
          <motion.div className="mobile-menu" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
            {navItems.map(([label, href]) => <Link key={href} href={href} onClick={() => setMenuOpen(false)}>{label}<ChevronRight /></Link>)}
            <Link href="mailto:contact@divjotsingh.com" onClick={() => setMenuOpen(false)}>Start a conversation<ArrowRight /></Link>
          </motion.div>
        )}
      </header>

      <section className="hero container" id="top">
        <div className="hero-copy">
          <motion.div
            className="availability"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="pulse"><i /></span>
            Building products, platforms & communities
          </motion.div>
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            I build what I<br />
            <span className="hero-accent">wish existed.</span>
          </motion.h1>
          <motion.p
            className="hero-lede"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
          >
            I&apos;m Divjot, a developer, builder, speaker, and community & youth leader turning ambitious ideas into useful technology and helping others do the same.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
          >
            <Button asChild><Link href="#work">Explore my work <ArrowDownRight /></Link></Button>
            <Button asChild variant="outline"><Link href="mailto:contact@divjotsingh.com">Start a conversation</Link></Button>
          </motion.div>
          <motion.div
            className="hero-proof"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <div><strong>25+</strong><span>Speaking events</span></div>
            <div><strong>50K+</strong><span>People reached</span></div>
            <div><strong>30k+</strong><span>Developers reached</span></div>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96, x: 18 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="portrait-halo" />
          <div className="portrait-frame">
            <Image src="/profile.jpg" alt="Divjot Singh Arora" fill priority sizes="(max-width: 768px) 90vw, 42vw" />
            <div className="portrait-overlay" />
            <div className="portrait-caption">
              <div>
                <span>Based in India</span>
                <strong>Building for everywhere.</strong>
              </div>
              <Globe2 />
            </div>
          </div>
          <div className="floating-card floating-card-top"><Mic2 /><span><b>TEDx Speaker</b>Ideas worth building</span></div>
          <div className="floating-card floating-card-bottom"><Trophy /><span><b>National Finalist</b>Viksit Bharat YLD</span></div>
        </motion.div>
      </section>

      <section className="signal-strip" aria-label="Roles and highlights">
        <div className="signal-track">
          {["DEVELOPER", "FOUNDER", "TEDx SPEAKER", "COMMUNITY LEADER", "AUTHOR", "PRODUCT BUILDER", "DEVELOPER", "FOUNDER", "TEDx SPEAKER", "COMMUNITY LEADER", "AUTHOR", "PRODUCT BUILDER", "YOUTH LEADER"].map((item, index) => (
            <span key={`${item}-${index}`}>{item}<i>✦</i></span>
          ))}
        </div>
      </section>

      <section className="section container" id="about">
        <SectionHead kicker="About me" title="Curiosity, converted into momentum." copy="I care less about perfect plans and more about real things that help real people. Products, communities, and ideas all get better when they leave the notebook." />
        <div className="about-grid">
          <Reveal className="about-manifesto">
            <p className="big-copy">From SaaS experiments to grassroots technology literacy, I build across code, community, and communication.</p>
            <p>As Growth Lead at GDG Ludhiana, I help scale developer communities and make the first step into technology feel possible. Through SOS TECH, I&apos;m working to make technology more practical and accessible for learners.</p>
            <div className="signature">Build early. Learn fast. Help others do the same.</div>
          </Reveal>
          <Reveal className="about-bento" delay={0.1}>
            <article className="mini-card card-lime">
              <Network />
              <div><span>Community</span><strong>Scale people,<br />not just products.</strong></div>
            </article>
            <article className="mini-card">
              <Terminal />
              <div><span>Craft</span><strong>Ideas become credible when they ship.</strong></div>
            </article>
            <article className="mini-card mini-wide">
              <div className="idea-orbit" aria-hidden="true"><i /><i /><i /><b>IDEA</b></div>
              <div><span>Operating system</span><strong>Think boldly → make simply → learn publicly.</strong></div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section projects-section" id="work">
        <div className="container">
          <SectionHead kicker="Selected work" title="Ideas with a job to do." copy="A portfolio of products and initiatives designed around usefulness, access, wellbeing, and belonging." />
          <div className="projects-grid">
            {projects.map((project, index) => (
              <Reveal className={`project-card project-${project.color}`} key={project.title} delay={index * 0.08}>
                <div className="project-image">
                  <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 50vw" />
                  <div className="project-number">{project.number}</div>
                  {project.href && <Link href={project.href} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title}`} className="project-link"><ExternalLink /></Link>}
                </div>
                <div className="project-body">
                  <p>{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <span>{project.description}</span>
                  <div className="tag-row">{project.tags.map(tag => <i key={tag}>{tag}</i>)}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section container" id="journey">
        <SectionHead kicker="Experience & leadership" title="A journey measured in action." copy="Each chapter added a new way to build: with code, on stage, inside communities, and alongside ambitious young people." />
        <div className="timeline">
          {timeline.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal className="timeline-row" key={item.title} delay={index * 0.05}>
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-dot"><Icon /></div>
                <div className="timeline-copy"><h3>{item.title}</h3><p>{item.copy}</p></div>
                <span className="timeline-index">0{index + 1}</span>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section speaking-section" id="speaking">
        <div className="container">
          <SectionHead kicker="Speaking & media" title="Make the room believe it can begin." copy="Across stages and developer communities, the message stays practical: start before certainty arrives, and let the work teach you." />
          <div className="speaking-grid">
            <Reveal className="speaking-image">
              <Image src="/speaking.png" alt="Divjot Singh Arora speaking" fill sizes="(max-width: 768px) 100vw, 55vw" />
              <div className="speaking-badge"><span>Live</span> Ideas in motion</div>
            </Reveal>
            <div className="speaking-cards">
              <Reveal className="appearance-card" delay={0.08}><span>2026</span><div><Mic2 /><h3>TEDx Speaker</h3><p>Youth entrepreneurship and building without permission.</p></div><MoveUpRight /></Reveal>
              <Reveal className="appearance-card" delay={0.14}><span>2023</span><div><Sparkles /><h3>Josh Talks</h3><p>A message of early execution shared with thousands.</p></div><MoveUpRight /></Reveal>
              <Reveal className="appearance-card" delay={0.2}><span>15+</span><div><Users /><h3>Speaking Events</h3><p>Conversations with builders, students, and communities.</p></div><MoveUpRight /></Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section container" id="recognition">
        <SectionHead kicker="Achievements & recognition" title="Credibility built in public." copy="Not finish lines. Signals that an unconventional path can create meaningful reach." />
        <div className="recognition-grid">
          <Reveal className="recognition-card recognition-feature">
            <div className="recognition-orb"><Trophy /></div>
            <p>National recognition</p>
            <h3>One of the youngest national finalists at the Viksit Bharat Young Leaders Dialogue.</h3>
            <span>2026 · India</span>
          </Reveal>
          <Reveal className="recognition-card" delay={0.08}><Mic2 /><strong>TEDx</strong><p>Speaker on youth entrepreneurship and self-starting action.</p><span>2026</span></Reveal>
          <Reveal className="recognition-card" delay={0.14}><BookOpen /><strong>Published author</strong><p>Authored coding books to make learning more practical.</p><span>Education</span></Reveal>
          <Reveal className="recognition-card recognition-stat" delay={0.18}><b>50K+</b><p>People reached through speaking and community work.</p><span>Growing every chapter</span></Reveal>
        </div>
      </section>

      <section className="section skills-section">
        <div className="container">
          <SectionHead kicker="Skills ecosystem" title="Full-stack thinking, human outcomes." copy="Technology is the medium. The real skill is connecting product, systems, storytelling, and community into one clear experience." />
          <div className="skills-layout">
            <Reveal className="skills-core">
              <div className="core-glow" />
              <div className="orbit orbit-one"><span>PRODUCT</span></div>
              <div className="orbit orbit-two"><span>COMMUNITY</span></div>
              <div className="orbit orbit-three"><span>STORY</span></div>
              <div className="core-mark"><Code2 /><b>BUILD</b><small>systems that matter</small></div>
            </Reveal>
            <div className="skill-list">
              {skillGroups.map((group, index) => (
                <Reveal className="skill-group" key={group.label} delay={index * 0.06}>
                  <div className="skill-label"><span>0{index + 1}</span>{group.label}</div>
                  <div className="skill-tags">{group.skills.map(skill => <i key={skill}>{skill}</i>)}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section container" id="testimonials">
        <SectionHead kicker="Proof, not posturing" title="The work speaks in outcomes." copy="The current story is told through stages earned, communities grown, learners helped, and products shipped — without borrowing somebody else's words." />
        <div className="proof-grid">
          <Reveal className="proof-quote">
            <span>“</span>
            <blockquote>The future belongs to those who build it. Don&apos;t wait for permission. Start now.</blockquote>
            <p>Divjot Singh Arora · Personal credo shared through speaking & community work</p>
          </Reveal>
          <Reveal className="proof-list" delay={0.1}>
            {["TEDx and Josh Talks speaker", "Growth Lead at GDG Ludhiana", "National VBYLD finalist", "Builder of learning and social-impact platforms"].map(item => (
              <div key={item}><CircleCheck />{item}</div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="philosophy-section">
        <div className="philosophy-grid" aria-hidden="true" />
        <div className="container philosophy-inner">
          <Reveal>
            <p className="eyebrow"><span />Personal philosophy</p>
            <h2>Don&apos;t wait for permission.<br /><em>Build before you&apos;re ready.</em></h2>
            <p className="philosophy-copy">Readiness is often just experience viewed backwards. The faster route is to begin, pay attention, and become capable in motion.</p>
            <Button asChild><Link href="mailto:contact@divjotsingh.com">Build something meaningful <ArrowRight /></Link></Button>
          </Reveal>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="container">
          <div className="footer-top">
            <Reveal>
              <p className="eyebrow"><span />Open to ambitious conversations</p>
              <h2>Have an idea with<br />some gravity?</h2>
            </Reveal>
            <Reveal className="footer-action" delay={0.1}>
              <Link href="mailto:contact@divjotsingh.com"><span>Tell me about it</span><ArrowRight /></Link>
              <p>Products · communities · speaking · collaboration</p>
            </Reveal>
          </div>
          <div className="footer-bottom">
            <div><span className="brand-mark">D</span><p>Divjot Singh Arora<br /><i>Built with intent, not just code.</i></p></div>
            <div className="socials">
              <Link href="https://github.com/divjot121" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></Link>
              <Link href="https://www.linkedin.com/in/divjot-aroraa/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></Link>
              <Link href="https://x.com/Divjot121" target="_blank" rel="noreferrer" aria-label="X"><XIcon /></Link>
              <Link href="mailto:contact@divjotsingh.com" aria-label="Email"><Mail /></Link>
            </div>
            <p>© {mounted ? new Date().getFullYear() : "2026"} Divjot Singh Arora</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ArrowUpRight() {
  return <MoveUpRight className="size-4" />;
}

function XIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 4l16 16M20 4L4 20" /></svg>;
}
