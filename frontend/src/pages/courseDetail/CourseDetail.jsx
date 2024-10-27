// pages/CourseDetail/CourseDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './CourseDetail.module.css';
import { PlayCircle, Clock, Users, Star, Award } from 'lucide-react';

const CourseDetail = () => {
  const { courseId } = useParams();

  // Mock course data - replace with actual API call
  const course = {
    id: courseId,
    title: "Advanced Data Structures & Algorithms",
    description: "Master advanced DSA concepts with practical implementations",
    instructor: "Dr. Sarah Miller",
    duration: "12 weeks",
    students: 1234,
    rating: 4.8,
    topics: [
      "Graph Algorithms",
      "Advanced Tree Structures",
      "Dynamic Programming",
      "Network Flow"
    ],
    sections: [
      {
        title: "Introduction",
        lectures: [
          { title: "Course Overview", duration: "10:00" },
          { title: "Getting Started", duration: "15:00" }
        ]
      },
      // Add more sections...
    ]
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{course.title}</h1>
        <p className={styles.description}>{course.description}</p>
        
        <div className={styles.stats}>
          <div className={styles.stat}>
            <Clock className={styles.icon} />
            <span>{course.duration}</span>
          </div>
          <div className={styles.stat}>
            <Users className={styles.icon} />
            <span>{course.students} students</span>
          </div>
          <div className={styles.stat}>
            <Star className={styles.icon} />
            <span>{course.rating}</span>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.curriculum}>
          <h2>Course Curriculum</h2>
          {course.sections.map((section, index) => (
            <div key={index} className={styles.section}>
              <h3>{section.title}</h3>
              <div className={styles.lectures}>
                {section.lectures.map((lecture, idx) => (
                  <div key={idx} className={styles.lecture}>
                    <PlayCircle className={styles.icon} />
                    <span>{lecture.title}</span>
                    <span className={styles.duration}>{lecture.duration}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.sidebar}>
          <div className={styles.instructor}>
            <img src="/api/placeholder/100/100" alt={course.instructor} />
            <h3>{course.instructor}</h3>
            <p>Course Instructor</p>
          </div>

          <div className={styles.topics}>
            <h3>What you'll learn</h3>
            <ul>
              {course.topics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;