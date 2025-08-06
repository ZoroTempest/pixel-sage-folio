import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Brain, Zap } from 'lucide-react';
import workspaceBg from '@/assets/workspace-bg.jpg';
import JustinImage from '@/assets/Justin.png'; 

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "Clean UI/UX with Tailwind CSS, React, and responsive design for modern, performant web apps.",
    technologies: ["Tailwind CSS", "React", "Responsive UI", "UI/UX"]
  },
  {
    icon: Database,
    title: "Backend & Architecture",
    description: "Robust APIs and business logic using Django and Flask, with solid Python and Java foundations.",
    technologies: ["Django", "Flask", "Python", "Java"]
  },
  {
    icon: Brain,
    title: "AI & Intelligent Systems",
    description: "AI Developer experience with ML integrations, LLMs, and transforming complex logic into smart assistants.",
    technologies: ["AI", "LLMs", "ML Integration", "Internship at RELX"]
  },
  {
    icon: Zap,
    title: "Systems & Networking",
    description: "Certified in networking fundamentals, with experience in system performance, optimization, and DevOps basics.",
    technologies: ["Networking", "Certifications", "Optimization", "Scalability"]
  }
];


  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={workspaceBg} 
          alt="Development workspace background" 
          className="w-full h-full object-cover opacity-5 blur-sm"
        />
        <div className="absolute inset-0 bg-background/95"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>




<div className="flex flex-col md:flex-row items-center gap-8 mb-16 text-center md:text-left">
  {/* Image Container */}
  <div className="flex-shrink-0">
    <img
      src={JustinImage}
      alt="Justin"
      className="w-60 h-60 md:w-80 md:h-80 rounded-full object-cover shadow-lg border-4 border-primary/30"
    />
  </div>

  {/* Text Content */}
  <div className="flex-1">
    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      About <span className="text-gradient">Me</span>
    </h2>
    <p className="text-xl text-muted-foreground max-w-4xl leading-relaxed">
      I’m a Software Developer with a strong foundation in full-stack development, specializing in building fast, responsive, and user-centric web applications.
      My expertise lies in Django, Flask, and Tailwind CSS, with the ability to integrate machine learning components when needed.
      At Reed Elsevier PH, I worked as an AI Developer Intern, transforming complex requirements into seamless, user-friendly digital solutions.
      I emphasize clean UI/UX design and system performance.
      With certifications in Python, Java, and networking fundamentals, I bring technical depth and clear communication to every project.
      My focus is on delivering scalable, maintainable solutions aligned with real business goals.
    </p>
  </div>
</div>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={skill.title}
                className={`gradient-card border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-elegant group ${
                  isVisible ? 'animate-fade-in' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 relative">
                    <div className="w-16 h-16 mx-auto rounded-full gradient-primary flex items-center justify-center group-hover:shadow-glow transition-smooth">
                      <skill.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skill.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="gradient-card border-primary/20 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gradient">My Approach</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I like building solutions that work smoothly and look clean—whether it’s a web interface, an AI-powered feature, or a system that tackles real challenges.
                  I’ve explored a variety of tools and technologies, and I’m always experimenting with new ones to sharpen my workflow.
                  At the core, my goal is to create experiences that feel intuitive and genuinely useful to the people who interact with them.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;