import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowDownRight, ArrowUpRight, BriefcaseBusiness, Code2, ExternalLink, Github, Linkedin, MapPin, Sparkles } from "lucide-react";
import portrait from "@/assets/shravani-illustrated-portrait.jpg";
import resumeAsset from "@/assets/shravani-resume.pdf.asset.json";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shravani Mamilla | AI & Computer Science Portfolio" },
      {
        name: "description",
        content:
          "Meet Shravani Mamilla, a computer science student and AI research intern building thoughtful machine learning, data, and community technology projects.",
      },
      { property: "og:title", content: "Shravani Mamilla | AI & Computer Science Portfolio" },
      {
        property: "og:description",
        content:
          "Computer science, AI research, and practical projects by Shravani Mamilla.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const projects = [
  {
    number: "01",
    name: "SheLaunch AI",
    category: "AMAZON HACKATHON · GENERATIVE AI",
    description:
      "An AI-powered launchpad supporting women entrepreneurs with business planning, branding, and campaign tools.",
    stack: ["Generative AI", "Valkey", "Product thinking"],
    mark: "S",
    accent: "project-sage",
  },
  {
    number: "02",
    name: "CivicVision",
    category: "AI · SMART CITIES",
    description:
      "A collaborative smart-city platform bringing AI modules and urban analytics dashboards together.",
    stack: ["AI modules", "Data", "Dashboards"],
    mark: "C",
    accent: "project-rose",
  },
  {
    number: "03",
    name: "Smart Community System",
    category: "COMMUNITY TECH · IN PROGRESS",
    description:
      "An all-in-one community concept for parking, water, waste, maintenance, and resident requests.",
    stack: ["Systems design", "IoT", "Web"],
    mark: "↗",
    accent: "project-blue",
  },
  {
    number: "04",
    name: "Hybrid CNN–Transformer Research",
    category: "RESEARCH · HEALTHCARE IoT",
    description:
      "Explored a hybrid federated model for remote patient monitoring, from dataset preparation through evaluation and paper writing.",
    stack: ["Python", "CNN + Transformers", "Federated learning"],
    mark: "⌘",
    accent: "project-yellow",
  },
  {
    number: "05",
    name: "DB Navigator",
    category: "DATABASES · DEVELOPER TOOLS",
    description:
      "A database management tool focused on clear schema design and efficient, optimized queries.",
    stack: ["SQL", "MySQL", "Data modeling"],
    mark: "⌗",
    accent: "project-lilac",
  },
  {
    number: "06",
    name: "Plant Light Scanner",
    category: "MOBILE · IoT",
    description:
      "A sensor-led mobile app concept that helps assess light exposure for plants.",
    stack: ["MIT App Inventor", "Sensors", "Mobile"],
    mark: "✳",
    accent: "project-green",
  },
];

const skillGroups = [
  {
    title: "AI & machine learning",
    icon: Sparkles,
    skills: ["Machine learning", "Generative AI", "CNN & Transformer models", "Hugging Face", "Prompt engineering", "Model evaluation"],
  },
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "Java", "JavaScript", "SQL · MySQL", "HTML & CSS"],
  },
  {
    title: "Data & tools",
    icon: BriefcaseBusiness,
    skills: ["Data cleaning", "Statistical analysis", "Visualization", "Google Cloud", "GitHub", "Valkey"],
  },
];

