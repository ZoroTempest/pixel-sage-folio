import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';



interface ContactItemProps {
  icon: React.ComponentType<any>;
  title: string;
  value: string;
  link?: string;
}

const ContactItem = ({ icon: Icon, title, value, link }: ContactItemProps) => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      toast({
        title: 'Copied',
        description: `${title} copied to clipboard.`,
      });
      setTimeout(() => setCopied(false), 1400);
    } catch {
      toast({
        title: 'Copy failed',
        description: `Could not copy ${title}.`,
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="flex items-center gap-4 mb-4">
      <div className="w-8 h-8 flex items-center justify-center">
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1">
        <p className="font-semibold">{title}</p>
        <div className="flex items-center gap-2">
          {link ? (
            <a href={link} className="underline">
              {value}
            </a>
          ) : (
            <span>{value}</span>
          )}
          <Button
            size="sm"
            variant="outline"
            onClick={handleCopy}
            aria-label={`Copy ${title}`}
          >
            {copied ? 'Copied' : 'Copy'}
          </Button>
        </div>
      </div>
    </div>
  );
};




const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('contact');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "justinbulot@outlook.com",
      link: "mailto:justinbulot@outlook.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "(+63) 975 079 0488",
      link: "tel:+639750790488"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Antipolo City, Rizal",
      link: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/justin-bulot", label: "LinkedIn" },
  ];

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
   
      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's discuss how we can create 
              something amazing together. I'm always open to new opportunities and 
              exciting challenges.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="gradient-card border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Send className="w-6 h-6 mr-3 text-primary" />
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="bg-background/50 border-primary/20 focus:border-primary"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          className="bg-background/50 border-primary/20 focus:border-primary"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What would you like to discuss?"
                        className="bg-background/50 border-primary/20 focus:border-primary"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or ideas..."
                        rows={6}
                        className="bg-background/50 border-primary/20 focus:border-primary resize-none"
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full gradient-primary hover:shadow-glow transition-smooth"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card className="gradient-card border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info) => {
                    const isPhone = info.title === 'Phone';
                    return (
                      <div
                        key={info.title}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/10 transition-smooth group"
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-smooth">
                          <info.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground">{info.title}</p>
                          <div className="flex items-center gap-2">
                            {isPhone ? (
                              <>
                                <span className="font-medium">{info.value}</span>
                                <button
                                  onClick={async (e) => {
                                    e.preventDefault();
                                    try {
                                      await navigator.clipboard.writeText(info.value);
                                      toast({
                                        title: 'Copied',
                                        description: `${info.title} copied to clipboard.`,
                                      });
                                    } catch {
                                      toast({
                                        title: 'Copy failed',
                                        description: `Could not copy ${info.title}.`,
                                        variant: 'destructive',
                                      });
                                    }
                                  }}
                                  className="text-sm underline ml-2"
                                  aria-label="Copy phone number"
                                >
                                  Copy
                                </button>
                                <a
                                  href={info.link}
                                  className="ml-2 text-sm underline"
                                  aria-label="Call phone"
                                >
                                  Call
                                </a>
                              </>
                            ) : (
                              <a href={info.link} className="font-medium underline">
                                {info.value}
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="gradient-card border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl">Follow Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center hover:border-primary hover:shadow-glow transition-smooth hover:scale-110 group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth" />
                    </a>
                  ))}
                  </div>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="gradient-card border-primary/20">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-3 h-3 bg-primary rounded-full mx-auto mb-3 pulse-glow"></div>
                    <p className="text-sm text-muted-foreground mb-1">Currently Available</p>
                    <p className="font-medium text-primary">Open for New Projects</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;