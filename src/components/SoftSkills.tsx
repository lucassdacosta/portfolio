import {
    softSkillsConfig,
    type SoftSkillsType,
} from "../config/soft-skills"

type SoftSkillsProps = {
    type: SoftSkillsType
}

export function SoftSkills({ type }: SoftSkillsProps) {
    const softSkill = softSkillsConfig[type]

    return (
        <div>
            <div className="flex h-24 w-24 sm:h-30 sm:w-30 flex-col items-center justify-center gap-2 rounded-sm bg-white font-semibold text-black hover:bg-gray-300">
                <p className="text-xs sm:text-sm text-center px-1">
                    {softSkill.title}
                </p>
            </div>
        </div>
    )
}
