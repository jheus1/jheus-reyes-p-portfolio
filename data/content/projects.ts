import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Apple Archer: Master the Bow and Hit the Mark",
    desc: "Is a classic concept that can be as simple or as complex as you desire, making it suitable for both casual and more challenging gameplay experiences.",
    img: "/static/projects/pythongame.png",
    github: "https://github.com/jheus1/PYTHONGAME_2D_3RDYEAR",
    tags: ["PYTHON"],
  },
  {
    id: 1,
    title: "Create, Read, Update, and Delete V2",
    desc: "A more approachable version of CRUD can be designed with user-friendly labels, clear UI/UX elements, and simplified terminology, especially for beginners or non-technical users.",
    img: "/static/projects/crud2.png",
     github: "https://github.com/jheus1/CRUD2_3RDYEAR",
    tags: ["HTML", "CSS", "Javascript", "PHP", "BOOTSTRAP"],
  },
  {
    id: 2,
    title: "NEUST Login Page (With multiple authentication)",
    desc: "Developed a NEUST login page featuring multiple authentication methods.",
    img: "/static/projects/NEUST-LOGIN.png",
    github: "https://github.com/jheus1/NEUST_LOGIN_PROJ_WITHOUT_DB_3RDYEAR",
    tags: ["HTML", "CSS", "PHP", "JAVASCRIPT", "JSON", "BOOTSTRAP"],
  },
   {
    id: 3,
    title: "NEUST-SIC Research, Extension, and Training (RET)",
    desc: "Created a NEUST RET digital logbook system to streamline the recording of entries and exits, enabling secure, real-time tracking for students, faculty, and visitors.",
    img: "/static/projects/RET.png",
    github: "https://github.com/jheus1/LOGBOOK_4THYEAR",
    tags: ["PHP", "HTML", "SQL", "JAVASCRIPT", "JSON", "BOOTSTRAP"],
  },
   {
    id: 4,
    title: "Philippine Universities (Ionic)",
    desc: "Built with Ionic, this mobile-ready app showcases a complete list of universities across the Philippines. Organized by region and province, it provides users with easy navigation and quick access to school names nationwide—ideal for reference and academic planning.",
    img: "/static/projects/ionic.png",
    github: "https://github.com/jheus1/UNIVERSITIES_IN_PH_IONIC_3RDYEAR",
    tags: ["IONIC", "ANGULAR"],
  },
    {
    id: 5,
    title: "St. Isidore the Farmer Parish",
    desc: "Developed for St. Isidore the Farmer Parish, this website serves as a digital hub for the Catholic community in San Isidro, Nueva Ecija. It provides Mass schedules, parish announcements, live-stream access, and information on ministries—designed to keep parishioners connected and engaged in faith wherever they are.",
    img: "/static/projects/st.png",
    github: "https://sanisidromagsasakaparish.com/",
    tags: ["PHP", "HTML", "SQL", "JAVASCRIPT", "JSON", "BOOTSTRAP"],
  },
 {
    id: 6,
    title: "PhilSPEN",
    desc: "Contributed to the development of the PhilSPEN official website by implementing an automated email system to improve communication efficiency for registrations and notifications. Also assisted in enhancing selected UI components, focusing on usability, layout consistency, and a more user-friendly experience for members and visitors.",
    img: "/static/projects/philzpen.png",
    github: "https://www.philspen.org/",
    tags: ["PHP", "HTML", "SQL", "JAVASCRIPT",  "BOOTSTRAP"],
  },

];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects
