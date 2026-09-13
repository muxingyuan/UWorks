import ConsultationConcept from './consultation-concept';

const services = [
  {
    title: 'TruckMate Automation',
    text: 'Automation around TruckMate, powered by customized stored procedures, schedulers, triggers, and related tools.',
    image: '/images/01 pexels-marcin-jozwiak-199600-6936558.jpg',
    width: 5464,
    height: 3640,
  },
  {
    title: 'Crystal Reports Enhancement',
    text: 'Improve Crystal Reports to meet evolving business needs.',
    image: '/images/02 pexels-polina-tankilevitch-4440889.jpg',
    width: 2000,
    height: 3000,
  },
  {
    title: 'Visualization',
    text: 'Operational and executive KPIs.',
    image: '/images/03 pexels-rdne-7947999.jpg',
    width: 6655,
    height: 4437,
  },
  {
    title: 'Data Model',
    text: 'Curated data models, in the cloud or on premises.',
    image: '/images/04 pexels-technobulka-7540555.jpg',
    width: 3783,
    height: 2522,
  },
  {
    title: 'Chat Agent',
    text: 'Operational and executive chat agents.',
    image: '/images/05 pexels-bertellifotografia-16094061.jpg',
    width: 6720,
    height: 4480,
  },
  {
    title: 'EDI',
    text: 'Continuous improvement of EDI transactions.',
    image: '/images/06 pexels-tiger-lily-4487383.jpg',
    width: 5200,
    height: 3467,
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
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <div id="content">
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="hero-contact" id="contact" aria-label="UWorks contact details">
              <a className="hero-email" href="mailto:xmu@uworks.ca?subject=UWorks consultation request">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M3 5h18v14H3zM3 6l9 7 9-7" />
                </svg>
                <span>xmu@uworks.ca</span>
              </a>
              <a href="tel:+16478543326">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M7 3H4a1 1 0 0 0-1 1c0 9.39 7.61 17 17 17a1 1 0 0 0 1-1v-3l-5-2-1.5 2.5a15.8 15.8 0 0 1-8-8L9 8 7 3Z" />
                </svg>
                <span>(647) 854-3326</span>
              </a>
              <div className="social-links hero-social" aria-label="UWorks social profiles">
                <a href="https://github.com/muxingyuan" target="_blank" rel="noopener noreferrer">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.23c-3.23.7-3.91-1.37-3.91-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.39.97.1-.75.4-1.27.74-1.56-2.58-.29-5.29-1.29-5.29-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.05 0 0 .97-.31 3.16 1.18A10.97 10.97 0 0 1 12 6.11c.98 0 1.95.13 2.87.39 2.19-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.72 5.4-5.31 5.69.42.36.79 1.07.79 2.16v3.24c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .7Z" />
                  </svg>
                  <span>github.com/muxingyuan</span>
                </a>
                <a href="https://www.linkedin.com/in/xingyuanmu/" target="_blank" rel="noopener noreferrer">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.04H3.54V8.98H7.1v11.47Z" />
                  </svg>
                  <span>linkedin.com/in/xingyuanmu</span>
                </a>
              </div>
            </div>
          </div>
          <ConsultationConcept />
        </section>

        <section className="specialties" id="services" aria-labelledby="services-title">
          <div className="section-title">
            <p>What we do</p>
            <h2 id="services-title">Services</h2>
          </div>
          <div className="specialty-list">
            {services.map((service, index) => (
              <article key={service.title}>
                <span>0{index + 1}</span>
                <div className="service-copy">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <img
                  className="service-image"
                  src={service.image}
                  alt=""
                  width={service.width}
                  height={service.height}
                  loading="lazy"
                />
              </article>
            ))}
          </div>
        </section>

        <section className="about" id="about" aria-labelledby="about-title">
          <img
            className="about-photo"
            src="/images/UTF-8_DSC6131small.jpg"
            alt="Xingyuan Mu, founder of UWorks"
            width="2250"
            height="3150"
            loading="lazy"
          />
          <div className="about-content">
            <p>About</p>
            <h2 id="about-title">Clear thinking.<br />Useful systems.</h2>
            <div className="about-copy">
              <p>
                Xingyuan is a good hand in automation around TruckMate, end-to-end Business
                Intelligence building.
              </p>
              <p>
                Her previous employers and current clients appreciate her responsibility,
                reliability, quick and neat deliverables.
              </p>
              <p>She speaks English, French and Chinese.</p>
              <p>She is a walker, gardener and piano learner.</p>
            </div>
          </div>
        </section>

      </div>

      <footer>
        <img src="/brand/uworks-logo.png" alt="UWorks" width="300" height="107" />
        <div className="footer-copy">
          <p>© 2026 UWorks. All rights reserved.</p>
          <div className="photo-credits">
            <p>Photos courtesy of <a href="https://www.pexels.com/" target="_blank" rel="noopener noreferrer">Pexels</a>.</p>
            <p>Thanks to Marcin Jozwiak, Polina Tankilevitch, RDNE Stock Project, TechnoBulka, Bertelli Fotografia, and Tiger Lily.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
