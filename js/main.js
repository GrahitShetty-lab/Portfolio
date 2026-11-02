// Portfolio content and interaction for the static site.
const portfolioData = {
  about: {
    kicker: 'ABOUT',
    heading: 'About me',
    paragraph: 'BTech student in Electronics and Computer Science at SIES Graduate School of Technology. I build backend systems in Python and FastAPI and like turning messy, real-world problems into reliable software, from financial closure tools to computer-vision scanners. Outside code I play and watch sports, read about geopolitics, and enjoy country-related quizzes.'
  },
  services: {
    kicker: 'WHAT I DO',
    heading: 'Services',
    items: [
      { id: 'backend-apis', title: 'BACKEND & APIs', description: 'Designing and building REST backends with Python and FastAPI.', image: 'assets/projects/aasra.png', imageAlt: 'Aasra backend project preview', imageWidth: 1450, imageHeight: 795 },
      { id: 'computer-vision', title: 'COMPUTER VISION', description: 'Image analysis pipelines with OpenCV and scikit-image.', image: 'assets/projects/smaraka.png', imageAlt: 'Smaraka computer-vision project preview', imageWidth: 1919, imageHeight: 933 },
      { id: 'dashboards-web-apps', title: 'DASHBOARDS & WEB APPS', description: 'Responsive interfaces and dashboards for data and monitoring.', image: 'assets/projects/bi2s3ense-dashboard.png', imageAlt: 'Bi₂S₃ense dashboard project preview', imageWidth: 831, imageHeight: 911 }
    ]
  },
  skills: {
    kicker: 'TOOLS & TECHNOLOGIES',
    heading: 'Skills',
    groups: [
      { label: 'Programming & data', items: [
        { name: 'Python', detail: 'Intermediate', note: '(OpenCV, Pandas, NumPy, Matplotlib, Seaborn, Tkinter)' },
        { name: 'C Programming', detail: 'Intermediate' },
        { name: 'PostgreSQL', detail: 'Intermediate' },
        { name: 'Java', detail: 'Basic' },
        { name: 'HTML, CSS, JavaScript', detail: 'Basic' }
      ] },
      { label: 'Tools', items: [
        { name: 'FastAPI' }, { name: 'GitHub' }, { name: 'Figma' }
      ] }
    ],
    spokenLabel: 'Spoken', spoken: ['Hindi', 'English', 'Tulu', 'Marathi'], spokenNote: 'fluent',
    strengthsLabel: 'Strengths', strengths: ['Communication', 'Leadership']
  },
  education: {
    kicker: 'EDUCATION',
    heading: 'Education',
    rows: [
      { id: 'sies', qualification: 'Electronics and Computer Science (BTech)', institution: 'SIES Graduate School of Technology', result: 'CGPA 9.4', year: '2029', initials: 'SIES' },
      { id: 'crc', qualification: 'XII (CBSE)', institution: 'Central Railway College, Kalyan (W)', result: '84.2%', year: '2024', initials: 'CRC' }
    ],
  },
  experienceAchievements: [
    { group: 'POSITIONS OF RESPONSIBILITY', title: 'Technical Coordinator', subtitle: 'Computer Society of India, SIES GST', details: "Helped with changes on the society's official website and organized a hackathon event.", year: 'Aug 2026 – Present', initials: 'CSI' },
    { group: 'POSITIONS OF RESPONSIBILITY', title: 'Editorial Coordinator', subtitle: 'The Institution of Engineers (India), SIES GST', details: 'Prepared event reports, minutes of meetings, official speeches and more.', year: 'Aug 2026 – Present', initials: 'IEI' },
    { group: 'ACHIEVEMENTS', title: 'Enigma 5.0 Hackathon (National Level)', subtitle: 'Selected for the final round, top 10 team in our track.', initials: 'E5' },
    { group: 'ACHIEVEMENTS', title: 'Smart India Hackathon (Internal)', subtitle: 'Selected among the top 45 teams (Python, DBMS, Figma).', initials: 'SIH' },
    { group: 'ACHIEVEMENTS', title: 'Services Selection Board, SSB Allahabad (TES entry)', subtitle: 'Shortlisted and screened in among top candidates.', initials: 'SSB' }
  ],
  projects: [
    {
      id: 'aasra', name: 'Aasra', categories: ['Web & Backend'],
      description: "Secure, family-facing case-management and decision-support backend that reconstructs a deceased person's financial footprint from legitimate evidence and turns uncertainty into an explainable, ranked closure plan.",
      cardText: 'A secure backend that turns legitimate evidence into an explainable financial closure plan.',
      stack: ['Python', 'FastAPI', 'Node.js', 'Render'], role: 'backend',
      github: 'https://github.com/GrahitShetty-lab/enigma_5.0-Code_Breakers',
      live: 'https://enigma50-aasra.vercel.app', image: 'assets/projects/aasra.png', imageWidth: 1450, imageHeight: 795, recognition: 'Enigma 5.0 finalist'
    },
    {
      id: 'smaraka', name: 'Smaraka', categories: ['Computer Vision', 'Web & Backend'], repoPrivate: true,
      description: 'AI-assisted web app that scans photos of Indian heritage monuments, detects visible deterioration with classical computer vision, and generates downloadable PDF preservation reports.',
      cardText: 'A computer-vision scanner that turns monument photos into preservation reports.',
      stack: ['Python', 'FastAPI', 'OpenCV', 'scikit-image'], role: 'solo project',
      live: 'https://smaraka-ai-heritage-preservation-scanner-ica576krc.vercel.app/', image: 'assets/projects/smaraka.png', imageWidth: 1919, imageHeight: 933
    },
    {
      id: 'bi2s3ense', name: 'Bi₂S₃ense', categories: ['Computer Vision', 'Web & Backend'], badge: 'In progress',
      description: 'Responsive web app for industrial workers to monitor hydrogen sulfide (H₂S) exposure through colorimetric badges, with a mobile worker flow and a desktop supervisor dashboard. Analysis is simulated in this prototype.',
      cardText: 'A worker flow and supervisor dashboard for simulated colorimetric H₂S monitoring.',
      stack: ['Python', 'OpenCV', 'FastAPI'], role: 'software side of the build',
      github: 'https://github.com/GrahitShetty-lab/Bi2S3ense',
      live: 'https://grahitshetty-lab.github.io/Bi2S3ense/', image: 'assets/projects/bi2s3ense-worker.png', imageWidth: 796, imageHeight: 897,
      gallery: ['assets/projects/bi2s3ense-dashboard.png']
    },
    {
      id: 'edgefusion', name: 'EdgeFusion', categories: ['IoT'], repoPrivate: true,
      description: 'MicroPython ESP32 prototype for local fire, gas and motion safety monitoring with offline peer-to-peer alerts. Student prototype, not a certified life-safety system.',
      cardText: 'An ESP32 safety-monitoring prototype with offline peer-to-peer alerts.',
      stack: ['ESP32', 'MicroPython', 'Python', 'database', 'Render'], role: 'built the dashboard for the sensors',
      live: 'https://mini-proj-haz7.onrender.com/dashboard/', image: 'assets/projects/edgefusion.png', imageWidth: 1919, imageHeight: 854
    },
    {
      id: 'finance-analyzer', name: 'Finance Analyzer', categories: ['Web & Backend'], repoPrivate: true,
      description: 'Web app for tracking expenses and surfacing automatic spending insights from a CSV upload.',
      cardText: 'A CSV-powered expense tracker that surfaces automatic spending insights.',
      stack: ['Python', 'CSV', 'SQL'], role: 'solo project',
      live: 'https://finance-analyzer-eta.vercel.app/', image: 'assets/projects/finance-analyzer.png', imageWidth: 1895, imageHeight: 955
    }
  ],
  contact: {
    kicker: 'CONTACT',
    talkLabel: "LET'S TALK",
    heading: 'HAVE A PROJECT IN MIND?',
    availability: 'Available for new projects',
    paragraph: "Open to internships and backend projects. Let's build something reliable together.",
    cta: 'Contact Me',
    email: 'mailto:grahitshetty@gmail.com',
    links: [
      { label: 'Grahit Shetty', href: '#top', kind: 'name' },
      { label: 'GitHub', href: 'https://github.com/GrahitShetty-lab', external: true },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/grahit-shetty-210ba1384/', external: true },
      { label: 'Email', href: 'mailto:grahitshetty@gmail.com' },
      { label: 'Download resume', href: 'assets/resume.pdf', download: true }
    ],
    footer: '© 2026 Grahit Anil Shetty',
    backToTop: 'Back to top'
  },
  navigation: [
    { label: 'Work', href: '#work', section: 'work' },
    { label: 'About', href: '#about', section: 'about' },
    { label: 'Services', href: '#services', section: 'services' },
    { label: 'Skills', href: '#skills', section: 'skills' },
    { label: 'Education', href: '#education', section: 'education' },
    { label: 'Contact', href: '#contact', section: 'contact' }
  ]
};

