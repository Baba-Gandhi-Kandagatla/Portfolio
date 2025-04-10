import { forwardRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
    {
        title: "Languages",
        skills: ["Java", "Python", "C", "C++", "JavaScript", "Typescript"],
    },
    {
        title: "Web",
        skills: ["MERN Stack", "Flask", "FastAPI", "Next js", "HTML", "CSS"],
    },
    {
        title: "Data Science & ML",
        skills: [
            "Model fine tuning",
            "Hyperparameter tuning",
            "Transfer learning",
            "ANN",
            "CNN",
            "RCNN (NLP)",
            "Transformers",
        ],
    },
    {
        title: "Cloud & DevOps",
        skills: ["AWS (EC2, Lambda, S3)", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "CI/CD"],
    },
    {
        title: "Databases",
        skills: ["MongoDB", "MySQL", "PostgreSQL"],
    },
    {
        title: "Tools",
        skills: ["VS Code", "Git", "GitHub", "PyCharm", "Maven"],
    },
]

interface SkillsProps {
    isActive: boolean
}

const Skills = forwardRef<HTMLElement, SkillsProps>(({ isActive }, ref) => {
    if (!isActive) return null

    return (
        <section ref={ref} id="skills" className="scroll-mt-16 py-16">
            <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {skillCategories.map((category, index) => (
                    <Card key={index} className="h-full">
                        <CardHeader>
                            <CardTitle className="text-xl">{category.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <Badge key={skillIndex} variant="secondary">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
})

Skills.displayName = "Skills"

export default Skills