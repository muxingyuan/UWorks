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
            <p>Data & analytics consulting</p>
            <h1>Make your business data work harder.</h1>
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
            <a href="https://www.linkedin.com/in/xingyuanmu/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <address>9560 Markham Road, Unit 316<br />Markham, Ontario L6E 0T9</address>
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
