import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 gradient-hero"></div>
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 gap-4 h-full animate-pulse">
          {[...Array(144)].map((_, i) => (
            <div
              key={i}
              className="border border-primary/20 h-full"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="text-gradient">Full-Stack</span>
            <br />
            <span className="text-foreground">Developer</span>
          </h1>
          
          <div className="floating">
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Crafting intelligent web applications with modern AI integration, 
              clean architecture, and stunning user experiences.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="gradient-primary hover:shadow-glow transition-smooth text-lg px-8 py-3 rounded-full"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-smooth text-lg px-8 py-3 rounded-full"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a 
              href="#" 
              className="p-3 border border-primary/30 rounded-full hover:border-primary hover:shadow-glow transition-smooth hover:scale-110 group"
            >
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-smooth" />
            </a>
            <a 
              href="#" 
              className="p-3 border border-primary/30 rounded-full hover:border-primary hover:shadow-glow transition-smooth hover:scale-110 group"
            >
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-smooth" />
            </a>
            <a 
              href="#" 
              className="p-3 border border-primary/30 rounded-full hover:border-primary hover:shadow-glow transition-smooth hover:scale-110 group"
            >
              <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-smooth" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="p-2 rounded-full border border-primary/30 hover:border-primary transition-smooth"
        >
          <ChevronDown className="w-6 h-6 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;