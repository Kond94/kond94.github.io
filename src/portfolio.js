/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Kondwerani's Portfolio",
  description:
    "A passionate sytems developer who strives to develop and deliver quality end to end social and technical systems and products which are both sustainable and scalable with the aim of creating a real impact.",
  og: {
    title: "Kondwerani Kamsesa Portfolio",
    type: "website",
    url: "https://github.com/kond94",
  },
};

//Home Page
const greeting = {
  title: "Kondwerani Kamsesa",
  logo_name: "Kondwerani Kamsesa",
  nickname: "Kond",
  subTitle:
    "A passionate Developer who always strives to work on end to end products developing sustainable and scalable social and technical systems to create an impact.",
  resumeLink:
    "https://drive.google.com/file/d/1yr8GN13Wa9bDTfYiT8s_k3RGkSKnOcUS/view?usp=sharing",
  portfolio_repository: "https://github.com/kond94/portfolio",
  githubProfile: "https://github.com/kond94",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/kond94",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kondwerani-kamsesa-04486514a/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Outlook",
    link: "mailto:kamsesakond@hotmail.com",
    fontAwesomeIcon: "fa-microsoft", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/kond94",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/kamsesa/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/kond94/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJs",
        "⚡ Developing Android & iOS apps using React Native",
        "⚡ Developing solo Android apps using Kotlin",
        "⚡ Creating application backend in Node, ASP.Net & Express",
      ],
      softwareSkills: [
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
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
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
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
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
          skillName: ".NET",
          fontAwesomeClassname: "simple-icons:dot-net",
          style: {
            color: "#61DAFB",
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
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing attractive UI's for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating app flows & functions to optimize user experience",
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
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },

    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
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
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
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
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    //   {
    //     siteName: "HackerRank",
    //     iconifyClassname: "simple-icons:hackerrank",
    //     style: {
    //       color: "#2EC866",
    //     },
    //     profileLink: "https://www.hackerrank.com/",
    //   },
    //   {
    //     siteName: "Codechef",
    //     iconifyClassname: "simple-icons:codechef",
    //     style: {
    //       color: "#5B4638",
    //     },
    //     profileLink: "https://www.codechef.com/users/",
    //   },
    //   {
    //     siteName: "Codeforces",
    //     iconifyClassname: "simple-icons:codeforces",
    //     style: {
    //       color: "#1F8ACB",
    //     },
    //     profileLink: "http://codeforces.com/profile/",
    //   },
    //   {
    //     siteName: "Hackerearth",
    //     iconifyClassname: "simple-icons:hackerearth",
    //     style: {
    //       color: "#323754",
    //     },
    //     profileLink: "https://www.hackerearth.com/",
    //   },
    //   {
    //     siteName: "Kaggle",
    //     iconifyClassname: "simple-icons:kaggle",
    //     style: {
    //       color: "#20BEFF",
    //     },
    //     profileLink: "https://www.kaggle.com/laymanbrother",
    //   },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Malawi",
      subtitle: "B.Science. in Management Information Systems",
      logo_path: "unimaNoBg.png",
      alt_name: "UNIMA - Polytechnic",
      duration: "2013 - 2018",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Data Science, Cloud Computing and Full Stack Development.",
      ],
      website_link: "http://mubas.ac.mw",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Mastering React",
      subtitle: "- Mosh Hamedani",
      logo_path: "cwm.png",
      // certificate_link:
      //   "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Complete SQL Mastery",
      subtitle: "- Mosh Hamedani",
      logo_path: "cwm.png",
      // certificate_link:
      //   "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Fullstack Advanced React & GraphQL",
      subtitle: "- Wes Bos",
      logo_path: "wb.png",
      // certificate_link:
      //   "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Ultimate React-Native",
      subtitle: "- Mosh Hamedani",
      logo_path: "cwm.png",
      // certificate_link:
      //   "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "The Complete Node.js Course",
      subtitle: "- Mosh Hamedani",
      logo_path: "cwm.png",
      // certificate_link:
      //   "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "The Complete Python Cource",
      subtitle: "- Mosh Hamedani",
      logo_path: "cwm.png",
      // certificate_link:
      //   "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "CCNA 1 - 4",
      subtitle: "- Cisco",
      logo_path: "cisco.png",
      // certificate_link:
      //   "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with some well established companies mostly as a Developer. I love organising projects and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Developer",
          company: "Freelance",
          // company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2017 - PRESENT",
          location: "Blantyre, Malawi",
          description:
            "I work on different projects from websites to mobile applications. Highlight Project: MANEB ID's which produced IDs and Managed data for Approx. 2.4 million candidates writing Malawi National Examinations Board Exams.",
          color: "#0879bf",
        },
        {
          title: "I.T ADMINISTRATOR",
          company: "ITEC Malawi",
          company_url: "https://itecgroup.co.za/",
          logo_path: "itec.png",
          duration: "Nov 2020 - PRESENT",
          location: "Blantyre, Malawi",
          description: `After making an impression in my previous role as project
            supervisor in the subsidiary of my new organization I was added
            the following responsibilities:
            1. Managing the IT infrastructure of the organizations
            branches as well as our sister company; Malawi Sun
            Hotels.
            2. Maintenance and support of IT equipment the company
            sells & hires out to various organizations such as:
            Partners in Health, Malawi Liverpool Wellcome Trust,
            Illovo Malawi. We are trained to distribute and support
            various equipment from the following: Konika
            Minolta/ITEC MFP's, Lenovo Computers, D-Link Network
            Devices and Hikvision Surveillance Devices.`,
          color: "#9b1578",
        },
        {
          title: "PROJECT SUPERVISOR",
          company: "ITEC Malawi",
          company_url: "https://itecgroup.co.za/",
          logo_path: "itec.png",
          duration: "Jan 2020 - Oct 2020",
          location: "Zomba, Malawi",
          description: `Tasked to oversee an annual contract with Malawi National
            Examinations Board. This project entails collecting details of
            approximately 600,000 candidates each year, creating a
            database and producing an ID card for them.
            I was part of the team that designed and created the system
            used; Initially a PHP frontend with MySQL backend but switched
            to a JAVA font-end. My supervisory roles include:
            1. System Management: Ensuring a healthy database
            (Backups, periodic optimization, querying information
            without built-in views/procedures). Ensuring a healthy
            Linux server (Backups, updates and configurations for
            system updates). Troubleshooting general issues/bugs.
            Planning developing and implementing system updates.
            2. Human Resource Management (Payroll & general welfare
            of data clerks).
            3. Project Management (Planning all resources (Human,
            Assets, Consumables, Time) to ensure successful
            completion of the project on time.`,
          color: "#fc1f20",
        },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "Data Science Research Intern",
    //       company: "Delhivery Pvt. Ltd.",
    //       company_url: "https://www.delhivery.com/",
    //       logo_path: "delhivery_logo.png",
    //       duration: "May 2019 - Sept 2019",
    //       location: "Gurgaon, Haryana",
    //       description:
    //         "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
    //       color: "#ee3c26",
    //     },
    //     {
    //       title: "Data Science Intern",
    //       company: "Intel Indexer LLC",
    //       company_url:
    //         "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
    //       logo_path: "intel_logo.jpg",
    //       duration: "Nov 2018 - Dec 2018",
    //       location: "Work From Home",
    //       description:
    //         "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
    //       color: "#0071C5",
    //     },
    //   ],
    // },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2017 - May 2018",
          location: "Blantyre, Malawi",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },

        // {
        //   title: "Developer Program Member",
        //   company: "Github",
        //   company_url: "https://github.com/",
        //   logo_path: "github_logo.png",
        //   duration: "July 2019 - PRESENT",
        //   location: "Work From Home",
        //   description:
        //     "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        //   color: "#181717",
        // },
      ],
    },
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
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    //   {
    //     id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
    //     name: "Artificial Intelligence Paper",
    //     createdAt: "2020-03-06T16:26:54Z",
    //     description: "Paper Written on Artificial Intelligence published in xyz ",
    //     url:
    //       "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    //   },
    //   {
    //     id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
    //     name: "Artificial Intelligence Paper",
    //     createdAt: "2020-03-06T16:26:54Z",
    //     description: "Paper Written on Artificial Intelligence published in xyz ",
    //     url:
    //       "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    //   },
    //   {
    //     id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
    //     name: "Artificial Intelligence Paper",
    //     createdAt: "2020-03-06T16:26:54Z",
    //     description: "Paper Written on Artificial Intelligence published in xyz ",
    //     url:
    //       "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    //   },
    //   {
    //     id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
    //     name: "Artificial Intelligence Paper",
    //     createdAt: "2020-03-06T16:26:54Z",
    //     description: "Paper Written on Artificial Intelligence published in xyz ",
    //     url:
    //       "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    //   },
    //   {
    //     id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
    //     name: "Artificial Intelligence Paper",
    //     createdAt: "2020-03-06T16:26:54Z",
    //     description: "Paper Written on Artificial Intelligence published in xyz ",
    //     url:
    //       "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    //   },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 12 hours. I can help you with React, React-Native, Android, ASP.Net, Node, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Favorite Quote",
    subtitle: "If at first you don’t succeed; call it version 1.0",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Agriculture Road, Mpemba, Blantyre, Malawi kamsesakond@hotmail.com",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/VMvyRyhBUfmXxm6LA",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+265 998 681 991/888 824 857",
  },
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
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
