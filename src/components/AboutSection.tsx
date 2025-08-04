import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Brain, Zap } from 'lucide-react';
import workspaceBg from '@/assets/workspace-bg.jpg';

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
      description: "React, TypeScript, Tailwind CSS, Next.js with focus on performance and accessibility",
      technologies: ["React", "TypeScript", "Tailwind", "Next.js"]
    },
    {
      icon: Database,
      title: "Backend & Databases",
      description: "Django, FastAPI, PostgreSQL, Redis with scalable architecture patterns",
      technologies: ["Django", "FastAPI", "PostgreSQL", "Redis"]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "FAISS, ChromaDB, LLM integration, vector embeddings for intelligent applications",
      technologies: ["FAISS", "ChromaDB", "OpenAI", "LangChain"]
    },
    {
      icon: Zap,
      title: "DevOps & Performance",
      description: "Docker, AWS, CI/CD, performance optimization and monitoring",
      technologies: ["Docker", "AWS", "CI/CD", "Monitoring"]
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a passionate full-stack developer specializing in creating intelligent web applications 
              that bridge the gap between cutting-edge AI technology and exceptional user experience. 
              My expertise spans from crafting beautiful interfaces to building robust backend systems 
              powered by machine learning.
            </p>
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
                  I believe in building applications that not only solve real problems but also 
                  delight users with intuitive interfaces and intelligent features. Every project 
                  I work on combines technical excellence with thoughtful design, ensuring scalable, 
                  maintainable, and user-focused solutions.
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