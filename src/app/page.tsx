'use client';

import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Mail, Github, Linkedin, Dribbble, Twitter,
  ArrowRight, ArrowUpRight, Download, Eye, Heart, Star, Quote,
  Figma, Palette, Box, Layers, Zap, Users, Award, TrendingUp,
  Code, Smartphone, Monitor, Layout, PenTool, MousePointer,
  BookOpen, MessageSquare, Globe, CheckCircle, PlayCircle, FileText,
  BarChart, Target, Lightbulb, Settings, Shield, Sparkles
} from 'lucide-react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  client: string;
  year: string;
  role: string;
  duration: string;
  challenge: string;
  solution: string;
  results: string[];
  tools: string[];
  link?: string;
  featured: boolean;
}

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
}

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
  projectWorked: string;
}

interface Award {
  title: string;
  organization: string;
  year: string;
  category: string;
}

interface Publication {
  title: string;
  platform: string;
  date: string;
  type: string;
  link: string;
}

export default function ProfessionalDesignerPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'work', 'services', 'process', 'testimonials', 'recognition', 'insights', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const projects: Project[] = [
    {
      id: 1,
      title: "FinanceFlow Banking App",
      category: "UI/UX Design",
      description: "Comprehensive mobile banking platform with advanced security features and intuitive money management tools",
      fullDescription: "A complete redesign of a legacy banking application, transforming it into a modern, secure, and user-friendly platform that serves over 2 million active users. The project involved extensive user research, prototyping, and iterative testing to ensure the highest level of usability and security compliance.",
      image: "/api/placeholder/1200/800",
      tags: ["Mobile App", "Fintech", "iOS", "Android", "Security"],
      client: "FinanceFlow Inc.",
      year: "2024",
      role: "Lead Product Designer",
      duration: "6 months",
      challenge: "The existing banking app had a 2.3-star rating with users complaining about confusing navigation, slow transaction processing, and outdated interface. The client was losing customers to competitors with modern apps.",
      solution: "Conducted 50+ user interviews and usability tests to identify pain points. Redesigned the entire app architecture with a focus on speed, security, and simplicity. Implemented biometric authentication, instant notifications, and a customizable dashboard that puts user's most frequent actions at their fingertips.",
      results: [
        "Rating improved from 2.3 to 4.8 stars (108% increase)",
        "45% increase in daily active users within 3 months",
        "Transaction completion time reduced by 60%",
        "90% reduction in customer support tickets",
        "Featured as App of the Day on App Store",
        "$15M increase in digital transactions monthly"
      ],
      tools: ["Figma", "Principle", "Adobe XD", "Maze", "UserTesting", "Jira"],
      link: "https://example.com",
      featured: true
    },
    {
      id: 2,
      title: "EcoShop Sustainable Marketplace",
      category: "Product Design",
      description: "Revolutionary e-commerce platform connecting conscious consumers with sustainable brands worldwide",
      fullDescription: "End-to-end product design for a B2C marketplace dedicated to sustainable and eco-friendly products. The platform features advanced filtering, carbon footprint tracking, and educational content to help users make informed purchasing decisions.",
      image: "/api/placeholder/1200/800",
      tags: ["Web App", "E-commerce", "Sustainability", "Marketplace"],
      client: "EcoShop Global",
      year: "2024",
      role: "Senior Product Designer",
      duration: "8 months",
      challenge: "Creating an e-commerce experience that not only drives sales but also educates users about sustainability without overwhelming them with information or compromising on usability.",
      solution: "Designed a dual-layer information architecture: primary layer for shopping experience, secondary layer for sustainability insights. Created an innovative 'Eco Score' system that simplifies complex environmental data. Implemented smart filtering that helps users find products aligned with their values.",
      results: [
        "85% conversion rate increase (industry average: 2-3%)",
        "150% growth in monthly active users",
        "Average session duration: 8 minutes (3x industry average)",
        "Featured in Awwwards Site of the Day",
        "$2.3M in sustainable product sales in first quarter",
        "Partnership with 500+ eco-friendly brands"
      ],
      tools: ["Figma", "Sketch", "InVision", "Hotjar", "Google Analytics", "Optimal Workshop"],
      link: "https://example.com",
      featured: true
    },
    {
      id: 3,
      title: "MediCare Pro Health Dashboard",
      category: "UI/UX Design",
      description: "Enterprise healthcare platform for medical professionals managing patient care and records",
      fullDescription: "A comprehensive healthcare management system designed for doctors, nurses, and administrative staff. The platform integrates patient records, appointment scheduling, prescription management, and telemedicine capabilities while maintaining HIPAA compliance.",
      image: "/api/placeholder/1200/800",
      tags: ["Dashboard", "Healthcare", "SaaS", "Enterprise"],
      client: "MediCare Systems",
      year: "2023",
      role: "Lead UX Designer",
      duration: "7 months",
      challenge: "Healthcare professionals needed faster access to critical patient information during consultations while navigating complex regulatory requirements (HIPAA, GDPR). The existing system required 8-10 clicks to access basic patient data.",
      solution: "Designed a role-based dashboard with customizable widgets and smart search. Implemented color-coded priority system for urgent cases. Created streamlined workflows that reduced critical path actions from 10 to 2 clicks. Added voice command functionality for hands-free operation.",
      results: [
        "70% reduction in information retrieval time",
        "40% increase in daily appointments capacity",
        "99.9% HIPAA compliance audit score",
        "Adopted by 500+ medical practices (50,000+ users)",
        "95% user satisfaction rate",
        "$5M in operational cost savings for clients"
      ],
      tools: ["Figma", "Adobe XD", "Balsamiq", "UserTesting", "Miro", "Zeplin"],
      link: "https://example.com",
      featured: true
    },
    {
      id: 4,
      title: "TravelHub Booking Platform",
      category: "Product Design",
      description: "AI-powered travel planning and booking platform with personalized recommendations",
      fullDescription: "Complete redesign of a travel booking platform that combines flights, hotels, and experiences. The platform uses machine learning to provide personalized recommendations based on user preferences, budget, and travel history.",
      image: "/api/placeholder/1200/800",
      tags: ["Web App", "Travel", "AI", "Booking"],
      client: "TravelHub International",
      year: "2023",
      role: "Product Design Lead",
      duration: "5 months",
      challenge: "Users were overwhelmed by options (10,000+ hotels, 500+ airlines) and abandoned bookings. Average completion rate was only 12%, well below industry standard of 25%.",
      solution: "Implemented AI-driven smart filters and recommendations. Simplified booking flow from 8 steps to 3. Added visual trip planning with map integration. Created comparison tools that highlight key differences rather than showing all data.",
      results: [
        "Booking completion rate increased to 55% (358% improvement)",
        "80% reduction in customer support inquiries",
        "Average booking value increased by 35%",
        "Won 'Best Travel App' at Digital Innovation Awards 2023",
        "1.2M+ bookings in first 6 months",
        "4.9/5 average user rating"
      ],
      tools: ["Figma", "Miro", "Optimal Workshop", "Maze", "Framer"],
      link: "https://example.com",
      featured: true
    },
    {
      id: 5,
      title: "Stellar Coffee Brand Identity",
      category: "Graphic Design",
      description: "Complete brand identity system for artisan coffee roastery including packaging and marketing",
      fullDescription: "Full brand identity development from concept to execution for a premium coffee roastery. The project included logo design, packaging system, brand guidelines, marketing collateral, and retail space design consultation.",
      image: "/api/placeholder/1200/800",
      tags: ["Branding", "Logo Design", "Packaging", "Print"],
      client: "Stellar Coffee Co.",
      year: "2024",
      role: "Brand Designer & Art Director",
      duration: "4 months",
      challenge: "New coffee roastery needed to establish a premium brand identity that could compete with established players in a saturated market. Budget constraints required a flexible system that could scale.",
      solution: "Created a sophisticated brand identity inspired by celestial navigation and coffee origins. Designed a modular packaging system that tells the story of each coffee's journey. Developed comprehensive brand guidelines that enable in-house production while maintaining quality.",
      results: [
        "300% increase in brand recognition within 6 months",
        "Featured in Design Milk, It's Nice That, and The Dieline",
        "Secured 50+ premium retail partnerships",
        "First production run sold out in 3 weeks",
        "Won Pentaward Bronze for packaging design",
        "Social media following grew from 0 to 45K in 4 months"
      ],
      tools: ["Illustrator", "Photoshop", "InDesign", "Dimension"],
      link: "https://example.com",
      featured: false
    },
    {
      id: 6,
      title: "FitTrack Fitness Platform",
      category: "UI/UX Design",
      description: "AI-powered fitness tracking app with personalized workout plans and social features",
      fullDescription: "Mobile fitness application that combines AI-powered workout recommendations with social accountability features. The app learns from user behavior to create personalized plans and connects users with similar fitness goals.",
      image: "/api/placeholder/1200/800",
      tags: ["Mobile App", "Fitness", "AI", "Social"],
      client: "FitTrack Technologies",
      year: "2023",
      role: "Senior UX/UI Designer",
      duration: "6 months",
      challenge: "Fitness app market is highly competitive with low retention rates. Most users abandon fitness apps within 30 days. Client needed differentiation and engagement strategy.",
      solution: "Designed gamified experience with achievements, streaks, and social challenges. Implemented AI coach that adapts to user progress. Created visual progress tracking that motivates continued use. Added community features for accountability.",
      results: [
        "78% retention rate at 3 months (vs. 15% industry average)",
        "1M+ downloads in first 6 months",
        "4.7/5 App Store rating from 150K+ reviews",
        "Featured by Apple in 'Health & Fitness' category",
        "Average 45-minute daily session time",
        "85% of users report achieving fitness goals"
      ],
      tools: ["Figma", "Principle", "Lottie", "ProtoPie"],
      link: "https://example.com",
      featured: true
    },
    {
      id: 7,
      title: "CloudSync Enterprise Dashboard",
      category: "Product Design",
      description: "Enterprise cloud storage and collaboration platform for distributed teams",
      fullDescription: "Comprehensive redesign of an enterprise cloud storage platform serving Fortune 500 companies. The platform needed to handle complex permissions, version control, and real-time collaboration while remaining intuitive for non-technical users.",
      image: "/api/placeholder/1200/800",
      tags: ["Enterprise", "SaaS", "Collaboration", "Cloud"],
      client: "CloudSync Corporation",
      year: "2023",
      role: "Principal Product Designer",
      duration: "9 months",
      challenge: "Enterprise users found the platform too complex for daily use, leading to poor adoption rates. IT administrators needed better control and analytics while end users needed simplicity.",
      solution: "Created dual interface: simplified view for end users, advanced view for power users and admins. Implemented smart search with natural language processing. Designed intuitive permission system with visual indicators. Added real-time collaboration indicators and conflict resolution.",
      results: [
        "User adoption increased from 45% to 92%",
        "Support tickets reduced by 65%",
        "Collaboration efficiency improved by 55%",
        "Client renewal rate increased to 98%",
        "Expanded to 500+ enterprise clients",
        "Generated $50M in annual recurring revenue"
      ],
      tools: ["Figma", "Adobe XD", "Miro", "Maze", "Confluence"],
      link: "https://example.com",
      featured: false
    },
    {
      id: 8,
      title: "EduLearn Online Learning Platform",
      category: "UI/UX Design",
      description: "Interactive online learning platform with live classes and AI-powered learning paths",
      fullDescription: "Complete platform design for an online education startup offering live classes, recorded content, and personalized learning paths. The platform serves students, teachers, and parents with different needs and access levels.",
      image: "/api/placeholder/1200/800",
      tags: ["EdTech", "Web App", "Learning", "Video"],
      client: "EduLearn Global",
      year: "2024",
      role: "Lead Product Designer",
      duration: "7 months",
      challenge: "Creating an engaging learning experience that works for different age groups (K-12) while providing robust tools for teachers and visibility for parents. Needed to work reliably on low-bandwidth connections.",
      solution: "Designed age-appropriate interfaces with gamification for younger students and professional tools for older ones. Created adaptive streaming that adjusts to bandwidth. Implemented progress tracking dashboard for parents. Built tools for teachers to create interactive content without coding.",
      results: [
        "100K+ active students in first year",
        "95% class completion rate",
        "Student engagement time 3x higher than competitors",
        "Featured in EdTech Breakthrough Awards",
        "Expanded to 15 countries",
        "4.8/5 rating from students and parents"
      ],
      tools: ["Figma", "Principle", "Adobe XD", "Miro", "UserTesting"],
      link: "https://example.com",
      featured: false
    },
    {
      id: 9,
      title: "RetailPro Point of Sale System",
      category: "Product Design",
      description: "Modern POS system for retail businesses with inventory management and analytics",
      fullDescription: "Complete redesign of a point-of-sale system used by retail businesses. The system integrates payment processing, inventory management, customer relationship management, and business analytics.",
      image: "/api/placeholder/1200/800",
      tags: ["Retail", "POS", "Enterprise", "Mobile"],
      client: "RetailPro Solutions",
      year: "2023",
      role: "Senior Product Designer",
      duration: "5 months",
      challenge: "Retail staff needed to process transactions quickly during busy periods while the system also needed to support complex inventory management. Previous system required extensive training.",
      solution: "Designed a dual-mode interface: express mode for quick transactions, detailed mode for inventory and management. Created visual inventory system with color-coded alerts. Implemented one-handed mobile operation for floor staff. Added offline mode for reliability.",
      results: [
        "Transaction time reduced by 40%",
        "Training time reduced from 3 days to 4 hours",
        "Adopted by 1,200+ retail stores",
        "Inventory accuracy improved by 85%",
        "Customer checkout satisfaction increased to 4.6/5",
        "Generated $12M in software licenses"
      ],
      tools: ["Figma", "Sketch", "InVision", "Zeplin"],
      link: "https://example.com",
      featured: false
    },
    {
      id: 10,
      title: "PropTech Real Estate Platform",
      category: "Product Design",
      description: "Revolutionary real estate platform with VR tours and AI-powered property matching",
      fullDescription: "Innovative real estate platform that combines traditional property listings with virtual reality tours, AI-powered matching, and integrated mortgage calculators. Serves buyers, sellers, and real estate agents.",
      image: "/api/placeholder/1200/800",
      tags: ["Real Estate", "VR", "AI", "Web App"],
      client: "PropTech Innovations",
      year: "2024",
      role: "Lead UX/UI Designer",
      duration: "8 months",
      challenge: "Real estate searches are time-consuming with users spending 15+ hours visiting properties that don't meet their needs. Traditional listings don't provide enough information for decision-making.",
      solution: "Designed immersive VR tour system integrated with detailed property data. Created AI matching algorithm that learns from user behavior. Implemented financial calculators and neighborhood insights. Built agent dashboard for easy listing management.",
      results: [
        "VR tours reduced physical visits by 70%",
        "Property search time reduced from 15 to 4 hours average",
        "15,000+ properties listed in first 6 months",
        "Won PropTech Innovation Award 2024",
        "Average time to sale reduced by 45%",
        "$250M in property transactions facilitated"
      ],
      tools: ["Figma", "Unity", "Blender", "Adobe XD", "Miro"],
      link: "https://example.com",
      featured: true
    }
  ];

    const skills: Skill[] = [
    { name: "UI Design", icon: <Palette className="w-6 h-6" />, level: 95 },
    { name: "UX Research", icon: <Users className="w-6 h-6" />, level: 90 },
    { name: "Product Design", icon: <Box className="w-6 h-6" />, level: 92 },
    { name: "Prototyping", icon: <Zap className="w-6 h-6" />, level: 88 },
    { name: "Visual Design", icon: <PenTool className="w-6 h-6" />, level: 94 },
    { name: "Interaction Design", icon: <MousePointer className="w-6 h-6" />, level: 87 }
  ];

  const tools = [
    { name: "Figma", icon: <Figma className="w-8 h-8" /> },
    { name: "Adobe XD", icon: <Layout className="w-8 h-8" /> },
    { name: "Sketch", icon: <Layers className="w-8 h-8" /> },
    { name: "Illustrator", icon: <PenTool className="w-8 h-8" /> },
    { name: "Photoshop", icon: <Palette className="w-8 h-8" /> },
    { name: "After Effects", icon: <Zap className="w-8 h-8" /> }
  ];


  const testimonials: Testimonial[] = [
    {
      name: "Sarah Chen",
      role: "CEO",
      company: "FinanceFlow Inc.",
      content: "Working with Alex was transformative for our business. The banking app redesign not only exceeded our expectations but fundamentally changed how our customers interact with their finances. The attention to detail, user empathy, and strategic thinking demonstrated throughout the project was exceptional. Our user satisfaction scores have never been higher.",
      rating: 5,
      image: "SC",
      projectWorked: "FinanceFlow Banking App"
    },
    {
      name: "Michael Rodriguez",
      role: "Product Director",
      company: "EcoShop Global",
      content: "Alex brought a level of professionalism and creativity that's rare in our industry. The sustainable marketplace design perfectly balances commerce with education. The Eco Score system was a game-changer that our users absolutely love. Beyond the beautiful design, the strategic insights and data-driven approach resulted in measurable business growth.",
      rating: 5,
      image: "MR",
      projectWorked: "EcoShop Sustainable Marketplace"
    },
    {
      name: "Dr. Emily Watson",
      role: "Chief Medical Officer",
      company: "MediCare Systems",
      content: "As a physician, I've used countless healthcare software systems. Alex's design for MediCare Pro is the first that truly understands the clinical workflow. The interface is intuitive, efficient, and actually helps us provide better patient care. The reduction in clicks and improved information hierarchy has saved us countless hours. Simply outstanding work.",
      rating: 5,
      image: "EW",
      projectWorked: "MediCare Health Dashboard"
    },
    {
      name: "James Park",
      role: "VP of Product",
      company: "TravelHub International",
      content: "The TravelHub redesign was a masterclass in product design. Alex didn't just make things look pretty—every decision was backed by research and data. The AI-powered recommendations and simplified booking flow resulted in a dramatic increase in conversions. The collaborative process was smooth, and the final product exceeded all our KPIs.",
      rating: 5,
      image: "JP",
      projectWorked: "TravelHub Booking Platform"
    },
    {
      name: "Lisa Thompson",
      role: "Founder",
      company: "Stellar Coffee Co.",
      content: "Alex created a brand identity that perfectly captures our vision and values. The attention to detail in every touchpoint—from packaging to digital presence—is remarkable. The brand has helped us punch above our weight and compete with established players. We've received countless compliments from customers and industry professionals alike.",
      rating: 5,
      image: "LT",
      projectWorked: "Stellar Coffee Brand Identity"
    }
  ];

  const awards: Award[] = [
    {
      title: "Best Mobile App Design",
      organization: "Awwwards",
      year: "2024",
      category: "Digital Design"
    },
    {
      title: "Site of the Day",
      organization: "Awwwards",
      year: "2024",
      category: "Web Design"
    },
    {
      title: "UX Design Award of Excellence",
      organization: "IxDA (Interaction Design Association)",
      year: "2024",
      category: "User Experience"
    },
    {
      title: "Red Dot Design Award",
      organization: "Red Dot",
      year: "2023",
      category: "Communication Design"
    },
    {
      title: "Best Product Design",
      organization: "Digital Innovation Awards",
      year: "2023",
      category: "Product Design"
    },
    {
      title: "CSS Design Awards - UX Design",
      organization: "CSS Design Awards",
      year: "2023",
      category: "User Experience"
    },
    {
      title: "FWA of the Day",
      organization: "The FWA",
      year: "2023",
      category: "Web Design"
    },
    {
      title: "Pentaward Bronze",
      organization: "Pentawards",
      year: "2024",
      category: "Packaging Design"
    }
  ];

  const publications: Publication[] = [
    {
      title: "The Future of AI in Product Design: Opportunities and Challenges",
      platform: "UX Collective (Medium)",
      date: "Feb 2024",
      type: "Article",
      link: "#"
    },
    {
      title: "Designing for Accessibility: Beyond Compliance",
      platform: "Smashing Magazine",
      date: "Jan 2024",
      type: "Article",
      link: "#"
    },
    {
      title: "Building Design Systems That Scale",
      platform: "A List Apart",
      date: "Nov 2023",
      type: "Article",
      link: "#"
    },
    {
      title: "User Research Methods for Enterprise Products",
      platform: "Nielsen Norman Group",
      date: "Sept 2023",
      type: "Guest Post",
      link: "#"
    },
    {
      title: "The Psychology of Micro-interactions",
      platform: "InVision Design Blog",
      date: "Aug 2023",
      type: "Article",
      link: "#"
    },
    {
      title: "Designing for Sustainable User Behavior",
      platform: "UX Design Conference 2023",
      date: "June 2023",
      type: "Conference Talk",
      link: "#"
    }
  ];

  const categories = ['All', 'UI/UX Design', 'Product Design', 'Graphic Design'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user interfaces backed by thorough research and user testing",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing", "Interface Design"]
    },
    {
      icon: <Box className="w-8 h-8" />,
      title: "Product Design",
      description: "End-to-end product design from concept to launch with focus on user needs and business goals",
      features: ["Product Strategy", "User Flows", "Information Architecture", "Interaction Design", "Design Systems"]
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Brand Identity",
      description: "Crafting memorable brand identities that resonate with your audience and stand out",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Packaging Design", "Marketing Collateral"]
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Web Design",
      description: "Responsive website design that combines aesthetics with functionality and performance",
      features: ["Responsive Design", "Landing Pages", "Web Applications", "Design Systems", "Front-end Collaboration"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Design",
      description: "Native iOS and Android designs optimized for mobile-first experiences",
      features: ["iOS Design", "Android Design", "App Prototyping", "Motion Design", "App Icons"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Design Consulting",
      description: "Strategic design consultation to help teams build better products and processes",
      features: ["Design Audits", "Team Training", "Process Optimization", "Design System Setup", "UX Strategy"]
    }
  ];

  const stats = [
    { number: "150+", label: "Projects Completed", icon: <Target className="w-6 h-6" /> },
    { number: "50+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "12+", label: "Awards Won", icon: <Award className="w-6 h-6" /> },
    { number: "6+", label: "Years Experience", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Heart className="w-6 h-6" /> },
    { number: "2M+", label: "Users Reached", icon: <Globe className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/98 backdrop-blur-md border-b border-gray-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">Alex Morgan</div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
              {['home', 'about', 'work', 'services', 'testimonials', 'recognition', 'insights', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 font-medium ${
                    activeSection === section 
                      ? 'text-blue-600' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {section === 'recognition' ? 'Awards' : section}
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-lg">
                <Download className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="px-6 py-4 space-y-3">
              {['home', 'about', 'work', 'services', 'testimonials', 'recognition', 'insights', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-3 text-gray-600 hover:text-gray-900 capitalize font-medium hover:bg-gray-50 rounded-lg transition-all"
                >
                  {section === 'recognition' ? 'Awards' : section}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-medium"
              >
                Get In Touch
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                  <Sparkles className="w-4 h-4" />
                  <span>Available for select projects</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Award-Winning
                  <span className="block text-blue-600">Product Designer</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                  I craft exceptional digital experiences that solve complex problems and delight users. 
                  Specializing in UI/UX design, product strategy, and design systems with 6+ years of proven success.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 py-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">150+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">12+</div>
                  <div className="text-sm text-gray-600">Awards</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">2M+</div>
                  <div className="text-sm text-gray-600">Users</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('work')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 group"
                >
                  <span>View My Work</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Contact Me
                </button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                {[
                  { icon: <Dribbble className="w-5 h-5" />, label: "Dribbble" },
                  { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
                  { icon: <Github className="w-5 h-5" />, label: "GitHub" },
                  { icon: <Twitter className="w-5 h-5" />, label: "Twitter" }
                ].map((social, index) => (
                  <button
                    key={index}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full h-[600px] bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-64 h-64 bg-white rounded-full shadow-2xl flex items-center justify-center mb-6 mx-auto">
                      <Layout className="w-32 h-32 text-blue-600" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-gray-900 font-bold text-2xl">Design Excellence</div>
                      <div className="text-gray-600">Proven Track Record</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute top-10 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 animate-float">
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-yellow-500" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">12+</div>
                    <div className="text-sm text-gray-600">Design Awards</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-10 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 animate-float" style={{animationDelay: '1s'}}>
                <div className="flex items-center space-x-3">
                  <Heart className="w-8 h-8 text-red-500" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">98%</div>
                    <div className="text-sm text-gray-600">Satisfaction Rate</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 animate-float" style={{animationDelay: '2s'}}>
                <div className="flex items-center space-x-3">
                  <Star className="w-8 h-8 text-blue-500" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">4.9</div>
                    <div className="text-sm text-gray-600">Average Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="flex justify-center mb-2 text-blue-200">
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-bold mb-1">{stat.number}</div>
                <div className="text-sm text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                  About Me
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                  Transforming Ideas Into
                  <span className="block text-blue-600">Exceptional Experiences</span>
                </h2>
                <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
              </div>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  I'm Alex Morgan, an award-winning product designer with over 6 years of experience creating 
                  digital products that users love. My work has reached over 2 million users and won recognition 
                  from leading design organizations including Awwwards, Red Dot, and IxDA.
                </p>
                <p>
                  My approach combines deep user research, strategic thinking, and meticulous attention to detail. 
                  I specialize in transforming complex problems into intuitive solutions that drive business results 
                  while delighting users. From fintech to healthcare, e-commerce to education, I've helped companies 
                  across diverse industries achieve their product goals.
                </p>
                <p>
                  Beyond client work, I'm passionate about contributing to the design community. I write regularly 
                  about design best practices, speak at conferences, and mentor aspiring designers. When I'm not 
                  designing, you'll find me exploring new design trends, contributing to open-source design systems, 
                  or enjoying photography and urban sketching.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-4">
                {[
                  { icon: <Lightbulb className="w-6 h-6" />, text: "Strategic Thinker" },
                  { icon: <Users className="w-6 h-6" />, text: "User Advocate" },
                  { icon: <Zap className="w-6 h-6" />, text: "Problem Solver" },
                  { icon: <Target className="w-6 h-6" />, text: "Results Driven" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-blue-50 rounded-xl p-4">
                    <div className="text-blue-600">{item.icon}</div>
                    <span className="text-gray-900 font-semibold">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-8">
              {/* Certifications */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                  <Award className="w-6 h-6 text-blue-600" />
                  <span>Certifications & Training</span>
                </h3>
                <div className="space-y-4">
                  {[
                    'Google UX Design Professional Certificate',
                    'Nielsen Norman Group UX Certification',
                    'Interaction Design Foundation Master Class',
                    'Adobe Certified Expert (ACE)',
                    'Accessibility Specialist (IAAP)',
                    'Certified Scrum Product Owner (CSPO)'
                  ].map((cert, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Skills */}
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                  <Settings className="w-6 h-6 text-blue-600" />
                  <span>Design Tools Expertise</span>
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { name: "Figma", level: "Expert" },
                    { name: "Sketch", level: "Expert" },
                    { name: "Adobe XD", level: "Advanced" },
                    { name: "Illustrator", level: "Expert" },
                    { name: "Photoshop", level: "Advanced" },
                    { name: "After Effects", level: "Intermediate" },
                    { name: "Principle", level: "Advanced" },
                    { name: "Framer", level: "Advanced" },
                    { name: "InVision", level: "Expert" }
                  ].map((tool, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-2 mx-auto">
                        <Layers className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="font-semibold text-gray-900 text-sm">{tool.name}</div>
                      <div className="text-xs text-gray-500">{tool.level}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Featured Projects
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Award-Winning Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A curated selection of projects that showcase design excellence and measurable impact
            </p>
            <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {featuredProjects.slice(0, 4).map((project) => (
              <div 
                key={project.id} 
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => openProjectModal(project)}
              >
                <div className="relative h-80 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Monitor className="w-32 h-32 text-blue-600/30" />
                  </div>
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/90 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="text-white text-center space-y-4">
                      <Eye className="w-12 h-12 mx-auto" />
                      <p className="text-lg font-semibold">View Full Case Study</p>
                    </div>
                  </div>
                  {/* Award Badge */}
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-2 shadow-lg">
                    <Award className="w-4 h-4" />
                    <span>Award Winner</span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                    <span className="text-gray-500 text-sm font-medium">{project.year}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  
                  {/* Key Results */}
                  <div className="grid grid-cols-2 gap-4 mb-4 p-4 bg-blue-50 rounded-xl">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">{project.results[0].split(' ')[0]}</div>
                      <div className="text-xs text-gray-600">{project.results[0].split(' ').slice(1).join(' ')}</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">{project.results[1].split(' ')[0]}</div>
                      <div className="text-xs text-gray-600">{project.results[1].split(' ').slice(1).join(' ')}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:gap-3 transition-all">
                    <span>View Full Case Study</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button 
              onClick={() => scrollToSection('work')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Full Work Section */}
      <section id="work" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Portfolio
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Complete Project Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore my full portfolio of design work spanning UI/UX, product design, and brand identity
            </p>
            <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mt-6"></div>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center space-x-4 mb-16 flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100"
                onClick={() => openProjectModal(project)}
              >
                <div className="relative h-64 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Layout className="w-24 h-24 text-blue-600/30" />
                  </div>
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/90 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="text-white text-center space-y-3">
                      <Eye className="w-10 h-10 mx-auto" />
                      <p className="text-sm font-semibold">View Details</p>
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-3 right-3 bg-yellow-500 text-white p-2 rounded-full shadow-lg">
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                      {project.category}
                    </span>
                    <span className="text-gray-500 text-xs">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What I Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive design services tailored to your product and business needs
            </p>
            <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Skills Section */}
      <section id="skills" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Skills & Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A diverse skill set built through years of experience and continuous learning
            </p>
            <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Core Competencies</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="text-blue-600">{skill.icon}</div>
                        <span className="font-semibold text-gray-900">{skill.name}</span>
                      </div>
                      <span className="text-gray-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Design Tools</h3>
              <div className="grid grid-cols-3 gap-6">
                {tools.map((tool, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                  >
                    <div className="text-blue-600 mb-3 flex justify-center">{tool.icon}</div>
                    <div className="font-semibold text-gray-900 text-sm">{tool.name}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <h4 className="font-bold text-gray-900 text-lg mb-4">Additional Skills</h4>
                <div className="flex flex-wrap gap-3">
                  {['Responsive Design', 'Design Systems', 'User Research', 'Wireframing', 
                    'Prototyping', 'HTML/CSS', 'Design Thinking', 'Agile/Scrum', 
                    'Accessibility', 'Motion Design'].map((skill, index) => (
                    <span key={index} className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              My Approach
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Design Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology for creating exceptional products from concept to launch
            </p>
            <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Research & Discovery",
                description: "Deep dive into user needs, business goals, and market landscape through comprehensive research methods",
                icon: <Users className="w-8 h-8" />,
                details: ["User Interviews", "Competitive Analysis", "Stakeholder Workshops", "Data Analysis"]
              },
              {
                step: "02",
                title: "Strategy & Planning",
                description: "Define product strategy, information architecture, and create user flows based on research insights",
                icon: <Layers className="w-8 h-8" />,
                details: ["User Personas", "Journey Mapping", "Information Architecture", "Feature Prioritization"]
              },
              {
                step: "03",
                title: "Design & Prototype",
                description: "Create wireframes, high-fidelity designs, and interactive prototypes to bring concepts to life",
                icon: <PenTool className="w-8 h-8" />,
                details: ["Wireframing", "Visual Design", "Prototyping", "Design Systems"]
              },
              {
                step: "04",
                title: "Test & Iterate",
                description: "Validate designs through usability testing and iterate based on feedback and data",
                icon: <Zap className="w-8 h-8" />,
                details: ["Usability Testing", "A/B Testing", "Analytics Review", "Continuous Improvement"]
              }
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 border border-blue-100">
                  <div className="text-6xl font-bold text-blue-100 mb-4">{process.step}</div>
                  <div className="text-blue-600 mb-4">{process.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{process.description}</p>
                  <ul className="space-y-2">
                    {process.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200 z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Client Testimonials
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              What Clients Say
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Hear from the leaders and teams I've had the privilege to work with
            </p>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-12 shadow-2xl">
              <Quote className="w-16 h-16 text-blue-600 mb-6" />
              <p className="text-2xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[currentTestimonial].content}"
              </p>
              
              <div className="flex items-center justify-between border-t border-gray-100 pt-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonials[currentTestimonial].image}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</div>
                    <div className="text-gray-600">{testimonials[currentTestimonial].role}</div>
                    <div className="text-sm text-gray-500">{testimonials[currentTestimonial].company}</div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="flex mb-2">
                    {Array.from({ length: testimonials[currentTestimonial].rating }, (_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-sm text-gray-500">Project: {testimonials[currentTestimonial].projectWorked}</div>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section id="recognition" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Recognition
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Awards & Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognition from leading design organizations and industry publications
            </p>
            <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {awards.map((award, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border-2 border-yellow-200 hover:shadow-lg transition-shadow">
                <Award className="w-10 h-10 text-yellow-600 mb-4" />
                <div className="text-sm text-gray-500 mb-2">{award.year}</div>
                <h3 className="font-bold text-gray-900 mb-2">{award.title}</h3>
                <p className="text-sm text-gray-600">{award.organization}</p>
                <div className="mt-4 text-xs text-gray-500 bg-white px-3 py-1 rounded-full inline-block">
                  {award.category}
                </div>
              </div>
            ))}
          </div>

          {/* Featured In */}
          <div className="bg-gray-50 rounded-3xl p-12">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Featured In</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {['Awwwards', 'CSS Design Awards', 'Dribbble', 'Behance', 'Design Milk', 'The FWA', 'Smashing Magazine', 'A List Apart'].map((publication, index) => (
                <div key={index} className="flex items-center justify-center p-6 bg-white rounded-xl">
                  <div className="font-bold text-gray-400">{publication}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Insights & Writing
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Latest Articles & Talks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sharing knowledge and insights from years of design practice
            </p>
            <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications.map((pub, index) => (
              <a 
                key={index}
                href={pub.link}
                className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group border border-gray-100"
              >
                <div className="flex items-center space-x-2 mb-4">
                  {pub.type === 'Conference Talk' ? (
                    <PlayCircle className="w-5 h-5 text-red-500" />
                  ) : (
                    <FileText className="w-5 h-5 text-blue-600" />
                  )}
                  <span className="text-sm text-gray-500">{pub.type}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {pub.title}
                </h3>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">{pub.platform}</span>
                  <span className="text-gray-500">{pub.date}</span>
                </div>
                <div className="mt-4 flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                  <span>Read More</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center space-x-2">
              <BookOpen className="w-5 h-5" />
              <span>View All Articles</span>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-600">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-8">
            Let's Connect
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in hearing about new projects and opportunities. Whether you have a 
            question or just want to say hi, feel free to reach out!
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: <Mail className="w-8 h-8" />, title: "Email", info: "alex.morgan@design.com", link: "mailto:alex.morgan@design.com" },
              { icon: <MessageSquare className="w-8 h-8" />, title: "Schedule Call", info: "30-min consultation", link: "#" },
              { icon: <Globe className="w-8 h-8" />, title: "Location", info: "San Francisco, CA", link: "#" }
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="mb-4 text-blue-200 group-hover:scale-110 transition-transform">{contact.icon}</div>
                <h3 className="font-bold text-lg mb-2">{contact.title}</h3>
                <p className="text-blue-100 text-sm">{contact.info}</p>
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a 
              href="mailto:alex.morgan@design.com"
              className="bg-white text-blue-600 px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-2xl"
            >
              <Mail className="w-6 h-6" />
              <span>Send Email</span>
            </a>
            <button className="border-2 border-white text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2">
              <Download className="w-6 h-6" />
              <span>Download Resume</span>
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            {[
              { icon: <Dribbble className="w-6 h-6" />, label: "Dribbble", link: "#" },
              { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", link: "#" },
              { icon: <Github className="w-6 h-6" />, label: "GitHub", link: "#" },
              { icon: <Twitter className="w-6 h-6" />, label: "Twitter", link: "#" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">A</span>
                </div>
                <div className="text-2xl font-bold">Alex Morgan</div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Award-winning product designer creating exceptional digital experiences that 
                solve real problems and delight users. Based in San Francisco, working globally.
              </p>
              <div className="flex space-x-4">
                {[<Dribbble key="d" />, <Linkedin key="l" />, <Github key="g" />, <Twitter key="t" />].map((icon, index) => (
                  <button key={index} className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                    {React.cloneElement(icon, { className: "w-5 h-5" })}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {['About', 'Work', 'Services', 'Process', 'Contact'].map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => scrollToSection(link.toLowerCase())} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-3 text-gray-400">
                {['UI/UX Design', 'Product Design', 'Brand Identity', 'Web Design', 'Mobile Design'].map((service, index) => (
                  <li key={index} className="hover:text-white transition-colors cursor-pointer">{service}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Alex Morgan. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, index) => (
                <button key={index} className="text-gray-400 hover:text-white transition-colors">
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 overflow-y-auto">
          <div className="min-h-screen px-6 py-12 flex items-center justify-center">
            <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-100 px-8 py-6 flex justify-between items-center z-10 rounded-t-3xl">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">{selectedProject.title}</h3>
                  <p className="text-gray-600 mt-1">{selectedProject.client}</p>
                </div>
                <button 
                  onClick={closeProjectModal}
                  className="text-gray-600 hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              <div className="p-12 space-y-12">
                {/* Project Meta */}
                <div className="grid md:grid-cols-4 gap-8 bg-blue-50 rounded-2xl p-8">
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Client</div>
                    <div className="font-bold text-gray-900 text-lg">{selectedProject.client}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Role</div>
                    <div className="font-bold text-gray-900 text-lg">{selectedProject.role}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Duration</div>
                    <div className="font-bold text-gray-900 text-lg">{selectedProject.duration}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Year</div>
                    <div className="font-bold text-gray-900 text-lg">{selectedProject.year}</div>
                  </div>
                </div>

                {/* Hero Image */}
                <div className="relative h-[500px] bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center overflow-hidden">
                  <Monitor className="w-64 h-64 text-blue-600/20" />
                </div>

                {/* Overview */}
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-3">
                    <BarChart className="w-6 h-6 text-blue-600" />
                    <span>Project Overview</span>
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">{selectedProject.fullDescription}</p>
                </div>

                {/* Challenge */}
                <div className="bg-red-50 rounded-2xl p-8 border-l-4 border-red-500">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h4>
                  <p className="text-gray-700 leading-relaxed text-lg">{selectedProject.challenge}</p>
                </div>

                {/* Solution */}
                <div className="bg-green-50 rounded-2xl p-8 border-l-4 border-green-500">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">The Solution</h4>
                  <p className="text-gray-700 leading-relaxed text-lg">{selectedProject.solution}</p>
                </div>

                {/* Results */}
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                    <span>Results & Impact</span>
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    {selectedProject.results.map((result, index) => (
                      <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 flex items-start space-x-4 border border-blue-200">
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-gray-900 font-semibold text-lg">{result}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                    <Settings className="w-6 h-6 text-blue-600" />
                    <span>Tools & Technologies</span>
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tools.map((tool, index) => (
                      <span key={index} className="bg-gray-100 text-gray-800 px-6 py-3 rounded-xl font-semibold text-lg border border-gray-200">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                {selectedProject.link && (
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
                    <h4 className="text-3xl font-bold text-white mb-4">Interested in Similar Results?</h4>
                    <p className="text-blue-100 mb-8 text-lg">Let's discuss how I can help transform your product</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a 
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all"
                      >
                        <span>View Live Project</span>
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                      <button 
                        onClick={() => {
                          closeProjectModal();
                          scrollToSection('contact');
                        }}
                        className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-all"
                      >
                        Get In Touch
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}