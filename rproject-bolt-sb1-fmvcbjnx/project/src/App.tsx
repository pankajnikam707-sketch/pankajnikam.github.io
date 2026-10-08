import {
  ArrowRight,
  ArrowUp,
  ChevronDown,
  Download,
  Eye,
  FileText,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Briefcase,
  Settings,
  Calculator,
  Users,
  FileSpreadsheet,
  ClipboardList,
  BarChart3,
  Target,
  Zap,
  Lightbulb,
  Layers,
  TrendingUp,
  Sun,
  X,
  ExternalLink,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

/* ============================================================
   Data
   ============================================================ */
const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'operations', label: 'Operations' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const OPS_SNAPSHOT = [
  { icon: Settings, title: 'Business Operations', desc: 'Coordinating day-to-day processes, documentation, and operational support to keep business running smoothly.' },
  { icon: ClipboardList, title: 'Sales Administration', desc: 'Supporting sales workflows, customer order processing, and timely follow-ups across the sales cycle.' },
  { icon: Calculator, title: 'Finance & Accounting', desc: 'Book-keeping, reconciliation, GST filing support, and maintaining accurate financial records.' },
  { icon: Users, title: 'Customer Handling', desc: 'Clear communication with clients and customers, building long-term relationships and trust.' },
  { icon: FileSpreadsheet, title: 'Business Documentation', desc: 'Preparing and managing statutory and business documents with accuracy and compliance.' },
];

const PILLARS = [
  { icon: Settings, tag: 'Pillar 01', title: 'Operations', desc: 'Process coordination, documentation, reconciliation, and business support across teams and functions.' },
  { icon: Calculator, tag: 'Pillar 02', title: 'Finance', desc: 'Accounting, GST support, financial records, invoice processing, and reporting with accuracy.' },
  { icon: Users, tag: 'Pillar 03', title: 'Customer & Sales', desc: 'Customer communication, relationship management, and sales administration that supports retention.' },
];

const EXPERIENCES = [
  {
    role: 'Sales Administration / Business Operations',
    company: 'Cohort',
    duration: '15 Sep 2025 – 15 May 2026',
    points: [
      'Supported business operations and sales administration on a day-to-day basis.',
      'Assisted with customer communication across multiple touchpoints.',
      'Maintained customer relationships to support long-term engagement.',
      'Supported day-to-day sales processes and coordination activities.',
      'Coordinated customer-related activities to ensure smooth operations.',
    ],
  },
  {
    role: 'Junior Accountant',
    company: 'RLSG and Company LLP',
    duration: '25 Jun 2024 – 4 Apr 2025',
    points: [
      'Supported day-to-day accounting activities including book-keeping and ledger maintenance.',
      'Assisted with GST filing and related compliance documentation.',
      'Performed reconciliation and transaction verification for financial accuracy.',
      'Supported stock audit activities including physical and ledger verification.',
      'Assisted clients with business and government documentation requirements.',
      'Worked on documents related to Shop Act, GST, Income Certificate, Udyam, and Aadhaar.',
      'Handled client communication related to documentation and accounting requirements.',
    ],
  },
];

const SKILL_GROUPS = [
  { icon: Settings, title: 'Business Operations', skills: ['Process Coordination', 'Business Documentation', 'Operations Support', 'Data Handling', 'Reporting'] },
  { icon: Calculator, title: 'Finance & Accounting', skills: ['Bookkeeping', 'General Ledger', 'Accounts Payable / Receivable', 'Bank Reconciliation', 'GST Filing Support', 'Invoice Processing', 'Voucher Verification'] },
  { icon: Users, title: 'Sales & Customer', skills: ['Sales Administration', 'Customer Handling', 'Customer Relationship Management', 'Sales Support'] },
  { icon: BarChart3, title: 'Technical', skills: ['MS Excel', 'MS Word', 'PowerPoint', 'Canva', 'Tally / Accounting Systems', 'CRM Tools'] },
];

const EDUCATION = [
  { degree: 'PGDM', inst: 'Institute of Management Development & Research (IMDR), Pune', year: '2026 – 2028', score: 'Pursuing' },
  { degree: 'Graduation — B.Com', inst: 'G.H. Raisoni, Wagholi, Pune', year: '2023 – 2026', score: '7.6 CGPA' },
  { degree: 'HSC', inst: 'Kendriya Vidyalaya | CBSE', year: '2023', score: '75%' },
  { degree: 'SSC', inst: 'Army Public School | CBSE', year: '2021', score: '59%' },
];

const CAREER_AREAS = [
  { icon: Settings, title: 'Business Operations', desc: 'Process-driven roles supporting organizational efficiency.' },
  { icon: TrendingUp, title: 'Finance Operations', desc: 'Accounting, reporting, and financial process support.' },
  { icon: ClipboardList, title: 'Sales Operations', desc: 'Sales administration, coordination, and customer support.' },
  { icon: BarChart3, title: 'Management / Analyst', desc: 'Business analyst and management trainee opportunities.' },
];

const OPS_FLOW = [
  { icon: Lightbulb, step: '01', title: 'Understand' },
  { icon: BarChart3, step: '02', title: 'Analyze' },
  { icon: Layers, step: '03', title: 'Coordinate' },
  { icon: Zap, step: '04', title: 'Execute' },
  { icon: Target, step: '05', title: 'Improve' },
];

/* ============================================================
   Hook: active section scroll-spy
   ============================================================ */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: [0, 0.25, 0.5, 1] },
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

