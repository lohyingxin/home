// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#F5B2B2, #F39A9A, #EA8398, #DE698D, #D15781, #C35175",
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
  imageLink: require("../editable-stuff/000402220002.jpg"),
  imageSize: 375,
  resume: require("../editable-stuff/resume.pdf"),
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

const experiences = {
  show: true,
  heading: "Experience",
  data: [
    {
      role: "Business Analyst Intern", // Here Add Company Name
      companylogo: require("../assets/img/ocbc.png"),
      date: "May 2021 – Present",
      description: "",
      //"\u25CF Identified opportunities to streamline current AML process by analyzing common data points used in different processes
      // \n \u25CF Developed target solutions based on latest technology stack to drive architecture modernization",
    },
    {
      role: "Communications Intern",
      companylogo: require("../assets/img/hdb.png"),
      date: "Mar 2019 – May 2019",
      description: "",
    },
    {
      role: "Teaching Intern",
      companylogo: require("../assets/img/moe.png"),
      date: "Jan 2019 – Mar 2019",
      description: "",
    },
  ],
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

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Extra Curricular Activities",
  message: "",
  images: [
    {
      img: require("../../src/assets/img/kindle3.jpg"),
    },
    {
      img: require("../../src/assets/img/captslam1.JPG"),
    },
    {
      img: require("../../src/assets/img/kindle1.jpg"),
    },
    {
      img: require("../../src/assets/img/hic.jpg"),
    },
    {
      img: require("../../src/assets/img/hc.JPG"),
    },
    {
      img: require("../../src/assets/img/csa.jpg"),
    },
    {
      img: require("../../src/assets/img/merch.jpg"),
    },
    {
      img: require("../../src/assets/img/funk.JPG"),
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
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
  leadership,
  getInTouch,
  experiences,
  education,
};
