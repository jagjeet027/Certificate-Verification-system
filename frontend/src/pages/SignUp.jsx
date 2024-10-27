import React, { useState } from 'react';
import { UserPlus, Mail, Lock, Eye, EyeOff, AlertCircle, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './SignUp.module.css'; 
import { useAuth } from '../context/AuthContext'; // Import useAuth

const SignUp = () => {
  const { login } = useAuth(); // Access login from AuthContext
  const navigate = useNavigate(); // To navigate to dashboard

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('Signing up with:', formData);

      const userData = {
        fullName: formData.fullName,
        email: formData.email
      };
      login(userData); // Log in user
      navigate('/dashboard'); // Navigate to dashboard after signup
    } catch (err) {
      setError('Failed to create account. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.signUpForm}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.iconContainer}>
            <UserPlus size={32} className={styles.icon} />
          </div>
          <h2 className={styles.title}>Create Account</h2>
          <p className={styles.subtitle}>Sign up to get started</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSignUp} className={styles.form}>
          {/* Full Name */}
          <div className={styles.inputWrapper}>
            <label className={styles.label}>Full Name</label>
            <div className={styles.inputContainer}>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={styles.input}
                placeholder="Enter your full name"
                required
              />
              <User className={styles.inputIcon} size={20} />
            </div>
          </div>

          {/* Email */}
          <div className={styles.inputWrapper}>
            <label className={styles.label}>Email</label>
            <div className={styles.inputContainer}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                placeholder="Enter your email"
                required
              />
              <Mail className={styles.inputIcon} size={20} />
            </div>
          </div>

          {/* Password */}
          <div className={styles.inputWrapper}>
            <label className={styles.label}>Password</label>
            <div className={styles.inputContainer}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={styles.input}
                placeholder="Create a password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={styles.passwordToggle}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className={styles.inputWrapper}>
            <label className={styles.label}>Confirm Password</label>
            <div className={styles.inputContainer}>
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={styles.input}
                placeholder="Confirm your password"
                required
              />
              <Lock className={styles.inputIcon} size={20} />
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className={styles.error}>
              <AlertCircle size={20} />
              <span>{error}</span>
            </div>
          )}

          {/* Submit Button */}
          <button type="submit" disabled={loading} className={styles.submitButton}>
            {loading ? <div className={styles.loader} /> : 'Sign Up'}
          </button>

          {/* Login Link */}
          <p className={styles.loginText}>
            Already have an account?{' '}
            <Link to="/login" className={styles.loginLink}>Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
