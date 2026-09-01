const specialties = [
  {
    title: 'Analytics & Reporting',
    text: 'Clear dashboards and dependable reporting with Power BI, Microsoft Fabric, and SQL Server.',
  },
  {
    title: 'Cloud Data Solutions',
    text: 'Practical data platforms and pipelines across Microsoft Azure and Google Cloud.',
  },
  {
    title: 'Integration & Automation',
    text: 'Reliable ETL, EDI, and DB2 solutions that reduce manual work and keep information moving.',
  },
];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#content">Skip to main content</a>

      <header>
        <a className="logo" href="#home" aria-label="UWorks home">
          <img src="/brand/uworks-logo.png" alt="UWorks" width="300" height="107" />
        </a>
        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#specialties">Specialties</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <div id="content">
        <section className="hero" id="home">
          <p>Data & analytics consulting</p>
          <h1>Make your business data work harder.</h1>
          <a className="button" href="#contact">Start a conversation</a>
        </section>

        <section className="specialties" id="specialties" aria-labelledby="specialties-title">
          <div className="section-title">
            <p>What we do</p>
            <h2 id="specialties-title">Specialties</h2>
          </div>
          <div className="specialty-list">
            {specialties.map((specialty, index) => (
              <article key={specialty.title}>
                <span>0{index + 1}</span>
                <h3>{specialty.title}</h3>
                <p>{specialty.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about" id="about" aria-labelledby="about-title">
          <div>
            <p>About</p>
            <h2 id="about-title">Clear thinking.<br />Useful systems.</h2>
          </div>
          <div className="about-copy">
            <p>
              UWorks helps organizations solve complex data challenges with practical,
              maintainable solutions. Led by Xingyuan, we work directly with clients from
              planning and architecture through implementation and support.
            </p>
            <p>
              Our focus is simple: technology that answers real business questions and
              works reliably for the people who use it.
            </p>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <p>Contact</p>
          <h2 id="contact-title">Let’s talk about your data.</h2>
          <a className="button button-light" href="mailto:xmu@uworks.ca?subject=UWorks consultation request">xmu@uworks.ca</a>
          <div className="contact-details">
            <a href="tel:+16478543326">(647) 854-3326</a>
            <address>9560 Markham Road, Unit 316<br />Markham, Ontario L6E 0T9</address>
          </div>
        </section>
      </div>

      <footer>
        <img src="/brand/uworks-logo.png" alt="UWorks" width="300" height="107" />
        <p>© 2026 UWorks. All rights reserved.</p>
      </footer>
    </main>
  );
}
