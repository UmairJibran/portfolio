/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Jibran here!",
  logo_name: "Umair Jibran",
  nickname: "Omair Jibran",
  subTitle: "Full stack developer",
  extraInfo:
    "Experienced Full Stack Engineer with a strong background in Git & GitHub, Serverless, Microservices, AWS, NodeJS, Flutter, and ReactJS. Skilled in both SQL and NoSQL databases, including MySQL, DynamoDB, Firebase Firestore, and MongoDB, as well as programming languages such as Javascript, Python, Typescript, and Dart. Known for delivering results and translating complex technical concepts into actionable solutions. Passionate about innovation and problem-solving, seeking new opportunities in leadership and technology. Let's connect to exchange thoughts!",
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
    featherIcon: "github",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/umairjibran/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
    featherIcon: "linkedin",
  },
  {
    name: "Medium",
    link: "https://medium.com/@umairjibran",
    fontAwesomeIcon: "fa-medium", // Reference https://fontawesome.com/icons/medium?style=brands
    backgroundColor: "#0C2461", // Reference https://simpleicons.org/?q=medium
    featherIcon: "feather",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/umairjibran7",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
    featherIcon: "twitter",
  },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/umairjibran8",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // featherIcon: "github",
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/umairjibran7/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // featherIcon: "github",
  // },
];

const formalSocialMediaLinksHome = [
  {
    name: "Email",
    link: "mailto:me@umairjibran.com?cc=umairjibran7@gmail.com",
    fontAwesomeIcon: "far fa-envelope", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#aa9c81", // Reference https://simpleicons.org/?q=gmail
    featherIcon: "mail",
  },
  {
    name: "Github",
    link: "https://github.com/umairjibran",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
    featherIcon: "github",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/umairjibran/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
    featherIcon: "linkedin",
  },
  {
    name: "Medium",
    link: "https://medium.com/@umairjibran",
    fontAwesomeIcon: "fa-medium", // Reference https://fontawesome.com/icons/medium?style=brands
    backgroundColor: "#000", // Reference https://simpleicons.org/?q=medium
    featherIcon: "feather",
  },
];

