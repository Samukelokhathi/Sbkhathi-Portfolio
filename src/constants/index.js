const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Feb 18, 2026",
    title:
      "Creating a YouTube-Style Share Bar in WordPress",
    image: "dist/images/share btn.png",
    link: "dist/files/Creating a YouTube-Style Share Bar in WordPress.pdf",
  },
  {
    id: 2,
    date: "Oct 28, 2025",
    title: "How I Transformed Nunes Panel Shop with Web Development and Business Profile ",
    image: "dist/images/nunespaneleshop front image.jpg",
    link: "dist/files/Lessons Learned at Nunes Panel Shop.pdf",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "Debugging Elementor Loop Grid Filters: A Developer’s Guide",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "TypeScript", "JavaScript", "HTML"],
  },
  {
    category: "Mobile",
    items: ["React Native"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS", "Bootstrap CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Python"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "ClickUp"],
  },
  { category: "CMS",
     items: ["WordPress", "Elementor"], 
  },
];


const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/Samukelokhathi",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/samukelo-khathi-b3830a2aa/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Nunes Panel Shop project",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "About Nunes Panel Shop.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Nunes Panel Shop is a family-owned business specializing in high-quality automotive body panels and accessories. With over 8+ years of experience, we pride ourselves on providing exceptional products and personalized service to our customers. Our extensive inventory includes a wide range of panels for various makes and models, ensuring that we can meet the needs of both professional mechanics and DIY enthusiasts. At Nunes Panel Shop, we are committed to helping you find the perfect parts to restore your vehicle to its original condition.",
          ],
        },
        {
          id: 2,
          name: "Nunes-Panel-Shop-website Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://nunespanelshop.lovable.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Website Preview.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "dist/images/newWebPreview.png",
        },
      
      ],
    },

    // ▶ Project 2
    // {
    //   id: 6,
    //   name: "",
    //   icon: "/images/folder.png",
    //   kind: "folder",
    //   position: "top-52 right-80",
    //   windowPosition: "top-[20vh] left-7",
    //   children: [
    //     {
    //       id: 1,
    //       name: "",
    //       icon: "/images/txt.png",
    //       kind: "file",
    //       fileType: "txt",
    //       position: "top-5 right-10",
    //       description: [
    //         "AI Resume Analyzer is a smart tool that helps you perfect your resume with instant feedback.",
    //         "Instead of guessing what recruiters want, you get AI-powered insights on keywords, formatting, and overall impact.",
    //         "Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
    //         "It's built with Next.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
    //       ],
    //     },
    //     {
    //       id: 2,
    //       name: "",
    //       icon: "/images/safari.png",
    //       kind: "file",
    //       fileType: "url",
    //       href: "https://youtu.be/iYOz165wGkQ?si=R1hs8Legl200m0Cl",
    //       position: "top-20 left-20",
    //     },
    //     {
    //       id: 4,
    //       name: "",
    //       icon: "/images/image.png",
    //       kind: "file",
    //       fileType: "img",
    //       position: "top-52 left-80",
    //       imageUrl: "/images/project-2.png",
    //     },
    //     {
    //       id: 5,
    //       name: "",
    //       icon: "/images/plain.png",
    //       kind: "file",
    //       fileType: "fig",
    //       href: "https://google.com",
    //       position: "top-60 left-5",
    //     },
    //   ],
    // },

    // ▶ Project 3
    // {
    //   id: 7,
    //   name: "",
    //   icon: "/images/folder.png",
    //   kind: "folder",
    //   position: "top-10 left-80",
    //   windowPosition: "top-[33vh] left-7",
    //   children: [
    //     {
    //       id: 1,
    //       name: "",
    //       icon: "/images/txt.png",
    //       kind: "file",
    //       fileType: "txt",
    //       position: "top-5 left-10",
    //       description: [
    //         "Our Food Delivery App is a fast and convenient way to order meals from your favorite restaurants.",
    //         "Instead of making calls or waiting in line, you can browse menus, customize orders, and track deliveries in real time.",
    //         "Think of it like having your favorite restaurants in your pocket—ready to deliver anytime, anywhere.",
    //         "It’s built with React Native, so it works smoothly on both iOS and Android with a clean, modern design.",
    //       ],
    //     },
    //     {
    //       id: 2,
    //       name: "",
    //       icon: "/images/safari.png",
    //       kind: "file",
    //       fileType: "url",
    //       href: "https://youtu.be/LKrX390fJMw?si=cExkuVhf2DTV9G2-",
    //       position: "top-10 right-20",
    //     },
    //     {
    //       id: 4,
    //       name: "",
    //       icon: "/images/image.png",
    //       kind: "file",
    //       fileType: "img",
    //       position: "top-52 right-80",
    //       imageUrl: "/images/project-3.png",
    //     },
    //     {
    //       id: 5,
    //       name: "",
    //       icon: "/images/plain.png",
    //       kind: "file",
    //       fileType: "fig",
    //       href: "https://google.com",
    //       position: "top-60 right-20",
    //     },
    //   ],
    // },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 5,
      name: "old Personal Portfolio",
      icon: "/images/safari.png",
      kind: "file",
      fileType: "fig",
      href: "https://react-portfolio-beta-weld-87.vercel.app/",
      position: "top-0 right-100",
    },
    {
      id: 2,
      name: "",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "dist/images/sam1.jpg",
    },
    {
      id: 3,
      name: "",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "dist/images/1.sam.jpg.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-30 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "dist/images/1.sam.jpg.jpg",
      description: [
        "Hey! I’m Samukelo Khathi 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 5,
      name: "Nunes panel shop old website",
      icon: "/images/safari.png",
      kind: "file",
      fileType: "fig",
      href: "https://nunes-panel-shop.vercel.app/",
      position: "top-0 right-90",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "dist/images/oldwebsite front.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };