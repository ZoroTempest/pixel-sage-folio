import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Database, Brain, Code, Zap } from 'lucide-react';

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
      title: "AI-Powered Knowledge Assistant",
      description: "A sophisticated chatbot using FAISS vector embeddings and ChromaDB for semantic search, integrated with LLM for intelligent responses and knowledge extraction.",
      icon: Brain,
      technologies: ["Django", "FAISS", "ChromaDB", "OpenAI", "React"],
      features: ["Vector Embeddings", "Semantic Search", "Real-time Chat", "Knowledge Base"],
      status: "Featured",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      title: "Microservices E-commerce Platform",
      description: "Scalable e-commerce solution with microservices architecture, featuring real-time inventory management, payment processing, and advanced analytics.",
      icon: Database,
      technologies: ["Django", "PostgreSQL", "Redis", "Docker", "AWS"],
      features: ["Microservices", "Real-time Updates", "Payment Integration", "Analytics"],
      status: "Production",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "Real-time Collaboration Tool",
      description: "Modern collaboration platform with live document editing, video conferencing integration, and intelligent task management powered by AI.",
      icon: Code,
      technologies: ["React", "TypeScript", "WebRTC", "Socket.io", "FastAPI"],
      features: ["Real-time Editing", "Video Calls", "AI Assistance", "Team Management"],
      status: "Active",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Performance Analytics Dashboard",
      description: "Comprehensive analytics platform with real-time data visualization, predictive insights, and automated reporting for business intelligence.",
      icon: Zap,
      technologies: ["Next.js", "D3.js", "Python", "TensorFlow", "PostgreSQL"],
      features: ["Real-time Viz", "Predictive Analytics", "Auto Reports", "Custom Dashboards"],
      status: "Enterprise",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A showcase of my work combining cutting-edge technology with practical solutions. 
              Each project demonstrates expertise in full-stack development, AI integration, 
              and modern software architecture.
            </p>
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

                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className="flex-1 gradient-primary hover:shadow-glow transition-smooth"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-primary/40 hover:border-primary hover:bg-primary/10"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              variant="outline"
              className="border-primary/40 hover:border-primary hover:bg-primary/10 transition-smooth px-8 py-3 rounded-full"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;