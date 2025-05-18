
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  achievements: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "AI-powered Calling Automation",
    description: "An intelligent system that automated call handling and extracted valuable insights from conversations.",
    technologies: ["AI/ML", "LangChain", "Docker", "Kubernetes"],
    achievements: [
      "Increased call handling capacity by 3x",
      "Reduced manual calling efforts by 90%",
      "Real-time post-call reports generation"
    ],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Non-Fruit Supply Chain Platform",
    description: "An end-to-end supply chain management platform for non-fruit products with zero downtime deployment.",
    technologies: ["Ruby on Rails", "React.js", "MongoDB", "Kafka"],
    achievements: [
      "0% downtime launch with no post-production bugs",
      "Automated data validation and anomaly detection",
      "75% increase in supply chain efficiency"
    ],
    github: "https://github.com",
  },
  {
    title: "Mobile Configuration Platform",
    description: "A highly scalable mobile application with configuration-driven architecture eliminating seasonal development needs.",
    technologies: ["React Native", "Node.js", "MySQL", "Docker"],
    achievements: [
      "Eliminated 100% of seasonal modification development",
      "Structural design pattern implementation",
      "Configuration-driven architecture"
    ],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Quality Reporting System",
    description: "Digitized quality reporting process with offline mode support for low-connectivity areas.",
    technologies: ["Golang", "React.js", "Docker", "PDF Generation"],
    achievements: [
      "Saved 1,500+ hours of manual effort annually",
      "Enabled 50+ monthly submissions from remote areas",
      "Automated PDF generation and reporting"
    ],
    github: "https://github.com",
  },
  {
    title: "Integrity Monitoring System",
    description: "A graph-based system to automate data validation and anomaly detection for supply chain.",
    technologies: ["Python", "Neo4j", "Docker", "Kubernetes"],
    achievements: [
      "75% increase in supply chain efficiency",
      "Automated anomaly detection",
      "Real-time data validation"
    ],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "CI/CD Pipeline Integration",
    description: "Implemented CI/CD pipelines with test automation and coverage reporting.",
    technologies: ["GitHub Actions", "CI/CD", "Docker", "Test Automation"],
    achievements: [
      "Increased test coverage from 32% to 85% in 2 days",
      "Automated testing and deployment",
      "Integrated coverage reporting"
    ],
    github: "https://github.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/30">
      <div className="section-container">
        <h2 className="section-title">Key Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                <div>
                  <h4 className="font-medium mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <span className="mr-2 mt-1.5 flex-shrink-0 w-1 h-1 bg-primary rounded-full"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                {project.github && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1 h-4 w-4" /> Code
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
