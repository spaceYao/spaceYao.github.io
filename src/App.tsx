import { useEffect, useState } from 'react';

type Language = 'en' | 'zh';

const missions = ['Tianwen-4', 'Tianwen-2', 'Chang’e-8', 'Juno', 'Cassini', 'HST', 'XMM-Newton', 'Chandra'];

const translations = {
  en: {
    pageTitle: 'Zhonghua Yao | Planetary Space Physics',
    pageDescription: 'Academic homepage of Prof. Zhonghua Yao, Director, Laboratory of Space Research at The University of Hong Kong.',
    navLabel: 'Primary navigation',
    nav: ['Research work', 'Knowledge exchange', 'Key projects', 'Team members'],
    toggleLabel: '切换至中文',
    toggleText: '中文',
    hero: {
      eyebrow: 'Planetary space physics · The University of Hong Kong',
      title: 'Exploring how planets connect with space.',
      intro: 'Prof. Zhonghua Yao investigates planetary magnetospheres, aurorae, plasma dynamics, and the physical processes that shape space environments across the Solar System.',
      actions: ['Explore the research', 'View key projects', 'Meet the team'],
    },
    profile: {
      aria: 'Professor Zhonghua Yao profile',
      alt: 'Prof. Zhonghua Yao speaking in front of a planetary image',
      kicker: 'Professor Zhonghua Yao',
      title: 'Director, Laboratory of Space Research',
      department: 'Department of Earth and Planetary Sciences, The University of Hong Kong',
      phd: 'Ph.D. Space Physics · PKU',
      bsc: 'B.Sc. Physics · CNU',
    },
    research: {
      label: '01 / Research work',
      title: 'Planetary systems as natural plasma laboratories.',
      intro: 'Spacecraft observations, multi-wavelength imaging, physical theory, and numerical modelling reveal how mass and energy move through planetary space environments.',
      selected: 'Selected work',
      themes: [
        {
          number: '01', label: 'Jupiter · Saturn', title: 'Giant-planet magnetospheres',
          text: 'Global structure, rotating plasma systems, cusps, current sheets, and the dynamics that distinguish rapidly rotating giant planets.',
          paper: 'Rotating finger-like structures of Jovian magnetodisc · GRL, 2025',
        },
        {
          number: '02', label: 'X-ray · UV · In situ', title: 'Aurorae and high-energy emissions',
          text: 'Connecting remote-sensing signatures with in-situ plasma measurements to identify how planetary aurorae are powered.',
          paper: 'Evidence for Alfvén waves powering auroral arc · Nature Communications, 2026',
        },
        {
          number: '03', label: 'Energy release', title: 'Reconnection and particle acceleration',
          text: 'Comparative studies of magnetic reconnection, dipolarization, current disruption, and energetic-particle transport across planets.',
          paper: 'Reconnection and current disruption in Jupiter’s middle magnetosphere · ApJL, 2024',
        },
        {
          number: '04', label: 'Coupled systems', title: 'Waves and magnetosphere–ionosphere coupling',
          text: 'Tracing how plasma waves, electric fields, and field-aligned processes transfer energy from magnetospheres into ionospheres.',
          paper: 'Global features of 10–60-min ULF waves at Jupiter · JGR Planets, 2024',
        },
        {
          number: '05', label: 'Methods', title: 'Comparative and data-driven planetary science',
          text: 'Combining spacecraft archives, numerical models, and machine learning to identify shared physics across planetary environments.',
          paper: 'A unified framework for global auroral morphologies · Nature Astronomy, 2024',
        },
      ],
    },
    exchange: {
      label: '02 / Knowledge exchange',
      title: 'Turning research into missions, partnerships, and scientific leadership.',
      intro: 'Knowledge exchange connects fundamental planetary physics with observatory programmes, space-mission design, international coordination, and the next generation of space scientists.',
      missionLabel: 'Mission and observatory collaborations',
      timelineLabel: 'Knowledge exchange milestones',
      milestones: [
        ['2026–Present', 'Director, HKU Laboratory for Space Research'],
        ['2026', 'Science Core Team Member, Tianwen-4'],
        ['2024–2026', 'President, Planetary Science Section, AOGS'],
        ['2024–Present', 'Director, Planetary Space Environment Laboratory, HKU-SIRI'],
        ['2024', 'Science teams for Tianwen-2 and the Chang’e-8 X-ray instrument'],
      ],
      recognition: 'Selected recognition',
      honours: [
        'Kamide Lecture Award · AOGS, 2021',
        'NASA Cassini Group Achievement Award · 2018',
        'Arne Richter Award · EGU, 2018',
        'Winton Capital Award · Royal Astronomical Society, 2017',
      ],
    },
    projects: {
      label: '03 / Key projects',
      title: 'Research programmes spanning Jupiter to the Moon.',
      intro: 'Selected current projects listed in the August 2026 curriculum vitae.',
      items: [
        {
          year: '2026–', role: 'Project Coordinator',
          title: 'Low-Cost Cislunar Transportation and Lunar Flash Observation',
          support: 'HK$33.672M · Innovation and Technology Support Programme', tag: 'Earth–Moon systems',
        },
        {
          year: '2026', role: 'Principal Investigator', title: 'NSFC Young Scientists Fund (Type A)',
          support: 'CNY 4.0M · National Natural Science Foundation of China', tag: 'Planetary space science',
        },
        {
          year: '2026', role: 'Principal Investigator',
          title: 'Effect of Jovian Magnetic Field Curvature on Particle Pitch-Angle Scattering',
          support: 'HK$1.279M · RGC General Research Fund', tag: 'Jupiter',
        },
        {
          year: '2025', role: 'Principal Investigator', title: 'Jupiter’s Space Environment and Exploration Principles',
          support: 'CNY 2.26M · National Key R&D Programme', tag: 'Mission science',
        },
        {
          year: '2024', role: 'Principal Investigator',
          title: 'Periodic Perturbations in the Jupiter Magnetosphere–Ionosphere System',
          support: 'HK$910K · RGC General Research Fund', tag: 'Coupled dynamics',
        },
      ],
    },
    team: {
      label: '04 / Team members',
      title: 'A collaborative group for planetary exploration.',
      lead: 'Group lead',
      leadTitle: 'Director, Laboratory of Space Research',
      leadResearch: 'Planetary magnetospheres, auroral processes, plasma dynamics, and space mission science.',
      areas: [
        ['Postdoctoral researchers', 'Planetary plasma, auroral physics, and mission data analysis'],
        ['Postgraduate researchers', 'Spacecraft observations, theory, numerical modelling, and machine learning'],
        ['Mission collaborators & visitors', 'International observatories, planetary missions, and comparative space physics'],
      ],
      note: 'Individual member profiles will be added as the current roster and photographs are confirmed.',
    },
    footer: {
      tagline: 'Planetary space physics · Research, missions, and exploration',
      department: 'Department of Earth and Planetary Sciences',
      address: 'The University of Hong Kong · Pok Fu Lam, Hong Kong',
      top: 'Back to top ↑',
    },
  },
  zh: {
    pageTitle: '姚中华｜行星空间物理',
    pageDescription: '香港大学空间研究实验室主任姚中华教授的学术主页。',
    navLabel: '主导航',
    nav: ['研究工作', '知识交流', '重点项目', '团队成员'],
    toggleLabel: 'Switch to English',
    toggleText: 'EN',
    hero: {
      eyebrow: '行星空间物理 · 香港大学',
      title: '探索行星如何与太空相连。',
      intro: '姚中华教授研究行星磁层、极光、等离子体动力学，以及塑造太阳系行星空间环境的基本物理过程。',
      actions: ['探索研究方向', '查看重点项目', '认识研究团队'],
    },
    profile: {
      aria: '姚中华教授简介',
      alt: '姚中华教授在行星图像前作报告',
      kicker: '姚中华 教授',
      title: '空间研究实验室主任',
      department: '香港大学地球与行星科学系',
      phd: '博士 · 空间物理 · 北京大学',
      bsc: '学士 · 物理学 · 首都师范大学',
    },
    research: {
      label: '01 / 研究工作',
      title: '把行星系统视为天然的等离子体实验室。',
      intro: '通过航天器观测、多波段成像、物理理论与数值模拟，揭示物质和能量如何在行星空间环境中传输。',
      selected: '代表性工作',
      themes: [
        {
          number: '01', label: '木星 · 土星', title: '巨行星磁层',
          text: '研究全球磁层结构、旋转等离子体系统、尖点区、电流片，以及快速自转巨行星特有的动力学过程。',
          paper: '木星磁盘中的旋转指状结构 · GRL，2025',
        },
        {
          number: '02', label: 'X 射线 · 紫外 · 原位观测', title: '极光与高能辐射',
          text: '结合遥感信号与原位等离子体测量，识别行星极光的能量来源与粒子加速过程。',
          paper: '阿尔芬波通过静电势降驱动极光弧的证据 · Nature Communications，2026',
        },
        {
          number: '03', label: '能量释放', title: '磁重联与粒子加速',
          text: '比较不同星体上的磁重联、偶极化、电流中断与高能粒子输运，寻找跨行星的共同物理机制。',
          paper: '木星中磁层内磁重联与电流中断的共位现象 · ApJL，2024',
        },
        {
          number: '04', label: '耦合系统', title: '波动与磁层—电离层耦合',
          text: '追踪等离子体波动、电场与沿磁力线过程如何将能量从磁层传递到电离层。',
          paper: '木星磁层 10–60 分钟超低频波的全球特征 · JGR Planets，2024',
        },
        {
          number: '05', label: '研究方法', title: '比较行星学与数据驱动研究',
          text: '结合航天器档案、数值模型和机器学习，识别不同种类行星空间环境中共有的物理规律。',
          paper: '不同行星全球极光形态的统一框架 · Nature Astronomy，2024',
        },
      ],
    },
    exchange: {
      label: '02 / 知识交流',
      title: '让基础研究走向空间任务、国际合作与科学领导。',
      intro: '知识交流把行星物理基础研究与天文台观测计划、空间任务设计、国际科学协作以及新一代空间科学人才培养连接起来。',
      missionLabel: '空间任务与天文台合作',
      timelineLabel: '知识交流里程碑',
      milestones: [
        ['2026年至今', '香港大学空间研究实验室主任'],
        ['2026', '天问四号任务科学核心组成员'],
        ['2024–2026', '亚洲—大洋洲地球科学学会（AOGS）行星科学分会主席'],
        ['2024年至今', '香港大学深圳研究院行星空间环境实验室主任'],
        ['2024', '天问二号任务及嫦娥八号 X 射线载荷科学团队成员'],
      ],
      recognition: '代表性荣誉',
      honours: [
        'Kamide Lecture Award · AOGS，2021',
        'NASA 卡西尼团队成就奖 · 2018',
        'Arne Richter Award · EGU，2018',
        'Winton Capital Award · 英国皇家天文学会，2017',
      ],
    },
    projects: {
      label: '03 / 重点项目',
      title: '从木星到月球的科研计划。',
      intro: '以下为 2026 年 8 月个人履历中列出的部分在研项目。',
      items: [
        {
          year: '2026年至今', role: '项目统筹', title: '低成本地月转运与月面闪光观测',
          support: '港币 3,367.2 万元 · 创新及科技支援计划', tag: '地月系统',
        },
        {
          year: '2026', role: '项目负责人', title: '国家自然科学基金青年科学基金项目（A类）',
          support: '人民币 400 万元 · 国家自然科学基金委员会', tag: '行星空间科学',
        },
        {
          year: '2026', role: '项目负责人', title: '木星磁场曲率对粒子投掷角散射的影响',
          support: '港币 127.93 万元 · 研究资助局优配研究金', tag: '木星',
        },
        {
          year: '2025', role: '项目负责人', title: '木星空间环境与探测原理重大科学问题研究（课题 4）',
          support: '人民币 226 万元 · 国家重点研发计划', tag: '任务科学',
        },
        {
          year: '2024', role: '项目负责人', title: '木星磁层—电离层系统周期性扰动的全球图景与机制',
          support: '港币 91.07 万元 · 研究资助局优配研究金', tag: '耦合动力学',
        },
      ],
    },
    team: {
      label: '04 / 团队成员',
      title: '面向行星探测的协作型研究团队。',
      lead: '团队负责人',
      leadTitle: '空间研究实验室主任',
      leadResearch: '行星磁层、极光过程、等离子体动力学与空间任务科学。',
      areas: [
        ['博士后研究人员', '行星等离子体、极光物理与空间任务数据分析'],
        ['研究生', '航天器观测、物理理论、数值模拟与机器学习'],
        ['任务合作伙伴与访问学者', '国际天文台、行星探测任务与比较空间物理'],
      ],
      note: '待确认最新成员名单与照片后，将逐步加入个人简介。',
    },
    footer: {
      tagline: '行星空间物理 · 科研、任务与探索',
      department: '香港大学地球与行星科学系',
      address: '香港薄扶林',
      top: '返回顶部 ↑',
    },
  },
} as const;

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = window.localStorage.getItem('spaceyao-language');
    return saved === 'zh' ? 'zh' : 'en';
  });
  const t = translations[language];

  useEffect(() => {
    window.localStorage.setItem('spaceyao-language', language);
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.title = t.pageTitle;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.pageDescription);
  }, [language, t.pageDescription, t.pageTitle]);

  const toggleLanguage = () => setLanguage((current) => current === 'en' ? 'zh' : 'en');

  return (
    <main className={`lang-${language}`}>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Zhonghua Yao home">
          <span>ZHONGHUA</span> YAO
        </a>
        <div className="header-right">
          <nav aria-label={t.navLabel}>
            <a href="#research">{t.nav[0]}</a>
            <a href="#exchange">{t.nav[1]}</a>
            <a href="#projects">{t.nav[2]}</a>
            <a href="#team">{t.nav[3]}</a>
          </nav>
          <button className="language-toggle" type="button" onClick={toggleLanguage} aria-label={t.toggleLabel}>
            {t.toggleText}
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>{t.hero.title}</h1>
          <p className="hero-intro">{t.hero.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#research">{t.hero.actions[0]}</a>
            <a className="button button-secondary" href="#projects">{t.hero.actions[1]}</a>
            <a className="button button-secondary" href="#team">{t.hero.actions[2]}</a>
          </div>
        </div>

        <aside className="profile-card" aria-label={t.profile.aria}>
          <div className="photo-frame">
            <img src="/zhonghua-yao.png" alt={t.profile.alt} />
          </div>
          <p className="profile-kicker">{t.profile.kicker}</p>
          <h2>{t.profile.title}</h2>
          <p>{t.profile.department}</p>
          <div className="profile-meta">
            <span>{t.profile.phd}</span>
            <span>{t.profile.bsc}</span>
          </div>
        </aside>
      </section>

      <section className="section research-section" id="research" aria-labelledby="research-title">
        <div className="section-heading">
          <p className="section-number">{t.research.label}</p>
          <h2 id="research-title">{t.research.title}</h2>
          <p>{t.research.intro}</p>
        </div>
        <div className="research-grid">
          {t.research.themes.map((item, index) => (
            <article className={`research-card ${index === 0 ? 'research-card-featured' : ''}`} key={item.number}>
              <div className="card-topline"><span>{item.number}</span><span>{item.label}</span></div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="paper-note"><span>{t.research.selected}</span>{item.paper}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="exchange-section" id="exchange" aria-labelledby="exchange-title">
        <div className="exchange-intro">
          <p className="section-number">{t.exchange.label}</p>
          <h2 id="exchange-title">{t.exchange.title}</h2>
          <p>{t.exchange.intro}</p>
          <div className="mission-band" aria-label={t.exchange.missionLabel}>
            {missions.map((mission) => <span key={mission}>{mission}</span>)}
          </div>
        </div>
        <div className="timeline" aria-label={t.exchange.timelineLabel}>
          {t.exchange.milestones.map(([year, text]) => (
            <div className="timeline-row" key={`${year}-${text}`}>
              <time>{year}</time><p>{text}</p>
            </div>
          ))}
        </div>
        <div className="honours-panel">
          <p className="mini-label">{t.exchange.recognition}</p>
          <div className="honours-grid">
            {t.exchange.honours.map((honour) => <p key={honour}>{honour}</p>)}
          </div>
        </div>
      </section>

      <section className="section projects-section" id="projects" aria-labelledby="projects-title">
        <div className="section-heading compact-heading">
          <p className="section-number">{t.projects.label}</p>
          <h2 id="projects-title">{t.projects.title}</h2>
          <p>{t.projects.intro}</p>
        </div>
        <div className="project-list">
          {t.projects.items.map((project) => (
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
          <p className="section-number">{t.team.label}</p>
          <h2 id="team-title">{t.team.title}</h2>
        </div>
        <div className="team-layout">
          <article className="leader-card">
            <img src="/zhonghua-yao.png" alt={t.profile.kicker} />
            <div>
              <p className="mini-label">{t.team.lead}</p>
              <h3>{language === 'zh' ? '姚中华' : 'Zhonghua Yao'}</h3>
              <strong>{t.team.leadTitle}</strong>
              <p>{t.team.leadResearch}</p>
            </div>
          </article>
          <div className="community-list">
            {t.team.areas.map(([title, text], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
            <p className="roster-note">{t.team.note}</p>
          </div>
        </div>
      </section>

      <footer>
        <div>
          <a className="wordmark footer-mark" href="#top"><span>ZHONGHUA</span> YAO</a>
          <p>{t.footer.tagline}</p>
        </div>
        <address>{t.footer.department}<br />{t.footer.address}</address>
        <a className="back-to-top" href="#top">{t.footer.top}</a>
      </footer>
    </main>
  );
}
