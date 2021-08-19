/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Hello World! Umair here",
  logo_name: "Umair Jibran",
  nickname: "Omair Jibran",
  subTitle:
    "A full stack  (MEVN) 💻 + Flutter 📱 developer - A student mentor 👨‍🏫 - Public Speaker 🎤",
  resumeLink:
    "https://drive.google.com/file/d/1eP9O3EAZMfRrqqTXlDFeCJkU5WjyhWYz/view?usp=sharing",
  portfolio_repository: "https://github.com/umairjibran/umairjibran.github.io",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/umairjibran",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/umairjibran/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Medium",
    link: "https://medium.com/@umairjibran",
    fontAwesomeIcon: "fa-medium", // Reference https://fontawesome.com/icons/medium?style=brands
    backgroundColor: "#0C2461", // Reference https://simpleicons.org/?q=medium
  },
  {
    name: "Twitter",
    link: "https://twitter.com/umairjibran7",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/umairjibran8",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/umairjibran7/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const formalSocialMediaLinksHome = [
  {
    name: "Email",
    link: "mailto:hi@umairjibran.me?cc=umairjibran7@gmail.com&cc=umair@shaoor.tech",
    fontAwesomeIcon: "far fa-envelope", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#aa9c81", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Github",
    link: "https://github.com/umairjibran",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/umairjibran/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Medium",
    link: "https://medium.com/@umairjibran",
    fontAwesomeIcon: "fa-medium", // Reference https://fontawesome.com/icons/medium?style=brands
    backgroundColor: "#000", // Reference https://simpleicons.org/?q=medium
  },
];

const informalSocialMediaLinksHome = [
  {
    name: "Twitter",
    link: "https://twitter.com/umairjibran7",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/umairjibran8",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Snapchat",
    link: "https://www.snapchat.com/add/umairjibran7",
    fontAwesomeIcon: "fa-snapchat-ghost",
    backgroundColor: "#ffdf1f",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/umairjibran7/",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
  {
    name: "Whatsapp",
    link: "https://api.whatsapp.com/send?phone=+92312-091-9647",
    fontAwesomeIcon: "fa-whatsapp",
    backgroundColor: "#25D366",
  },
  {
    name: "iMessage",
    link: "sms:+923120919647&body=Hi",
    fontAwesomeIcon: "fa fa-comment",
    backgroundColor: "#FF9800",
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "Building responsive websites using VUE.js | HTML/CSS | Bootstrap | TailwindCSS",
        "Creating Single page rendering applications using VUE.JS",
        "Developing mobile applications using Flutter",
        "Creating optimized application backends in Node.js, Express.js and PHP",
        "Experience in usage of Rest APIs in modern programming practices",
      ],
      softwareSkills: [
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#60CAF6",
          },
        },
        {
          skillName: "VUE JS",
          fontAwesomeClassname: "simple-icons:vue-dot-js",
          style: {
            color: "#13AA52",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "orange",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "black",
          },
        },
        {
          skillName: "mongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#13AA52",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "Experience working on Azure platform",
        "Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "Routing DNS records across different websites with secure SSL certificates",
      ],
      softwareSkills: [
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#430098",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#8BA8B9",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "Designing highly attractive user interface for mobile and web applications",
        "Customizing logo designs and making logos from scratch",
        "Creating the flow of application functionalities to optimize user experience",
        "Enabling engaging user experience for generating leeds",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Microsoft",
      iconifyClassname: "logos:microsoft-windows",
      style: {
        color: "#fda",
      },
      profileLink: "https://docs.microsoft.com/en-us/users/umairjibran-0335/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "City University of Science and Information Technology, Peshawar",
      subtitle: "Bachelor's in Computer Sciences",
      logo_path: "cusit-logo.png",
      alt_name: "CUSIT - Peshawar, Pakistan",
      duration: "2017 - Present",
      descriptions: [
        "I have gained deep insights into fundamental software engineering courses like DS, Algorithms, DBMS, OS, Advanced Programming etc.",
        "Apart from this, I have done courses on MEVN Stack Development, Cloud Computing",
      ],
      website_link: "https://cu.edu.pk/",
    },
  ],
};

