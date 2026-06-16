import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Brain, Zap, Briefcase } from 'lucide-react';
import JustinImage from '@/assets/Justin.jpg';
import { useNavigate } from 'react-router-dom';


const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      icon: Briefcase,
      title: 'Business Website Development',
      description:
        'End-to-end development of professional websites designed to support real business goals.',
      technologies: ['Business Websites', 'CMS Platforms', 'SEO-Ready', 'Conversion-Focused'],
    },
    {
      icon: Zap,
      title: 'Frontend & UX',
      description: 'Clean, responsive UI built for speed, usability, and customer trust.',
      technologies: ['Tailwind CSS', 'React', 'Responsive Design', 'UI/UX', 'Wordpress'],
    },
    {
      icon: Database,
      title: 'Backend Systems',
      description:
        'Reliable backend logic and APIs that power bookings, forms, and admin dashboards.',
      technologies: ['Django', 'Flask', 'Python'],
    },
    {
      icon: Brain,
      title: 'Automation & Smart Features',
      description:
        'Optional AI-powered features and automations that improve efficiency and user experience.',
      technologies: ['AI Integrations', 'LLMs', 'Workflow Automation'],
    },
  ];

const builds = [
  {
    title: 'Business Websites',
    subtitle: 'Professional, conversion-focused presence',
    description:
      'Custom-built websites that establish credibility, communicate value clearly, and attract customers.',
    highlights: ['Mobile-first', 'SEO-ready', 'Fast loading'],
    sampleFile: 'Business_website.html',
  },
  {
    title: 'E-Commerce Websites',
    subtitle: 'Built to sell, easy to manage',
    description:
      'Conversion-focused online stores designed for smooth shopping, simple product management, and reliable performance.',
    highlights: [
      'Product & inventory management',
      'Secure checkout',
      'Mobile-optimized shopping',
    ],
    sampleFile: 'E-commerce_website.html',
  },
  {
    title: 'Booking & Inquiry Systems',
    subtitle: 'Turn visitors into customers',
    description:
      'Integrated booking flows, inquiry forms, and admin dashboards that support daily operations.',
    highlights: ['Custom logic', 'Admin dashboards', 'Email notifications'],
    sampleFile: 'Booking_website.html',
  },
  {
    title: 'Internal Tools & Dashboards',
    subtitle: 'Support real workflows',
    description:
      'Internal systems that help teams manage data, workflows, and reporting efficiently.',
    highlights: ['Clean UI', 'Role-based access', 'Scalable backend'],
    sampleFile: 'Dashboard_website.html',
  },
  {
    title: 'Automation & Smart Features',
    subtitle: 'Reduce manual work',
    description:
      'Optional automations and intelligent features that improve efficiency where they add real value.',
    highlights: ['Workflow automation', 'AI integrations', 'Custom logic'],
    sampleFile: 'Automation_smart_website.html',
  },
];

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* ABOUT INTRO */}
          <div className="flex flex-col md:flex-row items-center gap-10 mb-20 text-center md:text-left">
            <div className="flex-shrink-0">
              <div className="w-60 md:w-72 lg:w-80 rounded-2xl overflow-hidden border-4 border-primary/30 shadow-lg">
                <img
                  src={JustinImage}
                  alt="Justin"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-gradient">Me</span>
              </h2>

              <p className="text-xl text-muted-foreground max-w-4xl leading-relaxed">
                I’m a Business Website Developer helping small to medium businesses grow
                through fast, modern, and high-performing websites. I prioritize quality,
                performance, and long-term usability, designing websites as systems built
                to scale, manage, and convert.
                <br />
                <br />
                I work with Django, Flask, Tailwind CSS, and CMS platforms, choosing the
                right tools based on business goals, budget, and future growth. My
                background as an AI Developer Intern at Reed Elsevier PH shaped my approach
                to building reliable, production-ready solutions.
              </p>
            </div>
          </div>

          {/* SKILLS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={skill.title}
                className={`
                  gradient-card bg-background
                  border border-primary/20
                  transition-all duration-300
                  hover:-translate-y-2 hover:shadow-xl
                  dark:hover:shadow-black/40
                  ${isVisible ? 'animate-fade-in' : ''}
                `}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
                    <skill.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 dark:bg-primary/20 border border-primary/20 rounded-full text-xs text-primary font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* WHAT I BUILD */}
          <div className="mt-28 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              What <span className="text-gradient">I Build</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Business-ready websites and systems designed for performance, usability,
              and long-term growth.
            </p>
          </div>

          {/* SLIDER */}
          <div className="mt-14 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 bg-background">
            {builds.map((item) => (
              <div
                key={item.title}
                className="min-w-[320px] snap-start cursor-pointer"
                onClick={() =>
                  navigate(`/sample/${encodeURIComponent(item.sampleFile)}`)
                }
              >
                <Card
                  className="
                    gradient-card bg-background
                    border border-primary/20
                    transition-all duration-300
                    hover:-translate-y-2 hover:shadow-xl
                    dark:hover:shadow-black/40
                    h-full
                  "
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    <h4 className="text-xl font-semibold">{item.title}</h4>
                    <p className="text-sm text-primary mb-3">{item.subtitle}</p>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-auto flex flex-wrap gap-2">
                      {item.highlights.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-primary/10 dark:bg-primary/20 border border-primary/20 rounded-full text-xs text-primary font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5">
                      <div
                        className="
                          inline-flex items-center gap-2
                          px-4 py-2
                          rounded-full
                          bg-gradient-to-r
                          from-primary
                          to-primary/70
                          text-primary-foreground
                          font-medium
                          text-sm
                          shadow-lg
                          shadow-primary/20
                          transition-all duration-300
                          group-hover:scale-105
                        "
                      >
                        <span>View Live Sample</span>
                        <span>→</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* APPROACH */}
          <div className="mt-24 text-center">
            <Card className="gradient-card bg-background border border-primary/20 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gradient">
                  My Approach
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I build solutions that work smoothly and look clean. I work closely with
                  clients, ask the right questions early, and tailor each build to how the
                  business actually operates. The result is a system that is easy to use,
                  easy to manage, and built to grow.
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
