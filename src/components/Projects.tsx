//import foto from "../assets/images/logo-lk.jpg"
//import doMovimento from "../assets/images/ChatGPT Image 30 de ago. de 2026, 17_03_48.png"
import { IoIosArrowForward } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { TbLock } from "react-icons/tb";

type Props = {
    image?: string,
    title: string,
    description: string,
    link?: string,
    isAvailable: boolean
}

export function Projects({ image, title, description, link, isAvailable }: Props) {
    return (
        <div className="padlock-shake w-full">
            {isAvailable ? (
                <div className="flex flex-col w-full sm:w-70 h-auto sm:h-90 bg-gray-800 rounded-xl border border-gray-600 shadow-white overflow-hidden">
                    {image ? (
                        <img src={image} alt="Breve imagem do projeto" className="w-full h-40" />
                    ) : (
                        <div className="w-full h-40 flex flex-col items-center justify-center gap-2 bg-gray-700">
                            <FaCode size={50} className="text-gray-400" />
                            <span className="text-xs font-light">imagem indisponível.</span>
                        </div>
                    )}

                    <div className="flex flex-col ml-2 mt-2 p-2 sm:p-0">
                        <h2 className="text-lg sm:text-xl font-semibold mb-2">{title}</h2>
                        <p className="text-xs sm:h-24">{description}</p>
                        <div className="text-xs text-green-500 mt-4 sm:mt-8 mr-2 items-center justify-end flex gap-2 pb-2 sm:pb-0">
                            <a href={link} className="flex items-center group">
                                ver projeto
                                <IoIosArrowForward size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col w-full sm:w-70 h-auto sm:h-90 bg-gray-800 rounded-xl border border-gray-600 shadow-white overflow-hidden">
                    {image ? (
                        <img src={image} alt="Breve imagem do projeto" className="w-full h-40 blur-sm" />
                    ) : (
                        <div className="w-full h-40 flex flex-col items-center justify-center gap-2 bg-gray-700 blur-sm">
                            <FaCode size={50} className="text-gray-400" />
                            <span className="text-xs font-light">imagem indisponível.</span>
                        </div>
                    )}

                    <div className="flex flex-col gap-4 sm:gap-8 justify-center items-center mt-2 h-35 py-4 group">
                        <TbLock size={22} className="padlock" />
                        <span className="font-bold text-sm uppercase text-center px-2">Projeto em desenvolvimento.</span>
                    </div>
                </div>
            )}
        </div>
    )
}