const informalSocialMediaLinksHome = [
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/umairjibran7",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  // {
  //  name: "Facebook",
  //  link: "https://www.facebook.com/umairjibran8",
  //  fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //  backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Snapchat",
  //   link: "https://www.snapchat.com/add/umairjibran7",
  //   fontAwesomeIcon: "fa-snapchat-ghost",
  //   backgroundColor: "#ffdf1f",
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/umairjibran7/",
  //   fontAwesomeIcon: "fa-instagram",
  //   backgroundColor: "#E4405F",
  // },
  // {
  //   name: "Whatsapp",
  //   link: "https://api.whatsapp.com/send?phone=+92312-091-9647",
  //   fontAwesomeIcon: "fa-whatsapp",
  //   backgroundColor: "#25D366",
  // },
  // {
  //  name: "iMessage",
  //  link: "sms:+923120919647&body=Hi",
  //  fontAwesomeIcon: "fa fa-comment",
  //  backgroundColor: "#FF9800",
  // },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "Developing Backend APIs for Web/Mobile Applications (Express.js, AWS Lambda, Google Firebase Cloud Functions)",
        "Developing cross platform (android/iOS) Mobile Applications via Flutter",
        "Developing Web Applications (VUE.js | Bootstrap | TailwindCSS)",
        "Developing Static Websites (HTML/CSS | Bootstrap | TailwindCSS)",
        "Optimizing Existing APIs",
        "Optimizing Existing Websites",
        "Integrating Payment Gateways",
        "Writing end-to-end and unit Test Cases",
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3178C6",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Socket.io",
          fontAwesomeClassname: "simple-icons:socketdotio",
          style: {
            color: "#010101",
            // color: "#FFFFFF",
          },
        },
        {
          skillName: "Sequelize",
          fontAwesomeClassname: "simple-icons:sequelize",
          style: {
            color: "#52B0E7",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Jest",
          fontAwesomeClassname: "simple-icons:jest",
          style: {
            color: "#C21325",
          },
        },
        {
          skillName: "yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "skyblue",
          },
        },
        {
          skillName: "mocha",
          fontAwesomeClassname: "simple-icons:mocha",
          style: {
            color: "#8D6748",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#60CAF6",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "simple-icons:dart",
          style: {
            color: "#0175C2",
          },
        },
        {
          skillName: "TailwindCSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#06B6D4",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#474aBa",
          },
        },
        {
          skillName: "WordPress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#21759B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "Deploying services on AWS Lambda",
        "Deploying instances on AWS EC2",
        "Deploying services on Google Cloud Functions",
        "Deploying services on Azure Functions",
        "Deploying Static Websites on AWS S3",
        "Deploying dynamic web apps on Azure Web App",
        "Configuring and deploying MySQL and/or NoSQL databases, such as Firebase Realtime Database, DynamoDB, MySQL, MongoDB, and PostgreSQL",
        "Monitoring and Logging on AWS CloudWatch",
        "Deploying REST APIs on Heroku",
        "Routing DNS records across different websites with secure SSL certificates",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Google Cloud",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
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
          skillName: "Serverless",
          fontAwesomeClassname: "simple-icons:serverless",
          style: {
            color: "#FD5750",
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
        {
          skillName: "DynamoDb",
          fontAwesomeClassname: "simple-icons:amazondynamodb",
          style: {
            color: "#4053D6",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "000000",
            // color: "#FFFFFF",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#2088FF",
          },
        },
      ],
    },
    {
      title: "Design & Misc",
      fileName: "DesignImg",
      skills: [
        "Designing highly attractive user interface for mobile and web applications",
        "Researching User Experience with current designs, and enhance them using best practices",
        "Customizing logos and designing logos from scratch",
        "Creating the flow of application functionalities aka Prototyping",
        "Enable engaging user experience for generating leeds",
        "Documenting the API using industry standards",
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
          skillName: "Swagger",
          fontAwesomeClassname: "simple-icons:swagger",
          style: {
            color: "#85EA2D",
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
      duration: "2017 - 2021",
      descriptions: [
        "I have gained deep insights into fundamental software engineering courses like DS, Algorithms, DBMS, OS, Advanced Programming etc.",
        "Apart from this, I have completed courses on and implemented them using real life scenarios projects on Flutter Mobile Development Framwork, NodeJS,  MEVN Stack Development, Cloud Computing",
      ],
      website_link: "https://cu.edu.pk/",
    },
  ],
};

