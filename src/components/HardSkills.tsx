import { skillConfig, type SkillType } from "../config/hard-skill"

type SkillProps = {
    type: SkillType
}

export function HardSkills({ type }: SkillProps) {
    const skill = skillConfig[type]
    const Icon = skill.icon

    return (
        <div>
            <div className="bg-gray-900 flex h-24 w-24 sm:h-30 sm:w-30 flex-col items-center justify-center gap-2 rounded-sm text-white font-semibold hover:bg-gray-800">
                <Icon size={24} color={skill.color} />
                <p className="text-xs sm:text-sm">
                    {skill.title}
                </p>
            </div>
        </div>
    )
}
