import { FaReact, FaNodeJs, FaGitAlt, FaPython, FaDatabase } from "react-icons/fa";

import {
    SiTypescript,
    SiJavascript,
    SiTailwindcss,
} from "react-icons/si";

export const skillConfig = {
    react: {
        title: "React",
        icon: FaReact,
        color: "#61DAFB",
    },

    javascript: {
        title: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
    },

    typescript: {
        title: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
    },

    nodejs: {
        title: "Node.js",
        icon: FaNodeJs,
        color: "#339933",
    },

    tailwindcss: {
        title: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
    },

    git: {
        title: "Git",
        icon: FaGitAlt,
        color: "#F05032",
    },

    python: {
        title: "Python",
        icon: FaPython,
        color: "#3776AB",
    },

    sql: {
        title: "SQL",
        icon: FaDatabase,
        color: "#336791",
    },
};

export type SkillType = keyof typeof skillConfig;