const certifications = {
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
  subtitle: "Jobs, Internships, and Volunteer work",
  description:
    "I worked as a Backend Developer, Designer, and Flutter Developer in an evolving startup. Timeline: Mentored students in hackathons as a Microsoft representative, creating empowering communities that benefited over 1500 students and new developers worldwide.",
  timeline: [
    {
      company: "Productbox",
      startingDate: {
        year: "2021",
        month: "May",
        day: "03",
      },
      endingDate: {
        year: "2023",
        month: "November",
        day: "25",
      },
      companyUrl: "https://www.productbox.dev/",
      logo_path: "productbox-logo.png",
      location: "Peshawar, Pakistan",
      roles: [
        {
          title: "Full Stack Engineer",
          startedAt: {
            year: "2022",
            month: "July",
            day: "01",
          },
          endedAt: null,
          description: "",
        },
        {
          title: "Associate Full Stack Engineer",
          startedAt: {
            year: "2021",
            month: "July",
            day: "01",
          },
          endedAt: {
            year: "2022",
            month: "July",
            day: "01",
          },
          description:
            "I contributed to diverse software projects, building efficient and scalable web apps using Node.js, React, Serverless, and AlpineJS. I developed RESTful APIs, managed databases (SQL and NoSQL), and collaborated with DevOps teams for deployment. Experiment different agile methodologies, Python's OpenCV, and Flutter. Effective communication, collaboration, and continual improvement remain priorities.",
        },
        {
          title: "Junior Full Stack Engineer",
          startedAt: {
            year: "2021",
            month: "May",
            day: "03",
          },
          endedAt: {
            year: "2021",
            month: "July",
            day: "03",
          },
          description:
            "As a junior full stack engineer at Productbox, I collaborated on web apps. Gained experience in MySQL, Express.js, Firebase Auth. Assisted in DB management, server-side dev, secure user auth with Firebase. ",
        },
      ],
    },
    {
      company: "IdeoMetrix",
      startingDate: {
        year: "2020",
        month: "August",
        day: "15",
      },
      endingDate: {
        year: "2020",
        month: "November",
        day: "15",
      },
      companyUrl: "https://www.ideometrix.com/",
      logo_path: "ideometrix-logo.png",
      location: "Islamabad, Pakistan",
      roles: [
        {
          title: "Junior Flutter Developer",
          description:
            "My main responsibilities include designing frontend for the applications as well as helping out fellow interns who were new to flutter.",
          startedAt: {
            year: "2020",
            month: "August",
            day: "15",
          },
          endedAt: {
            year: "2020",
            month: "November",
            day: "15",
          },
        },
      ],
    },
    {
      company: "Microsoft",
      startingDate: {
        year: "2020",
        month: "August",
        day: "01",
      },
      endingDate: {
        year: "2021",
        month: "December",
        day: "31",
      },
      companyUrl: "https://studentambassadors.microsoft.com/",
      logo_path: "microsoft-logo.png",
      location: "Peshawar, Pakistan",
      roles: [
        {
          title: "Microsoft Learn Student Ambassador - Volunteer",
          description:
            "As a Microsoft Student Ambassador, I led the promotion and utilization of Cloud, specifically Azure tools, among university students for their projects and startups. Organized hands-on workshops and seminars on GitHub and Cloud Computing concepts, empowering students with practical knowledge.",
          startedAt: {
            year: "2020",
            month: "August",
            day: "01",
          },
          endedAt: {
            year: "2021",
            month: "December",
            day: "31",
          },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: "", //"My projects makes use of vast variety of latest technology tools including Nodejs, ExpressJS, AWS Lambda, Serverless Framework, Flutter, DynamoDB, MySQL, MongoDB, PHP, HTML/CSS, TailwindCSS, Bootstrap, C/C++. The design and architecture of the project plays an important role for me, so keeping the project scope in mind, selecting from one of the many design patterns and architectures is critical. Apart from development I do have a firm grasp in User Interface Designs using Figma and XD.",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "hello.svg",
    description:
      "I'm a tech enthusiast and I love connecting with others who share the same passion! You can find me on almost every social media platform and I'm always ready to chat. If you need a freelance developer or a tech speaker for your event, hit me up! I'm also happy to offer tech advice on Vue, Android, Flutter, Cloud, and Open-source development. So don't hesitate to reach out, let's geek out together!",
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

// Testimonials Page
const testimonialsPageData = [
  {
    name: "Waleed Waseem",
    designation: "Founder and CEO",
    employerAtTime: "Productbox",
    linkedin: "https://www.linkedin.com/in/waleed-waseem-2b625270/",
    message: `I had the privilege of working with Umair Jibran for over two years, and it is without a doubt that he is one of the most talented backend resources I've had the pleasure of collaborating with. Umair not only possesses exceptional technical skills but also carries himself with a remarkable level of professionalism, setting a clear standard for what a Professional Engineer should be.`,
    email: "waleed@productbox.dev",
  },
  {
    name: "Farqaleet Kirmani",
    designation: "Co-founder",
    employerAtTime: "Nordvisor",
    linkedin: "https://www.linkedin.com/in/farqaleetkirmani",
    message: `I highly recommend Umair as an exceptional resource for any project or team. He joined our project with limited experience but quickly proved himself as highly dedicated and a fast learner. He continuously demonstrated a remarkable work ethic, taking ownership for the project tasks and challenges even when they were not his direct responsibility. He constantly strove for excellence.`,
  },

  {
    name: "Saif Ullah Sajid",
    designation: "Engineering Lead | iOS Engineer",
    employerAtTime: "Heini",
    linkedin: "https://www.linkedin.com/in/saifsajid99/",
    message:
      "Jibran is someone who stops at nothing. Once he is challenged to do a task, he delivers the best output no matter what. Being a manager jibran was the easiest engineer to manage. He is always humble and friendly. His learning attitude is amazing and he experiments with the top tech all the time. He is way ahead of his time in his professional journey.",
    website: "https://saifullahsajid.com/",
  },
];

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
  testimonialsPageData,
};
