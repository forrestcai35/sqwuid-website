/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "SWQUID",
  description: "",
  og: {
    title: "SQWUID",
    type: "website",
    url: "",
  },
};

const greeting = {
  title: "SQWUID",
  logo_name: "",
  subTitle: `A small venture-driven team. We're a  collective of innovators, creators, 
  athletes, gamers, and dreamers. 
Our mission is simple: turn day-to-day challenges into opportunities  
to build scalable, robust solutions.`,
};

const socialMediaLinks = [
  /* Your Social Media Link */

  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/sqwuid/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:hello@sqwuid.com",
    fontAwesomeIcon: "fas fa-envelope", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Tiktok",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-tiktok", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Solve",
      fileName: "DataScienceImg",
      skills: [
        "- Developing highly scalable production ready models for various use cases",
        "- Experience of working with Computer Vision and NLP projects",
        "- Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        // {
        //   skillName: "Tensorflow",
        //   fontAwesomeClassname: "logos-tensorflow",
        //   style: {
        //     backgroundColor: "transparent",
        //   },
        // },
      ],
    },
    {
      title: "Develop",
      fileName: "FullStackImg",
      skills: [
        "- Building responsive website and mobile front ends",
        "- Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        // {
        //   skillName: "HTML5",
        //   fontAwesomeClassname: "simple-icons:html5",
        //   style: {
        //     color: "#E34F26",
        //   },
        // },
      ],
    },

    {
      title: "Design",
      fileName: "DesignImg",
      skills: [
        "- Design attractive user interface for mobile and web applications",
        "- Customize logo designs and building logos from scratch",
        "- Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        // {
        //   skillName: "Adobe XD",
        //   fontAwesomeClassname: "simple-icons:adobexd",
        //   style: {
        //     color: "#FF2BC2",
        //   },
        // },
      ],
    },
  ],
};

// Portfolio Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
  ],
};

// PROJECTS WE ARE DOING
const degrees = {
  degrees: [
    {
      title: "PRate",
      logo_path: "PRateLogo.png",
      duration: "Building...",
      descriptions: ["A fitness app that allows you to rate your physique."],
      // website_link: "test.com",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  // data: [
  //   {
  //     id: "neuro-symbolic-sudoku-solver",
  //     name: "Neuro-Symbolic Sudoku Solver",
  //     createdAt: "2023-07-02T00:00:00Z",
  //     description: "Paper published in KDD KiML 2023",
  //     url: "https://arxiv.org/abs/2307.00653",
  //   },
  // ],
};

// Contact Page
const contactPageData = {
  // contactSection: {
  //   title: "Contact Us",
  //   profile_image_path: "animated_ashutosh.png",
  //   description: "",
  // },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
  //   link: "https://blogs.ashutoshhathidara.com/",
  //   avatar_image_path: "blogs_image.svg",
  // },
  // addressSection: {
  //   title: "Address",
  //   subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
  //   locality: "San Jose",
  //   country: "USA",
  //   region: "California",
  //   postalCode: "95129",
  //   streetAddress: "Saratoga Avenue",
  //   avatar_image_path: "address_image.svg",
  //   location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  // },
  // phoneSection: {
  //   title: "",
  //   subtitle: "",
  // },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