/* ============================================================
   Hook: reveal on scroll
   ============================================================ */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); observer.unobserve(e.target); } }),
      { threshold: 0.12 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ============================================================
   Hook: animated counter
   ============================================================ */
function useCounter(target: number, run: boolean, duration = 1200) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!run) return;
    let start: number | null = null;
    let raf: number;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(progress * target));
      if (progress < 1) raf = requestAnimationFrame(step);
      else setVal(target);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return val;
}

/* ============================================================
   App
   ============================================================ */
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [showTop, setShowTop] = useState(false);
  const [projectVisible, setProjectVisible] = useState(false);
  const projectRef = useRef<HTMLDivElement>(null);

  const activeSection = useActiveSection(NAV_ITEMS.map((n) => n.id));
  useReveal();

  // Theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Back-to-top visibility
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Project counter trigger
  useEffect(() => {
    if (!projectRef.current) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setProjectVisible(true); observer.disconnect(); } }, { threshold: 0.3 });
    observer.observe(projectRef.current);
    return () => observer.disconnect();
  }, []);

  const respondentCount = useCounter(410, projectVisible);

  const closeMenu = () => setMenuOpen(false);
  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  const RESUME_PATH = '/Pankaj_Nikam_Resume.pdf';

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Pankaj Lakshman Nikam',
            jobTitle: 'PGDM Student | Business Operations | Finance & Sales Administration',
            email: 'mailto:pankajnikam707@gmail.com',
            address: { '@type': 'PostalAddress', addressLocality: 'Pune', addressRegion: 'Maharashtra', addressCountry: 'IN' },
            alumniOf: [
              { '@type': 'EducationalOrganization', name: 'Institute of Management Development & Research, Pune' },
              { '@type': 'EducationalOrganization', name: 'G.H. Raisoni, Wagholi, Pune' },
            ],
            knowsAbout: [
              'Business Operations', 'Accounting', 'GST compliance', 'Sales Administration',
              'Client relationship management', 'Business Documentation', 'Bookkeeping', 'Bank Reconciliation',
            ],
          }),
        }}
      />

      {/* ========== Navigation ========== */}
      <header className="navbar">
        <div className="navbar-inner">
          <a href="#home" className="nav-brand" onClick={closeMenu}>
            <span className="nav-brand-mark">PN</span>
            Pankaj Nikam
          </a>

          <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={closeMenu}
                className={activeSection === item.id ? 'active' : ''}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-right">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
              {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
            </button>
            <a className="btn btn-primary btn-sm" href={RESUME_PATH} download onClick={closeMenu}>
              <Download size={15} /> Resume
            </a>
            <button className="menu-btn" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* ========== Hero ========== */}
        <section id="home" className="hero">
          <div className="container">
            <div className="hero-grid">
              <div className="reveal">
                <div className="hero-badge">
                  <span className="hero-badge-dot" /> Open to Internship &amp; Management Opportunities
                </div>
                <h1>Pankaj Lakshman <span className="accent-text">Nikam</span></h1>
                <p className="hero-subtitle">PGDM Student | Business Operations | Finance &amp; Sales Administration</p>
                <p className="hero-intro">
                  Management student with practical experience in accounting, business operations and sales administration.
                  Interested in using analytical thinking, process management and business knowledge to improve organizational performance.
                </p>
                <div className="hero-actions">
                  <a className="btn btn-outline btn-lg" href={RESUME_PATH} target="_blank" rel="noopener">
                    <Eye size={17} /> View Resume
                  </a>
                  <a className="btn btn-primary btn-lg" href={RESUME_PATH} download>
                    <Download size={17} /> Download Resume
                  </a>
                  <a className="btn btn-ghost btn-lg" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={17} /> LinkedIn
                  </a>
                  <a className="btn btn-ghost btn-lg" href="#contact">
                    <Mail size={17} /> Contact Me
                  </a>
                </div>
                <div className="hero-meta">
                  <span><MapPin size={15} /> Pune, Maharashtra</span>
                  <span><GraduationCap size={15} /> PGDM, IMDR Pune</span>
                  <span><Briefcase size={15} /> 2 Professional Roles</span>
                </div>
              </div>

              <div className="hero-card reveal">
                <div className="hero-card-content">
                  <div className="hero-card-name">Pankaj Nikam</div>
                  <div className="hero-card-role">PGDM Student · Operations &amp; Finance</div>
                  <p className="hero-card-quote">
                    Management + Operations + Finance + Sales — bringing together process discipline and people skills.
                  </p>
                  <div className="hero-card-stats">
                    <div className="hero-card-stat">
                      <strong>2</strong><span>Roles</span>
                    </div>
                    <div className="hero-card-stat">
                      <strong>4</strong><span>Skill Groups</span>
                    </div>
                    <div className="hero-card-stat">
                      <strong>410</strong><span>Survey Size</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== Operations Snapshot ========== */}
        <section id="operations" className="section section-alt">
          <div className="container">
            <div className="reveal">
              <div className="section-label">Operations Snapshot</div>
              <h2 className="section-title">Where I add value across business functions.</h2>
              <p className="section-sub">A snapshot of the operational areas I have worked across — combining finance, sales, documentation, and customer handling into one practical skill set.</p>
            </div>
            <div className="ops-snapshot-grid">
              {OPS_SNAPSHOT.map(({ icon: Icon, title, desc }) => (
                <article className="ops-card reveal" key={title}>
                  <div className="ops-card-icon"><Icon size={20} /></div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ========== About / What I Bring ========== */}
        <section id="about" className="section">
          <div className="container">
            <div className="reveal">
              <div className="section-label">What I Bring</div>
              <h2 className="section-title">Three pillars that define my professional approach.</h2>
              <p className="section-sub">My experience spans operations, finance, and customer-facing work. These pillars capture how I contribute to an organization.</p>
            </div>
            <div className="pillars-grid">
              {PILLARS.map(({ icon: Icon, tag, title, desc }) => (
                <article className="pillar-card reveal" key={title}>
                  <div className="pillar-icon"><Icon size={22} /></div>
                  <div className="pillar-tag">{tag}</div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ========== Experience ========== */}
        <section id="experience" className="section section-alt">
          <div className="container">
            <div className="exp-intro reveal">
              <div>
                <div className="section-label">Experience</div>
                <h2 className="section-title">Process-oriented experience across finance and sales operations.</h2>
              </div>
              <p>Each role taught me how business processes, documentation, and customer communication work together. Click to expand the details behind each position.</p>
            </div>
            <div className="exp-timeline">
              {EXPERIENCES.map((exp) => (
                <div className="exp-item reveal" key={exp.company}>
                  <div className="exp-dot" />
                  <div className="exp-card">
                    <div className="exp-card-header">
                      <div>
                        <h3>{exp.role}</h3>
                        <div className="exp-company">{exp.company}</div>
                      </div>
                      <span className="exp-duration">{exp.duration}</span>
                    </div>
                    <details className="exp-details">
                      <summary>View responsibilities <ChevronDown size={15} /></summary>
                      <ul>
                        {exp.points.map((pt, i) => <li key={i}>{pt}</li>)}
                      </ul>
                    </details>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== Skills ========== */}
        <section id="skills" className="section">
          <div className="container">
            <div className="reveal">
              <div className="section-label">Capabilities</div>
              <h2 className="section-title">Skills grouped by function, not by percentages.</h2>
              <p className="section-sub">A practical inventory of what I can do across operations, finance, sales, and tools — presented as clear competencies rather than arbitrary bars.</p>
            </div>
            <div className="skills-grid">
              {SKILL_GROUPS.map(({ icon: Icon, title, skills }) => (
                <article className="skill-group reveal" key={title}>
                  <div className="skill-group-header">
                    <div className="skill-icon"><Icon size={18} /></div>
                    <h3>{title}</h3>
                  </div>
                  <div className="skill-tags">
                    {skills.map((s) => <span className="skill-tag" key={s}>{s}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ========== Projects ========== */}
        <section id="projects" className="section section-alt">
          <div className="container">
            <div className="reveal">
              <div className="section-label">Academic Work</div>
              <h2 className="section-title">Research that connects theory to real career outcomes.</h2>
            </div>
            <div className="project-card reveal" ref={projectRef}>
              <div className="project-card-top">
                <div className="project-tag">Research Project · Case Study</div>
                <h3>A Study on the Impact of Campus Recruitment on Students' Career Opportunities</h3>
              </div>
              <div className="project-card-body">
                <div className="project-stats">
                  <div className="project-stat">
                    <div className="project-stat-icon"><Users size={20} /></div>
                    <div><strong>{respondentCount}+</strong><span>Student respondents surveyed</span></div>
                  </div>
                  <div className="project-stat">
                    <div className="project-stat-icon"><FileText size={20} /></div>
                    <div><strong>Questionnaire</strong><span>Primary survey method used</span></div>
                  </div>
                  <div className="project-stat">
                    <div className="project-stat-icon"><BarChart3 size={20} /></div>
                    <div><strong>Analysis</strong><span>Career opportunities &amp; campus recruitment focus</span></div>
                  </div>
                </div>
                <div className="project-method">
                  <h4>Project Overview</h4>
                  <ul>
                    <li>Research-based academic project exploring campus recruitment effectiveness.</li>
                    <li>Conducted a primary survey with 410 student respondents.</li>
                    <li>Used questionnaire-based analysis to gather structured responses.</li>
                    <li>Focused on how campus recruitment shapes students' career opportunities.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== Education ========== */}
        <section id="education" className="section">
          <div className="container">
            <div className="reveal">
              <div className="section-label">Education</div>
              <h2 className="section-title">An academic foundation in management and commerce.</h2>
            </div>
            <div className="edu-list reveal">
              {EDUCATION.map((edu) => (
                <div className="edu-item" key={edu.degree}>
                  <div className="edu-year">{edu.year}</div>
                  <div className="edu-info">
                    <h3>{edu.degree}</h3>
                    <p>{edu.inst}</p>
                  </div>
                  <div className="edu-score">{edu.score}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== Career Focus ========== */}
        <section className="section section-alt">
          <div className="container">
            <div className="reveal">
              <div className="section-label">Career Focus</div>
              <h2 className="section-title">Roles I am preparing for through PGDM and practical experience.</h2>
            </div>
            <div className="career-grid">
              {CAREER_AREAS.map(({ icon: Icon, title, desc }) => (
                <article className="career-card reveal" key={title}>
                  <div className="career-card-icon"><Icon size={22} /></div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
            <p className="career-note reveal">
              Currently developing management, analytical and operational capabilities through PGDM studies and practical business experience.
            </p>
          </div>
        </section>

        {/* ========== Operations Mindset ========== */}
        <section className="section">
          <div className="container">
            <div className="reveal">
              <div className="section-label">Operations Mindset</div>
              <h2 className="section-title">How I approach business problems.</h2>
            </div>
            <div className="ops-mindset reveal">
              <div className="ops-flow">
                {OPS_FLOW.map(({ icon: Icon, step, title }, idx) => (
                  <div key={title} style={{ display: 'contents' }}>
                    <div className="ops-step">
                      <div className="ops-step-icon"><Icon size={18} /></div>
                      <div className="ops-step-num">STEP {step}</div>
                      <h4>{title}</h4>
                    </div>
                    {idx < OPS_FLOW.length - 1 && (
                      <div className="ops-arrow"><ArrowRight size={20} /></div>
                    )}
                  </div>
                ))}
              </div>
              <p className="ops-mindset-tagline">An operations-focused approach to solving business problems.</p>
            </div>
          </div>
        </section>

        {/* ========== Contact ========== */}
        <section id="contact" className="section section-alt">
          <div className="container">
            <div className="reveal">
              <div className="section-label">Contact</div>
              <h2 className="section-title">Let's connect about opportunities.</h2>
              <p className="section-sub">Open to internship, management trainee, and operations roles. Reach out via email or LinkedIn — I respond promptly.</p>
            </div>
            <div className="contact-grid reveal">
              <div className="contact-left">
                <h2>Get in touch</h2>
                <p>Whether you are a recruiter, placement coordinator, or hiring manager, I would be glad to hear from you.</p>
                <div className="contact-items">
                  <div className="contact-item">
                    <div className="contact-item-icon"><Mail size={19} /></div>
                    <div>
                      <strong>Email</strong>
                      <a href="mailto:pankajnikam707@gmail.com">pankajnikam707@gmail.com</a>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-item-icon"><Linkedin size={19} /></div>
                    <div>
                      <strong>LinkedIn</strong>
                      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-item-icon"><MapPin size={19} /></div>
                    <div>
                      <strong>Location</strong>
                      <span>Pune, Maharashtra</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-right">
                <h3>Open to opportunities</h3>
                <p>Available for roles in business operations, finance operations, sales operations, and management trainee positions.</p>
                <a className="btn btn-lg" href="mailto:pankajnikam707@gmail.com">
                  <Mail size={17} /> Email Me <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========== Footer ========== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">
              <span className="nav-brand-mark">PN</span> Pankaj Nikam
            </div>
            <p className="footer-copy">© 2026 Pankaj Lakshman Nikam · PGDM Student · Pune, Maharashtra</p>
            <div className="footer-links">
              <a href={RESUME_PATH} download>Resume</a>
              <a href="mailto:pankajnikam707@gmail.com">Email</a>
              <a href="#home">Back to top</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ========== Back to top ========== */}
      <button
        className={`back-top ${showTop ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
}

export default App;
