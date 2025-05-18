
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 relative">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight animate-in">
            Vasanth M
          </h1>
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-primary animate-in">
            Software Developer
          </p>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto animate-in">
            Results-driven Software Developer with 2+ years of experience in designing and building scalable, 
            high-performance applications with a focus on efficiency, scalability, and automation.
          </p>
          <div className="mt-8 flex justify-center gap-4 animate-in">
            <Button asChild size="lg">
              <a href="#contact">Contact Me</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#projects">View My Work</a>
            </Button>
          </div>
          <div className="mt-8 flex justify-center gap-6 animate-in">
            <a 
              href="https://www.linkedin.com/in/vasanth-m-a33362203/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:vasanthmit17@gmail.com" 
              aria-label="Email"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href="https://github.com/vasanth-177" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
