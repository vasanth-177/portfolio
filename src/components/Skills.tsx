
import { cn } from "@/lib/utils";

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: "Basic" | "Intermediate" | "Advanced" | "Expert";
  }[];
}

const skillsData: SkillCategory[] = [
  {
    name: "Backend",
    skills: [
      { name: "Ruby on Rails", level: "Expert" },
      { name: "Golang", level: "Intermediate" },
      { name: "Node.js", level: "Intermediate" },
      { name: "Python", level: "Intermediate" }
    ]
  },
  {
    name: "Frontend",
    skills: [
      { name: "React.js", level: "Advanced" },
      { name: "HTML/CSS", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" }
    ]
  },
  {
    name: "Databases",
    skills: [
      { name: "MongoDB", level: "Advanced" },
      { name: "MySQL", level: "Advanced" },
    ]
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Docker", level: "Advanced" },
      { name: "Kubernetes", level: "Advanced" },
      { name: "GitHub Actions", level: "Advanced" },
      { name: "Terraform", level: "Basic" },
      { name: "Kafka", level: "Advanced" }
    ]
  }
];

export default function Skills() {
  const getLevelWidth = (level: string) => {
    switch (level) {
      case "Expert": return "w-full";
      case "Advanced": return "w-4/5";
      case "Intermediate": return "w-3/5";
      case "Basic": return "w-2/5";
      default: return "w-1/5";
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "bg-primary";
      case "Advanced": return "bg-primary/80";
      case "Intermediate": return "bg-primary/60";
      case "Basic": return "bg-primary/40";
      default: return "bg-primary/20";
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {skillsData.map((category, index) => (
              <div key={index}>
                <h3 className="section-subtitle">{category.name}</h3>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground text-sm">{skill.level}</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full">
                        <div 
                          className={cn(
                            "h-full rounded-full",
                            getLevelColor(skill.level),
                            getLevelWidth(skill.level)
                          )}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
