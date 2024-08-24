import Personal from "../views/PersonalView.vue"
import Skills from "../views/SkillsView.vue"
import Contact from "../views/ContactView.vue"
import Projects from "../views/ProjectsView.vue"

export default [
  {
    path:"/",
    name: "home",
    label: "Home",
    meta: {title : "Home", hidden : true}
  },
  {
    path: "/personal",
    name: "personal",
    label: "Personal",
    icon:"pi pi-user",
    meta: {title : "Personal"},
    component: Personal,
  },
  {
    path: "/Skills",
    name: "skill",
    label: "Skills",
    icon:"pi pi-list",
    meta: {title : "Skill"},
    component: Skills,
  },
  {
    path: "/Contact",
    name: "contact",
    label: "Contact",
    icon:"pi pi-address-book",
    meta: {title : "Contact"},
    component: Contact,
  },
  {
    path: "/Projects",
    name: "projects",
    label: "Projects",
    icon: "pi pi-briefcase",
    meta: {title : "Projects"},
    component: Projects,
  },
];
