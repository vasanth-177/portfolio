
export default function About() {
  return (
    <section id="about" className="bg-muted/30 py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-6">
            I'm a passionate Software Developer based in Chennai, with expertise in backend optimization, 
            full-stack development, and system architecture. With over 2 years of experience at Vegrow, 
            I specialize in building scalable, high-performance applications that focus on efficiency, 
            scalability, and automation.
          </p>
          <p className="text-lg mb-6">
            I'm particularly passionate about delivering business-driven solutions and enhancing system 
            performance through optimized API development, microservices, and CI/CD workflows. I have a 
            proven track record of reducing manual effort and improving system reliability through 
            automation and architectural improvements.
          </p>
          <p className="text-lg mb-6">
            I hold a Bachelor of Technology in Information Technology from Madras Institute of Technology, 
            Anna University (2019-2023).
          </p>
          <div className="mt-8">
            <h3 className="section-subtitle">Technical Focus</h3>
            <div className="flex flex-wrap gap-2 mt-4">
              {["Backend Optimization", "API Development", "Microservices", "CI/CD", "System Architecture", 
               "Scalability", "Automation", "Full-Stack Development"].map((item, index) => (
                <span 
                  key={index} 
                  className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
