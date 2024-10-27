import React, { useState } from 'react';
import { Search, Download, Award, Shield, Check, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import styles from './Certificates.module.css';

const certificateTemplate = {
  background: `
    <svg width="100%" height="100%" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#4158D0;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#C850C0;stop-opacity:1" />
        </linearGradient>
        <pattern id="pattern1" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M0 20 Q10 0 20 20 T40 20" stroke="rgba(255,255,255,0.1)" fill="none"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad1)"/>
      <rect width="100%" height="100%" fill="url(#pattern1)"/>
      <circle cx="400" cy="300" r="250" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
      <path d="M200,150 Q400,50 600,150" stroke="rgba(255,255,255,0.3)" fill="none"/>
    </svg>
  `
};

const Certificates = () => {
  const [certificateId, setCertificateId] = useState('');
  const [certificateData, setCertificateData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [verificationStatus, setVerificationStatus] = useState(null);

 

  const triggerConfetti = () => {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  };

  const searchCertificate = async () => {
    setLoading(true);
    setError(null);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      const mockData = {
        id: certificateId,
        name: "John Doe",
        course: "Advanced Web Development",
        issueDate: "2024-03-15",
        grade: "A+",
        instructor: "Dr. Sarah Johnson",
        validUntil: "2025-03-15",
        achievements: ["Top Performer", "Perfect Attendance"],
        skills: ["React", "Node.js", "MongoDB"]
      };
      setCertificateData(mockData);
      setVerificationStatus('verified');
      triggerConfetti();
    } catch {
      setError("Certificate verification failed. Please check the ID and try again.");
      setVerificationStatus('failed');
    } finally {
      setLoading(false);
    }
  };

  const StatusIcon = () => {
    switch (verificationStatus) {
      case 'verified':
        return <Check className="text-green-500" size={24} />;
      case 'failed':
        return <AlertCircle className="text-red-500" size={24} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainWrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            <Award className="inline-block mr-3 text-yellow-400" size={40} />
            Certificate Verification Portal
          </h1>
          <div className={styles.searchContainer}>
            <input
              type="text"
              value={certificateId}
              onChange={(e) => setCertificateId(e.target.value)}
              placeholder="Enter Certificate ID"
              className={styles.searchInput}
            />
            <button
              onClick={searchCertificate}
              disabled={loading}
              className={styles.searchButton}
            >
              {loading ? (
                <Shield size={20} className="text-white" />
              ) : (
                <Search size={20} className="text-white" />
              )}
            </button>
          </div>
        </div>

        {certificateData && (
          <div className={styles.certificateCard}>
            <div className={styles.certificatePreview}
                 dangerouslySetInnerHTML={{ __html: certificateTemplate.background }}>
              <div className="relative z-10 text-center text-white">
                <h2 className="text-3xl font-bold mb-4">{certificateData.name}</h2>
                <p className="text-xl mb-2">has successfully completed</p>
                <h3 className="text-2xl font-bold mb-4">{certificateData.course}</h3>
                <div className="grid grid-cols-2 gap-4 mt-8 text-sm">
                  <div>
                    <p className="font-semibold">Issue Date</p>
                    <p>{new Date(certificateData.issueDate).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Valid Until</p>
                    <p>{new Date(certificateData.validUntil).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.detailsGrid}>
              <div className={styles.detailsCard}>
                <h4 className="text-lg font-semibold mb-3 text-white">Achievements</h4>
                <ul className="space-y-2">
                  {certificateData.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-center text-white/80">
                      <Check size={16} className="mr-2 text-green-400" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.detailsCard}>
                <h4 className="text-lg font-semibold mb-3 text-white">Skills Acquired</h4>
                <div className="flex flex-wrap gap-2">
                  {certificateData.skills.map((skill, index) => (
                    <span key={index} className={styles.skillTag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button className={styles.downloadButton}>
              <Download size={20} />
              Download Certificate
            </button>
          </div>
        )}

        {error && (
          <div className={styles.errorMessage}>
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default Certificates;
