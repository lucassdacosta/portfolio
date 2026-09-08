import { useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"
import logo from "../assets/images/logo-lk.jpg"
//import logo2 from "../assets/images/Logo-centralizada.png"

const NAV_LINKS = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "Sobre mim" },
    { href: "#ability", label: "Habilidades" },
    { href: "#projects", label: "Projetos" },
    { href: "#contact", label: "Contato" },
]

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 bg-gray-100">
            <div className="mx-auto flex h-20 max-w-5xl items-center justify-between px-6">
                <img
                    className="h-14 w-14 sm:h-16 sm:w-16 rounded-full border"
                    src={logo}
                    alt="Logo Lk"
                />

                {/* Nav desktop */}
                <nav className="hidden md:block absolute left-1/2 -translate-x-1/2">
                    <ul className="flex gap-8">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className="group relative inline-block">
                                    {link.label}
                                    <span className="absolute bottom-[-4px] left-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Botão hambúrguer mobile */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    aria-label="Abrir menu"
                >
                    {isMenuOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>

            {/* Nav mobile */}
            {isMenuOpen && (
                <nav className="md:hidden border-t border-gray-300 bg-gray-100">
                    <ul className="flex flex-col items-center gap-4 py-4">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="group relative inline-block"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                    <span className="absolute bottom-[-4px] left-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    )
}
