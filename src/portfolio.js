/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Muhammed Abu Bakr",
  title: "Hi all, I'm Abubakr",
  subTitle: emoji("💻 Passionate Lead SDET 🚀 with 11+ years of experience in crafting scalable test automation frameworks, enabling CI/CD pipelines, and driving quality in fast-paced tech teams using Playwright, Cypress, Puppeteer, and modern DevOps tools like CircleCI, New Relic, and Prometheus.."),
  resumeLink: "https://drive.google.com/file/d/1ftscgnxiB7kWxHIGpgIqTTtbcxDUsPmB/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mabubakr10",
  linkedin: "https://www.linkedin.com/in/mabubakr10/",
  gmail: "muhammedabubakr0@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "AUTOMATION-DRIVEN SDET WHO BUILDS ROBUST QUALITY STRATEGIES ACROSS STACKS",
  skills: [
    emoji("⚡ Design and implement scalable UI and API test automation frameworks (Playwright, Cypress, Appium)"),
    emoji("⚡ Setup synthetic monitoring, performance tests, and integrate with tools like New Relic, Datadog"),
    emoji("⚡ Drive shift-left testing practices, code reviews, and quality advocacy across cross-functional teams"),
    emoji("⚡ Integrate test suites with reporting tools (Cucumber, Allure, TestRail) and collaborative platforms (Slack, Jira)")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Browserstack",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "Playwright",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Appium",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Typescript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "CircleCI",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "DataDog",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Prometheus",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "Postman",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Jmeter",
      fontAwesomeClassname: "fa-solid fa-j"
    },
    {
      skillName: "GraphQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "New Relic",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "National University of Computer & Emerging Sciences",
      logo: require("./assets/images/nuces-logo.png"),
      subHeader: "Bachelors of Science in Computer Science",
      duration: "August 2010 - April 2014"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Test Automation / QA Strategy", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "CI/CD & Monitoring",
      progressPercentage: "85%"
    },
    {
      Stack: "API & Backend Testing",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend Testing",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming & Scripting",
      progressPercentage: "70%"
    },
    {
      Stack: "Test Management & Reporting",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Tech Lead Manager / SDET",
      company: "Sendoso",
      companylogo: require("./assets/images/sendoso-logo.jpeg"),
      date: "August 2025 – Present",
      desc: "Spearheading QA initiatives as a Tech Lead Manager by developing scalable automation frameworks with Playwright and implementing synthetic monitoring solutions using New Relic and Prometheus to enhance platform stability and test coverage."
    },
    {
      role: "Senior QA Analyst",
      company: "Tangent.co",
      companylogo: require("./assets/images/tangent-logo.jpeg"),
      date: "March 2024 – August 2025",
      desc: "GPT-integrated chatbot platform with robust UI/API test automation using Playwright, implemented synthetic monitoring via Datadog, and integrated automated test execution into the CI pipeline with GitHub Actions."
    },
    {
      role: "Senior SDET",
      company: "Sendoso",
      companylogo: require("./assets/images/sendoso-logo.jpeg"),
      date: "November 2018 – March 2024",
      desc: "Development of a custom automation framework using WebdriverIO, defined the overall test strategy, implemented CI integration with CircleCI, and conducted comprehensive database testing to ensure end-to-end quality and efficient delivery."
    },
    {
      role: "Senior Test Automation Engineer",
      company: "Zameen.com",
      companylogo: require("./assets/images/zameen-logo.png"),
      date: "May 2017 – October 2018",
      desc: "Test Planning and E2E Automated test execution with Protractor for React JS application."
    },
    {
      role: "Senior Quality Assurance Engineer",
      company: "Netsol Technologies",
      companylogo: require("./assets/images/netsol-logo.png"),
      date: "January 2016 – April 2017",
      desc: "Worked on different IDE including IntelliJ, VS Code, and Eclipse. Initial enrolment and training on NFS finance & leasing module."
    },
    {
      role: "Quality Assurance Engineer",
      company: "CureMD Research and Development",
      companylogo: require("./assets/images/curemd-logo.jpeg"),
      date: "April 2014 – December 2015",
      desc: "Electronic Medical Records (EMR), helped devise and perform testing activities. Effectively communicated with US providers on daily/weekly progress, blockers, and impediments."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/swims-logo.png"),
      projectName: "SWIMS",
      projectDesc: "An internal tool that enables Sendoso to efficiently manage the physical sending aspect of its business",
      footerLink: [
        {
          name: "Visit",
          url: "https://www.sendoso.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/plg-logo.png"),
      projectName: "Product-Led Growth (PLG)",
      projectDesc: "Sendoso utilizes a product-led growth (PLG) strategy, focusing on its product's value to drive user acquisition, expansion, conversion, and retention",
      footerLink: [
        {
          name: "Visit",
          url: "https://www.sendoso.com/resources/blog/redefining-b2b-revenue-models-with-product-led-growth-and-personalization"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I build cool things with love—and I love sharing what I learn along the way.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/sendoso-engineering/sqa-the-secret-sauce-to-sendosos-success-7f93b8c79c80",
      title: "SQA: The Secret Sauce to Sendoso’s Success",
      description:
        "Transformation of QA by championing smart automation with Puppeteer, CircleCI, and TestRail — cutting manual effort and boosting release confidence. His strategy scaled quality with speed, making testing faster, sharper, and future-ready."
    },
    {
      url: "https://medium.com/sendoso-engineering/life-at-sendoso-ft-pk-office-c0c2498189e5",
      title: "Life at Sendoso — ft. PK Office",
      description:
        "Seasoned QA and Automation Engineer at Sendoso, known for his strategic mindset, love for football, and passion for continuous growth. He values ownership, collaboration, and the opportunity to learn and lead in a culture that thrives on excellence."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+971-557175953",
  email_address: "muhammedabubakr@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
