import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Database, Brain, Code, LucideIcon, Github, ExternalLink, Coffee } from "lucide-react";
import codeMonitorBg from "@/assets/code-monitor-bg.jpg";

/* ================================
   TYPES
================================ */
type Category = "Internal Projects" | "External Projects";

interface Project {
  id: number;
  category: Category;
  title: string;
  description: string;
  icon: LucideIcon;
  technologies: string[];
  features: string[];
  status: string;
  gradient: string;

  // ✅ OPTIONAL LINKS
  liveLink?: string;
  githubLink?: string;
}

/* ================================
   CATEGORIES
================================ */
const PROJECT_CATEGORIES: Category[] = [
  "Internal Projects",
  "External Projects",
];

/* ================================
   PROJECT DATA (EDIT THIS ONLY)
================================ */
const projectsData: Project[] = [
  {
    id: 1,
    category: "Internal Projects",
    title: "LTMS Website Project",
    description:
      "A full-featured internal system for Land Transportation Management with dashboards, user authentication, and admin controls. Built using PHP, MySQL, and deployed via XAMPP.",
    icon: Database,
    technologies: ["PHP", "MySQL", "XAMPP"],
    features: [
      "Admin Dashboard",
      "User Authentication",
      "Account Tracking",
      "Backend Logic",
    ],
    status: "Group Lead",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    id: 2,
    category: "Internal Projects",
    title: "AI-Powered Knowledge Assistant",
    description:
      "A custom Django app delivering intelligent recommendations using FAISS, semantic search, and LLM endpoints secured via API keys.",
    icon: Brain,
    technologies: ["Django", "FAISS", "LLM APIs", "SQL Server"],
    features: [
      "Semantic Search",
      "LLM Integration",
      "Fast Similarity Matching",
    ],
    status: "Full Stack Developer",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: 3,
    category: "Internal Projects",
    title: "Django UI Tool",
    description:
      "Designed and developed the full UI for an internal Django application with a clean and intuitive UX.",
    icon: Code,
    technologies: ["Django", "Tailwind CSS"],
    features: ["Responsive UI", "UX Improvements"],
    status: "Lead UI Developer",
    gradient: "from-orange-500 to-red-600",
  },
  {
    id: 4,
    category: "Internal Projects",
    title: "Secure Role-Based System",
    description:
      "Built a custom login system using ChromaDB to enforce secure, role-based access and confidentiality.",
    icon: Code,
    technologies: ["Django", "ChromaDB"],
    features: [
      "Custom Login",
      "Role-Based Access",
      "Data Confidentiality",
    ],
    status: "Security & Backend Contributor",
    gradient: "from-orange-500 to-red-600",
  },
  {
    id: 5,
    category: "Internal Projects",
    title: "AI-Powered File Processor",
    description:
      "Contributed in building a Django tool that uploads files, transcribes content, detects issues, and suggests AI-powered solutions.",
    icon: Code,
    technologies: ["Django", "AI APIs"],
    features: [
      "File Upload",
      "Transcription",
      "Issue Detection",
      "AI Suggestions",
    ],
    status: "Contributor",
    gradient: "from-fuchsia-500 to-pink-600",
  },

  // ✅ EXTERNAL PROJECT WITH LINKS
  {
    id: 6,
    category: "External Projects",
    title: "Personal Portfolio Website",
    description:
      "A responsive personal website built for my clients.",
    icon: Code,
    technologies: ["React", "Tailwind", "Typescript", "Vite"],
    features: ["Responsive Design", "Chatbot Integration", "Project Showcase", "Light/Dark Mode"],
    status: "Personal Project",
    gradient: "from-orange-500 to-red-600",

    // ✅ ADD YOUR LINKS HERE
    liveLink: "https://myportfoliojustinbulot.netlify.app/",
    githubLink: "https://github.com/ZoroTempest/Deployed_Portfolio/tree/Edit_1",
  },

   {
    id: 7,
    category: "External Projects",
    title: "Coffee Shop Website",
    description:
      "A responsive website built for a local coffee shop to showcase their menu, location, a simple game for customer engagement, and contact information.",
    icon: Coffee,
    technologies: ["React", "Tailwind", "Vite", "TypeScript", "shadcn/ui"],
    features: ["Responsive Design", "Chatbot Integration", "Coffee Shop Showcase", "Simple Spin the Wheel Game", "Light/Dark Mode"],
    status: "Freelance Project",
    gradient: "from-fuchsia-500 to-pink-600",

    // ✅ ADD YOUR LINKS HERE
    liveLink: "https://bukidcafeph.com/",
    githubLink: "https://github.com/Justin24kmagic/Bukid-Cafe_edit/tree/Deploy",
  },
];

/* ================================
   REUSABLE PROJECT CARD
================================ */
const ProjectCard = ({ project }: { project: Project }) => {
  const [expanded, setExpanded] = useState(false);
  const Icon = project.icon;

  return (
    <Card className="gradient-card border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-elegant group overflow-hidden flex flex-col h-full">
      <CardHeader>
        <div className="flex items-start justify-between mb-4">
          <div
            className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center group-hover:shadow-glow transition`}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>

          <Badge variant="outline" className="border-primary/40 text-primary">
            {project.status}
          </Badge>
        </div>

        <CardTitle className="text-xl mb-2 group-hover:text-gradient transition">
          {project.title}
        </CardTitle>

        {/* DESCRIPTION */}
        <p
          className={`text-muted-foreground text-sm leading-relaxed transition-all ${
            expanded ? "max-h-full" : "max-h-[4.5rem] overflow-hidden"
          }`}
        >
          {project.description}
        </p>

        {project.description.length > 150 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-primary text-xs mt-1 font-semibold hover:underline"
          >
            {expanded ? "See Less" : "See More"}
          </button>
        )}
      </CardHeader>

      <CardContent className="flex flex-col mt-auto">
        {/* FEATURES */}
        <div className={`mb-4 ${expanded ? "" : "max-h-[6rem] overflow-hidden"}`}>
          <h4 className="text-sm font-semibold mb-3 text-primary">
            Key Features
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {project.features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary/60"></div>
                <span className="text-xs text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* TECHNOLOGIES */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-3 text-primary">
            Technologies
          </h4>
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

        {/* ACTION BUTTONS */}
        {(project.liveLink || project.githubLink) && (
          <div className="flex gap-3 mt-auto">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button className="w-full flex gap-2">
                  <ExternalLink size={16} />
                  Live Site
                </Button>
              </a>
            )}

            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="outline" className="w-full flex gap-2">
                  <Github size={16} />
                  GitHub
                </Button>
              </a>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

/* ================================
   MAIN SECTION
================================ */
const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] =
    useState<Category>("Internal Projects");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );

    const section = document.getElementById("projects");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const filteredProjects = projectsData.filter(
    (project) => project.category === activeCategory
  );

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={codeMonitorBg}
          alt="background"
          className="w-full h-full object-cover opacity-5 blur-sm"
        />
        <div className="absolute inset-0 bg-background/95"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          {/* HEADER */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              A collection of internal tools and external works showcasing my
              growth from full-stack web development to modern AI systems.
            </p>
          </div>

          {/* CATEGORY SWITCHER */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {PROJECT_CATEGORIES.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* PROJECT GRID */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* EMPTY STATE */}
          {filteredProjects.length === 0 && (
            <p className="text-center text-muted-foreground mt-10">
              No projects available in this category yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