function Portfolio() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Shravani Mamilla, home">
          <span className="wordmark-icon">s.</span>
          <span>Shravani Mamilla</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Projects</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
        </nav>
        <Button asChild variant="outline" size="sm" className="header-resume">
          <a href={resumeAsset.url} target="_blank" rel="noreferrer" aria-label="Open Shravani's resume">
            <ArrowDown size={15} /> Resume
          </a>
        </Button>
      </header>

      <section id="home" className="hero section-wrap">
        <div className="hero-copy">
          <div className="availability"><span className="availability-dot" /> CURIOUS MIND. BUILDING WHAT'S NEXT.</div>
          <h1>Hi, I’m<br /><span>Shravani.</span></h1>
          <p className="hero-lede">Computer science student exploring the places where <em>AI, data &amp; real-world ideas</em> meet.</p>
          <p className="hero-note">Researching models. Making useful things. Learning by building.</p>
          <div className="hero-actions">
            <Button asChild size="lg" className="button-primary">
              <a href="#work">Explore my work <ArrowDownRight size={17} /></a>
            </Button>
            <a className="text-link" href="mailto:shravani299m55@gmail.com">Let’s connect <ArrowUpRight size={15} /></a>
          </div>
          <div className="hero-meta"><MapPin size={14} /> Hyderabad, India <span className="meta-divider">/</span> BE Computer Science ’28</div>
        </div>
        <div className="hero-art" aria-label="Illustrated portrait of Shravani on a leafy campus">
          <div className="art-sun" />
          <div className="portrait-frame"><img src={portrait} alt="A hand-painted illustration of a young woman carrying a laptop on a leafy campus" width={1024} height={1280} fetchPriority="high" /></div>
          <div className="art-stamp"><span>IDEAS TO<br />IMPACT</span><span className="stamp-star">✳</span></div>
          <div className="art-caption"><span>01 / A LITTLE ABOUT ME</span><span>SCROLL TO EXPLORE ↓</span></div>
        </div>
        <div className="hero-index"><span>01</span><span className="index-line" /><span>PORTFOLIO · 2026</span></div>
      </section>

      <section id="about" className="about-section section-wrap">
        <div className="section-kicker"><span>01 — ABOUT</span><span>A little curiosity goes a long way</span></div>
        <div className="about-grid">
          <h2>Curious by nature.<br /><span>Builder by instinct.</span></h2>
          <div className="about-copy">
            <p>I’m a Computer Science Engineering student at Stanley College of Engineering and Technology for Women, drawn to the way intelligent technology can solve everyday problems.</p>
            <p>From researching federated AI for remote patient monitoring to creating ideas at hackathons, I enjoy the full journey: asking better questions, working through the data, and shaping something people can use.</p>
            <a className="text-link" href={resumeAsset.url} target="_blank" rel="noreferrer">A little more on my journey <ArrowUpRight size={15} /></a>
          </div>
        </div>
        <div className="principles-row">
          <div><span>01</span><h3>Start with a real need</h3><p>Good technology begins with listening and asking why.</p></div>
          <div><span>02</span><h3>Stay curious</h3><p>I like exploring a problem from the data all the way to the user.</p></div>
          <div><span>03</span><h3>Build together</h3><p>Team projects and hackathons make ideas stronger.</p></div>
        </div>
      </section>

      <section id="work" className="work-section">
        <div className="section-wrap">
          <div className="section-kicker"><span>02 — SELECTED WORK</span><span>Little ideas, growing into real things</span></div>
          <div className="section-heading-row"><h2>Projects with<br /><span>a purpose.</span></h2><p>A collection of experiments, collaborations, and work in progress across AI, data, and technology.</p></div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className={`project-art ${project.accent}`}><span className="project-number">{project.number} / 06</span><span className="project-mark">{project.mark}</span><span className="project-art-line" /></div>
                <div className="project-body">
                  <div className="project-category">{project.category}</div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="skill-tags">{project.stack.map((skill) => <span key={skill}>{skill}</span>)}</div>
                </div>
                <span className="project-arrow" aria-hidden="true"><ArrowUpRight size={17} /></span>
              </article>
            ))}
          </div>
          <div className="work-footnote"><span>MORE IDEAS IN PROGRESS</span><span>GOOD THINGS TAKE ITERATION <span aria-hidden="true">↗</span></span></div>
        </div>
      </section>

      <section className="skills-section section-wrap">
        <div className="section-kicker"><span>03 — TOOLKIT</span><span>Always learning something new</span></div>
        <div className="section-heading-row"><h2>Things I like<br /><span>to work with.</span></h2><p>A growing toolkit for turning thoughtful questions into working ideas.</p></div>
        <div className="skills-grid">
          {skillGroups.map(({ title, icon: Icon, skills }, index) => (
            <article className="skill-group" key={title}>
              <div className="skill-group-top"><span>0{index + 1}</span><Icon size={19} strokeWidth={1.6} /></div>
              <h3>{title}</h3>
              <div className="skill-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="journey" className="journey-section">
        <div className="section-wrap">
          <div className="section-kicker"><span>04 — THE JOURNEY</span><span>Small steps, big questions</span></div>
          <div className="journey-grid">
            <div><h2>Learning<br />by <span>doing.</span></h2><p>Each experience is a chance to understand a problem more deeply and contribute a little more.</p><Button asChild variant="outline" className="timeline-resume"><a href={resumeAsset.url} target="_blank" rel="noreferrer">View full resume <ExternalLink size={15} /></a></Button></div>
            <div className="timeline">
              <article className="timeline-item"><span className="timeline-dot" /><div className="timeline-date">SEP 2026 — PRESENT <span>INTERNSHIP</span></div><h3>Virtual Data Analyst Intern</h3><div className="timeline-place">YuvalIntern · Remote</div><p>Cleaning and analyzing real-world datasets with Python, then turning findings into visual insights and dashboards.</p></article>
              <article className="timeline-item"><span className="timeline-dot" /><div className="timeline-date">FEB 2026 — JUN 2026 <span>RESEARCH</span></div><h3>AI Research Intern</h3><div className="timeline-place">Universiti Malaysia Kelantan · Online</div><p>Contributed to research on a federated CNN–Transformer for IoT remote patient monitoring, spanning data preparation, model evaluation, and paper writing.</p></article>
              <article className="timeline-item"><span className="timeline-dot" /><div className="timeline-date">2024 — 2028 <span>EDUCATION</span></div><h3>B.E. Computer Science Engineering</h3><div className="timeline-place">Stanley College of Engineering and Technology for Women</div><p>Building a strong foundation in computer science while exploring applied AI, data, and technology through hands-on projects.</p></article>
            </div>
          </div>
        </div>
      </section>

      <section className="recognition-section section-wrap">
        <div className="section-kicker"><span>05 — MILESTONES</span><span>Learning never stays in one place</span></div>
        <div className="recognition-grid">
          <h2>Little wins<br /><span>&amp; new things.</span></h2>
          <div className="recognition-list">
            <div><span>01</span><p>Top 10 team · 3D Printing Hackathon</p><span>MEITY · NIELIT</span></div>
            <div><span>02</span><p>Intensive Generative AI Program</p><span>IIT HYDERABAD</span></div>
            <div><span>03</span><p>Certificate in Generative AI Workshop</p><span>IIT WORKSHOP</span></div>
            <div><span>04</span><p>Gen AI Academy · Cohort 2</p><span>2026</span></div>
            <div><span>05</span><p>Participant · AICWiC Celebration</p><span>ACM-W INDIA · 2026</span></div>
            <div><span>06</span><p>Volunteer · Naimisam Earth Festival</p><span>2026</span></div>
          </div>
        </div>
      </section>

      <footer id="contact" className="contact-section">
        <div className="section-wrap">
          <div className="section-kicker"><span>06 — SAY HELLO</span><span>Good ideas start with a conversation</span></div>
          <div className="contact-content"><div><span className="contact-overline">OPEN TO INTERNSHIPS &amp; COLLABORATION</span><h2>Have a good<br />question? <em>Let’s talk.</em></h2><a className="contact-email" href="mailto:shravani299m55@gmail.com">shravani299m55@gmail.com <ArrowUpRight size={20} /></a></div><div className="contact-side"><p>I’m excited to learn, contribute, and meet people who are making useful things with technology.</p><div className="social-links"><a href="https://www.linkedin.com/in/shravani-mamilla-822adf" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} /></a><a href="https://github.com/160624733299-design" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={14} /></a></div></div></div>
          <div className="footer-bottom"><a className="wordmark footer-wordmark" href="#home"><span className="wordmark-icon">s.</span><span>Shravani Mamilla</span></a><span>MADE WITH CURIOSITY · HYDERABAD, INDIA</span><a href="#home">BACK TO TOP ↑</a></div>
        </div>
      </footer>
    </main>
  );
}