
import { cn } from "@/lib/utils";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  achievements: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Development Engineer II",
    company: "Veepox",
    period: "07/2024 - Present",
    achievements: [
      "Engineered an AI-powered Calling Automation and Post-Call Intelligence system, increasing call handling from 10-12 manual calls to 30-35 AI-driven calls per person.",
      "Orchestrated infrastructure setup using Docker and Kubernetes, enhancing scalability, cutting deployment time by 80%, and improving system reliability.",
      "Designed a highly scalable mobile application with a configuration-driven architecture using a structural design pattern, eliminating the need for development effort on seasonal modifications by 100%.",
      "Automated the Non-Fruit Supply Chain workflow, integrating it with the Fruit Supply Chain, reducing 2,500+ hours of manual effort annually.",
      "Implemented CI/CD pipelines in GitHub, integrating test automation and coverage reports, boosting test coverage from 32% to 85% in just 2 days."
    ]
  },
  {
    title: "Software Development Engineer I",
    company: "Veepox",
    period: "06/2023 - 07/2024",
    achievements: [
      "Led and delivered the company-wide Non-Fruit Supply Chain Project, ensuring a 0% downtime launch with 0 post-production bugs.",
      "Developed a graph-based Integrity Monitoring System to automate data validation and anomaly detection, increasing supply chain efficiency by 75%.",
      "Digitized the Quality Reporting Process, implementing a configurable backend with automated PDF generation, saving 1,500+ hours of manual effort annually.",
      "Built an Offline Mode for quality reporting with API logging and monitoring, enabling 50+ monthly submissions from low-connectivity areas, ensuring 100% data consistency.",
      "Optimised multiple high-performance system architectures, improving data processing speed by 2x and ensuring seamless integration across microservices."
    ]
  },
  {
    title: "Software Development Engineer Intern",
    company: "Veepox",
    period: "01/2023 - 05/2023",
    achievements: [
      "Created highly dynamic, responsive PDFs, ensuring 100% compatibility across various platforms and sheet sizes.",
      "Optimised a high-performance backend system to handle high-volume concurrent requests, reducing response times by 45% using Goroutines and WaitGroups.",
      "Implemented supply chain management modules for non-fruit products, leading to faster fulfillment times and a 20% increase in processing efficiency."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 h-full w-px bg-border transform -translate-x-1/2"></div>
            
            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className={cn(
                  "relative flex flex-col md:flex-row",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}>
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 mt-1.5"></div>
                  
                  {/* Content */}
                  <div className="pl-6 md:pl-0 md:w-1/2 md:px-8">
                    <div className={cn(
                      "bg-card rounded-lg p-6 shadow-sm border",
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    )}>
                      <h3 className="font-bold text-xl">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-muted-foreground text-sm mb-4">{exp.period}</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2 mt-1.5 flex-shrink-0 w-1 h-1 bg-primary rounded-full"></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
