// script.js - navigation, typing, year, interactions

// Mobile Navigation Toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
  // close menu when click a link
  navLinks.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      if (navLinks.classList.contains("open")) {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
}

// Typing effect
const texts = ["Full-Stack Developer", "Automation Engineer", "Frontend & Backend"];
let idx = 0, pos = 0;
const el = document.getElementById('typing');
function type() {
  if (!el) return;
  const str = texts[idx % texts.length];
  el.textContent = str.slice(0, pos);
  pos++;
  if (pos > str.length) { pos = 0; idx++; setTimeout(type, 900); }
  else setTimeout(type, 80);
}
type();

// Year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// make hero image rotate slowly (class added via JS)
const heroImg = document.querySelector('.hero-image img');
if (heroImg) heroImg.classList.add('rotate-slow');

// Initializing Particles
if (typeof particlesJS !== 'undefined') {
  particlesJS('particles-js', {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: '#00ff9d' },
      shape: { type: 'circle' },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#00ff9d',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 3,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'grab' },
        onclick: { enable: true, mode: 'push' },
        resize: true
      },
      modes: {
        grab: { distance: 140, line_linked: { opacity: 1 } },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });
}

// 3D Tilt Effect for Project Cards (Vanilla JS)
const tiltCards = document.querySelectorAll('.project-card');

tiltCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate rotation: center of card is (0,0)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Max rotation deg (e.g. 15deg)
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    // Apply transform
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  });

  // Reset on leave
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  });
});

// Stats Counter Animation
const counters = document.querySelectorAll('.stat-number[data-target]');
const statsSection = document.getElementById('stats');
let started = false; // Function started ? No

if (statsSection && counters.length > 0) {
  const statsObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !started) {
      started = true;
      counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const suffix = counter.getAttribute('data-suffix') || '';
        const duration = 2000; // ms
        const increment = target / (duration / 16); // 60fps

        let current = 0;
        const updateCounter = () => {
          current += increment;
          if (current < target) {
            counter.innerText = Math.ceil(current) + suffix;
            requestAnimationFrame(updateCounter);
          } else {
            counter.innerText = target + suffix;
          }
        };
        updateCounter();
      });
    }
  });
  statsObserver.observe(statsSection);
}

// Active Progressive Enhancement for Animations
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('in-view');
    observer.unobserve(entry.target);
  });
}, appearOptions);

// Initialize: Only hide elements if we are ready to animate them
faders.forEach(f => {
  f.classList.add('ready-to-animate'); // CSS sets opacity: 0
  appearOnScroll.observe(f);
});

/* LANGUAGE SWITCHER */
const translations = {
  tg: {
    nav_home: "Асоси",
    nav_about: "Дар бораи ман",
    nav_skills: "Малакахо",
    skills_title: "Малакаҳои Ман",
    nav_projects: "Лоиҳаҳо",
    proj_1_title: "Боти Мағоза (Telegram)",
    proj_2_title: "Системаи Автоматикунонӣ (n8n)",
    proj_3_title: "Портфолиои Замонавӣ",
    nav_services: "Хизматрасониҳо",
    nav_contact: "Тамос",
    hero_name: "Комрон Резмонов",
    hero_desc_short: "Ман веб-барномаҳои муосир, зудкор ва пурқувват месозам: аз интерфейси зебо то бэкенди устувор. Ҳамчунин дар автоматизатсия бо n8n ва Telegram Bots таҷрибаи қавӣ дорам.",
    hero_desc_long: "Full-Stack Developer & Automation Engineer. Building modern, fast, and scalable web applications with clean UI, solid backend, and smart automation systems.",
    btn_about: "Дар бораи Ман",
    btn_contact: "Нависед",
    about_title: "Дар бораи Ман",
    about_text_1: "Ман — Комрон Резмонов, соли тавалудам 2003, Full-Stack Developer ва Automation Engineer. Ман ба рушди веб, сохтани барномаҳои муосир ва автоматизатсияи равандҳо ҷиддан шавқ дорам ва ҳар рӯз малакаҳои худро беҳтар мекунам. Роҳе, ки ман интихиб кардам — ин сохтани барномаҳо ва хидматҳои рақамиест, ки ба одамон ва бизнесҳо фоида меоранд.",
    about_text_2: "Дар кори худ ман усулҳои муосир ва стандартҳои технологияро истифода мебарам. Ба ман муҳим аст, ки ҳар як лоиҳа: зудкор, тоза ва услубӣ, бехатар ва бароҳат барои корбар бошад.",
    about_text_3: "Ман бо технологияҳои HTML, CSS, JavaScript, Node.js, Express, MongoDB кор мекунам ва инчунин таҷрибаи хуб бо API, Webhook, Automation (n8n) ва Telegram Bots дорам. Ҳам интерфейси зебо сохта метавонам, ҳам бэкенди устувор.",
    about_text_4: "Ман ҳамеша мекӯшам, ки ҳар як корро бо сифати баланд иҷро кунам. Барои ман муҳим аст, ки кор: дақиқ анҷом дода шавад, бо меъёрҳои касбӣ мутобиқат кунад, қобили васеъшавӣ бошад ва корбаронаш таҷрибаи хуб гиранд.",
    about_text_5: "Илова ба ин, ман ба автоматикунонии равандҳо таваҷҷӯҳи зиёд дорам. Ман метавонам системаҳои мураккабро тавассути n8n, webhook ва ботҳои интеллектуалӣ ба таври пурра автоматӣ созам, то ки вақт ва меҳнати одамон сарфа шавад.",
    about_text_6: "Ман шахси мақсаднок, масъулиятшинос, ором ва зеҳнӣ ҳастам. Омӯзишро дӯст медорам ва ҳар рӯз худро беҳтар мекунам. Барои ман пешрафт — вазифаи аввал аст.",
    services_title: "Хизматрасониҳо",
    serv_web_title: "Web Development",
    serv_web_desc: "Сохтани сайтҳои замонавӣ, лендингҳо ва веб-барномаҳо бо истифода аз технологияҳои навтарин ва дизайни зебо.",
    serv_bot_title: "Telegram Bots",
    serv_bot_desc: "Ботҳои автоматӣ, мағозаҳо дар Telegram, ва системаҳои дастгирӣ барои бизнеси шумо (Shop Bot, Support Bot).",
    serv_auto_title: "Automation & AI",
    serv_auto_desc: "Интегратсияи системаҳо (n8n, Zapier), AI-агентҳо ва худкор кардани равандҳои корӣ барои сарфаи вақт.",
    contact_title: "Тамос",
    contact_email: "Имейл:",
    contact_phone: "Телефон:",
    contact_tg: "Телеграм:",
    projects_title: "Лоиҳаҳои Ман",
    proj_1_desc: "Боти мукаммали мағоза бо сабади харид, пардохт ва панели админ. Интегратсия бо Google Sheets.",
    proj_2_desc: "Системаи худкор барои нашри мақолаҳо дар 5 шабакаи иҷтимоӣ (Instagram, Telegram, LinkedIn) аз як ҷо.",
    proj_3_desc: "Веб-сайти шахсӣ бо HTML, CSS, JS. Дизайни мутобиқ (Responsive), Light/Dark mode ва аниматсияҳо.",
    stat_quality: "Сифати Баланд",
    stat_support: "Дастгирии Доимӣ",
    stat_support: "Дастгирии Доимӣ",
    stat_fast: "Зуд",
    stat_creative: "Суръати Баланд",
    footer_rights: "Ҳама ҳуқуқҳо ҳифз шудаанд.",
    process_title: "Раванди Кор",
    proc_step1_title: "Таҳлил",
    proc_step1_desc: "Муайян кардани талабот, ҳадафҳо ва нақшаи пешакӣ.",
    proc_step2_title: "Нақша",
    proc_step2_desc: "Тарҳрезӣ, интихоби технология ва сохтани прототип.",
    proc_step3_title: "Иҷро",
    proc_step3_desc: "Код-нависӣ, пайваст кардани API ва тести аввалия.",
    proc_step4_title: "Натиҷа",
    proc_step4_desc: "Супоридани лоиҳа, омӯзиш ва дастгирии техникӣ.",
    serv_process_link: "Раванди кори манро бинед",
    contact_desc: "Барои ҳамкорӣ ё саволҳо, лутфан ба ман нависед.",
    form_name: "Номи шумо",
    form_phone: "Телефон",
    form_message: "Паёми шумо",
    form_btn: "Равон кардан"
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    skills_title: "My Skills",
    nav_projects: "Projects",
    proj_1_title: "Telegram Shop Bot",
    proj_2_title: "n8n Automation System",
    proj_3_title: "Modern Portfolio",
    nav_services: "Services",
    nav_contact: "Contact",
    projects_title: "My Projects",
    proj_1_desc: "Complete shop bot with shopping cart, payment integration, and admin panel. Integrated with Google Sheets.",
    proj_2_desc: "Automated system for posting articles to 5 social networks (Instagram, Telegram, LinkedIn) from one place.",
    proj_3_desc: "Personal portfolio website with HTML, CSS, JS. Responsive design, Light/Dark mode, and animations.",
    hero_name: "Komron Rezmonov",
    hero_desc_short: "I build modern, fast, and powerful web applications: from beautiful UI to solid backend. I also have strong experience in automation with n8n and Telegram Bots.",
    hero_desc_long: "Full-Stack Developer & Automation Engineer. Building modern, fast, and scalable web applications with clean UI, solid backend, and smart automation systems.",
    btn_about: "About Me",
    btn_contact: "Get in touch",
    about_title: "About Me",
    about_text_1: "I am Komron Rezmonov, born in 2003, a Full-Stack Developer and Automation Engineer. I am deeply passionate about web development, building modern apps, and process automation, improving my skills every day. My chosen path is creating digital products and services that benefit people and businesses.",
    about_text_2: "In my work, I use modern methods and tech standards. It's important to me that every project is: fast, clean & stylish, secure, and user-friendly.",
    about_text_3: "I work with HTML, CSS, JavaScript, Node.js, Express, MongoDB, and have good experience with APIs, Webhooks, Automation (n8n), and Telegram Bots. I can build both beautiful interfaces and robust backends.",
    about_text_4: "I always strive to do high-quality work. For me, it is crucial that the work is: done precisely, meets professional standards, is scalable, and provides a great user experience.",
    about_text_5: "Additionally, I have a strong focus on process automation. I can fully automate complex systems using n8n, webhooks, and intelligent bots to save time and human effort.",
    about_text_6: "I am purposeful, responsible, calm, and intellectual. I love learning and improving myself every day. Progress is my priority.",
    services_title: "Services",
    serv_web_title: "Web Development",
    serv_web_desc: "Building modern websites, landing pages, and web applications using the latest technologies and beautiful design.",
    serv_bot_title: "Telegram Bots",
    serv_bot_desc: "Automated bots, Telegram shops, and support systems for your business (Shop Bot, Support Bot).",
    serv_auto_title: "Automation & AI",
    serv_auto_desc: "System integration (n8n, Zapier), AI Agents, and workflow automation to save your time.",
    contact_title: "Contact",
    contact_email: "Email:",
    contact_tg: "Telegram:",
    stat_quality: "High Quality",
    stat_support: "24/7 Support",
    stat_support: "24/7 Support",
    stat_fast: "Fast",
    stat_creative: "Fast Speed",
    footer_rights: "All rights reserved.",
    process_title: "My Process",
    proc_step1_title: "Discovery",
    proc_step1_desc: "Understanding requirements, goals and initial planning.",
    proc_step2_title: "Planning",
    proc_step2_desc: "Designing architecture, tech stack selection and prototyping.",
    proc_step3_title: "Development",
    proc_step3_desc: "Coding, API integration and initial testing.",
    proc_step4_title: "Launch",
    proc_step4_desc: "Project delivery, deployment and technical support.",
    serv_process_link: "See my work process",
    contact_desc: "For cooperation or questions, please write to me.",
    form_name: "Your Name",
    form_phone: "Phone",
    form_message: "Your Message",
    form_btn: "Send Message"
  },
  ru: {
    nav_home: "Главная",
    nav_about: "Обо мне",
    nav_skills: "Навыки",
    skills_title: "Мои Навыки",
    nav_projects: "Проекты",
    projects_title: "Мои Проекты",
    proj_1_title: "Бот-Магазин (Telegram)",
    proj_1_desc: "Полноценный бот-магазин с корзиной, оплатой и админ-панелью. Интеграция с Google Sheets.",
    proj_2_title: "Система Автоматизации (n8n)",
    proj_2_desc: "Автоматизированная система для публикации статей в 5 соцсетях (Instagram, Telegram, LinkedIn) из одного места.",
    proj_3_title: "Современное Портфолио",
    proj_3_desc: "Личный сайт-портфолио на HTML, CSS, JS. Адаптивный дизайн, Light/Dark режим и анимации.",
    nav_services: "Услуги",
    nav_contact: "Контакты",
    hero_name: "Комрон Резмонов",
    hero_desc_short: "Я создаю современные, быстрые и мощные веб-приложения: от красивого интерфейса до надежного бэкенда. Также имею сильный опыт в автоматизации с n8n и Telegram Bots.",
    hero_desc_long: "Full-Stack Developer & Automation Engineer. Создаю современные, быстрые и масштабируемые веб-приложения с чистым UI, надежным бэкендом и умными системами автоматизации.",
    btn_about: "Обо мне",
    btn_contact: "Написать",
    about_title: "Обо мне",
    about_text_1: "Я — Комрон Резмонов, 2003 года рождения, Full-Stack Developer и Automation Engineer. Я серьезно увлекаюсь веб-разработкой, созданием современных приложений и автоматизацией процессов, каждый день улучшая свои навыки. Мой путь — это создание цифровых продуктов и сервисов, которые приносят пользу людям и бизнесу.",
    about_text_2: "В своей работе я использую современные методы и технологические стандарты. Для меня важно, чтобы каждый проект был: быстрым, чистым и стильным, безопасным и удобным для пользователя.",
    about_text_3: "Я работаю с HTML, CSS, JavaScript, Node.js, Express, MongoDB, а также имею хороший опыт работы с API, Webhook, Automation (n8n) и Telegram Bots. Могу создать как красивый интерфейс, так и надежный бэкенд.",
    about_text_4: "Я всегда стараюсь выполнять любую работу качественно. Для меня важно, чтобы работа была: выполнена точно, соответствовала профессиональным стандартам, была масштабируемой и предоставляла пользователям отличный опыт.",
    about_text_5: "Кроме того, я уделяю большое внимание автоматизации процессов. Я могу полностью автоматизировать сложные системы с помощью n8n, webhook и интеллектуальных ботов, чтобы сэкономить время и труд людей.",
    about_text_6: "Я целеустремленный, ответственный, спокойный и интеллектуальный человек. Люблю учиться и каждый день становлюсь лучше. Прогресс для меня — задача номер один.",
    services_title: "Услуги",
    serv_web_title: "Веб-разработка",
    serv_web_desc: "Создание современных сайтов, лендингов и веб-приложений с использованием новейших технологий и красивого дизайна.",
    serv_bot_title: "Telegram Боты",
    serv_bot_desc: "Автоматические боты, магазины в Telegram и системы поддержки для вашего бизнеса (Shop Bot, Support Bot).",
    serv_auto_title: "Автоматизация и AI",
    serv_auto_desc: "Интеграция систем (n8n, Zapier), AI-агенты и автоматизация рабочих процессов для экономии вашего времени.",
    contact_title: "Контакты",
    contact_email: "Email:",
    contact_phone: "Телефон:",
    contact_tg: "Telegram:",
    stat_quality: "Высокое Качество",
    stat_support: "Поддержка 24/7",
    stat_support: "Поддержка 24/7",
    stat_fast: "Быстро",
    stat_creative: "Быстрая Скорость",
    footer_rights: "Все права защищены.",
    process_title: "Рабочий Процесс",
    proc_step1_title: "Анализ",
    proc_step1_desc: "Определение требований, целей и предварительного плана.",
    proc_step2_title: "Планирование",
    proc_step2_desc: "Проектирование, выбор технологий и создание прототипа.",
    proc_step3_title: "Реализация",
    proc_step3_desc: "Написание кода, подключение API и первичное тестирование.",
    proc_step4_title: "Результат",
    proc_step4_desc: "Сдача проекта, обучение и техническая поддержка.",
    serv_process_link: "Посмотреть мой процесс работы",
    contact_desc: "Для сотрудничества или вопросов, пожалуйста, напишите мне.",
    form_name: "Ваше Имя",
    form_phone: "Телефон",
    form_message: "Ваше Сообщение",
    form_btn: "Отправить"
  }
};


const langBtn = document.getElementById('lang-btn');
const langDropdown = document.querySelector('.lang-dropdown');
const currentLangSpan = document.getElementById('current-lang');
let currentLang = localStorage.getItem('lang') || 'tg';

function updateLang() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });
  if (currentLangSpan) currentLangSpan.textContent = currentLang.toUpperCase();
}

// Logic for Dropdown
if (langBtn && langDropdown) {
  // Toggle
  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('show');
  });

  // Handle Item Click
  langDropdown.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const selected = item.getAttribute('data-lang');
      currentLang = selected;
      localStorage.setItem('lang', currentLang);
      updateLang();
      langDropdown.classList.remove('show');

      // Close mobile menu if open
      if (navLinks && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        if (navToggle) navToggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
      langDropdown.classList.remove('show');
    }
  });

  // Init
  updateLang();
}

/* THEME TOGGLE */
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle ? themeToggle.querySelector('i') : null;

// Check saved preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  body.classList.add('light-mode');
  if (icon) icon.className = 'fas fa-moon';
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const isLight = body.classList.contains('light-mode');

    // Switch icon
    if (icon) {
      icon.className = isLight ? 'fas fa-moon' : 'fas fa-sun';
    }

    // Save preference
    localStorage.setItem('theme', isLight ? 'light' : 'dark');

    // Close mobile menu if open
    if (navLinks && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      if (navToggle) navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

/* Preloader Removed */

const contactForm = document.getElementById('contact-form');
const sendBtn = document.getElementById('send-btn');
const msgBox = document.getElementById('form-message');

if (sendBtn) {
  sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation(); // Stop bubbling to parents
    e.stopImmediatePropagation(); // Stop other listeners on this element

    // 🔒 Security: Backend handles credentials
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Helper to show messages
    const showMessage = (text, type) => {
      if (!msgBox) return;
      msgBox.textContent = text;
      msgBox.className = `form-message ${type}`;
      setTimeout(() => {
        msgBox.className = 'form-message';
        msgBox.textContent = '';
      }, 5000);
    };

    // Validation
    if (!name || !phone || !message) {
      showMessage(currentLang === 'tg' ? "Лутфан, ҳамаи майдонҳоро пур кунед." : "Please fill in all fields.", "error");
      return;
    }

    // UI: Show loading state
    const originalBtnText = sendBtn.innerHTML;
    sendBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    sendBtn.disabled = true;

    // Send to our Serverless Function
    fetch('/api/send-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, phone, message })
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          showMessage(currentLang === 'tg' ? "Ташаккур! Паёми шумо қабул шуд." : "Thank you! Message received.", "success");
          if (contactForm) {
            document.getElementById('name').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('message').value = '';
          }
        } else {
          console.error('API Error:', data.error);
          showMessage("Error sending message. Please try again.", "error");
        }
      })
      .catch(error => {
        console.error('Error:', error);
        showMessage("Error sending message.", "error");
      })
      .finally(() => {
        // Restore button
        sendBtn.innerHTML = originalBtnText;
        sendBtn.disabled = false;
      });
  });
}

/* Back to Top Button */
const backToTopBtn = document.getElementById("back-to-top");

if (backToTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }

    // Scroll Spy Logic
    activeMenu();
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/* Scroll Spy (Active Menu) */
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav-links li a");

function activeMenu() {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.getAttribute("href").includes(current) && current !== "") {
      li.classList.add("active");
    }
  });
}

/* Particles Removed */
