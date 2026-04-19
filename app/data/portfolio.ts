export interface TechStackItem {
  name: string;
  bg: string;
  text?: string;
  border?: string;
}

export interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
  icon: string;
  color: string;
}

export interface ProjectLink {
  label: string;
  icon?: string;
  href: string;
  primary?: boolean;
  secondary?: boolean;
  button?: boolean;
  underline?: boolean;
  fill?: boolean;
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  colSpan: string;
  fullWidth?: boolean;
  links: ProjectLink[];
}

export const portfolioData = {
  personal: {
    name: "Ashwin Biju",
    role: "Frontend Engineer",
    email: "ashwinbiju11@gmail.com",
    github: "https://github.com/ashwin0004",
    linkedin: "https://linkedin.com/in/ashwinbiju/",
    twitter: "https://x.com/ashwinbiju",
    socials: [
      { platform: "GitHub", url: "https://github.com/ashwin0004" },
      { platform: "LinkedIn", url: "https://linkedin.com/in/ashwinbiju/" },
      { platform: "Twitter", url: "https://x.com/ashwinbiju" }
    ],
    resumeUrl: "/resume.pdf"
  },
  hero: {
    badge: "AVAILABLE FOR NEW OPPORTUNITIES",
    headline: "Frontend Engineer crafting fast, scalable & user-focused web experiences.",
    subheadline: "Specializing in React.js, JavaScript, and UI/UX Design. Transforming complex problems into elegant, intuitive digital solutions.",
    cta: {
      primary: "View Projects",
      secondary: "Download Resume"
    }
  },
  techStack: [
    { name: "C", bg: "bg-blue-900" },
    { name: "C++", bg: "bg-blue-800" },
    { name: "CSS3", bg: "bg-[#264de4]" },
    { name: "JAVASCRIPT", bg: "bg-[#f7df1e]", text: "text-black" },
    { name: "JAVA", bg: "bg-[#5382a1]" },
    { name: "HTML5", bg: "bg-[#e34c26]" },
    { name: "TYPESCRIPT", bg: "bg-[#3178c6]" },
    { name: "PYTHON", bg: "bg-[#3776ab]" },
    { name: "VERCEL", bg: "bg-black", border: "border-outline-variant/20" },
    { name: "FIREBASE", bg: "bg-[#ffca28]", text: "text-black" },
    { name: "NETLIFY", bg: "bg-[#00c7b7]", text: "text-black" },
    { name: "AWS", bg: "bg-[#ff9900]", text: "text-black" },
    { name: "VITE", bg: "bg-[#646cff]" },
    { name: "VUE.JS", bg: "bg-[#4fc08d]", text: "text-black" },
    { name: "THREEJS", bg: "bg-black", border: "border-outline-variant/10" },
    { name: "TAILWIND CSS", bg: "bg-[#38bdf8]", text: "text-black" },
    { name: "REACT", bg: "bg-[#61dafb]", text: "text-black" },
    { name: "NEXT.JS", bg: "bg-white", text: "text-black" },
    { name: "NODE.JS", bg: "bg-[#339933]" },
    { name: "NPM", bg: "bg-[#cb3837]" },
    { name: "FLUTTER", bg: "bg-[#02569b]" },
    { name: "FIGMA", bg: "bg-[#f24e1e]" },
    { name: "GIT", bg: "bg-[#f05032]" },
    { name: "GITHUB", bg: "bg-[#181717]", border: "border-outline-variant/10" },
    { name: "MYSQL", bg: "bg-[#4479a1]" },
    { name: "MONGODB", bg: "bg-[#47a248]", text: "text-black" },
    { name: "POSTGRES", bg: "bg-[#4169e1]" },
    { name: "DOCKER", bg: "bg-[#2496ed]" },
    { name: "ESLINT", bg: "bg-[#4b32c3]" },
    { name: "PRETTIER", bg: "bg-[#f7b93e]", text: "text-black" },
    { name: "PRISMA", bg: "bg-[#2d3748]" },
    { name: "SUPABASE", bg: "bg-[#3ecf8e]", text: "text-black" },
  ],
  about: {
    hero: {
      badge: "Origin Story",
      title: ["Ashwin", "Biju"],
      subtitle: "Crafting Digital Performance.",
      description: "Frontend Engineer & UI Designer specializing in high-fidelity interfaces and hyper-optimized user experiences."
    },
    bento: {
      education: {
        title: "BCA at Kannur University",
        description: "Built the logical backbone through rigorous Computer Application studies. My journey from algorithmic thinking to visual implementation started here, translating abstract logic into human-centric interfaces.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADpx7GXoX-3Jhp6PjpSwi5Aof2PkUM_yBS5dFaYY_lajNq5GFBOSm0CncVszZutwcV3DaNQQF9VvQGiWZBavju71xZHUiSkYKNb2-xdn6LDf9OBYS8RNAbTNEqIQYo4FOKISFShc9VqLaWwMXMULI-YrGNKBFW_nGnraPZRx7EphXLHFpI5p8pF2hwIwclIbTx9fzFS0RcFpkvj0AbbFQncsTLho8XAJbykoSRDmyXLn8Dczg9ed7ZoyzfwGzKM6Rd4X_OXx2usN0"
      },
      arsenal: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Figma", "Three.js", "GSAP"],
      philosophy: {
        title: "The Obsidian Flux",
        description: "Design is the bridge between functionality and emotion. I believe in interfaces that feel invisible yet essential—leveraging light, depth, and intentional whitespace to guide users through complex data landscapes.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkyXJ0WE_AbYKziCkqmmc35FvOeuHRpw1RUZzuouJ-3jNlvCtwUXrxtKXQbzQZ9pc35VwemJQ0L1urF0G4LIaHx_3l22cNOPgWsemuciPycEEL7zmyAwKaaPxvnT_rx3d6h1LynwNsido2x8CeRjzJXlcCzU_mfaf0ye40JmEWvOZahiS4RQ2dmaGZ0-d2E8yse899-B8bYWU3wegObZkhShYo9ar4LDxvUlsgqqqGC0zWZFwwGmg-leCk_eHwRjameokFOCJS3CA"
      }
    },
    deepDive: {
      intro: "I approach frontend development like an architect approaches a skyscraper: the foundation must be immutable, while the facade must be breathtaking.",
      paragraphs: [
        "My background in BCA from Kannur University gave me more than just a degree; it provided a systematic way of thinking. I learned that every beautiful UI is backed by an efficient data structure. This realization drove me to specialize in the intersection of Design and Engineering.",
        "Whether it's building complex state-managed dashboards or interactive marketing sites, my focus remains the same: Performance, Accessibility, and Scalability. I don't just build components; I build systems.",
        "Away from the keyboard, you'll find me exploring the latest in spatial computing, studying typography trends, or experimenting with generative art. I'm constantly seeking that perfect balance between technical constraints and creative freedom."
      ],
      cta: "Let's build something next-gen"
    }
  },
  experience: {
    hero: {
      badge: "Chronicles of Code",
      title: "Building the Architecture of Digital Experiences.",
      description: "Exploring the intersection of performance, aesthetics, and scalable engineering."
    },
    timeline: [
      {
        period: "SEP 2025 — PRESENT",
        title: "Software Developer",
        company: "ToScroll",
        description: "Spearheading core module developments and engineering high-performance features. Focusing on architecting reusable UI systems and optimizing complex application state.",
        tags: ["React.js", "Architecture", "Performance"],
        icon: "terminal",
        color: "primary"
      },
      {
        period: "EARLIER 2025",
        title: "Frontend Intern",
        company: "Product Development Studio",
        description: "Contributed to the design-to-code workflow, translating Figma high-fidelity prototypes into responsive React components with atomic design principles.",
        tags: ["Tailwind CSS", "Figma", "JavaScript"],
        icon: "deployed_code",
        color: "secondary"
      },
      {
        period: "2023 — 2026",
        title: "Bachelor of Computer Applications",
        company: "Kannur University",
        description: "Focusing on Computer Science fundamentals, database management, and modern software engineering methodologies.",
        tags: ["Algorithmic Design", "DBMS"],
        icon: "school",
        color: "tertiary"
      }
    ],
    highlights: {
      api: {
        title: "API Integration & Optimization",
        description: "Mastering the flow of data. Implementing robust asynchronous operations, data caching strategies, and seamless real-time updates to ensure a lag-free user experience across distributed systems."
      },
      performance: {
        title: "UI Performance",
        description: "Optimizing critical render paths for 60fps interaction."
      }
    },
    skills: {
      title: "Technical Arsenal",
      description: "My approach is defined by the marriage of technical rigor and aesthetic intent. I build tools that aren't just functional, but frictionless.",
      list: [
        { name: "React.js", icon: "code", color: "text-primary" },
        { name: "ES6+", icon: "javascript", color: "text-secondary" },
        { name: "Tailwind", icon: "css", color: "text-tertiary" },
        { name: "Rest APIs", icon: "database", color: "text-primary" }
      ]
    },
    interstitial: {
      title: "ENGINEERING TOMORROW.",
      badge: "Current focus",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0Yi4oFTzOu9zw4ToLV_TckM2rhSLa6U8_Wgk956enJzkrYYmr8YY0ajWtsH4LzxAvXofJmq9_mSFN4FACf7Bv71D-Zl0qpxJG2ekHynSswvIt83xCrPjxRVReBFo7wNCPda3bOBbMtB7IjmdYUewbFogePubtXVH3tFYbtN99gWowbPoRmb-dRxXSn8QfGyRrEbOqK0pLjwWX_Ibc0R5Ttwr9Xn0MWNyjUo545WLEh5KYyphq6Kkj3q6lUGHKc0fxyRETR2IrEGs"
    }
  },
  projects: {
    hero: {
      title: "Curated Artifacts",
      description: "A selection of digital experiences engineered with structural precision and visual fluidity. These projects represent the intersection of architectural code and high-tech aesthetics."
    },
    list: [
      {
        id: 1,
        title: "Doc Tutorial Platform",
        description: "A modular documentation hub designed for structured learning. Focused on high-performance content delivery and scalable frontend architecture using TypeScript.",
        tags: ["TypeScript", "Next.js", "Tailwind CSS"],
        image: "/projects/doc-tutorial.png",
        colSpan: "md:col-span-8",
        links: [
          { label: "GitHub", icon: "code", href: "https://github.com/ashwin0004/doc-tutorial", primary: true }
        ]
      },
      {
        id: 2,
        title: "Service Booking Platform",
        description: "A full-stack service booking application allowing users to browse, schedule, and manage appointments. Features an integrated admin dashboard for service control and real-time availability tracking.",
        tags: ["Next.js", "Full Stack", "Authentication"],
        image: "/projects/service-booking.png",
        colSpan: "md:col-span-4",
        links: [
          { label: "GitHub", icon: "code", href: "https://github.com/ashwin0004/Service-booking" }
        ]
      },
      {
        id: 3,
        title: "Car Wash Booking System",
        description: "Comprehensive appointment management system featuring automated scheduling, customer tracking, and a robust admin interface for service optimization. Engineered for seamless business operations.",
        tags: ["Next.js", "Full Stack", "Booking Engine"],
        image: "/projects/car-wash.png",
        colSpan: "md:col-span-12",
        fullWidth: true,
        links: [
          { label: "GitHub", icon: "code", href: "https://github.com/ashwin0004/car-wash", fill: true }
        ]
      },
      {
        id: 4,
        title: "Ecommerce Platform",
        description: "A high-performance marketplace featuring real-time state management, secure Firebase authentication, and an interactive checkout experience. Built for speed and conversion.",
        tags: ["React", "Redux Toolkit", "Firebase"],
        image: "/projects/ecommerce.png",
        colSpan: "md:col-span-4",
        links: [
          { label: "GitHub", icon: "code", href: "https://github.com/ashwin0004/Ecommerce" }
        ]
      },
      {
        id: 5,
        title: "Rockstar Game Website Clone",
        description: "A visually rich gaming website clone inspired by Rockstar Games. Developed with a focus on immersive UI, fluid animations, and high-performance asset loading to deliver a premium user experience.",
        tags: ["HTML", "Tailwind CSS", "JavaScript"],
        image: "/projects/rockstar.png",
        colSpan: "md:col-span-8",
        links: [
          { label: "View on GitHub", icon: "code", href: "https://github.com/ashwin0004/Rockstar-game-website", primary: true }
        ]
      },
      {
        id: 6,
        title: "React Auth Framework",
        description: "A security-first authentication system implementing JWT-based token handling, protected route orchestration, and persistent session management for modern web applications.",
        tags: ["React", "JWT Auth", "Axios"],
        image: "/projects/react-auth.png",
        colSpan: "md:col-span-12",
        fullWidth: true,
        links: [
          { label: "GitHub", icon: "code", href: "https://github.com/ashwin0004/react-authentication", fill: true }
        ]
      }
    ],
    cta: {
      headline: "Have a vision in mind?",
      description: "Let's architect something extraordinary together. I'm currently available for freelance projects and full-time opportunities.",
      button: "Start a Conversation"
    }
  },
  contact: {
    hero: {
      headline: ["LET'S", "BUILD", "THE FUTURE."],
      description: "Currently open to new opportunities and interesting collaborations. Whether you have a project in mind or just want to say hi, my inbox is always open."
    },
    email: {
      label: "Direct Email",
      address: "ashwinbiju11@gmail.com"
    },
    form: {
      labels: {
        name: "Your Name",
        email: "Email Address",
        message: "Your Message"
      },
      button: "SEND TRANSMISSION",
      legal: "By submitting, you agree to technical synergy and clean code principles."
    },
    footerImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBup0OBZOJOcHV9UAc81vS8q94kH71mn8hTHdYb81g-T6nyW9U2EErT8YLEVY8cJxXsQHkd3IqTHOrVPJH-XBpVSSoVxkyfBT1Fu4-r7GdfdGte6nPw7y8RfY1b8_sUSUgJBr8wKszD32cGYlB5qO66xZERJ4SZe5G5e2o8rO72tVxJUCB6mYNH66mbdOUG-xFpxUMbjU00lsfZiE3uswPQf4L-BwRaSfjvQ3gBNBQ2dcKFaiEuu3ikHpftX7lqy82OnCR6H31Z_VU",
    status: "System Status: Active"
  }
};