const certifications = {
  //TODO: Add Certificates
  certifications: [
    {
      title: "Node.js Essential Training",
      subtitle: "",
      logo_path: "linkedin-learning-logo.png",
      certificate_link:
        "https://drive.google.com/file/d/14G4C4lUnL2TVId0r-yls2-aQqEepLOnB/view?usp=sharing",
      alt_name: "LinkedIn Learning",
      color_code: "white",
    },
    {
      title: "Amal Academy Fellowship",
      subtitle: "Career Prep Fellowship",
      logo_path: "amal-logo.png",
      certificate_link: "",
      alt_name: "Amal Fellowship",
      color_code: "white",
    },
    {
      title: "Tailwind CSS Essential Training",
      subtitle: "",
      logo_path: "linkedin-learning-logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1VvJWsrahKLaulkwj44pFp6RBKluaBuT8/view?usp=sharing",
      alt_name: "LinkedIn Learning",
      color_code: "white",
    },
    {
      title: "Microsoft Power Platform Foundations",
      subtitle: "",
      logo_path: "linkedin-learning-logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1dupqrAoB-BfZSb0kcOKxk24cbLdHy5cp/view?usp=sharing",
      alt_name: "LinkedIn Learning",
      color_code: "white",
    },
    {
      title: "Learning Vue.js",
      subtitle: "",
      logo_path: "linkedin-learning-logo.png",
      certificate_link:
        "https://drive.google.com/file/d/146NHQrDydavrz5n2lWX2-Kpr8IuVjDpu/view?usp=sharing",
      alt_name: "LinkedIn Learning",
      color_code: "white",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship and Volunteership",
  description:
    "I have worked with an evolving startup as a Designer and Flutter Developer. I love giving back to the people what I have learnt. So, organising events and fundraising is what I do week in week out. I have been a mentor to students in different hackathos as a Microsoft representative and creating empowering communities that benefits more than 1150 people accross the country",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Mobile Application Developer",
          company: "ProductBox",
          company_url: "https://www.productbox.dev/",
          logo_path: "product-box-logo.png",
          duration: "July 2021 - Present",
          location: "Peshawar",
          description: "",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Flutter Intern",
          company: "IdeoMetrix",
          company_url: "https://www.ideometrix.com/",
          logo_path: "ideometrix-logo.png",
          duration: "August 2020 - November 2021",
          location: "Islamabad, Pakistan",
          description:
            "My main responsibilties include designing frontend for the applications as well as teaching those interns who were new to flutter, I also acted as team lead in the absence of our designated team lead.",
          color: "#ee3c26",
        },
        {
          title: "Associate Full Stack Engineer",
          company: "Prodoct Box",
          company_url: "https://www.productbox.dev/",
          logo_path: "product-box-logo.png",
          duration: "May 2021 - July 2021",
          location: "Peshawar, Pakistan",
          description:
            "My responsibilities include, but are not limited to: \n◦\t Work with customers/product managers to define, build out, test and release features and products. \n◦\t Partner with customers and cross cutting teams to ensure projects are delivered as committed and per expectation of customers/product managers. \n◦\t Develop core application of clients in Flutter/Node.js Framework.\n◦\t Write automated test cases of high quality.",
          color: "#1c0c0c",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Microsoft Learn Student Ambassador",
          company: "Microsoft",
          company_url: "https://studentambassadors.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2020 - present",
          location: "CUSIT, Peshawar, Pakistan",
          description:
            "Microsoft Student Ambassador is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops of GitHub and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "",
          location: "",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Hacktoberfest and flutter mobile apps. These contributions include bug fixes, feature requests and formulating proper documentation for a project.",
          color: "#181717",
        },
        {
          title: "BookDrive",
          company: "Read Pakistan",
          company_url: "https://readpakistan.org.pk/",
          logo_path: "book-charity.svg",
          duration: "",
          location: "Peshawar, Pakistan",
          description:
            "I collected over 140 books curricullum books ranging from school to university and donated them which were then delivered to deserving unfortunate children who couldn't afford to purchase them.",
          color: "#181717",
        },
        {
          title: "BookDrive",
          company: "Chughtai Library",
          company_url:
            "https://chughtailab.com/chughtai-foundation/chughtaipubliclibrary/",
          logo_path: "book-charity.svg",
          duration: "",
          location: "Peshawar, Pakistan",
          description:
            "I collected over 30 books non-curricullum books ranging from Novels to test preparation modules and donated Chughtai Labs's pulbic library which were then placed in the library for readers to benifit from.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools including VueJs, Nodejs, ExpressJs, PHP, MongoDB, HTML/CSS, C/C++, Andriod Apps in Java, and flutter. My best experience is to create Full stack applications and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "address_image.svg",
    description:
      "I am available on almost every social media. And here is the fun part, I'm very responsive, so feel free to reach me out weather you want a Freelance work to be done or need a speaker for your tech talk. You can hit me up in order to have a Tech advice too! I can help you with Vue, Android, Flutter, Microsoft Power Platform, Cloud and Opensource Development.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saeed Abad # 2, Dalazak Road, Peshawar, Pakistan",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+92 3120919647",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  formalSocialMediaLinksHome,
  informalSocialMediaLinksHome,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
