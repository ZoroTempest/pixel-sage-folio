import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import ReactMarkdown from 'react-markdown';

import { 
  MessageCircle, 
  Send, 
  X, 
  Minimize2, 
  Maximize2, 
  Bot, 
  User,
  Zap,
  Brain
} from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  isTyping?: boolean;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "Hello! I'm an AI assistant that can help you learn about my creator's work and expertise. Ask me about their projects, skills, or experience!",
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
  scrollToBottom();

    // Always visible on mobile
    if (window.innerWidth < 768) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // stop checking once visible
        }
      },
      {
        threshold: 0.1, // trigger earlier
        rootMargin: "0px 0px -50px 0px", // preload visibility before fully on screen
      }
    );

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [messages]);


  const simulateTyping = () => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };


const generateResponse = (userMessage: string): string => {
  const lowerMessage = userMessage.toLowerCase().trim();

  // Helper to match whole words or close phrases
  const match = (patterns: string[]) =>
    patterns.some(p => new RegExp(`\\b${p}\\b`, "i").test(lowerMessage));


  if (match(['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening'])) {
  return `👋 Hey there!  
I’m **Justin’s AI Assistant** 🤖 — here to answer your questions about Justin Bulot’s projects, skills, and experience.  

You can ask me things like:  
- “Show me your projects”  
- “What are your skills?”  
- “Tell me about your AI work”  
- “How can I contact you?”  

What would you like to know first?`;
  }

  if (match(['project', 'projects', 'work', 'portfolio', 'portfolio work', 'past work', 'case study', 'case studies'])) {
    return `💼 **Highlighted Projects**  
Here’s a glimpse of some work I’ve been involved in:

1. **LTMS Website Project** — Internal system with dashboards, user authentication, and admin controls.  
   _Stack:_ PHP, MySQL, XAMPP  

2. **AI-Powered Knowledge Assistant** — A custom Django app delivering fast, context-aware answers using semantic search with FAISS, LLM APIs, and similarity matching. Secured with API keys for safe integration and intelligent recommendations.

3. **Django UI Tool** — Designed a clean, responsive UI for internal tools.  

4. **Secure Role-Based System** — Custom ChromaDB login with dynamic role-based access control.  

5. **AI-Powered File Processor** — Upload files, transcribe content, detect issues, and suggest AI-driven solutions.  

6. **Portfolio Website** — My personal portfolio showcasing projects, experience, and skills with smooth animations and modern design.  
   _Stack:_ React, TypeScript, Tailwind CSS, shadcn-ui, Vite  
   _Live:_ [myportfoliojustinbulot.netlify.app](https://myportfoliojustinbulot.netlify.app/)

7. **Coffee Shop Website** — Responsive website for a local coffee shop featuring menu, location, a simple spin-the-wheel game, and chatbot integration.  
   _Stack:_ React, TypeScript, Tailwind CSS, shadcn-ui, Vite  
   _Live:_ [bukidcafeph.com](https://bukidcafeph.com/)  

💡 Want me to tell you more about **the tech behind them**, or **what challenges I solved**? Feel free to leave a message`;
}

  if (match(['skill', 'skills', 'technology', 'technologies', 'stack', 'tech stack', 'technical ability', 'core skills'])) {
    return `🛠 **Technical Skills**  
Here's my current toolkit:

- **Web Development:** React, TypeScript, Django, FastAPI  
- **Databases:** Firebase, MySQL, SQL Server  
- **AI Integration:** FAISS, ChromaDB, LLM APIs (OpenAI, Claude, local models)  
- **UI/UX:** Tailwind CSS, responsive design, accessibility best practices  
- **DevOps:** Netlify, Docker, CI/CD, deployment optimization  

💬 I can also talk about **how I choose tech stacks** depending on project needs and different use cases.`;
  }

  if (match(['ai', 'machine learning', 'artificial intelligence', 'deep learning', 'neural network', 'llm', 'openai'])) {
    return `🤖 **AI Expertise**  
My focus is on **practical AI** that solves real problems:

- Vector embeddings with **FAISS** for fast semantic search  
- **ChromaDB** for persistent AI memory and context recall  
- Integrating **LLMs** for intelligent, conversational interfaces  
- Special interest in AI that **augments human decision-making**  

📌 Curious about my **AI project examples** or **how I fine-tune prompts**?`;
  }

  if (match(['contact', 'hire', 'reach you', 'get in touch', 'connect', 'email', 'phone'])) {
    return `📇 **Contact Information**  
Here’s how to reach me directly:

- 📧 Email: justinbulot@outlook.com  
- 💼 LinkedIn: [Justin Bulot](https://www.linkedin.com/in/justin-bulot-0765b7334/)  
- 📱 Phone: (+63) 975 079 0488  

📌 **Collaboration Process**  
1. **Discovery Call** — Understand your needs  
2. **Proposal** — Plan the scope, timeline, and budget  
3. **Development** — Iterative, transparent progress updates  
4. **Launch & Support** 

What else do you want to know about Justin?`;
  }

  if (match(['experience','experiences', 'background', 'career', 'work history', 'journey', 'professional history'])) {
    return `📜 **Experience & Background**  

- **AI Developer Analyst** — RELX Reed Elsevier   
  Works on AI integration and process improvement for different systems.

- **Full Stack & UI Development** — Group Lead for multiple academic projects and freelance projects like e-commerce websites, automated ticketing websites, customized websites based on client's needs etc. 

- **Academic Leadership** — Guided teams through complex web app builds, focusing on maintainability and scalability.  

- **Passions** — AI-driven systems, automation, and software that solves practical problems.  

Would you like me to share **my most challenging project** and how I solved it? Feel free to message me`;
  }

  if (match(['about yourself', 'bio', 'yourself', 'who is justin', 'introduce', 'about you', 'Justin Bulot'])) {
    return `👋 **About Me**  
I’m a knowledge sponge — always learning, adapting, and improving.  
Fueled by coffee ☕ and curiosity, I work fast but never at the cost of quality.  

Outside of coding:  
- 🎤 I sing and enjoy music  
- 🏀 Play sports to stay fit  
- 🧠 Constantly explore new AI tools and emerging tech trends  

My mission? To help businesses grow and make their lives easer, more proficient and more productive! Let's live optimally!!!`;
  }

  if (match(['education', 'school', 'study', 'degree', 'college', 'university'])) {
    return `🎓 **Education**  
- **B.S. in Computer Science** — Specialization in Software Engineering  
- Focus areas: AI development, system design, web technologies  
- Projects blended **academic theory with real-world client needs**  
- Continued self-learning through online AI/ML courses and hackathons`;
  }



  if (match(['hobby', 'hobbies', 'free time', 'fun', 'interest', 'passion'])) {
    return `🎯 **Outside Work**  
Things I enjoy when I’m not coding:  
- Singing 🎤  
- Playing basketball 🏀 and other sports  
- Exploring the latest AI tools and APIs  
- Coffee meetups ☕  
- Fitness & mindfulness routines 🏋️‍♂️🧘‍♂️
- Walking my Dog 🏋️‍♂️🧘‍♂️`
;
  }

  if (match(['name', 'who are you', 'your name', 'what should i call you', 'assistant name'])) {
    return `📛 You can call me **Justin's AI Assistant** 🤖.  
I’m here to answer your questions about **Justin Bulot** — his projects, skills, experience, and journey.  
Think of me as his digital spokesperson, available 24/7.`;
  }

  if (match(['availability', 'free', 'available', 'when can we talk', 'schedule'])) {
    return `📅 **Availability**  
Justin is generally available:  
- Weekday evenings (GMT+8)  
- Flexible on weekends for calls or meetings  

We can coordinate a time that works best for you!  
If you are interested in Justin's Availability, feel free to **leave him a message!**`;
  }

  if (match(['future goals', 'plans', 'ambition', 'where do you see yourself'])) {
    return `🚀 **Future Goals**  
- Continue integrating AI into everyday tools  
- Lead innovative software projects that make a measurable impact  
- Explore **AI + IoT** for smarter, more connected environments  
- Contribute to open-source AI tools and frameworks`;
  }



  return `💬 That’s interesting!  

I can tell you more about:  
- 📂 Projects  
- 🛠 Skills  
- 🤖 AI Expertise  
- 🎓 Education  
- 📜 Experience & Background  
- 🎯 Hobbies & Interests  
- 📅 Availability  
- 📇 Contact Information  
- 🚀 Future Goals  
- 🏆 Achievements  

💡 Maybe you can try asking me things like:  
- "What projects have you worked on?"  
- "What’s your AI experience?"  
- "Tell me about your education"  
- "How can I contact you?"  

Which would you like to explore?`;
};


  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    simulateTyping();

    // Simulate AI response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: generateResponse(message),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1500 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full gradient-primary shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-110 group"
        >
          <MessageCircle className="w-8 h-8 text-primary-foreground group-hover:scale-110 transition-transform" />
        </Button>
        <div className="absolute -top-2 -right-2">
          <div className="w-4 h-4 bg-primary-glow rounded-full animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card
        className={`
          w-[85vw] h-[70vh]       /* Mobile size */
          sm:w-96 sm:h-96         /* Tablet & desktop size */
          gradient-card border-primary/20 shadow-elegant transition-all duration-300
          ${isMinimized ? 'h-16 sm:h-16' : 'h-[70vh] sm:h-96'}
        `}
      >
        <CardHeader className="flex flex-row items-center justify-between p-4 border-b border-primary/20">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
              <Brain className="w-4 h-4 text-primary-foreground" />
            </div>
            <div>
              <CardTitle className="text-sm">AI Assistant</CardTitle>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-glow rounded-full animate-pulse"></div>
                <span className="text-xs text-muted-foreground">Online</span>
                <Badge variant="outline" className="text-xs border-primary/40 text-primary">
                  <Zap className="w-3 h-3 mr-1" />
                  AI-Powered
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(!isMinimized)}
              className="w-8 h-8 p-0 hover:bg-primary/10"
            >
              {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 p-0 hover:bg-primary/10"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0 flex flex-col h-[calc(70vh-4rem)] sm:h-80">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-2 max-w-[80%] ${
                      msg.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        msg.type === 'user' 
                          ? 'bg-primary/20' 
                          : 'gradient-primary'
                      }`}>
                        {msg.type === 'user' ? (
                          <User className="w-4 h-4 text-primary" />
                        ) : (
                          <Bot className="w-4 h-4 text-primary-foreground" />
                        )}
                      </div>
                      <div className={`rounded-2xl px-4 py-2 ${
                        msg.type === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-secondary-foreground border border-primary/20'
                      }`}>
                        <ReactMarkdown
                          components={{
                            p: ({ children }) => (
                              <p className="text-sm leading-relaxed whitespace-pre-wrap">{children}</p>
                            ),
                            li: ({ children }) => (
                              <li className="ml-4 list-disc">{children}</li>
                            ),
                          }}
                        >
                          {msg.content}
                        </ReactMarkdown>
                        <p className="text-xs opacity-70 mt-1">
                          {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                        <Bot className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div className="bg-secondary border border-primary/20 rounded-2xl px-4 py-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div ref={messagesEndRef} />
            </ScrollArea>

            <div className="p-4 border-t border-primary/20">
              <div className="flex space-x-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about projects, skills, or experience..."
                  className="w-[80%] sm:flex-1 bg-background/50 border-primary/20 focus:border-primary"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!message.trim() || isTyping}
                  className="gradient-primary hover:shadow-glow transition-smooth"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default ChatBot;