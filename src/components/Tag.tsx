import { tagConfig } from "../config/tag"

type TagType = keyof typeof tagConfig

interface TagProps {
    type: TagType
}

export function Tag({ type }: TagProps) {
    const tag = tagConfig[type]
    const Icon = tag.icon

    return (
        <span className={`flex items-center gap-2 rounded-full px-3 py-1 ${tag.className}`}>
            {Icon && <Icon size={16} />}
            {tag.title}
        </span>
    )
}
