import React, { useState } from 'react';
import {
  Code, Database, Cloud, Brain, Server, Shield, 
  Laptop, Smartphone, Network, Layers, CircuitBoard, 
  Cpu, Lock, Globe, Award, BookOpen, Users, TrendingUp,
  LineChart, Rocket, Target, Briefcase, Coffee, AlertTriangle,
  BookMarked, GraduationCap, DollarSign, Clock, CheckCircle,
  Building, MessageSquare, Zap, Settings
} from 'lucide-react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CareerPath = () => {
  const [selectedPath, setSelectedPath] = useState(null);
  const [hoveredLevel, setHoveredLevel] = useState(null);
  const [activeTab, setActiveTab] = useState('paths');

  const careerPaths = [
    {
      id: 'fullstack',
      title: 'Full Stack Development',
      icon: <Code className="w-6 h-6" />,
      description: 'Master both frontend and backend development',
      color: 'bg-blue-500',
      jobRoles: ['Full Stack Developer', 'Software Engineer', 'Web Application Architect'],
      companies: ['Google', 'Amazon', 'Microsoft', 'Meta'],
      levels: [
        {
          level: 'Beginner',
          duration: '6-8 months',
          skills: ['HTML/CSS', 'JavaScript Basics', 'Git', 'Basic SQL'],
          courses: ['Web Development Fundamentals', 'JavaScript Essentials'],
          projects: ['Personal Portfolio', 'Todo Application'],
          certifications: ['Web Developer Certification'],
          salary: '$60,000 - $80,000'
        },
        {
          level: 'Intermediate',
          duration: '8-12 months',
          skills: ['React/Vue', 'Node.js', 'REST APIs', 'MongoDB'],
          courses: ['Advanced Frontend Development', 'Backend with Node.js'],
          projects: ['E-commerce Platform', 'Social Media Clone'],
          certifications: ['MERN Stack Certification'],
          salary: '$80,000 - $120,000'
        },
        {
          level: 'Advanced',
          duration: '12+ months',
          skills: ['System Design', 'Cloud Services', 'DevOps', 'Performance Optimization'],
          courses: ['Full Stack Architecture', 'Cloud Development'],
          projects: ['Enterprise Application', 'Microservices Architecture'],
          certifications: ['AWS Solutions Architect'],
          salary: '$120,000 - $180,000'
        }
      ]
    },
    {
      id: 'ai',
      title: 'AI & Machine Learning',
      icon: <Brain className="w-6 h-6" />,
      description: 'Build intelligent systems and ML models',
      color: 'bg-purple-500',
      jobRoles: ['ML Engineer', 'AI Researcher', 'Data Scientist'],
      companies: ['OpenAI', 'DeepMind', 'Tesla', 'IBM'],
      levels: [
        {
          level: 'Beginner',
          duration: '6-8 months',
          skills: ['Python', 'Statistics', 'Data Analysis', 'NumPy/Pandas'],
          courses: ['Python for Data Science', 'Statistics Fundamentals'],
          projects: ['Data Analysis Portfolio', 'Basic ML Models'],
          certifications: ['Data Science Fundamentals'],
          salary: '$70,000 - $90,000'
        },
        {
          level: 'Intermediate',
          duration: '8-12 months',
          skills: ['Scikit-learn', 'TensorFlow', 'Deep Learning Basics', 'Computer Vision'],
          courses: ['Machine Learning Engineering', 'Deep Learning Fundamentals'],
          projects: ['Image Classification System', 'Predictive Analytics Tool'],
          certifications: ['TensorFlow Developer Certificate'],
          salary: '$90,000 - $140,000'
        },
        {
          level: 'Advanced',
          duration: '12+ months',
          skills: ['MLOps', 'Advanced Deep Learning', 'NLP', 'Reinforcement Learning'],
          courses: ['Advanced AI Systems', 'MLOps & Deployment'],
          projects: ['Language Model', 'Autonomous System'],
          certifications: ['Google Cloud ML Engineer'],
          salary: '$140,000 - $200,000'
        }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: <Shield className="w-6 h-6" />,
      description: 'Protect systems and networks from threats',
      color: 'bg-red-500',
      jobRoles: ['Security Engineer', 'Penetration Tester', 'Security Architect'],
      companies: ['Crowdstrike', 'Palo Alto Networks', 'FireEye'],
      levels: [
        {
          level: 'Beginner',
          duration: '6-8 months',
          skills: ['Network Fundamentals', 'Linux', 'Security Basics', 'Cryptography'],
          courses: ['Network Security Basics', 'Cyber Defense'],
          projects: ['Network Scanner', 'Security Assessment'],
          certifications: ['CompTIA Security+'],
          salary: '$65,000 - $85,000'
        },
        {
          level: 'Intermediate',
          duration: '8-12 months',
          skills: ['Penetration Testing', 'Malware Analysis', 'Incident Response'],
          courses: ['Ethical Hacking', 'Digital Forensics'],
          projects: ['Vulnerability Scanner', 'Incident Response Plan'],
          certifications: ['CEH (Certified Ethical Hacker)'],
          salary: '$85,000 - $130,000'
        },
        {
          level: 'Advanced',
          duration: '12+ months',
          skills: ['Advanced Threat Hunting', 'Security Architecture', 'Zero Trust'],
          courses: ['Advanced Security Operations', 'Cloud Security'],
          projects: ['Security Operations Center', 'Zero Trust Implementation'],
          certifications: ['CISSP'],
          salary: '$130,000 - $190,000'
        }
      ]
    },
    {
      id: 'devops',
      title: 'DevOps Engineering',
      icon: <Settings className="w-6 h-6" />,
      description: 'Streamline development and operations',
      color: 'bg-green-500',
      jobRoles: ['DevOps Engineer', 'Site Reliability Engineer', 'Platform Engineer'],
      companies: ['Netflix', 'Uber', 'Airbnb', 'Spotify'],
      levels: [
        {
          level: 'Beginner',
          duration: '6-8 months',
          skills: ['Linux', 'Shell Scripting', 'Git', 'Docker'],
          courses: ['DevOps Fundamentals', 'Container Basics'],
          projects: ['CI/CD Pipeline', 'Container Deployment'],
          certifications: ['Docker Certified Associate'],
          salary: '$70,000 - $90,000'
        },
        {
          level: 'Intermediate',
          duration: '8-12 months',
          skills: ['Kubernetes', 'Ansible', 'Terraform', 'Monitoring'],
          courses: ['Infrastructure as Code', 'Container Orchestration'],
          projects: ['Kubernetes Cluster', 'Infrastructure Automation'],
          certifications: ['Kubernetes Administrator (CKA)'],
          salary: '$90,000 - $140,000'
        },
        {
          level: 'Advanced',
          duration: '12+ months',
          skills: ['Service Mesh', 'GitOps', 'SRE Practices', 'Cloud Native'],
          courses: ['Advanced DevOps Practices', 'SRE Fundamentals'],
          projects: ['Service Mesh Implementation', 'Platform Engineering'],
          certifications: ['AWS DevOps Professional'],
          salary: '$140,000 - $200,000'
        }
      ]
    }
  ];

  const industryInsights = [
    {
      title: 'Market Trends',
      icon: <LineChart className="w-6 h-6 text-blue-500" />,
      content: 'Growing demand for cloud-native skills and AI expertise'
    },
    {
      title: 'Top Employers',
      icon: <Building className="w-6 h-6 text-blue-500" />,
      content: 'FAANG companies, startups, and enterprise organizations'
    },
    {
      title: 'Growth Areas',
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
      content: 'AI/ML, Cybersecurity, Cloud Computing, DevOps'
    }
  ];

  const PathCard = ({ path }) => (
    <Card 
      className={`cursor-pointer transform transition-all duration-300 hover:scale-105 ${
        selectedPath === path.id ? 'ring-2 ring-blue-500' : ''
      }`}
      onClick={() => setSelectedPath(path.id)}
    >
      <CardContent className="p-6">
        <div className={`${path.color} w-12 h-12 rounded-full flex items-center justify-center text-white mb-4`}>
          {path.icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{path.title}</h3>
        <p className="text-gray-600 mb-4">{path.description}</p>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">Top roles: {path.jobRoles.join(', ')}</span>
          </div>
          <div className="flex items-center gap-2">
            <Building className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">Top companies: {path.companies.join(', ')}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const LevelProgression = ({ levels }) => {
    const [hoveredLevel, setHoveredLevel] = useState(null);
  
    return (
      <div className="mt-8">
        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2" />
          <div className="flex justify-between relative">
            {levels.map((level, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredLevel(index)}
                onMouseLeave={() => setHoveredLevel(null)}
              >
                <div
                  className={`
                    w-8 h-8 rounded-full 
                    ${hoveredLevel === index ? 'bg-blue-600' : 'bg-blue-500'}
                    flex items-center justify-center text-white relative z-10
                    transition-all duration-300 
                    ${hoveredLevel === index ? 'scale-125' : ''}
                  `}
                >
                  {index + 1}
                </div>
                
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="font-medium">{level.level}</span>
                </div>
  
                {hoveredLevel === index && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-96 bg-white p-6 rounded-lg shadow-xl z-20">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Target className="w-5 h-5 text-blue-500" />
                      {level.level}
                    </h4>
                    
                    <div className="space-y-4">
                      <InfoSection
                        icon={<Clock className="w-4 h-4 text-blue-500" />}
                        title="Estimated Duration"
                        content={<p className="text-sm ml-6">{level.duration}</p>}
                      />
  
                      <InfoSection
                        icon={<CircuitBoard className="w-4 h-4 text-blue-500" />}
                        title="Key Skills"
                        content={
                          <ul className="text-sm ml-6 grid grid-cols-2 gap-1">
                            {level.skills.map((skill, idx) => (
                              <li key={idx} className="flex items-center gap-1">
                                <CheckCircle className="w-3 h-3 text-green-500" />
                                {skill}
                              </li>
                            ))}
                          </ul>
                        }
                      />
  
                      <InfoSection
                        icon={<BookOpen className="w-4 h-4 text-blue-500" />}
                        title="Recommended Courses"
                        content={
                          <ul className="text-sm ml-6">
                            {level.courses.map((course, idx) => (
                              <li key={idx} className="flex items-center gap-1">
                                <BookMarked className="w-3 h-3 text-purple-500" />
                                {course}
                              </li>
                            ))}
                          </ul>
                        }
                      />
  
                      <InfoSection
                        icon={<Rocket className="w-4 h-4 text-blue-500" />}
                        title="Projects"
                        content={
                          <ul className="text-sm ml-6">
                            {level.projects.map((project, idx) => (
                              <li key={idx} className="flex items-center gap-1">
                                <Tool className="w-3 h-3 text-orange-500" />
                                {project}
                              </li>
                            ))}
                          </ul>
                        }
                      />
  
                      <InfoSection
                        icon={<Award className="w-4 h-4 text-blue-500" />}
                        title="Recommended Certifications"
                        content={
                          <ul className="text-sm ml-6">
                            {level.certifications.map((cert, idx) => (
                              <li key={idx} className="flex items-center gap-1">
                                <GraduationCap className="w-3 h-3 text-yellow-500" />
                                {cert}
                              </li>
                            ))}
                          </ul>
                        }
                      />
  
                      <div className="pt-2 border-t">
                        <InfoSection
                          icon={<DollarSign className="w-4 h-4 text-green-500" />}
                          title="Expected Salary Range"
                          content={
                            <p className="text-sm ml-6 text-green-600 font-medium">
                              {level.salary}
                            </p>
                          }
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const CareerResources = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Learning Resources */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <BookOpen className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-lg font-bold">Learning Resources</h3>
          </div>
          <ul className="space-y-3">
            {[
              { text: 'Interactive Coding Platforms', icon: <Code className="w-4 h-4" /> },
              { text: 'Video Tutorials Library', icon: <PlayCircle className="w-4 h-4" /> },
              { text: 'Documentation Guides', icon: <FileText className="w-4 h-4" /> },
              { text: 'Practice Projects', icon: <Folder className="w-4 h-4" /> }
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-600">
                {item.icon}
                {item.text}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Community Support */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Users className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="text-lg font-bold">Community Support</h3>
          </div>
          <ul className="space-y-3">
            {[
              { text: 'Expert Mentorship', icon: <User className="w-4 h-4" /> },
              { text: 'Peer Learning Groups', icon: <Users className="w-4 h-4" /> },
              { text: 'Discussion Forums', icon: <MessageSquare className="w-4 h-4" /> },
              { text: 'Code Reviews', icon: <GitBranch className="w-4 h-4" /> }
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-600">
                {item.icon}
                {item.text}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Career Support */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <Briefcase className="w-6 h-6 text-green-500" />
            </div>
            <h3 className="text-lg font-bold">Career Support</h3>
          </div>
          <ul className="space-y-3">
            {[
              { text: 'Resume Building', icon: <FileText className="w-4 h-4" /> },
              { text: 'Interview Preparation', icon: <Users className="w-4 h-4" /> },
              { text: 'Job Placement Support', icon: <Building className="w-4 h-4" /> },
              { text: 'Portfolio Development', icon: <Layout className="w-4 h-4" /> }
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-600">
                {item.icon}
                {item.text}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );

  const SuccessMetrics = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {[
        {
          title: 'Placement Rate',
          value: '94%',
          icon: <Target className="w-6 h-6 text-green-500" />,
          description: 'Students placed within 6 months'
        },
        {
          title: 'Salary Increase',
          value: '145%',
          icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
          description: 'Average salary increase after completion'
        },
        {
          title: 'Student Satisfaction',
          value: '4.8/5',
          icon: <Star className="w-6 h-6 text-yellow-500" />,
          description: 'Based on student feedback'
        }
      ].map((metric, index) => (
        <Card key={index}>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              {metric.icon}
              <h3 className="font-bold">{metric.title}</h3>
            </div>
            <div className="text-3xl font-bold mb-2">{metric.value}</div>
            <p className="text-gray-600 text-sm">{metric.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const CompanyPartners = () => (
    <div className="bg-gray-50 p-8 rounded-lg mb-12">
      <h3 className="text-xl font-bold mb-6 text-center">Our Industry Partners</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { name: 'Google', icon: <img src="/api/placeholder/100/40" alt="Google" /> },
          { name: 'Microsoft', icon: <img src="/api/placeholder/100/40" alt="Microsoft" /> },
          { name: 'Amazon', icon: <img src="/api/placeholder/100/40" alt="Amazon" /> },
          { name: 'Meta', icon: <img src="/api/placeholder/100/40" alt="Meta" /> }
        ].map((partner, index) => (
          <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
            {partner.icon}
          </div>
        ))}
      </div>
    </div>
  );

  const StudentTestimonials = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {[
        {
          name: "Sarah Johnson",
          role: "Full Stack Developer at Google",
          content: "The structured learning path helped me transition from a junior developer to a senior role at Google.",
          image: "/api/placeholder/50/50"
        },
        {
          name: "Michael Chen",
          role: "ML Engineer at OpenAI",
          content: "The AI/ML path provided practical projects that helped me land my dream job.",
          image: "/api/placeholder/50/50"
        },
        {
          name: "Emma Williams",
          role: "Security Engineer at Microsoft",
          content: "The cybersecurity path gave me the skills and confidence to excel in my role.",
          image: "/api/placeholder/50/50"
        }
      ].map((testimonial, index) => (
        <Card key={index}>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-bold">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-600">{testimonial.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Choose Your Career Path</h1>
        <p className="text-xl text-gray-600">
          Explore structured learning paths designed to take you from beginner to expert
        </p>
      </div>

      <Tabs defaultValue="paths" className="mb-12">
        <TabsList className="mb-8">
          <TabsTrigger value="paths">Career Paths</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="success">Success Stories</TabsTrigger>
        </TabsList>

        <TabsContent value="paths">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {careerPaths.map(path => (
              <PathCard key={path.id} path={path} />
            ))}
          </div>

          {selectedPath && (
            <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">
                Career Progression: {careerPaths.find(p => p.id === selectedPath).title}
              </h2>
              <LevelProgression 
                levels={careerPaths.find(p => p.id === selectedPath).levels} 
              />
            </div>
          )}
        </TabsContent>

        <TabsContent value="resources">
          <CareerResources />
        </TabsContent>

        <TabsContent value="success">
          <SuccessMetrics />
          <StudentTestimonials />
        </TabsContent>
      </Tabs>

      <CompanyPartners />

      <div className="bg-blue-50 p-8 rounded-lg">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-blue-500 rounded-full text-white">
            <Rocket className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold">Ready to Start Your Journey?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-3">
            <UserCheck className="w-5 h-5 text-blue-500 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Expert Mentorship</h3>
              <p className="text-gray-600">Get guidance from industry professionals</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Target className="w-5 h-5 text-blue-500 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Structured Learning</h3>
              <p className="text-gray-600">Follow a proven path to success</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Award className="w-5 h-5 text-blue-500 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Industry Recognition</h3>
              <p className="text-gray-600">Earn valued certifications</p>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
            Start Your Career Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerPath;