import logo from "../assets/images/Logo-centralizada.png"

import { About } from "../components/About"
import { Contact } from "../components/Contact"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { HelloWorld } from "../components/HelloWorld"
import { HardSkills } from "../components/HardSkills"
import { Projects } from "../components/Projects"
import { SocialMedia } from "../components/SocialMedias"
import { SoftSkills } from "../components/SoftSkills"

export function Home() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-1 bg-black text-white">
                <section id="home" className="animate-aparecer scroll-mt-60 mx-auto max-w-5xl px-6 pt-10">
                    <HelloWorld />

                    <div className="mt-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
                                Lucas Costa
                            </h1>

                            <h2 className="text-xl sm:text-2xl">
                                Desenvolvedor Full Stack
                            </h2>

                            <p className="max-w-md text-balance text-sm sm:text-base">
                                Transformando negócios em projetos reais, modernos e eficientes.
                            </p>

                            <SocialMedia />
                        </div>

                        <div className="w-full lg:w-100 h-auto bg-gray-900 flex gap-4 text-xs text-white rounded-xl border-1 border-gray-800">
                            <div className="border-r-1 border-gray-600 p-2 flex-1">
                                <span className="text-2xl sm:text-3xl font-semibold text-green-500">2+</span>
                                <p>anos de experiência</p>
                            </div>
                            <div className="border-r-1 border-gray-600 p-2 flex-1">
                                <span className="text-2xl sm:text-3xl font-semibold text-green-500">4</span>
                                <p>Projetos desenvolvidos</p>
                            </div>
                            <div className="p-2 flex-1">
                                <span className="text-2xl sm:text-3xl font-semibold text-green-500">2</span>
                                <p>Parceiros</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="w-auto h-0.5 bg-gray-800 mt-10"></div>

                <section id="about" className="animate-aparecer-contrario scroll-mt-60 mx-auto max-w-5xl px-6 pt-10 [animation-delay:600ms">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                        <div className="w-32 sm:w-50 shrink-0">
                            <img src={logo} alt="Logo da marca Lk" className="rounded-full w-full h-auto" />
                        </div>
                        <About />
                    </div>
                </section>

                <div className="w-auto h-0.5 bg-gray-800 mt-10"></div>

                <section id="ability" className="scroll-mt-50 mx-auto max-w-5xl px-6 pt-10 mb-10">
                    <h2 className="text-xl sm:text-2xl uppercase mb-3 font-bold">Habilidades Técnicas</h2>
                    <div className="flex flex-wrap lg:flex-nowrap gap-2 sm:gap-6 mb-10">
                        <HardSkills type="javascript" />
                        <HardSkills type="react" />
                        <HardSkills type="tailwindcss" />
                        <HardSkills type="typescript" />
                        <HardSkills type="nodejs" />
                        <HardSkills type="git" />
                        <HardSkills type="sql" />
                        <HardSkills type="python" />
                    </div>
                    <h2 className="text-xl sm:text-2xl uppercase font-bold mb-3">Habilidades Interpessoais</h2>
                    <div className="flex flex-wrap lg:flex-nowrap gap-2 sm:gap-6 mb-10">
                        <SoftSkills type="communication" />
                        <SoftSkills type="teamwork" />
                        <SoftSkills type="problemsolving" />
                        <SoftSkills type="proactivity" />
                        <SoftSkills type="adaptability" />
                        <SoftSkills type="creativity" />
                        <SoftSkills type="emotionalintelligence" />
                        <SoftSkills type="leadership" />
                    </div>

                </section>

                <div className="w-auto h-0.5 bg-gray-800 mt-10"></div>

                <section id="projects" className="scroll-mt-40 mx-auto max-w-5xl px-6 pt-10 mb-10">
                    <h2 className="text-xl sm:text-2xl uppercase font-bold">Projetos</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-5xl pt-4 mb-10">
                        <Projects description="Sistema de barbearia, desenvolvido para a ROCCA BARBEARIA. Esse projeto possui agendamentos, barbeiros, clientes, etc. " title="ROCCA BARBEARIA" isAvailable={false} />
                        <Projects description="Sistema desenvolvido para a escola multidisciplinar DoMovimento. Possui, página inicial de acesso, área do aluno e área do professor." title="DoMovimento" isAvailable={true} />
                        <Projects description="Um sistema de finanças desenvolvido para organizar todo a movimentação financeira do cliente." title="Financorp" isAvailable={true} />
                    </div>
                </section>

                <div className="w-auto h-0.5 bg-gray-800 mt-10"></div>

                <section id="contact" className="mx-auto max-w-5xl px-6 pt-10 mb-10">
                    <h2 className="text-xl sm:text-2xl uppercase font-bold mb-2">Contato</h2>
                    <p className="mb-4 w-full sm:w-120 font-light text-sm sm:text-base">Aberto a novas oportunidades para crescer, contribuir e fazer parte de grandes projetos.</p>
                    <Contact />
                </section>

                <div className="w-auto h-0.5 bg-gray-800 mt-10"></div>

                <section className="mx-auto max-w-5xl px-6 pt-10 mb-10">
                    <Footer />
                </section>
            </main>
        </div>
    )
}
