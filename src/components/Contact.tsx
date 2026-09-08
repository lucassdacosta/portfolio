import { FaRegEnvelope, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

export function Contact() {
    return (
        <div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-6">
                <a href="mailto:simoesdacostalucas@gmail.com?subject=Contato através do portfólio" className="flex items-center gap-2 p-2 border border-gray-700 rounded-md hover:border-green-500 hover:text-green-500 transition ease-linear">
                    <FaRegEnvelope />
                    <span className="text-sm break-all">simoesdacostalucas@gmail.com</span>
                </a>

                <a href="https://www.linkedin.com/in/simoesdacostalucas/" target="_blank" className="flex items-center gap-2 p-2 border border-gray-700 rounded-md hover:border-green-500 hover:text-green-500 transition ease-linear">
                    <FaLinkedinIn />
                    <span className="text-sm">LinkedIn</span>
                </a>

                <a href="https://wa.me/5514991399779" target="_blank" className="flex items-center gap-2 p-2 border border-gray-700 rounded-md hover:border-green-500 hover:text-green-500 transition ease-linear">
                    <FaWhatsapp />
                    <span className="text-sm">WhatsApp</span>
                </a>
            </div>
        </div>
    )
}
