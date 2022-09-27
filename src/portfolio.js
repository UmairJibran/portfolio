/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Hello World, Jibran here!",
  logo_name: "Umair Jibran",
  nickname: "Omair Jibran",
  subTitle: "Full stack developer",
  extraInfo:
    "Learning new tech everyday. A curious full stack developer with over 2 years of experience. Let's connect!",
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
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/umairjibran8",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/umairjibran7/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const formalSocialMediaLinksHome = [
  {
    name: "Email",
    link: "mailto:me@umairjibran.com?cc=umairjibran7@gmail.com",
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
  {
    name: "Whatsapp",
    link: "https://api.whatsapp.com/send?phone=+92312-091-9647",
    fontAwesomeIcon: "fa-whatsapp",
    backgroundColor: "#25D366",
  },
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
        "Automating Tasks via Microservices",
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
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Socket.io",
          fontAwesomeClassname: "simple-icons:socketdotio",
          style: {
            // color: "#010101",
            color: "#FFFFFF",
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
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "Deploying Microservices on AWS Lambda",
        "Deploying Microservices on Google Cloud Functions",
        "Deploying Microservices on Azure Functions",
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
            // color: "000000",
            color: "#FFFFFF",
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
  description: "", // "I have worked with an evolving startup as a Designer and Flutter Developer. I love giving back to the people what I have learnt. So, organising events and fundraising is what I do week in week out. I have been a mentor to students in different hackathos as a Microsoft representative and creating empowering communities that benefits more than 1150 people accross the country",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Associate Full Stack Engineer",
          company: "Productbox",
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
          title: "Associate Full Stack Engineer Intern",
          company: "Productbox",
          company_url: "https://www.productbox.dev/",
          logo_path: "product-box-logo.png",
          duration: "May 2021 - July 2021",
          location: "Peshawar, Pakistan",
          description: "", // "My responsibilities included, but were not limited to: \n◦ Work with customers/product managers to define, build out, test and release features and products. \n◦ Partner with customers and cross cutting teams to ensure projects are delivered as committed and per expectation of customers/product managers. \n◦ Develop core application of clients in Flutter/Node.js Framework.\n◦ Write automated test cases of high quality.",
          color: "#1c0c0c",
        },
        {
          title: "Flutter Intern",
          company: "IdeoMetrix",
          company_url: "https://www.ideometrix.com/",
          logo_path: "ideometrix-logo.png",
          duration: "August 2020 - November 2021",
          location: "Islamabad, Pakistan",
          description: "", //"My main responsibilties include designing frontend for the applications as well as teaching those interns who were new to flutter, I also acted as team lead in the absence of our designated team lead.",
          color: "#ee3c26",
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
          duration: "Aug 2020 - Dec 2021",
          location: "CUSIT, Peshawar, Pakistan",
          description: "", // "Microsoft Student Ambassador is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops of GitHub and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        // {
        //   title: "Developer Program Member",
        //   company: "Github",
        //   company_url: "https://github.com/",
        //   logo_path: "github_logo.png",
        //   duration: "",
        //   location: "",
        //   description:
        //     "Actively contributing to many opensource projects. I have contributed to projects of organisations like Hacktoberfest and flutter mobile apps. These contributions include bug fixes, feature requests and formulating proper documentation for a project.",
        //   color: "#181717",
        // },
        // {
        //   title: "BookDrive",
        //   company: "Read Pakistan",
        //   company_url: "https://readpakistan.org.pk/",
        //   logo_path: "book-charity.svg",
        //   duration: "",
        //   location: "Peshawar, Pakistan",
        //   description:
        //     "Collected over 140 books curricullum books ranging from school to university and donated them which were then delivered to deserving unfortunate children who couldn't afford to purchase them.",
        //   color: "#181717",
        // },
        // {
        //   title: "BookDrive",
        //   company: "Chughtai Library",
        //   company_url:
        //     "https://chughtailab.com/chughtai-foundation/chughtaipubliclibrary/",
        //   logo_path: "book-charity.svg",
        //   duration: "",
        //   location: "Peshawar, Pakistan",
        //   description:
        //     "Collected over 30 books non-curricullum books ranging from Novels to test preparation modules and donated Chughtai Labs's pulbic library which were then placed in the library for readers to benifit from.",
        //   color: "#181717",
        // },
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

// Testimonials Page
const testimonialsPageData = [
  {
    name: "Waleed Waseem",
    designation: "Founder and CEO",
    employerAtTime: "Productbox",
    nameLink: "https://www.linkedin.com/in/waleed-waseem-2b625270/",
    linkedin: "https://www.linkedin.com/in/waleed-waseem-2b625270/",
    message: `#madprops to Jibran U. for handling a product which I personally believe is the most complex application we are tackling around server-less model. Excellent work and keep it up!`,
    email: "waleed@productbox.dev",
  },
  {
    name: "Saif Ullah Sajid",
    designation: "Engineering Lead | iOS Engineer",
    employerAtTime: "Productbox",
    nameLink: "https://www.linkedin.com/in/saifsajid99/",
    linkedin: "https://www.linkedin.com/in/saifsajid99/",
    message:
      "Jibran is someone who stops at nothing. Once he is challenged to do a task, he delivers the best output no matter what. Being a manager jibran was the easiest engineer to manage. He is always humble and friendly. His learning attitude is amazing and he experiments with the top tech all the time. He is way ahead of his time in his professional journey.",
    website: "https://saifullahsajid.com/",
  },
  {
    name: "Mohsin Raza",
    designation: "Lecturer at Department of Geology",
    employerAtTime: "Bacha Khan University",
    nameLink: "https://www.linkedin.com/in/mohsin-raza-7025344a/",
    linkedin: "https://www.linkedin.com/in/mohsin-raza-7025344a/",
    message: `Jibran is very hardworking and extremely talented individual. I got a chance to spend time with him during our Three months fellowship at Amal Academy. I found him very supportive and a great problem solver.`,
  },
  {
    name: "Qaiser Hussain",
    designation: "Android Developers Lead",
    employerAtTime: "FF Steels",
    nameLink: "https://www.linkedin.com/in/qaiser-hussain-khan-bangash/",
    linkedin: "https://www.linkedin.com/in/qaiser-hussain-khan-bangash/",
    message: `Umair is a modern application developer who has got special approach and techniques of doing any scale of tasks. I have learned basics of flutter from him. He is a good teacher as well as a good human being. I'll definitely recommend him.`,
  },
  {
    name: "Kamal Uddin",
    designation: "Network Administrator | Network Systems Engineer",
    employerAtTime: "",
    nameLink: "https://www.linkedin.com/in/kamaluddin0/",
    linkedin: "https://www.linkedin.com/in/kamaluddin0/",
    message: `I have known Umair Jibran for a little over 4 years. He is one of the best developers I have come across. Umair's strong points are backend development and mobile apps. The thing that sets him apart from other developers is that he has a security-first approach which means your data will be safe, or as safe as it can be!`,
  },
  {
    name: "Muhammad Yasin",
    designation: "Frontend Developer",
    employerAtTime: "DevSlayers",
    nameLink: "https://www.linkedin.com/in/yasin-icl/",
    linkedin: "https://www.linkedin.com/in/yasin-icl/",
    message: `Working with Jibran is an absolute pleasure. He is the best backend developer I have ever worked with. His code quality, both in terms of re-usability and architecture, is unmatched in the industry. I also very much appreciate his focus on maintainability - he always maintains a clear separation of concerns when designing backend systems that are easy to work with for developers who are that focused on details.`,
    email: "yasin_icl@yahoo.com",
    website: "https://www.yasinistic.com",
  },
  {
    name: "Muhammad Ibrahim",
    designation: "ReactJS",
    employerAtTime: "AlphaSquad ",
    nameLink: "https://www.linkedin.com/in/muhammad-ibrahim-9a2aa9169/",
    linkedin: "https://www.linkedin.com/in/muhammad-ibrahim-9a2aa9169/",
    message: `Mr. Umair Jibran is a very hard working person. He is very cooperative and loves to solve problems. I highly recommend him.`,
  },
  {
    name: "Shah Rukh Khalid",
    designation: "Marketing Student | Amal Career Prep Fellow",
    employerAtTime: "Amal Academy",
    nameLink: "https://www.linkedin.com/in/shah-rukh-khalid/",
    linkedin: "https://www.linkedin.com/in/shah-rukh-khalid/",
    message: `Umair Jibran was my group member at Amal Academy. He is the best group member one could have. Always ready to participate and never sits idle. If I every needed any help I would go to him. He is a very reliable person. He has got great skills in his field as well and is actively working on his app design. Alot of people just talk and don't really do any work, but Umair Jibran is that rare breed that actually does what he says. Loved having you as a group member!`,
  },
  {
    name: "Muhammad Sulaimand",
    designation: "Full Stack Developer",
    employerAtTime: "FF STEEL",
    nameLink: "https://www.linkedin.com/in/muhammad-sulaiman-7b2b77194/",
    linkedin: "https://www.linkedin.com/in/muhammad-sulaiman-7b2b77194/",
    message: `working with Umair Jibran can be best luck for a developer because he is one of the smart, technical and cooperative developer he loves to solve different problems, he is very good in R&D and googling.. one the best backend developer`,
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
