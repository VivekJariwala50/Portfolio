(function () {
  "use strict";

  function toggleScrolled() {
    const selectBody = document.querySelector("body");
    const selectHeader = document.querySelector("#header");
    if (
      !selectHeader.classList.contains("scroll-up-sticky") &&
      !selectHeader.classList.contains("sticky-top") &&
      !selectHeader.classList.contains("fixed-top")
    )
      return;
    window.scrollY > 100
      ? selectBody.classList.add("scrolled")
      : selectBody.classList.remove("scrolled");
  }

  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavToggleBtn.classList.toggle("bi-list");
    mobileNavToggleBtn.classList.toggle("bi-x");
  }
  mobileNavToggleBtn.addEventListener("click", mobileNavToogle);

  document.querySelectorAll("#navmenu a").forEach((navmenu) => {
    navmenu.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    });
  });

  document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
    navmenu.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle("active");
      this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
      e.stopImmediatePropagation();
    });
  });

  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  let scrollTop = document.querySelector(".scroll-top");

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    }
  }
  scrollTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  function aosInit() {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", aosInit);

  const selectTyped = document.querySelector(".typed");
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute("data-typed-items");
    typed_strings = typed_strings.split(",");
    new Typed(".typed", {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
  }

  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  document.querySelectorAll(".isotope-layout").forEach(function (isotopeItem) {
    let layout = isotopeItem.getAttribute("data-layout") ?? "masonry";
    let filter = isotopeItem.getAttribute("data-default-filter") ?? "*";
    let sort = isotopeItem.getAttribute("data-sort") ?? "original-order";

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector(".isotope-container"), function () {
      initIsotope = new Isotope(
        isotopeItem.querySelector(".isotope-container"),
        {
          itemSelector: ".isotope-item",
          layoutMode: layout,
          filter: filter,
          sortBy: sort,
        }
      );
    });

    isotopeItem
      .querySelectorAll(".isotope-filters li")
      .forEach(function (filters) {
        filters.addEventListener(
          "click",
          function () {
            isotopeItem
              .querySelector(".isotope-filters .filter-active")
              .classList.remove("filter-active");
            this.classList.add("filter-active");
            initIsotope.arrange({
              filter: this.getAttribute("data-filter"),
            });
            if (typeof aosInit === "function") {
              aosInit();
            }
          },
          false
        );
      });
  });

  window.addEventListener("load", function (e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: "smooth",
          });
        }, 100);
      }
    }
  });

  let navmenulinks = document.querySelectorAll(".navmenu a");

  function navmenuScrollspy() {
    navmenulinks.forEach((navmenulink) => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        document
          .querySelectorAll(".navmenu a.active")
          .forEach((link) => link.classList.remove("active"));
        navmenulink.classList.add("active");
      } else {
        navmenulink.classList.remove("active");
      }
    });
  }
  window.addEventListener("load", navmenuScrollspy);
  document.addEventListener("scroll", navmenuScrollspy);
})();

