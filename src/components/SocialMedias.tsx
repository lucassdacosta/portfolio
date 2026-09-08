import { FaGithub, FaLinkedin } from "react-icons/fa"
import { SiGmail } from "react-icons/si"

export function SocialMedia() {
    return (
        <ul className="flex flex-wrap gap-4 sm:gap-5">
            <li>
                <a href="https://github.com/lucassdacosta" target="_blank" className="flex items-center gap-2 hover:font-bold duration-200">
                    <FaGithub size={20} />
                    <span>GitHub</span>
                </a>
            </li>

            <li>
                <a href="https://www.linkedin.com/in/simoesdacostalucas/" target="_blank" className="flex items-center gap-2 hover:font-bold duration-200">
                    <FaLinkedin size={20} />
                    <span>LinkedIn</span>
                </a>
            </li>

            <li>
                <a href="mailto:simoesdacostalucas@gmail.com?subject=Contato através do portfólio" className="flex items-center gap-2 hover:font-bold duration-200">
                    <SiGmail size={20} />
                    <span>Gmail</span>
                </a>
            </li>
        </ul>
    )
}
