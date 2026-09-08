import { LiaCopyrightSolid } from "react-icons/lia";

export function Footer() {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div className="flex flex-wrap items-center gap-2 text-xs">
                <LiaCopyrightSolid />
                <p>2026</p>
                <h2>Lucas Costa</h2>
                <span className="hidden sm:inline-block h-0.5 w-4 bg-gray-500"></span>
                <p>Pensado e desenvolvido por Lucas Costa.</p>
            </div>
            <p className="text-xs">build <span className="font-bold">v1.0</span></p>
        </div>
    )
}
