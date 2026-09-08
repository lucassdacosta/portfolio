

export const softSkillsConfig = {
    communication: {
        title: "Excelente comunicação",
    },
    teamwork: {
        title: "Trabalho em equipe"
    },
    problemsolving: {
        title: "Resolução de problemas"
    },
    proactivity: { 
        title: "Proatividade"
    },
    adaptability: {
        title: "Adaptabilidade"
    }, 
    creativity: {
        title: "Criatividade"
    },
    emotionalintelligence: {
        title: "Inteligência emocional"
    },
    leadership: { 
        title: "Liderança"
    }
}

export type SoftSkillsType = keyof typeof softSkillsConfig