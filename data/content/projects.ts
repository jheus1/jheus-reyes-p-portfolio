import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Apple Archer: Master the Bow and Hit the Mark",
    desc: "Is a classic concept that can be as simple or as complex as you desire, making it suitable for both casual and more challenging gameplay experiences.",
    img: "/static/projects/pythongame.png",
    github: "https://github.com/jheus1/PYTHONGAME_2D_3RDYEAR",
    tags: ["Python"],
  },
  {
    id: 1,
    title: "Create, Read, Update, and Delete V2",
    desc: "A more approachable version of CRUD can be designed with user-friendly labels, clear UI/UX elements, and simplified terminology, especially for beginners or non-technical users.",
    img: "/static/projects/crud2.png",
     github: "https://github.com/jheus1/CRUD2_3RDYEAR",
    tags: ["HTML", "CSS", "Javascript", "PHP"],
  },
  {
    id: 2,
    title: "NEUST LOGIN PAGE (WITH MULTIPLE AUTHENTICATION)",
    desc: "Developed a NEUST login page featuring multiple authentication methods.",
    img: "/static/projects/NEUST-LOGIN.png",
    github: "https://github.com/jheus1/NEUST_LOGIN_PROJ_WITHOUT_DB_3RDYEAR",
    tags: ["HTML", "CSS", "PHP", "JAVASCRIPT", "JSON"],
  },
   {
    id: 3,
    title: "NEUST-SIC Research, Extension, and Training (RET)",
    desc: "Created a NEUST RET digital logbook system to streamline the recording of entries and exits, enabling secure, real-time tracking for students, faculty, and visitors.",
    img: "/static/projects/RET.png",
    github: "https://github.com/jheus1/LOGBOOK_4THYEAR",
    tags: ["PHP", "HTML", "SQL", "JAVASCRIPT", "JSON"],
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
