import React, { useState } from 'react';
import { LogIn, Mail, Lock, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'; 
import styles from './Login.module.css'; 
import { useAuth } from '../context/AuthContext'; // Import useAuth

const Login = () => {
  const { login } = useAuth(); // Access login from AuthContext
  const navigate = useNavigate(); // To navigate to dashboard

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('Logging in with:', { email, password });

      const userData = { email }; // Example user data
      login(userData); // Log in user
      navigate('/dashboard'); // Navigate to dashboard after login
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginForm}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.iconContainer}>
            <LogIn size={32} className={styles.icon} />
          </div>
          <h2 className={styles.title}>Welcome Back</h2>
          <p className={styles.subtitle}>Sign in to access your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className={styles.form}>
          {/* Email */}
          <div className={styles.inputWrapper}>
            <label className={styles.label}>Email Address</label>
            <div className={styles.inputContainer}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
                placeholder="Enter your password"
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

          {/* Error Message */}
          {error && (
            <div className={styles.error}>
              <AlertCircle size={20} />
              <span>{error}</span>
            </div>
          )}

          {/* Submit Button */}
          <button type="submit" disabled={loading} className={styles.submitButton}>
            {loading ? <div className={styles.loader} /> : 'Sign In'}
          </button>

          {/* Sign Up Link */}
          <p className={styles.signUpText}>
            Don't have an account?{' '}
            <Link to="/SignUp" className={styles.signUpLink}>Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
