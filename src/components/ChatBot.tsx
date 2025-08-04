import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
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
  }, [messages]);

  const simulateTyping = () => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('project') || lowerMessage.includes('work')) {
      return "I can tell you about several impressive projects! There's the AI-Powered Knowledge Assistant using FAISS and ChromaDB, a Microservices E-commerce Platform, a Real-time Collaboration Tool, and a Performance Analytics Dashboard. Each showcases different aspects of full-stack development and AI integration. Which one interests you most?";
    }
    
    if (lowerMessage.includes('skill') || lowerMessage.includes('technology')) {
      return "The developer specializes in modern web technologies including React, TypeScript, Django, FastAPI, PostgreSQL, and Redis. They're particularly skilled in AI integration using FAISS, ChromaDB, and LLM technologies. Their expertise spans from frontend development to backend architecture and DevOps practices.";
    }
    
    if (lowerMessage.includes('ai') || lowerMessage.includes('machine learning')) {
      return "AI and machine learning are core strengths! The developer works with vector embeddings using FAISS, semantic search with ChromaDB, LLM integration for intelligent responses, and has experience with TensorFlow for predictive analytics. They focus on practical AI applications that enhance user experience.";
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('hire')) {
      return "Great! The developer is currently available for new projects. You can reach out through the contact form on this portfolio, or connect via email, LinkedIn, or GitHub. They're particularly interested in projects involving AI integration, full-stack development, and innovative web applications.";
    }
    
    if (lowerMessage.includes('experience') || lowerMessage.includes('background')) {
      return "With extensive experience in full-stack development, the developer has worked on everything from enterprise e-commerce platforms to cutting-edge AI applications. They specialize in creating scalable, maintainable solutions that combine technical excellence with exceptional user experience.";
    }
    
    return "That's an interesting question! I can help you learn about the developer's projects, technical skills, AI expertise, or how to get in touch. What would you like to know more about?";
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
      <Card className={`w-96 h-96 gradient-card border-primary/20 shadow-elegant transition-all duration-300 ${
        isMinimized ? 'h-16' : 'h-96'
      }`}>
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
                  FAISS Powered
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
          <CardContent className="p-0 flex flex-col h-80">
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
                        <p className="text-sm leading-relaxed">{msg.content}</p>
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
                  className="flex-1 bg-background/50 border-primary/20 focus:border-primary"
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