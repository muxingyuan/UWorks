import {
  ArrowRight,
  BarChart3,
  Check,
  Cloud,
  Database,
  Mail,
  MapPin,
  Phone,
  Workflow,
} from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    title: 'Analytics & Power BI',
    text: 'Turn scattered business data into clear dashboards, useful KPIs, and dependable reporting.',
    tags: ['Power BI Desktop', 'Power BI Service', 'Gateway'],
  },
  {
    icon: Cloud,
    title: 'Cloud data platforms',
    text: 'Design practical, maintainable data solutions across Microsoft Fabric, Azure, and Google Cloud.',
    tags: ['Microsoft Fabric', 'Azure', 'Google Cloud'],
  },
  {
    icon: Database,
    title: 'ETL & data warehousing',
    text: 'Build reliable pipelines, SQL Server data models, and reporting-ready foundations.',
    tags: ['ETL', 'SQL Server', 'Data modelling'],
  },
  {
    icon: Workflow,
    title: 'Integration & automation',
    text: 'Improve EDI, DB2, and operational workflows with thoughtful integration and automation.',
    tags: ['EDI', 'DB2', 'Automation'],
  },
];

const projects = [
  {
    number: '01',
    label: 'Reporting modernization',
    title: 'A trusted view of performance',
    text: 'Consolidate disconnected sources into a governed model and Power BI reporting experience built around the decisions your team makes.',
    outcome: 'Less manual reporting. More confidence in the numbers.',
  },
  {
    number: '02',
    label: 'Data platform design',
    title: 'A foundation that can grow',
    text: 'Shape cloud architecture, pipelines, and semantic models that are practical to operate today and ready for tomorrow’s reporting needs.',
    outcome: 'Reliable pipelines. Clear ownership. Easier change.',
  },
  {
    number: '03',
    label: 'EDI & legacy integration',
    title: 'Operations that move smoothly',
    text: 'Troubleshoot, improve, and automate data exchange across EDI workflows, DB2 objects, and connected business systems.',
    outcome: 'Fewer manual steps. Faster issue resolution.',
  },
];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#content">Skip to main content</a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="UWorks home">
          <img src="/brand/uworks-logo.png" alt="UWorks" width="300" height="107" />
        </a>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#work">Our work</a>
          <a className="nav-cta" href="#contact">Book a consultation</a>
        </nav>
      </header>

      <div id="content">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Data & analytics consulting · Markham, Ontario</p>
            <h1>Make your business data work harder.</h1>
            <p className="hero-intro">
              UWorks designs dependable analytics, reporting, and data integration
              solutions that help growing organizations make confident decisions.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Book a free consultation <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="text-link" href="#services">Explore services</a>
            </div>
            <ul className="trust-list" aria-label="UWorks benefits">
              <li><Check size={16} aria-hidden="true" />Business-first advice</li>
              <li><Check size={16} aria-hidden="true" />End-to-end delivery</li>
              <li><Check size={16} aria-hidden="true" />Local, responsive support</li>
            </ul>
          </div>

          <div className="hero-panel" aria-label="UWorks capabilities">
            <div className="panel-topline"><span>UWorks data practice</span><span className="status-dot">Available</span></div>
            <p className="panel-title">From raw data to useful decisions</p>
            <div className="data-flow" aria-hidden="true">
              <span>Sources</span><i /><span>Cloud</span><i /><span>Insights</span>
            </div>
            <dl>
              <div><dt>Platforms</dt><dd>Azure · Fabric · Google Cloud</dd></div>
              <div><dt>Reporting</dt><dd>Power BI · SQL Server</dd></div>
              <div><dt>Integration</dt><dd>ETL · EDI · DB2</dd></div>
            </dl>
          </div>
        </section>

        <section className="services" id="services" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="eyebrow">What we do</p>
            <h2 id="services-title">Practical expertise across your data journey</h2>
          </div>
          <div className="service-grid">
            {services.map(({ icon: Icon, title, text, tags }) => (
              <article className="service-card" key={title}>
                <Icon size={25} strokeWidth={1.7} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
                <ul aria-label={`${title} technologies`}>
                  {tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="about" id="about" aria-labelledby="about-title">
          <div className="about-marker" aria-hidden="true">
            <span>U</span>
            <p>Clear thinking.<br />Useful systems.</p>
          </div>
          <div className="about-copy">
            <p className="eyebrow">About UWorks</p>
            <h2 id="about-title">Senior technical depth, without the big-consulting overhead.</h2>
            <p className="lead">
              Led by Xingyuan, UWorks helps organizations solve complex data challenges
              with a direct, collaborative approach—from discovery and architecture through
              implementation, troubleshooting, and improvement.
            </p>
            <p>
              We focus on solutions your team can understand, trust, and operate. That means
              aligning technology with real business questions, documenting the important
              decisions, and building for long-term usefulness rather than unnecessary complexity.
            </p>
            <a className="text-link" href="#contact">Tell us what you’re working on</a>
          </div>
        </section>

        <section className="work" id="work" aria-labelledby="work-title">
          <div className="work-heading">
            <p className="eyebrow">How we can help</p>
            <h2 id="work-title">Engagements built around useful outcomes</h2>
            <p>Every project starts with your operating reality—not a pre-packaged solution.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-number">{project.number}</div>
                <div>
                  <p className="project-label">{project.label}</p>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                </div>
                <p className="project-outcome">{project.outcome}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="process" aria-labelledby="process-title">
          <div>
            <p className="eyebrow">A straightforward process</p>
            <h2 id="process-title">Clarity at every step</h2>
          </div>
          <ol>
            <li><span>01</span><div><h3>Understand</h3><p>Define the business question, constraints, and measures of success.</p></div></li>
            <li><span>02</span><div><h3>Design</h3><p>Shape the simplest reliable architecture and delivery plan.</p></div></li>
            <li><span>03</span><div><h3>Build</h3><p>Implement, test, document, and keep stakeholders close to progress.</p></div></li>
            <li><span>04</span><div><h3>Improve</h3><p>Support adoption, troubleshoot issues, and refine what matters.</p></div></li>
          </ol>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="contact-copy">
            <p className="eyebrow">Start a conversation</p>
            <h2 id="contact-title">Let’s make your data more useful.</h2>
            <p>Share the challenge you’re facing. We’ll arrange a complimentary introductory conversation and discuss a practical next step.</p>
            <a className="button button-light" href="mailto:xmu@uworks.ca?subject=Free consultation request">
              Email UWorks <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
          <address className="contact-details">
            <a href="mailto:xmu@uworks.ca"><Mail size={20} aria-hidden="true" /><span><small>Email</small>xmu@uworks.ca</span></a>
            <a href="tel:+16478543326"><Phone size={20} aria-hidden="true" /><span><small>Phone</small>(647) 854-3326</span></a>
            <div><MapPin size={20} aria-hidden="true" /><span><small>Office</small>9560 Markham Road, Unit 316<br />Markham, ON L6E 0T9</span></div>
          </address>
        </section>
      </div>

      <footer>
        <a className="brand footer-brand" href="#top" aria-label="UWorks home"><img src="/brand/uworks-logo.png" alt="UWorks" width="300" height="107" /></a>
        <p>Data, analytics, and integration consulting in Canada.</p>
        <p>© 2026 UWorks. All rights reserved.</p>
      </footer>
    </main>
  );
}
