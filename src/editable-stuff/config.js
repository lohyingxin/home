// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
//#F5B2B2, #F39A9A, #EA8398, #DE698D, #D15781, #C35175
const mainBody = {
  gradientColors:
    "#f5b2b2ff, #ea8398ff, #bd6262ff, #d47979ff, #e69cabff, #95c9bfff",
  firstName: "Loh",
  middleName: "",
  lastName: "Ying Xin",
  //message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/lohyingxin/",
    },
    {
      image: "fa-github",
      url: "https://github.com/lohyingxin",
    },
    {
      image: "fa fa-envelope",
      url: "mailto:lohyingxin@outlook.com",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/000932160011.jpg"),
  imageSize: 375,
  //resume: require("../editable-stuff/resume.pdf"),
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [],
  softSkills: [],
};

const experiences = {
  show: true,
  heading: "Experiences",
  // data: [
  //   {
  //     role: "Business Analyst Intern", // Here Add Company Name
  //     companylogo: require("../assets/img/ocbc.png"),
  //     date: "May 2021 – Present",
  //     description: "",
  //     //"\u25CF Identified opportunities to streamline current AML process by analyzing common data points used in different processes
  //     // \n \u25CF Developed target solutions based on latest technology stack to drive architecture modernization",
  //   },
  //   {
  //     role: "Communications Intern",
  //     companylogo: require("../assets/img/hdb.png"),
  //     date: "Mar 2019 – May 2019",
  //     description: "",
  //   },
  //   {
  //     role: "Teaching Intern",
  //     companylogo: require("../assets/img/moe.png"),
  //     date: "Jan 2019 – Mar 2019",
  //     description: "",
  //   },
  // ],
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Projects",
  gitHubUsername: "lohyingxin", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};



// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message: "Please feel free to contact me at",
  email: "lohyingxin@outlook.com",
};

// EDUCATION SECTION
const education = {
  show: true,
  heading: "Education",
};

// const gallery = {
//   show: true,
//   heading: "Gallery",
// };

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
  navBar,
  mainBody,
  about,
  skills,
  repos,
  getInTouch,
  experiences,
  education,
  //gallery,
};
