import {
    SiReact,
    SiJavascript,
    SiTypescript,
    SiNodedotjs,
    SiTailwindcss,
} from "react-icons/si"

export const tagConfig = {
    react: {
        title: "React",
        className: "bg-blue-500 text-white",
        icon: SiReact,
    },

    javascript: {
        title: "JavaScript",
        className: "bg-yellow-400 text-black",
        icon: SiJavascript,
    },

    typescript: {
        title: "TypeScript",
        className: "bg-blue-700 text-white",
        icon: SiTypescript,
    },

    backend: {
        title: "Backend",
        className: "bg-black text-white",
        icon: null
    },

    frontend: {
        title: "Frontend",
        className: "bg-white text-black",
        icon: null
    },

    nodejs: {
        title: "Node.js",
        className: "bg-green-node text-white",
        icon: SiNodedotjs,
    },

    tailwindcss: {
        title: "Tailwind CSS",
        className: "bg-blue-tailwind text-white",
        icon: SiTailwindcss,
    },
}