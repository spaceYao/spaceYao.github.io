const researchThemes = [
  {
    number: '01',
    label: 'Jupiter · Saturn',
    title: 'Giant-planet magnetospheres',
    text: 'Global structure, rotating plasma systems, cusps, current sheets, and the dynamics that distinguish rapidly rotating giant planets.',
    paper: 'Rotating finger-like structures of Jovian magnetodisc · GRL, 2025',
  },
  {
    number: '02',
    label: 'X-ray · UV · In situ',
    title: 'Aurorae and high-energy emissions',
    text: 'Connecting remote-sensing signatures with in-situ plasma measurements to identify how planetary aurorae are powered.',
    paper: 'Evidence for Alfvén waves powering auroral arc · Nature Communications, 2026',
  },
  {
    number: '03',
    label: 'Energy release',
    title: 'Reconnection and particle acceleration',
    text: 'Comparative studies of magnetic reconnection, dipolarization, current disruption, and energetic-particle transport across planets.',
    paper: 'Reconnection and current disruption in Jupiter’s middle magnetosphere · ApJL, 2024',
  },
  {
    number: '04',
    label: 'Coupled systems',
    title: 'Waves and magnetosphere–ionosphere coupling',
    text: 'Tracing how plasma waves, electric fields, and field-aligned processes transfer energy from magnetospheres into ionospheres.',
    paper: 'Global features of 10–60-min ULF waves at Jupiter · JGR Planets, 2024',
  },
  {
    number: '05',
    label: 'Methods',
    title: 'Comparative and data-driven planetary science',
    text: 'Combining spacecraft archives, numerical models, and machine learning to identify shared physics across planetary environments.',
    paper: 'A unified framework for global auroral morphologies · Nature Astronomy, 2024',
  },
];

const projects = [
  {
    year: '2026–',
    role: 'Project Coordinator',
    title: 'Low-Cost Cislunar Transportation and Lunar Flash Observation',
    support: 'HK$33.672M · Innovation and Technology Support Programme',
    tag: 'Earth–Moon systems',
  },
  {
    year: '2026',
    role: 'Principal Investigator',
    title: 'NSFC Young Scientists Fund (Type A)',
    support: 'CNY 4.0M · National Natural Science Foundation of China',
    tag: 'Planetary space science',
  },
  {
    year: '2026',
    role: 'Principal Investigator',
    title: 'Effect of Jovian Magnetic Field Curvature on Particle Pitch-Angle Scattering',
    support: 'HK$1.279M · RGC General Research Fund',
    tag: 'Jupiter',
  },
  {
    year: '2025',
    role: 'Principal Investigator',
    title: 'Jupiter’s Space Environment and Exploration Principles',
    support: 'CNY 2.26M · National Key R&D Programme',
    tag: 'Mission science',
  },
  {
    year: '2024',
    role: 'Principal Investigator',
    title: 'Periodic Perturbations in the Jupiter Magnetosphere–Ionosphere System',
    support: 'HK$910K · RGC General Research Fund',
    tag: 'Coupled dynamics',
  },
];

const exchangeMilestones = [
  ['2026–Present', 'Director, HKU Laboratory for Space Research'],
  ['2026', 'Science Core Team Member, Tianwen-4'],
  ['2024–2026', 'President, Planetary Science Section, AOGS'],
  ['2024–Present', 'Director, Planetary Space Environment Laboratory, HKU-SIRI'],
  ['2024', 'Science teams for Tianwen-2 and the Chang’e-8 X-ray instrument'],
];

const honours = [
  'Kamide Lecture Award · AOGS, 2021',
  'NASA Cassini Group Achievement Award · 2018',
  'Arne Richter Award · EGU, 2018',
  'Winton Capital Award · Royal Astronomical Society, 2017',
];

const communityAreas = [
  ['Postdoctoral researchers', 'Planetary plasma, auroral physics, and mission data analysis'],
  ['Postgraduate researchers', 'Spacecraft observations, theory, numerical modelling, and machine learning'],
  ['Mission collaborators & visitors', 'International observatories, planetary missions, and comparative space physics'],
];

