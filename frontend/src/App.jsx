import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './utils/PrivateRoutes';
import Layout from './components/layout/Layout';

// Pages
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import CoursePlatform from './components/CoursePlatform';
import CourseDetail from './pages/courseDetail/CourseDetail';
import Certificates from './components/Certificates';
import CareerPath from './components/CareerPath';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Navigate to="/login" />} />

          {/* Private Routes */}
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />

          <Route path="/courses" element={
            <PrivateRoute>
              <Layout>
                <CoursePlatform />
              </Layout>
            </PrivateRoute>
          } />

          <Route path="/courses/:courseId" element={
            <PrivateRoute>
              <Layout>
                <CourseDetail />
              </Layout>
            </PrivateRoute>
          } />
           <Route path="/career" element={
            <PrivateRoute>
              <Layout>
                <CareerPath></CareerPath>
              </Layout>
            </PrivateRoute>
          } />

          <Route path="/certificates" element={
            <PrivateRoute>
              <Certificates />
            </PrivateRoute>
          } />

          {/* 404 Route */}
          <Route path="*" element={
            <div className="flex items-center justify-center min-h-screen">
              <h1 className="text-2xl">404 - Page Not Found</h1>
            </div>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
