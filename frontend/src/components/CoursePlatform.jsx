import React, { useState } from 'react';
import { 
  BookOpen, Code, Database, Cloud, Shield, Brain, 
  Youtube, Download, Star, Clock, Users, Award,
  CheckCircle, PlayCircle, FileText, Coffee
} from 'lucide-react';
import styles from './CoursePlatform.module.css';

const CoursePlatform = () => {
  const [selectedLevel, setSelectedLevel] = useState('all');

  const courses = [
    {
      title: "Advanced Data Structures & Algorithms",
      description: "Master advanced DSA concepts with practical implementations in Python and Java",
      duration: "12 weeks",
      level: "Advanced",
      instructor: "Dr. Sarah Miller",
      instructorTitle: "PhD in Computer Science",
      rating: 4.8,
      students: 1234,
      previewUrl: "src/components/ui/datastr.png",
      youtubePreview: "https://www.youtube.com/watch?v=8h80p_rYv1Y&list=PLv9sD0fPjvSHqIOLTIvHJWjkdH0IdzmXT&ab_channel=UzairJavedAkhtar",
      topics: [
        "Graph Algorithms",
        "Advanced Tree Structures",
        "Dynamic Programming",
        "Network Flow"
      ],
      skills: ["Python", "Java", "Problem Solving"],
      progress: 0,
      price: "$99.99",
      certificationType: "ISO 27001 Certified"
    },
    {
      title: "Enterprise Database Systems",
      description: "Comprehensive study of enterprise-level database management and optimization",
      duration: "10 weeks",
      level: "Beginner",
      instructor: "Prof. James Chen",
      instructorTitle: "Database Architect",
      rating: 4.9,
      students: 892,
      previewUrl: "src/components/ui/dbms.png",
      youtubePreview: "https://www.youtube.com/watch?v=OMwgGL3lHlI&list=PLBlnK6fEyqRiyryTrbKHX1Sh9luYI0dhX&ab_channel=NesoAcademy",
      topics: [
        "Database Design Patterns",
        "Query Optimization",
        "Database Security",
        "Distributed Databases"
      ],
      skills: ["SQL", "NoSQL", "Database Design"],
      progress: 0,
      price: "$89.99",
      certificationType: "Oracle Certified"
    },
    {
      title: "Machine-Learning and DeepLearning",
      description: "Master advanced Machine-learning concepts with practical implementations in Python",
      duration: "10 weeks",
      level: "Advanced",
      instructor: "Sri Elliana Bruth",
      instructorTitle: "PhD in Machine-Learning",
      rating: 4.8,
      students: 1234,
      previewUrl: "src/components/ui/image.png",  // Updated this line
      youtubePreview: "https://www.youtube.com/watch?v=8h80p_rYv1Y&list=PLv9sD0fPjvSHqIOLTIvHJWjkdH0IdzmXT&ab_channel=UzairJavedAkhtar",
      topics: [
        "Supervised Learning",
        "Unsupervised Learning",
        "Deep Learning",
        "Reinforcement Learning"
      ],
      skills: ["Python", "Java", "Problem Solving"],
      progress: 0,
      price: "$99.99",
      certificationType: "ISO 27001 Certified"
    },
    {
      title: "Advanced Data Structures & Algorithms",
      description: "Master advanced DSA concepts with practical implementations in Python and Java",
      duration: "12 weeks",
      level: "Advanced",
      instructor: "Dr. Sarah Miller",
      instructorTitle: "PhD in Computer Science",
      rating: 4.8,
      students: 1234,
      previewUrl: "src/components/ui/phy.png",
      youtubePreview: "https://www.youtube.com/watch?v=8h80p_rYv1Y&list=PLv9sD0fPjvSHqIOLTIvHJWjkdH0IdzmXT&ab_channel=UzairJavedAkhtar",
      topics: [
        "Graph Algorithms",
        "Advanced Tree Structures",
        "Dynamic Programming",
        "Network Flow"
      ],
      skills: ["Python", "Java", "Problem Solving"],
      progress: 0,
      price: "$99.99",
      certificationType: "ISO 27001 Certified"
    },
    {
      title: "Advanced Backend Series",
      description: "Master advanced DSA concepts with practical implementations in Python and Java",
      duration: "12 weeks",
      level: "Advanced",
      instructor: "Dr. Sarah Miller",
      instructorTitle: "PhD in Computer Science",
      rating: 4.8,
      students: 1234,
      previewUrl: "src/components/ui/hqdefault.jpg",
      youtubePreview: "https://www.youtube.com/watch?v=8h80p_rYv1Y&list=PLv9sD0fPjvSHqIOLTIvHJWjkdH0IdzmXT&ab_channel=UzairJavedAkhtar",
      topics: [
        "Graph Algorithms",
        "Advanced Tree Structures",
        "Dynamic Programming",
        "Network Flow"
      ],
      skills: ["Python", "Java", "Problem Solving"],
      progress: 0,
      price: "$99.99",
      certificationType: "ISO 27001 Certified"
    },
    
    {
      title: "Advanced Internet Of Things",
      description: "Master advanced DSA concepts with practical implementations in Python and Java",
      duration: "12 weeks",
      level: "Advanced",
      instructor: "Dr. Sarah Miller",
      instructorTitle: "PhD in Computer Science",
      rating: 4.8,
      students: 1234,
      previewUrl: "src/components/ui/iot.png",
      youtubePreview: "https://www.youtube.com/watch?v=8h80p_rYv1Y&list=PLv9sD0fPjvSHqIOLTIvHJWjkdH0IdzmXT&ab_channel=UzairJavedAkhtar",
      topics: [
        "Graph Algorithms",
        "Advanced Tree Structures",
        "Dynamic Programming",
        "Network Flow"
      ],
      skills: ["Python", "Java", "Problem Solving"],
      progress: 0,
      price: "$99.99",
      certificationType: "ISO 27001 Certified"
    }
  ];

  const LevelFilter = () => (
    <div className={styles.filterContainer}>
      {['all', 'Beginner', 'Intermediate', 'Advanced'].map(level => (
        <button
          key={level}
          className={`${styles.filterButton} ${selectedLevel === level ? styles.filterButtonActive : ''}`}
          onClick={() => setSelectedLevel(level)}
        >
          {level}
        </button>
      ))}
    </div>
  );

  const CourseCard = ({ course }) => (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.previewContainer}>
          <img 
            src={course.previewUrl} 
            alt={course.title}
            className={styles.previewImage}
          />
          <button
            className={styles.youtubeButton}
            onClick={() => window.open(course.youtubePreview, '_blank')}
          >
            <Youtube className="w-5 h-5" />
          </button>
        </div>
        <div className={styles.courseIcon}>
          {course.icon}
        </div>
        <h2 className={styles.courseTitle}>{course.title}</h2>
      </div>
      
      <div className={styles.cardContent}>
        <p className={styles.description}>{course.description}</p>
        
        <div className={styles.instructor}>
          <img 
            src="/api/placeholder/40/40" 
            alt={course.instructor}
            className={styles.instructorImage}
          />
          <div className={styles.instructorInfo}>
            <p className={styles.instructorName}>{course.instructor}</p>
            <p className={styles.instructorTitle}>{course.instructorTitle}</p>
          </div>
        </div>

        <div className={styles.badgeSection}>
          <span className={styles.badge}>
            <Clock className="w-4 h-4" />
            {course.duration}
          </span>
          <span className={styles.badge}>
            <Users className="w-4 h-4" />
            {course.students} students
          </span>
          <span className={styles.badge}>
            <Star className="w-4 h-4" />
            {course.rating}
          </span>
        </div>

        <div className={styles.topicsSection}>
          <h3 className={styles.topicsTitle}>What you'll learn:</h3>
          <ul className={styles.topicsList}>
            {course.topics.map((topic, idx) => (
              <li key={idx} className={styles.topicItem}>
                <CheckCircle className="w-4 h-4" />
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.skillsContainer}>
          {course.skills.map((skill, idx) => (
            <span key={idx} className={styles.skillTag}>
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      <div className={styles.cardFooter}>
        <div className={styles.priceSection}>
          <span className={styles.price}>{course.price}</span>
          <span className={styles.certification}>
            <Award className="w-4 h-4" />
            {course.certificationType}
          </span>
        </div>
        <button className={styles.enrollButton}>
          <BookOpen className="w-4 h-4" />
          Enroll Now
        </button>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Advance Your Engineering Career</h1>
        <p className={styles.heroSubtitle}>Master the latest technologies with our industry-recognized courses</p>
      </section>

      <LevelFilter />

      <div className={styles.courseGrid}>
        {courses
          .filter(course => selectedLevel === 'all' || course.level === selectedLevel)
          .map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
      </div>
    </div>
  );
};

export default CoursePlatform;