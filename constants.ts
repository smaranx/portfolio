export const METADATA = {
  title: "Portfolio | Smaran Ummadishetty",
  description:
    "I bridge the gap between design and development. I take responsibility to craft an aesthetic user experience using modern web architecture.",
  siteUrl: "",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I design things",
  "I design user experiences",
  "I design and develop interfaces",
  "I develop web applications",
];

export const EMAIL = "smaran.ummadishetty@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/smaran-ummadishetty-24905717b/",
  github: "https://github.com/smaranx",
  instagram: "https://www.instagram.com/smaran.studio/",
  /*medium: "https://codepen.io/smaran_15/",
  instagram: "https://www.instagram.com/smaran.studio/",
  facebook: "https://www.facebook.com/smaran.ummadishetty",*/
  dribbble: "https://dribbble.com/smaran",
  /*behance: "https://www.behance.net/smaran/",*/
  twitter: "https://twitter.com/xsmaran",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  /*{
    name: "EggShell - Create, Sell & Connect",
    image: "/projects/eggshell.jpg",
    blurImage: "/projects/blur/egshell.jpg",
    description:
      "An NFT Marketplace for artists and influencers to create, sell and connect.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://graceful-puppy-f9844a.netlify.app/",
    tech: ["next", "figma", "css"]
  },*/
  {
    name: "DSP Mutual Funds",
    image: "/projects/dsp.jpg",
    blurImage: "/projects/blur/rapixo.jpg",
    description: "Designed web and mobile app experiences",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://dspim.com/",
    tech: ["figma", "illustrator", "html", "css", "javascript"],
  },
  {
    name: "PROCOM",
    image: "/projects/procom.jpg",
    blurImage: "/projects/blur/procom.jpg",
    description: "A Website for a Home Automation Company 🚀",
    gradient: ["#685506", "#7B6921"],
    url: "https://procom.in/",
    tech: ["figma", "angular", "html", "css"],
  },
  {
    name: "Rapixo Website",
    image: "/projects/rapixo.jpg",
    blurImage: "/projects/blur/rapixo.jpg",
    description: "Rapixo website for public minting",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://rapixo.netlify.app/",
    tech: ["react", "figma", "illustrator", "tailwind"],
  },
 
  {
    name: "Diverse NFT",
    image: "/projects/diverse.jpg",
    blurImage: "/projects/blur/diverse.jpg",
    description: "Built the application from zero to production 🚀",
    gradient: ["#003052", "#167187"],
    url: "https://diverse.com.co",
    tech: ["tailwind", "angular", "sass", "figma"],
  } /*
  {
    name: "Degen Rocks Website",
    image: "/projects/dr.jpg",
    blurImage: "/projects/blur/dr.jpg",
    description: "Website for a Web3 startup",
    gradient: ["#3A0000", "#771E1E"],
    url: "https://www.degen.rocks",
    tech: ["npm", "figma", "angular", "typescript"],
  },*/,
  {
    name: "Kingdom Of Kawai Website",
    image: "/projects/kok.jpg",
    blurImage: "/projects/blur/kok.jpg",
    description: "Kawaii Website for Kingdom of Kawaii NFT Project.",
    gradient: ["#17007B", "#3A2C79"],
    url: "https://kingdomofkawaii.netlify.app/",
    tech: ["angular", "sass", "figma", "gulp"],
  },
  {
    name: "R.O.N.M.I.A",
    image: "/projects/ronmia.jpg",
    blurImage: "/projects/blur/ronmia.jpg",
    description: "Designed and developed the club website",
    gradient: ["#172839", "#334659"],
    url: "https://www.ronmia.in",
    tech: ["figma", "javascript", "html", "css"],
  },
  {
    name: "YearOfAI 2020 ",
    image: "/projects/telai.jpg",
    blurImage: "/projects/blur/ai.jpg",
    description: "A website for a Government of Telangana Initiative 🔥",
    gradient: ["#142D46", "#2E4964"],
    url: "https://ai.telangana.gov.in//",
    tech: ["figma", "react", "tailwind"],
  },
  {
    name: "Tejas Engineering",
    image: "/projects/tejas.jpg",
    blurImage: "/projects/blur/watchers.jpg",
    description: "  A Website for heavy engineering fabrictaions",
    gradient: ["#245B57", "#004741"],
    url: "https://tejasvengineering.com/",
    tech: ["figma", "react", "sass", "gsap"],
  },
  {
    name: "DMCE - College Website",
    image: "/projects/dmce.png",
    blurImage: "/projects/blur/dmcel.jpg",
    description: "Designed & Developed College Website",
    gradient: ["#5E4C06", "#746528"],
    url: "https://www.dmce.ac.in/",
    tech: ["javascript", "html", "css", "figma"],
  } ,
  {
    name: "TSIC",
    image: "/projects/6.png",
    blurImage: "/projects/blur/tsic.jpg",
    description: "Designed the Website for Telangana State Innovation Cell 🚀",
    gradient: ["#470700", "#712A23"],
    url: "https://teamtsic.telangana.gov.in/",
    tech: ["javascript", "html", "css"],
  },
  /*{
    name: "PROCOM",
    image: "/projects/procom.jpg",
    blurImage: "/projects/blur/procom.jpg",
    description: "A Website for a Home Automation Company 🚀",
    gradient: ["#685506", "#7B6921"],
    url: "https://procom.in/",
    tech: ["figma", "angular", "html", "css"],
  },
 /* {
    name: "Dice game",
    image: "/projects/dice.jpg",
    blurImage: "/projects/blur/dice.jpg",
    description: "First web project! A Dice game",
    gradient: ["#552A04", "#614023"],
    url: "https://dice-js.herokuapp.com/",
    tech: ["javascript", "html", "css"],
  },*/
];

export const SKILLS = {
  userInterface: [
    "figma",
    "sketch",
    "adobexd",
    "protopie",
    "svg",
    "illustrator",
    "photoshop",
  ],
  frontEnd: [
    "javascript",
    "react",
    /*"angular",*/
    "next",
    "tailwind",
    /*"redux",
    "next",
    "angular",
    "gsap",
    "tailwind",
    "sass",
    "svg",*/,
    "html",
    "css",
  ],
  other: [
    "git",
    "webpack",
    //"gulp",
    "lightroom",
    "aftereffects",
  ],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI/UX Designer (Current)",
    size: ItemSize.SMALL,
    subtitle: "Designing experiences 😎",
    image: "/timeline/promol.svg",
    slideImage: "/timeline/promo.svg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI/UX Design Consultant",
    size: ItemSize.SMALL,
    subtitle: "Improved Web & Mobile application expereinces 😎",
    image: "/timeline/dspl.svg",
    slideImage: "/timeline/dspp.svg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "District Technology Director (Current)",
    size: ItemSize.SMALL,
    subtitle: "Incharge of digital developments in the district 😎",
    image: "/timeline/3142.svg",
    slideImage: "/timeline/3142.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI/UX Engineer",
    size: ItemSize.SMALL,
    subtitle: "Designed & Developed Web3 launching platforms 🔥",
    image: "/timeline/degen.svg",
    slideImage: "/timeline/diverse.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  /*{
    type: NodeTypes.CHECKPOINT,
    title: "Web Developer (freelance)",
    size: ItemSize.SMALL,
    subtitle: "Developed the website from zero to launch 🚀",
    image: "/timeline/ronmia.svg",
    slideImage: "/timeline/ron.JPG",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  /*{
    type: NodeTypes.CHECKPOINT,
    title: "Creatives Director ",
    size: ItemSize.SMALL,
    subtitle: "Contributed towards design and execution of projects 🚀",
    image: "/timeline/rcnm.svg",
    slideImage: "/timeline/rcnm.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },*/

  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  } /*
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Worked on enterprise blockchain solutions for web. Transforming UI/UX and frontend framework. Built a design system.",
    image: "/timeline/dltlabs.svg",
    slideImage: "/timeline/dlt-website.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Designer Intern(freelance)",
    size: ItemSize.SMALL,
    subtitle:
      "Designed & Developed the official college website from scratch 🚀",
    image: "/timeline/dmce.svg",
    slideImage: "/timeline/dmce.JPG",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },*/,
  {
    type: NodeTypes.CHECKPOINT,
    title: "Web Design Intern",
    size: ItemSize.SMALL,
    subtitle:
      "Designed & Developed the official college website from scratch 🚀",
    image: "/timeline/dmce.svg",
    slideImage: "/timeline/dmce.JPG",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Jr. Web Developer",
    size: ItemSize.SMALL,
    subtitle: "First job! 🥳 Designed and developed various projects.",
    image: "/timeline/outshade.svg",
    slideImage: "/timeline/outshade.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  /*
  {
    type: NodeTypes.CHECKPOINT,
    title: "2020",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  } /*
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Student lead at SDC-SI",
    size: ItemSize.SMALL,
    subtitle:
      "Represented a team of 39 talented developers. Served different roles of leadership, project management and delivery.",
    image: "/timeline/si.svg",
    slideImage: "/timeline/si-head.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Lecture on SVG animations",
    size: ItemSize.SMALL,
    subtitle:
      "Guided 200 students to create their first animated SVG using CSS/SMIL at PHP Workshop, SDC-SI",

    slideImage: "/timeline/svg-lecture.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2017",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  } /*
  {
    type: NodeTypes.CHECKPOINT,
    title: "1st position in Web Designing, IMSU",
    size: ItemSize.SMALL,
    subtitle:
      "Competed against 20+ teams for design and development of web project from scratch",
    slideImage: "/timeline/ims-17.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Lecture on Javascript",
    size: ItemSize.SMALL,
    subtitle:
      "Guided 200 students for javascript fundamentals at Game Development workshop, SDC-SI",
    slideImage: "/timeline/js-17.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "1st position in Web Design, ABES ACM",
    size: ItemSize.SMALL,
    subtitle:
      "Competed in web and graphic design challenge with 100+ participants.",
    slideImage: "/timeline/abes-17.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Lecture on Web Technologies",
    size: ItemSize.SMALL,
    subtitle:
      "Guided 300+ students on getting started with web technologies like HTML/CSS and JS",
    slideImage: "/timeline/web-17.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2016",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "1st position in Web Designing, IMSU",
    size: ItemSize.SMALL,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/timeline/ims-16.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI/UX, Frontend Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Started journey in SDC-SI, where I learnt the fundamentals of Frontend, UI/UX, Graphic design and more...",
    image: "/timeline/si.svg",
    slideImage: "/timeline/si-start.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2014",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Recognized Themer",
    size: ItemSize.SMALL,
    subtitle:
      "Awarded as recognized themer,  Developed themes and ROMs for Xperia 2011 devices lineup with over 15k+ downloads. Featured on xda portal twice.",
    image: "/timeline/xda.svg",
    slideImage: "/timeline/xda-rt.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },*/
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
