  import { useState, useEffect } from 'react';
  import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
  import { Button } from '@/components/ui/button';
  import { Badge } from '@/components/ui/badge';
  import { Github, ExternalLink, Database, Brain, Code, Zap } from 'lucide-react';
  import codeMonitorBg from '@/assets/code-monitor-bg.jpg';

  const ProjectsSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.2 }
      );

      const section = document.getElementById('projects');
      if (section) observer.observe(section);

      return () => observer.disconnect();
    }, []);

    const projects = [
      {
        title: "LTMS Website Project",
        description: "A full-featured internal system for Land Transportation Management with dashboards, user authentication, and admin controls. Built using PHP, MySQL, and deployed via XAMPP.",
        icon: Database,
        technologies: ["PHP", "MySQL", "XAMPP"],
        features: ["Admin Dashboard", "User Authentication", "Account Tracking", "Backend Logic"],
        status: "Group Lead",
        gradient: "from-blue-500 to-indigo-600"
      },
      {
        title: "AI-Powered Knowledge Assistant",
        description: "A custom Django app delivering intelligent recommendations using FAISS, semantic search, and LLM endpoints secured via API keys.",
        icon: Brain,
        technologies: ["Django", "FAISS", "ChromaDB", "LLM APIs", "SQL Server"],
        features: ["Semantic Search", "LLM Integration", "Fast Similarity Matching"],
        status: "Full Stack Developer",
        gradient: "from-emerald-500 to-teal-600"
      },
      {
        title: "Django UI Tool",
        description: "Designed and developed the full UI for an internal Django application with a clean and intuitive UX.",
        icon: Code,
        technologies: ["Django", "Tailwind CSS"],
        features: ["Responsive UI", "UX Improvements"],
        status: "Lead UI Developer",
        gradient: "from-fuchsia-500 to-pink-600"
      },
      {
        title: "Secure Role-Based System",
        description: "Built a custom login system using ChromaDB to enforce secure, role-based access and confidentiality.",
        icon: Code,
        technologies: ["Django", "ChromaDB"],
        features: ["Custom Login", "Role-Based Access", "Data Confidentiality"],
        status: "Security & Backend Contributor",
        gradient: "from-fuchsia-500 to-pink-600"
      },
      {
        title: "AI-Powered File Processor",
        description: "Developed a Django tool that uploads files, transcribes content, detects issues, and suggests AI-powered solutions.",
        icon: Code,
        technologies: ["Django", "AI APIs"],
        features: ["File Upload", "Transcription", "Issue Detection", "AI Suggestions"],
        status: "Contributor",
        gradient: "from-fuchsia-500 to-pink-600"
      }
    ];

    return (
      <section id="projects" className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={codeMonitorBg} 
            alt="Code on monitor background" 
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
                Featured <span className="text-gradient">Projects</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of internal tools and web systems demonstrating my growth from full-stack web development to integrating modern AI features in real-world applications.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card 
                  key={project.title}
                  className={`gradient-card border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-elegant group overflow-hidden ${
                    isVisible ? 'animate-fade-in' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center group-hover:shadow-glow transition-smooth`}>
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                      <Badge variant="outline" className="border-primary/40 text-primary">
                        {project.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mb-2 group-hover:text-gradient transition-smooth">
                      {project.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent>
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-3 text-primary">Key Features</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature) => (
                          <div key={feature} className="flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full bg-primary/60"></div>
                            <span className="text-xs text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-3 text-primary">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-xs text-primary font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </CardContent>
                </Card>
              ))}
            </div>

          </div>
        </div>
      </section>
    );
  };

  export default ProjectsSection;