export default function App() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Zhonghua Yao home">
          <span>ZHONGHUA</span> YAO
        </a>
        <nav aria-label="Primary navigation">
          <a href="#research">Research work</a>
          <a href="#exchange">Knowledge exchange</a>
          <a href="#projects">Key projects</a>
          <a href="#team">Team members</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">Planetary space physics · The University of Hong Kong</p>
          <h1>Exploring how planets connect with space.</h1>
          <p className="hero-intro">
            Prof. Zhonghua Yao investigates planetary magnetospheres, aurorae,
            plasma dynamics, and the physical processes that shape space
            environments across the Solar System.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#research">Explore the research</a>
            <a className="button button-secondary" href="#projects">View key projects</a>
            <a className="button button-secondary" href="#team">Meet the team</a>
          </div>
        </div>

        <aside className="profile-card" aria-label="Professor Zhonghua Yao profile">
          <div className="photo-frame">
            <img src="/zhonghua-yao.png" alt="Prof. Zhonghua Yao speaking in front of a planetary image" />
          </div>
          <p className="profile-kicker">Professor Zhonghua Yao</p>
          <h2>Director, Laboratory of Space Research</h2>
          <p>Department of Earth and Planetary Sciences, The University of Hong Kong</p>
          <div className="profile-meta">
            <span>Ph.D. Space Physics · PKU</span>
            <span>B.Sc. Physics · CNU</span>
          </div>
        </aside>
      </section>

      <section className="section research-section" id="research" aria-labelledby="research-title">
        <div className="section-heading">
          <p className="section-number">01 / Research work</p>
          <h2 id="research-title">Planetary systems as natural plasma laboratories.</h2>
          <p>
            Spacecraft observations, multi-wavelength imaging, physical theory,
            and numerical modelling reveal how mass and energy move through
            planetary space environments.
          </p>
        </div>
        <div className="research-grid">
          {researchThemes.map((item, index) => (
            <article className={`research-card ${index === 0 ? 'research-card-featured' : ''}`} key={item.number}>
              <div className="card-topline"><span>{item.number}</span><span>{item.label}</span></div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="paper-note"><span>Selected work</span>{item.paper}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="exchange-section" id="exchange" aria-labelledby="exchange-title">
        <div className="exchange-intro">
          <p className="section-number">02 / Knowledge exchange</p>
          <h2 id="exchange-title">Turning research into missions, partnerships, and scientific leadership.</h2>
          <p>
            Knowledge exchange connects fundamental planetary physics with
            observatory programmes, space-mission design, international
            coordination, and the next generation of space scientists.
          </p>
          <div className="mission-band" aria-label="Mission and observatory collaborations">
            {['Tianwen-4', 'Tianwen-2', 'Chang’e-8', 'Juno', 'Cassini', 'HST', 'XMM-Newton', 'Chandra'].map((mission) => (
              <span key={mission}>{mission}</span>
            ))}
          </div>
        </div>
        <div className="timeline" aria-label="Knowledge exchange milestones">
          {exchangeMilestones.map(([year, text]) => (
            <div className="timeline-row" key={`${year}-${text}`}>
              <time>{year}</time><p>{text}</p>
            </div>
          ))}
        </div>
        <div className="honours-panel">
          <p className="mini-label">Selected recognition</p>
          <div className="honours-grid">
            {honours.map((honour) => <p key={honour}>{honour}</p>)}
          </div>
        </div>
      </section>

      <section className="section projects-section" id="projects" aria-labelledby="projects-title">
        <div className="section-heading compact-heading">
          <p className="section-number">03 / Key projects</p>
          <h2 id="projects-title">Research programmes spanning Jupiter to the Moon.</h2>
          <p>Selected current projects listed in the August 2026 curriculum vitae.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-row" key={project.title}>
              <div className="project-year">{project.year}</div>
              <div className="project-main">
                <p>{project.role}</p>
                <h3>{project.title}</h3>
                <span>{project.support}</span>
              </div>
              <div className="project-tag">{project.tag}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="team-section" id="team" aria-labelledby="team-title">
        <div className="team-heading">
          <p className="section-number">04 / Team members</p>
          <h2 id="team-title">A collaborative group for planetary exploration.</h2>
        </div>
        <div className="team-layout">
          <article className="leader-card">
            <img src="/zhonghua-yao.png" alt="Prof. Zhonghua Yao" />
            <div>
              <p className="mini-label">Group lead</p>
              <h3>Zhonghua Yao</h3>
              <strong>Director, Laboratory of Space Research</strong>
              <p>Planetary magnetospheres, auroral processes, plasma dynamics, and space mission science.</p>
            </div>
          </article>
          <div className="community-list">
            {communityAreas.map(([title, text], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
            <p className="roster-note">Individual member profiles will be added as the current roster and photographs are confirmed.</p>
          </div>
        </div>
      </section>

      <footer>
        <div>
          <a className="wordmark footer-mark" href="#top"><span>ZHONGHUA</span> YAO</a>
          <p>Planetary space physics · Research, missions, and exploration</p>
        </div>
        <address>
          Department of Earth and Planetary Sciences<br />
          The University of Hong Kong · Pok Fu Lam, Hong Kong
        </address>
        <a className="back-to-top" href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