// DETAILS STARTS
// Mock Project Data
const projectData = {
  walkersbay: {
    title: "WalkersBay",
    summary:
      "WalkersBay: A dynamic React-based web application designed for seamless project management and collaboration with an intuitive user interface.",
    images: [
      "assets/img/portfolio/walkersbay.app.png",
      "assets/img/portfolio/walkersbay.app_1.png",
      "assets/img/portfolio/walkersbay.app_2.png",
      "assets/img/portfolio/walkersbay.app_3.png",
    ],
    info: {
      category: "Frontend Development",
      technologies: "React.js",
      url: "https://walkersbay.app",
    },
    detailsTitle: "WalkersBay",
    detailsDescription:
      "WalkersBay is a comprehensive project built using React.js, showcasing a sophisticated software development solution. It integrates advanced features like dynamic functionality, smooth animations, and custom icons through additional libraries. This project enhances user experience and has contributed to improved client satisfaction by delivering scalable and efficient solutions.",
  },
  anxietychecklist: {
    title: "Anxiety Checklist",
    summary:
      "Anxiety Checklist: Created with Next.js for improved SEO and a fast, responsive experience in managing anxiety symptoms.",
    images: [
      "assets/img/portfolio/anxietychecklist.png",
      "assets/img/portfolio/anxietychecklist_1.png",
      "assets/img/portfolio/anxietychecklist_2.png",
      "assets/img/portfolio/anxietychecklist_3.png",
    ],
    info: {
      category: "Frontend Development",
      technologies: "Next.js",
      url: "https://anxietychecklist.com",
    },
    detailsTitle: "Anxiety Checklist",
    detailsDescription:
      "The 'Anxiety Checklist' project was initially developed using React.js and has since been successfully migrated to Next.js to enhance SEO performance and overall user experience. This transition leverages Next.js's powerful server-side rendering and static site generation capabilities, improving search engine visibility and load times. Throughout the process, we collaborated closely with the backend team to ensure seamless integration with the existing infrastructure and with the Figma design team to maintain a cohesive and responsive user interface. The migration not only boosts performance but also ensures the platform meets modern web standards while offering an optimized experience for both users and developers.",
  },
  anxietychecklist: {
    title: "Anxiety Checklist",
    summary:
      "Anxiety Checklist: Created with Next.js for improved SEO and a fast, responsive experience in managing anxiety symptoms.",
    images: [
      "assets/img/portfolio/anxietychecklist.png",
      "assets/img/portfolio/anxietychecklist_1.png",
      "assets/img/portfolio/anxietychecklist_2.png",
      "assets/img/portfolio/anxietychecklist_3.png",
    ],
    info: {
      category: "Frontend Development",
      technologies: "Next.js, Typescript",
      url: "https://anxietychecklist.com",
    },
    detailsTitle: "Anxiety Checklist",
    detailsDescription:
      "The 'Anxiety Checklist' project was initially developed using React.js and has since been successfully migrated to Next.js to enhance SEO performance and overall user experience. This transition leverages Next.js's powerful server-side rendering and static site generation capabilities, improving search engine visibility and load times. Throughout the process, we collaborated closely with the backend team to ensure seamless integration with the existing infrastructure and with the Figma design team to maintain a cohesive and responsive user interface. The migration not only boosts performance but also ensures the platform meets modern web standards while offering an optimized experience for both users and developers.",
  },
  achivar: {
    title: "Achivar",
    summary:
      "Achivar, crafted with Next.js and TSX, is a dynamic platform tailored for optimal performance, streamlined navigation, and future-ready web solutions, ensuring reliability and adaptability.",
    images: [
      "assets/img/portfolio/achivar.png",
      "assets/img/portfolio/achivar_1.png",
      "assets/img/portfolio/achivar_2.png",
    ],
    info: {
      category: "Frontend Development",
      technologies: "Next.js, Typescript",
      url: "https://www.achivar.com",
    },
    detailsTitle: "Achivar",
    detailsDescription:
      "Achivar is a sleek and efficient website frontend built with Next.js and TypeScript, featuring thoughtfully crafted components to deliver a seamless and responsive user experience.",
  },
  portfolio: {
    title: "Portfolio",
    summary:
      "I developed a responsive, dynamic portfolio website using HTML, CSS, JavaScript, Bootstrap, and animation libraries, highlighting both technical skill and creative design.",
    images: [
      "assets/img/portfolio/portfolio.png",
      "assets/img/portfolio/portfolio_1.png",
      "assets/img/portfolio/portfolio_2.png",
    ],
    info: {
      category: "Frontend Development",
      technologies: "HTML, CSS, Javascript",
      url: "https://www.achivar.com",
    },
    detailsTitle: "Portfolio",
    detailsDescription:
      "I created a professional portfolio website leveraging HTML, CSS, and JavaScript, enhanced with Bootstrap for responsive design and animation libraries for smooth interactions. This project reflects my ability to integrate modern web technologies and deliver a polished, user-focused experience.",
  },
  ilonsi: {
    title: "ILONSI",
    summary: "ILONSI is a Webflow-powered showcase for future project.",
    images: [
      "assets/img/portfolio/ilonsi.png",
      "assets/img/portfolio/ilonsi_1.png",
      "assets/img/portfolio/ilonsi_2.png",
      "assets/img/portfolio/ilonsi_3.png",
    ],
    info: {
      category: "Frontend Development",
      technologies: "Webflow",
      url: "https://www.ilonsi.com",
    },
    detailsTitle: "ILONSI",
    detailsDescription:
      "ILONSI is a dynamic Webflow-based project that leverages the full capabilities of the platform, utilizing its CMS for content management, integrating email sending and receiving functionalities, and making the most of Webflow's advanced features to create a seamless, interactive user experience.",
  },
  versatile: {
    title: "Versatile",
    summary:
      "Versatile is a React.js-based project that combines smooth, basic animations with a dynamic, user-friendly interface to deliver a seamless and engaging experience.",
    images: [
      "assets/img/portfolio/versatile.png",
      "assets/img/portfolio/versatile_1.png",
      "assets/img/portfolio/versatile_2.png",
    ],
    info: {
      category: "Frontend Development",
      technologies: "React.js",
      url: "https://versatile.best/home",
    },
    detailsTitle: "Versatile",
    detailsDescription:
      "Versatile is a React.js-driven project designed to offer a dynamic and responsive user experience. With the integration of smooth animations, it adds a layer of interactivity while maintaining a clean and efficient interface. The project showcases my ability to blend modern web development practices with engaging visual elements, creating a user-friendly platform that adapts seamlessly to various devices.",
  },
  annakoot: {
    title: "Annakoot",
    summary:
      "Annakoot: A sophisticated admin dashboard solution crafted with React JS, HTML5, CSS3, and Ant Design, empowering seamless data visualization and efficient management.",
    images: [
      "assets/img/portfolio/annakoot.png",
      "assets/img/portfolio/annakoot_1.png",
      "assets/img/portfolio/annakoot_2.png",
    ],
    info: {
      category: "Frontend Development",
      technologies: "React.js, Ant Design",
      url: "https://annakoot.vercel.app",
    },
    detailsTitle: "Annakoot",
    detailsDescription:
      "Annakoot is a dynamic and feature-rich admin dashboard crafted with React JS, Ant Design, and CSS3, delivering a responsive, mobile-first experience. It boasts light/dark themes, multiple layout options, extensive theming capabilities, intuitive UI/UX, and essential pages like login, profile, billing, and more. Equipped with modern libraries like Chart.js and Sweet Alert, Annakoot ensures seamless data visualization, clean code standards, and effortless customization for an elevated user and developer experience.",
  },
  cookingHealthyFood: {
    title: "Cooking Healthy Food",
    summary:
      "A vibrant Cooking Healthy Food site designed as a captivating landing page using simple HTML, CSS, JS, and basic animations.",
    images: [
      "assets/img/portfolio/cooking-healthy-food.png",
      "assets/img/portfolio/cooking-healthy-food_1.png",
      "assets/img/portfolio/cooking-healthy-food_2.png",
    ],
    info: {
      category: "Frontend Development",
      technologies: "HTML, CSS, Javascript",
      url: "https://cooking-healthy-food.web.app",
    },
    detailsTitle: "Cooking Healthy Food",
    detailsDescription:
      "A visually appealing Cooking Healthy Food site crafted as an engaging landing page, leveraging clean HTML, CSS, and JavaScript, enhanced with seamless animations to deliver a modern, interactive, and professional user experience.",
  },
  stock_market_trends: {
    title: "Stock Market Trends",
    summary:
      "This experimental project leverages the Alpha Vantage API to extract, transform, and analyze stock market data through SQL queries, uncovering trends, price fluctuations, and volume insights.",
    images: ["assets/img/portfolio/stock_market_trends.jpg"],
    info: {
      category: "Data Analytics",
      technologies: "SQL, Microsoft SQL Server, Python, Pandas",
      url: "https://github.com/VivekJariwala50/Stock_Market_Trends",
    },
    detailsTitle: "Stock Market Trends",
    detailsDescription:
      "This project is built using Python, Pandas, MS SQL, and SQL to fetch, process, and analyze stock market data from the Alpha Vantage API, providing valuable insights into market trends and fluctuations.",
  },
  diabetes_progression_analysis_Dashboard: {
    title: "Diabetes Progression Analysis & Dashboard",
    summary:
      "This project uses Python, Pandas and Matplotlib to perform exploratory data analysis on diabetes progression, identifying key features, outliers, and correlations. The findings are visualized through an interactive Tableau dashboard, offering insights into diabetes trends and progression.",
    images: ["assets/img/portfolio/diabetes-dashboard.jpg"],
    info: {
      category: "Data Analytics",
      technologies: "Python, Matplotlib, Pandas, MS Excel, Tableau",
      url: "https://github.com/VivekJariwala50/Diabetes-Progression-Analysis",
    },
    detailsTitle: "Diabetes Progression Analysis & Dashboard",
    detailsDescription:
      "This project utilizes Python, Pandas, and Matplotlib to perform an in-depth exploratory data analysis (EDA) on diabetes progression data. The analysis identifies key features, detects outliers, uncovers potential data issues, and examines correlations between various factors affecting diabetes. These insights are then visualized in an interactive Tableau dashboard, providing a comprehensive view of diabetes trends, progression patterns, and influencing variables.",
  },
  beta_university_annual_fund_database: {
    title: "Beta University Annual Fund Database",
    summary:
      "This project utilizes Oracle SQL to build a secure and efficient database system for managing Beta University's Annual Fund donations and events.",
    images: ["assets/img/portfolio/beta-university-annual-fund-lg.jpg"],
    info: {
      category: "Data Analytics",
      technologies: "Oracle, SQL, MS Visio, MS Excel",
      url: "https://github.com/VivekJariwala50/Beta-University-Annual-Fund",
    },
    detailsTitle: "Beta University Annual Fund Database",
    detailsDescription:
      "This project utilizes Oracle SQL and database management techniques to develop a structured and secure system for Beta University's Annual Fund. It focuses on designing relational schemas, normalizing data, and implementing security features to manage donor contributions, pledges, and fundraising events efficiently. The system generates automated reports, tracks payments, and provides insights into donor engagement. Through advanced data modeling and analytics, this project enhances fundraising operations, ensuring accuracy, transparency, and streamlined financial tracking.",
  },
  companyLinker: {
    title: "Company Linker",
    summary:
      "I created a Company Linker tool using HTML, CSS, JavaScript, ExcelJS, and the Google Sheets API to manage due sheets for finance companies.",
    images: [
      "assets/img/portfolio/company-linker.png",
      "assets/img/portfolio/company-linker-2.png",
    ],
    info: {
      category: "Frontend Development",
      technologies: "HTML, CSS, Javascript",
      url: "https://company-linker.netlify.app",
    },
    detailsTitle: "Company Linker",
    detailsDescription:
      "For a finance company, I created a tool named Company Linker, built using different technologies such as HTML, CSS, JavaScript, ExcelJS, and Google Sheets API needed by the company. The tool provides two methods for uploading due sheets: one through a file input, which enables the user to upload Excel files into the platform, and the other through the input of a Google Sheets link, which makes it easier to import files maintained in the Google Sheets online spreadsheets. This flexibility means that controlling of due sheets is much easier out of which data handling is enhanced and the over all financial control for the company is a great boost.",
  },
};

// Get the project key from the URL
const urlParams = new URLSearchParams(window.location.search);
const projectKey = urlParams.get("project"); // e.g., ?project=projectA

// Load project data
const project = projectData[projectKey];
if (project) {
  // Update Page Title
  document.getElementById("project-title").textContent = project.title;
  document.getElementById("projectTitle").textContent = project.title;
  document.getElementById("project-summary").textContent = project.summary;

  // Populate Swiper Images
  const swiperWrapper = document.getElementById("swiper-wrapper");
  project.images.forEach((img) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.innerHTML = `<img src="${img}" alt="Project Image" />`;
    swiperWrapper.appendChild(slide);
  });

  // Populate Project Info
  const projectInfo = document.getElementById("project-info");
  projectInfo.innerHTML = `
    <li><strong>Category</strong>: ${project.info.category}</li>
    <li><strong>Technologies Used</strong>: ${project.info.technologies}</li>
    <li><strong>Project URL</strong>: <a href="${project.info.url}" target="_blank">${project.info.url}</a></li>
  `;

  // Populate Description
  document.getElementById("project-details-title").textContent =
    project.detailsTitle;
  document.getElementById("project-details-description").textContent =
    project.detailsDescription;
}

// DETAILS END