(() => {
  const body = document.body;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const count = document.querySelector('.loader-count');
  const projectGrid = document.querySelector('#work-grid');
  const dialog = document.querySelector('.project-dialog');
  let activeFilter = 'All';
  let lenis = null;
  let revealObserver = null;

  // Short count-in, then reveal the hero.
  const start = performance.now();
  const duration = reducedMotion ? 50 : 700;
  function tick(now) {
    const progress = Math.min(1, (now - start) / duration);
    if (count) count.textContent = String(Math.round(progress * 100)).padStart(2, '0');
    if (progress < 1) requestAnimationFrame(tick);
    else { body.classList.add('is-loaded'); body.classList.remove('is-loading'); }
  }
  requestAnimationFrame(tick);

  function renderContentSections() {
    const aboutSection = document.querySelector('.about-section');
    const serviceSection = document.querySelector('.services-section');
    const skillsSection = document.querySelector('.skills-section');
    const educationSection = document.querySelector('.education-section');

    aboutSection.innerHTML = `
      <div class="about-heading content-reveal"><p class="section-kicker"><span class="eyebrow-dot"></span>${portfolioData.about.kicker}</p><h2 id="about-heading">${portfolioData.about.heading}</h2></div>
      <p class="about-copy content-reveal">${portfolioData.about.paragraph}</p>`;

    const serviceRows = portfolioData.services.items.map((service) => `
      <article class="service-item" data-service="${service.id}">
        <button class="service-trigger" id="service-trigger-${service.id}" type="button" aria-expanded="false" aria-controls="service-panel-${service.id}">
          <span class="service-title">${service.title}</span><span class="service-arrow" aria-hidden="true">↗</span>
        </button>
        <div class="service-panel" id="service-panel-${service.id}" aria-hidden="true" inert>
          <div class="service-panel-inner">
            <p class="service-description">${service.description}</p>
            <button class="service-panel-close" type="button" aria-label="Close ${service.title}">×</button>
            <img class="service-image" src="${service.image}" alt="${service.imageAlt}" width="${service.imageWidth}" height="${service.imageHeight}" loading="lazy">
          </div>
        </div>
      </article>`).join('');
    serviceSection.innerHTML = `
      <div class="services-header content-reveal"><p class="section-kicker"><span class="eyebrow-dot"></span>${portfolioData.services.kicker}</p><h2 id="services-heading">${portfolioData.services.heading}</h2></div>
      <div class="services-list">${serviceRows}</div>`;

    const skillGroups = portfolioData.skills.groups.map((group) => `
      <article class="skill-group content-reveal"><h3>${group.label}</h3><ul>${group.items.map((item) => `<li>${item.name}${item.detail ? `<span class="skill-level">${item.detail}</span>` : ''}${item.note ? `<small>${item.note}</small>` : ''}</li>`).join('')}</ul></article>`).join('');
    skillsSection.innerHTML = `
      <div class="skills-header content-reveal"><p class="section-kicker"><span class="eyebrow-dot"></span>${portfolioData.skills.kicker}</p><h2 id="skills-heading">${portfolioData.skills.heading}</h2></div>
      <div class="skills-groups">${skillGroups}</div>
      <div class="skills-foot content-reveal"><p><span>${portfolioData.skills.spokenLabel}</span>${portfolioData.skills.spoken.join(' · ')} <small>(${portfolioData.skills.spokenNote})</small></p><p><span>${portfolioData.skills.strengthsLabel}</span>${portfolioData.skills.strengths.join(' · ')}</p></div>`;

    const educationRows = portfolioData.education.rows.map((row) => `
      <article class="education-row" data-education-row="${row.id}" data-initials="${row.initials}" data-institution="${row.institution}" tabindex="0">
        <div class="education-copy"><h3>${row.qualification}</h3><p>${row.institution}</p></div>
        <div class="education-result"><span>${row.result}</span><time>${row.year}</time></div>
      </article>`).join('');
    const experienceGroups = [...new Set(portfolioData.experienceAchievements.map((entry) => entry.group))].map((group) => {
      const rows = portfolioData.experienceAchievements.filter((entry) => entry.group === group).map((entry) => `
        <article class="education-row experience-row" tabindex="0" data-initials="${entry.initials || ''}" data-institution="${entry.subtitle || ''}">
          <div class="education-copy"><h3>${entry.title}</h3>${entry.subtitle ? `<p>${entry.subtitle}</p>` : ''}${entry.details ? `<p class="experience-detail">${entry.details}</p>` : ''}</div>
          ${entry.year ? `<div class="education-result"><time>${entry.year}</time></div>` : ''}
        </article>`).join('');
      return `<section class="experience-group content-reveal"><h3>${group}</h3><div class="education-list">${rows}</div></section>`;
    }).join('');
    educationSection.innerHTML = `
      <div class="education-header content-reveal"><p class="section-kicker"><span class="eyebrow-dot"></span>${portfolioData.education.kicker}</p><h2 id="education-heading">${portfolioData.education.heading}</h2></div>
      <div class="education-list">${educationRows}</div>
      ${experienceGroups}
      <div class="education-cursor-preview" aria-hidden="true"><span class="preview-initials">SIES</span><small class="preview-institution">${portfolioData.education.rows[0].institution}</small></div>`;

    bindServiceAccordion(serviceSection);
    bindEducationPreview(educationSection);
  }

  function renderSiteChrome() {
    const navigation = document.querySelector('.topbar-nav');
    navigation.innerHTML = portfolioData.navigation.map((item) =>
      `<a class="nav-link" href="${item.href}" data-section="${item.section}">${item.label}</a>`
    ).join('');
    document.querySelector('.topbar-link').innerHTML = `${portfolioData.contact.talkLabel || "LET'S TALK"}<span aria-hidden="true">↗</span>`;

    const contactLinks = portfolioData.contact.links.map((item) =>
      `<a class="contact-pill${item.kind === 'name' ? ' contact-name' : ''}" href="${item.href}"${item.external ? ' target="_blank" rel="noopener noreferrer"' : ''}${item.download ? ' download' : ''}>${item.label}${item.kind === 'name' ? '' : '<span aria-hidden="true">↗</span>'}</a>`
    ).join('');
    document.querySelector('.contact-section').innerHTML = `
      <p class="section-kicker content-reveal"><span class="eyebrow-dot"></span>${portfolioData.contact.kicker}</p>
      <h2 class="contact-heading content-reveal" id="contact-heading">${portfolioData.contact.heading}</h2>
      <p class="availability-pill content-reveal"><span></span>${portfolioData.contact.availability}</p>
      <p class="contact-copy content-reveal">${portfolioData.contact.paragraph}</p>
      <a class="button button-dark contact-cta content-reveal" href="${portfolioData.contact.email}">${portfolioData.contact.cta}<span aria-hidden="true">↗</span></a>
      <nav class="contact-links content-reveal" aria-label="Contact and social links">${contactLinks}</nav>`;
    document.querySelector('.site-footer').innerHTML = `
      <span>${portfolioData.contact.footer}</span><a href="#top">${portfolioData.contact.backToTop}<span aria-hidden="true">↑</span></a>`;
  }

  function setupNavigation() {
    const header = document.querySelector('.topbar');
    const nav = document.querySelector('.topbar-nav');
    const toggle = document.querySelector('.nav-toggle');
    let previousY = window.scrollY;
    let scrollTicking = false;
    const setMenu = (open) => {
      nav.classList.toggle('is-open', open);
      header.classList.toggle('is-menu-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    };
    toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
    nav.addEventListener('click', (event) => { if (event.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { setMenu(false); toggle.focus(); }
    });
    document.querySelector('.topbar-link').addEventListener('click', () => setMenu(false));

    const observer = new IntersectionObserver((entries) => {
      const active = entries.filter((entry) => entry.isIntersecting)
        .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top))[0];
      if (!active) return;
      nav.querySelectorAll('.nav-link').forEach((link) => {
        const current = link.dataset.section === active.target.id;
        link.classList.toggle('is-active', current);
        if (current) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-24% 0px -68% 0px', threshold: 0 });
    portfolioData.navigation.forEach((item) => {
      const section = document.getElementById(item.section);
      if (section) observer.observe(section);
    });
    window.addEventListener('scroll', () => {
      if (scrollTicking) return;
      scrollTicking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        header.classList.toggle('is-hidden', y > 100 && y > previousY + 5 && toggle.getAttribute('aria-expanded') !== 'true');
        if (y < 80 || y < previousY - 5) header.classList.remove('is-hidden');
        previousY = y;
        scrollTicking = false;
      });
    }, { passive: true });
  }

  function setupDesktopPointerEffects() {
    const fineHover = window.matchMedia('(min-width: 901px) and (hover: hover) and (pointer: fine)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!fineHover.matches || reduced.matches) return;

    const hero = document.querySelector('.hero');
    const portrait = hero?.querySelector('.portrait-image');
    const outlinedName = hero?.querySelector('.outline-word');
    const solidName = hero?.querySelector('.solid-word');
    if (!hero || !portrait || !outlinedName || !solidName) return;

    const cursorDot = document.createElement('div');
    cursorDot.className = 'custom-cursor-dot';
    cursorDot.setAttribute('aria-hidden', 'true');
    const cursorRing = document.createElement('div');
    cursorRing.className = 'custom-cursor-ring';
    cursorRing.setAttribute('aria-hidden', 'true');
    const cursorLabel = document.createElement('span');
    cursorLabel.className = 'custom-cursor-label';
    cursorRing.append(cursorLabel);
    document.body.append(cursorDot, cursorRing);

    const magnetSelector = '.hero-copy .button, .contact-cta, .topbar-link, .social-stack a, .contact-pill, .nav-link';
    const magnets = [...document.querySelectorAll(magnetSelector)].map((element) => ({
      element,
      fixedHeader: Boolean(element.closest('.topbar')),
      currentX: 0,
      currentY: 0,
      targetX: 0,
      targetY: 0,
      centerX: 0,
      centerY: 0
    }));
    const pointer = { clientX: 0, clientY: 0, pageX: 0, pageY: 0, active: false, nativeZone: null, hoverTarget: null };
    const cursor = { x: 0, y: 0, ringX: 0, ringY: 0, scale: 1, targetScale: 1, visible: false, keyboard: false, view: false };
    const heroBounds = { left: 0, top: 0, width: 1, height: 1 };
    let frame = 0;
    let selectionActive = false;

    function refreshGeometry() {
      const heroRect = hero.getBoundingClientRect();
      heroBounds.left = heroRect.left + window.scrollX;
      heroBounds.top = heroRect.top + window.scrollY;
      heroBounds.width = Math.max(1, heroRect.width);
      heroBounds.height = Math.max(1, heroRect.height);
      magnets.forEach((magnet) => {
        const rect = magnet.element.getBoundingClientRect();
        magnet.centerX = rect.left + rect.width / 2 + (magnet.fixedHeader ? 0 : window.scrollX);
        magnet.centerY = rect.top + rect.height / 2 + (magnet.fixedHeader ? 0 : window.scrollY);
      });
    }

    function setNativeZone(element, kind) {
      if (pointer.nativeZone) pointer.nativeZone.classList.remove('cursor-native-text', 'cursor-native-control');
      pointer.nativeZone = element || null;
      if (element) element.classList.add(kind === 'control' ? 'cursor-native-control' : 'cursor-native-text');
      cursorRing.classList.toggle('is-suspended', Boolean(element) || selectionActive);
      cursorDot.classList.toggle('is-suspended', Boolean(element) || selectionActive);
    }

    function setHoverTarget(target) {
      pointer.hoverTarget = target;
      const interactive = target?.closest('a, button, [role="button"]');
      const privateLabel = target?.closest('.private-repo');
      const textZone = interactive ? null : target?.closest('input, textarea, select, [contenteditable="true"], p, h1, h2, h3, h4, h5, h6, li, blockquote, figcaption');
      if (privateLabel) {
        setNativeZone(privateLabel, 'control');
      } else if (textZone) {
        const kind = /^(INPUT|TEXTAREA|SELECT)$/.test(textZone.tagName) || textZone.isContentEditable ? 'control' : 'text';
        setNativeZone(textZone, kind);
      } else {
        setNativeZone(null);
      }

      const overProject = Boolean(target?.closest('.project-card'));
      const isInteractive = Boolean(interactive && !privateLabel);
      cursor.view = overProject && !pointer.nativeZone;
      cursor.targetScale = cursor.view ? 1.58 : isInteractive ? 1.38 : 1;
      cursorLabel.textContent = cursor.view ? 'View' : '';
      cursorRing.classList.toggle('is-view', cursor.view);
      cursorRing.classList.toggle('is-interactive', isInteractive && !cursor.view);
      startFrame();
    }

    function setHeroTarget(pageX, pageY) {
      const nx = Math.max(-1, Math.min(1, ((pageX - heroBounds.left) / heroBounds.width) * 2 - 1));
      const ny = Math.max(0, Math.min(1, (pageY - heroBounds.top) / heroBounds.height));
      hero.style.setProperty('--parallax-portrait-x', `${nx * 3}px`);
      hero.style.setProperty('--parallax-portrait-y', `${-ny * 12}px`);
      hero.style.setProperty('--parallax-outline-x', `${-nx * 8}px`);
      hero.style.setProperty('--parallax-outline-y', `${(ny - .5) * 8}px`);
      hero.style.setProperty('--parallax-solid-x', `${nx * 5}px`);
      hero.style.setProperty('--parallax-solid-y', `${(.5 - ny) * 5}px`);
    }

    function updateMagnetTargets() {
      const pointerX = pointer.pageX;
      const pointerY = pointer.pageY;
      magnets.forEach((magnet) => {
        if (magnet.fixedHeader && magnet.element.closest('.topbar')?.classList.contains('is-hidden')) {
          magnet.targetX = 0;
          magnet.targetY = 0;
          return;
        }
        const x = pointerX - magnet.centerX;
        const y = pointerY - magnet.centerY;
        const distance = Math.hypot(x, y);
        const radius = 118;
        const pull = distance < radius && distance > 0 ? 8 * (1 - distance / radius) ** 2 : 0;
        magnet.targetX = distance ? (x / distance) * pull : 0;
        magnet.targetY = distance ? (y / distance) * pull : 0;
      });
    }

    function setPointerPosition(event) {
      pointer.clientX = event.clientX;
      pointer.clientY = event.clientY;
      pointer.pageX = event.clientX + window.scrollX;
      pointer.pageY = event.clientY + window.scrollY;
      pointer.active = true;
      cursor.visible = true;
      cursor.keyboard = false;
      cursor.x = pointer.clientX;
      cursor.y = pointer.clientY;
      cursorDot.classList.add('is-visible');
      cursorRing.classList.add('is-visible');
      document.body.classList.add('has-custom-cursor');
      setHeroTarget(pointer.pageX, pointer.pageY);
      updateMagnetTargets();
    }

    function handlePointerMove(event) {
      if (event.pointerType !== 'mouse' || !fineHover.matches || reduced.matches || document.hidden) return;
      if (!document.body.classList.contains('has-custom-cursor')) setPointerPosition(event);
      else {
        pointer.clientX = event.clientX;
        pointer.clientY = event.clientY;
        pointer.pageX = event.clientX + window.scrollX;
        pointer.pageY = event.clientY + window.scrollY;
        pointer.active = true;
        cursor.visible = true;
        cursor.keyboard = false;
        cursor.x = pointer.clientX;
        cursor.y = pointer.clientY;
        setHeroTarget(pointer.pageX, pointer.pageY);
        updateMagnetTargets();
      }
      if (pointer.hoverTarget) setHoverTarget(pointer.hoverTarget);
      startFrame();
    }

    function handleFocusIn(event) {
      const target = event.target.closest?.('a, button, [role="button"], input, textarea, select, [tabindex]');
      if (!target) return;
      if (/^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName) || target.isContentEditable) {
        setNativeZone(target, 'control');
        return;
      }
      const rect = target.getBoundingClientRect();
      cursor.x = rect.left + rect.width / 2;
      cursor.y = rect.top + rect.height / 2;
      cursor.visible = true;
      cursor.keyboard = true;
      cursor.targetScale = 1.35;
      cursorRing.classList.remove('is-suspended');
      cursorRing.classList.add('is-visible', 'is-keyboard');
      cursorDot.classList.remove('is-visible');
      startFrame();
    }

    function handleFocusOut() {
      window.setTimeout(() => {
        if (document.activeElement?.matches?.('a, button, [role="button"], [tabindex], input, textarea, select')) return;
        cursor.keyboard = false;
        cursor.visible = pointer.active;
        cursorRing.classList.remove('is-keyboard');
        cursorRing.classList.toggle('is-visible', pointer.active && !pointer.nativeZone && !selectionActive);
        cursorDot.classList.toggle('is-visible', pointer.active && !pointer.nativeZone && !selectionActive);
        cursor.targetScale = 1;
        startFrame();
      }, 0);
    }

    function handleSelectionChange() {
      selectionActive = Boolean(window.getSelection()?.toString());
      document.body.classList.toggle('has-text-selection', selectionActive);
      cursorRing.classList.toggle('is-suspended', selectionActive || Boolean(pointer.nativeZone));
      cursorDot.classList.toggle('is-suspended', selectionActive || Boolean(pointer.nativeZone));
    }

    function handlePointerLeave() {
      pointer.active = false;
      document.body.classList.remove('has-custom-cursor');
      cursor.visible = false;
      cursorDot.classList.remove('is-visible');
      if (!cursor.keyboard) cursorRing.classList.remove('is-visible');
      if (pointer.nativeZone) setNativeZone(null);
      hero.style.setProperty('--parallax-portrait-x', '0px');
      hero.style.setProperty('--parallax-portrait-y', '0px');
      hero.style.setProperty('--parallax-outline-x', '0px');
      hero.style.setProperty('--parallax-outline-y', '0px');
      hero.style.setProperty('--parallax-solid-x', '0px');
      hero.style.setProperty('--parallax-solid-y', '0px');
      magnets.forEach((magnet) => { magnet.targetX = 0; magnet.targetY = 0; });
      cursor.targetScale = 1;
      startFrame();
    }

    function animateFrame() {
      frame = 0;
      if (document.hidden || reduced.matches || !fineHover.matches) return;
      const ease = (current, target, amount = .18) => current + (target - current) * amount;
      cursor.ringX = ease(cursor.ringX, cursor.x, .19);
      cursor.ringY = ease(cursor.ringY, cursor.y, .19);
      cursor.scale = ease(cursor.scale, cursor.targetScale, .2);
      cursorDot.style.setProperty('--cursor-x', `${cursor.x}px`);
      cursorDot.style.setProperty('--cursor-y', `${cursor.y}px`);
      cursorRing.style.setProperty('--cursor-x', `${cursor.ringX}px`);
      cursorRing.style.setProperty('--cursor-y', `${cursor.ringY}px`);
      cursorRing.style.setProperty('--cursor-scale', cursor.scale.toFixed(3));

      let moving = Math.abs(cursor.ringX - cursor.x) > .15 || Math.abs(cursor.ringY - cursor.y) > .15 || Math.abs(cursor.scale - cursor.targetScale) > .005;
      magnets.forEach((magnet) => {
        magnet.currentX = ease(magnet.currentX, magnet.targetX, .2);
        magnet.currentY = ease(magnet.currentY, magnet.targetY, .2);
        magnet.element.style.translate = `${magnet.currentX.toFixed(2)}px ${magnet.currentY.toFixed(2)}px`;
        if (Math.abs(magnet.currentX - magnet.targetX) > .08 || Math.abs(magnet.currentY - magnet.targetY) > .08) moving = true;
      });
      if (moving) frame = requestAnimationFrame(animateFrame);
    }

    function startFrame() {
      if (!frame && !document.hidden && !reduced.matches && fineHover.matches) frame = requestAnimationFrame(animateFrame);
    }

    refreshGeometry();
    window.addEventListener('resize', refreshGeometry, { passive: true });
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave, { passive: true });
    document.addEventListener('pointerover', (event) => {
      if (event.pointerType !== 'mouse' || !fineHover.matches || reduced.matches) return;
      if (!document.body.classList.contains('has-custom-cursor')) setPointerPosition(event);
      setHoverTarget(event.target);
    }, { passive: true });
    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);
    document.addEventListener('selectionchange', handleSelectionChange);
    hero.addEventListener('pointerenter', (event) => {
      if (event.pointerType !== 'mouse') return;
      setHeroTarget(event.clientX + window.scrollX, event.clientY + window.scrollY);
      startFrame();
    }, { passive: true });
    hero.addEventListener('pointerleave', () => {
      hero.style.setProperty('--parallax-portrait-x', '0px');
      hero.style.setProperty('--parallax-portrait-y', '0px');
      hero.style.setProperty('--parallax-outline-x', '0px');
      hero.style.setProperty('--parallax-outline-y', '0px');
      hero.style.setProperty('--parallax-solid-x', '0px');
      hero.style.setProperty('--parallax-solid-y', '0px');
      startFrame();
    }, { passive: true });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      } else if (!document.hidden && (pointer.active || cursor.keyboard)) {
        startFrame();
      }
    });
  }

  function bindServiceAccordion(section) {
    function closeItem(item, restoreFocus = false) {
      item.classList.remove('is-open');
      item.querySelector('.service-trigger').setAttribute('aria-expanded', 'false');
      const panel = item.querySelector('.service-panel');
      panel.setAttribute('aria-hidden', 'true');
      panel.inert = true;
      if (restoreFocus) item.querySelector('.service-trigger').focus();
    }
    section.addEventListener('click', (event) => {
      const closeButton = event.target.closest('.service-panel-close');
      if (closeButton) {
        closeItem(closeButton.closest('.service-item'), true);
        return;
      }
      const trigger = event.target.closest('.service-trigger');
      if (!trigger) return;
      const targetItem = trigger.closest('.service-item');
      const shouldOpen = !targetItem.classList.contains('is-open');
      section.querySelectorAll('.service-item.is-open').forEach((item) => closeItem(item));
      if (shouldOpen) {
        targetItem.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
        const panel = targetItem.querySelector('.service-panel');
        panel.setAttribute('aria-hidden', 'false');
        panel.inert = false;
      }
    });
    section.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      const openItem = section.querySelector('.service-item.is-open');
      if (openItem) { event.preventDefault(); closeItem(openItem, true); }
    });
  }

  function bindEducationPreview(section) {
    const preview = section.querySelector('.education-cursor-preview');
    const initials = preview.querySelector('.preview-initials');
    const institution = preview.querySelector('.preview-institution');
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    function setActive(row, event) {
      section.querySelectorAll('.education-row').forEach((item) => item.classList.toggle('is-muted', item !== row));
      initials.textContent = row.dataset.initials || '';
      institution.textContent = row.dataset.institution || '';
      if (!finePointer) return;
      const rect = section.getBoundingClientRect();
      const x = event?.clientX ?? row.getBoundingClientRect().right - 30;
      const y = event?.clientY ?? row.getBoundingClientRect().top + 30;
      const left = Math.max(12, Math.min(rect.width - 205, x - rect.left + 18));
      const top = Math.max(90, Math.min(section.offsetHeight - 150, y - rect.top + 18));
      preview.style.left = `${left}px`;
      preview.style.top = `${top}px`;
      preview.classList.add('is-visible');
    }
    function clearActive() {
      section.querySelectorAll('.education-row').forEach((item) => item.classList.remove('is-muted'));
      preview.classList.remove('is-visible');
    }
    section.addEventListener('pointerover', (event) => {
      if (!finePointer) return;
      const row = event.target.closest('.education-row');
      if (row && !row.contains(event.relatedTarget)) setActive(row, event);
    });
    section.addEventListener('pointermove', (event) => {
      const row = event.target.closest('.education-row');
      if (finePointer && row) setActive(row, event);
    });
    section.addEventListener('pointerout', (event) => {
      const row = event.target.closest('.education-row');
      if (row && !row.contains(event.relatedTarget) && !section.contains(event.relatedTarget)) clearActive();
    });
    section.addEventListener('focusin', (event) => {
      const row = event.target.closest('.education-row');
      if (row) setActive(row);
    });
    section.addEventListener('focusout', (event) => {
      if (!section.contains(event.relatedTarget)) clearActive();
    });
  }

  function setupFallbackReveals() {
    if (reducedMotion || !('IntersectionObserver' in window)) return;
    revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); }
    }), { threshold: .12 });
    document.querySelectorAll('.content-reveal, .work-section > *, .project-card').forEach((el) => {
      el.classList.add('reveal'); revealObserver.observe(el);
    });
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src; script.async = true;
      script.onload = resolve; script.onerror = () => reject(new Error(`Could not load ${src}`));
      document.head.append(script);
    });
  }

  function loadMotionLibraries() {
    return loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js')
      .then(() => loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js'))
      .then(() => loadScript('https://cdn.jsdelivr.net/npm/lenis@1.1.20/dist/lenis.min.js').catch(() => {}));
  }

  function setupSmoothScroll() {
    if (reducedMotion) return;
    if (!window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);
    if (!lenis && window.Lenis) {
      lenis = new Lenis({ duration: 1.05, smoothWheel: true, touchMultiplier: 1.4 });
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    }
    gsap.utils.toArray('.content-reveal, .work-section > *').forEach((element) => {
      gsap.fromTo(element, { opacity: 0, y: 22 }, {
        opacity: 1, y: 0, duration: .7, ease: 'power2.out', clearProps: 'transform',
        scrollTrigger: { trigger: element, start: 'top 90%', once: true }
      });
    });
    if (revealObserver) projectGrid.querySelectorAll('.project-card').forEach((card) => { card.classList.add('reveal'); revealObserver.observe(card); });
    setupCardReveals();
  }

  function projectCard(project, index) {
    const chips = project.stack.map((item) => `<span class="tag-chip">${item}</span>`).join('');
    const cats = project.categories.join(' · ');
    const repositoryLink = project.repoPrivate
      ? '<span class="tag-chip private-repo" aria-label="Private repository"><svg viewBox="0 0 16 16" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="7" rx="1.5"/><path d="M5.25 7V5a2.75 2.75 0 0 1 5.5 0v2"/></svg>Private repo</span>'
      : `<a href="${project.github}" target="_blank" rel="noopener">GitHub ↗</a>`;
    return `<article class="project-card" data-project="${project.id}" data-categories="${project.categories.join('|')}" style="--card-index:${index}">
      <button class="project-card-button" type="button" data-open-project="${project.id}" aria-label="View ${project.name} project details">
        <span class="project-art"><img src="${project.image}" alt="${project.name} project screenshot" width="${project.imageWidth}" height="${project.imageHeight}" loading="lazy"><span class="project-placeholder"><small>PROJECT PREVIEW</small><strong>${project.name}</strong></span>${project.badge ? `<span class="project-badge">${project.badge}</span>` : ''}${project.recognition ? `<span class="project-recognition">${project.recognition}</span>` : ''}<span class="project-open" aria-hidden="true">↗</span></span>
        <span class="project-card-info"><span class="project-info-top"><span class="project-title">${project.name}</span><span class="project-role">${project.role}</span></span><span class="project-one-line">${project.cardText}</span><span class="project-tags">${chips}</span></span>
      </button>
      <div class="project-card-links"><span class="project-categories">${cats}</span><span>${repositoryLink}<a href="${project.live}" target="_blank" rel="noopener">Live &rarr;</a></span></div>
    </article>`;
  }

  function renderProjects(filter = activeFilter) {
    activeFilter = filter;
    const projects = portfolioData.projects.filter((project) => filter === 'All' || project.categories.includes(filter));
    projectGrid.innerHTML = projects.map(projectCard).join('');
    projectGrid.querySelectorAll('.project-art img').forEach((img) => {
      img.addEventListener('load', () => img.closest('.project-art').classList.add('has-image'), { once: true });
      img.addEventListener('error', () => img.remove(), { once: true });
      if (img.complete && img.naturalWidth) img.closest('.project-art').classList.add('has-image');
    });
    projectGrid.querySelectorAll('.project-card').forEach((card, index) => {
      if (!reducedMotion) card.style.animationDelay = `${Math.min(index, 4) * 65}ms`;
    });
    if (revealObserver) projectGrid.querySelectorAll('.project-card').forEach((card) => { card.classList.add('reveal'); revealObserver.observe(card); });
    setupCardReveals();
  }

  function setupCardReveals() {
    if (reducedMotion) return;
    if (!window.gsap || !window.ScrollTrigger) return;
    gsap.utils.toArray('.project-card').forEach((element, index) => {
      if (element.dataset.revealed) return;
      element.dataset.revealed = 'true';
      gsap.fromTo(element, { opacity: 0, y: 24 }, {
        opacity: 1, y: 0, duration: .65, delay: (index % 2) * .1, ease: 'power2.out', clearProps: 'transform',
        scrollTrigger: { trigger: element, start: 'top 92%', once: true }
      });
    });
  }

  document.querySelectorAll('.filter-button').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelector('.filter-button.is-active')?.classList.remove('is-active');
      document.querySelector('.filter-button[aria-pressed="true"]')?.setAttribute('aria-pressed', 'false');
      button.classList.add('is-active'); button.setAttribute('aria-pressed', 'true');
      const oldCards = [...projectGrid.children];
      oldCards.forEach((card) => card.classList.add('is-filtering-out'));
      const draw = () => renderProjects(button.dataset.filter);
      if (reducedMotion || !oldCards.length) draw(); else window.setTimeout(draw, 180);
    });
  });

  const detail = {
    title: document.querySelector('#detail-title'), description: document.querySelector('.detail-description'),
    categories: document.querySelector('.detail-categories'), stack: document.querySelector('.detail-stack'), role: document.querySelector('.detail-role'),
    live: document.querySelector('.detail-live'), github: document.querySelector('.detail-github'), image: document.querySelector('.detail-image'),
    placeholder: document.querySelector('.preview-placeholder'), preview: document.querySelector('.detail-preview'), caption: document.querySelector('.preview-caption'), gallery: document.querySelector('.detail-gallery'), award: document.querySelector('.detail-award')
  };
  detail.privateRepo = document.createElement('span');
  detail.privateRepo.className = 'tag-chip private-repo detail-private-repo';
  detail.privateRepo.tabIndex = 0;
  detail.privateRepo.setAttribute('role', 'note');
  detail.privateRepo.setAttribute('aria-label', 'Private repository');
  detail.privateRepo.setAttribute('aria-describedby', 'private-repo-help');
  detail.privateRepo.innerHTML = '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="3.25" y="7" width="9.5" height="7" rx="1.5"/><path d="M5.25 7V5a2.75 2.75 0 0 1 5.5 0v2"/></svg>Private repo';
  detail.privateRepo.hidden = true;
  detail.privateRepoHelp = document.createElement('p');
  detail.privateRepoHelp.className = 'private-repo-help';
  detail.privateRepoHelp.id = 'private-repo-help';
  detail.privateRepoHelp.textContent = 'Source code is private. Available on request.';
  detail.privateRepoHelp.hidden = true;
  detail.github.after(detail.privateRepo, detail.privateRepoHelp);
  function openProject(project, updateHash = true) {
    if (!project || !dialog) return;
    detail.title.textContent = project.name;
    detail.description.textContent = project.description;
    detail.categories.textContent = project.categories.join(' / ');
    detail.stack.innerHTML = project.stack.map((item) => `<span class="tag-chip">${item}</span>`).join('');
    detail.role.textContent = project.role;
    detail.live.href = project.live;
    detail.github.hidden = Boolean(project.repoPrivate);
    detail.privateRepo.hidden = !project.repoPrivate;
    detail.privateRepoHelp.hidden = !project.repoPrivate;
    if (!project.repoPrivate) detail.github.href = project.github;
    detail.image.hidden = true; detail.image.src = project.image; detail.image.alt = `${project.name} project preview`;
    detail.image.width = project.imageWidth; detail.image.height = project.imageHeight;
    detail.award.textContent = project.recognition || '';
    detail.award.hidden = !project.recognition;
    detail.image.onload = () => { detail.image.hidden = false; detail.preview.classList.add('has-image'); };
    detail.image.onerror = () => { detail.image.hidden = true; detail.preview.classList.remove('has-image'); };
    detail.placeholder.dataset.title = project.name;
    detail.gallery.innerHTML = (project.gallery || []).map((src, index) => '<img src="' + src + '" alt="' + project.name + ' project screenshot ' + (index + 2) + '" width="831" height="911" loading="lazy">').join('');
    detail.gallery.hidden = !(project.gallery && project.gallery.length);
    detail.caption.textContent = `${project.name} — project preview`;
    if (!dialog.open) dialog.showModal();
    if (updateHash) history.pushState({ project: project.id }, '', `#project-${project.id}`);
  }
  function closeProject() {
    if (dialog.open) dialog.close();
    if (location.hash.startsWith('#project-')) history.replaceState(null, '', `${location.pathname}${location.search}`);
  }
  projectGrid.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-open-project]');
    if (trigger) openProject(portfolioData.projects.find((project) => project.id === trigger.dataset.openProject));
  });
  document.querySelector('.detail-close').addEventListener('click', closeProject);
  dialog.addEventListener('click', (event) => { if (event.target === dialog) closeProject(); });
  dialog.addEventListener('close', () => { if (location.hash.startsWith('#project-')) history.replaceState(null, '', `${location.pathname}${location.search}`); });
  window.addEventListener('popstate', () => {
    const id = location.hash.startsWith('#project-') ? location.hash.slice(9) : null;
    if (id) openProject(portfolioData.projects.find((project) => project.id === id), false);
    else if (dialog.open) dialog.close();
  });
  const initialProject = location.hash.startsWith('#project-') ? location.hash.slice(9) : null;
  if (initialProject) openProject(portfolioData.projects.find((project) => project.id === initialProject), false);

  renderSiteChrome();
  renderContentSections();
  renderProjects();
  setupNavigation();
  setupDesktopPointerEffects();
  setupFallbackReveals();
  if (!reducedMotion) loadMotionLibraries().then(setupSmoothScroll).catch(() => {});
})();
