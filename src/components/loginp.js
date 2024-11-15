import { useNavigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { RiLockPasswordFill } from "react-icons/ri";
import './login.css';
import { useState } from "react";

export const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login to the Bookstore</h1>
        <div className="loginForm">
          <div className="input-container">
            <CiUser className="uIcon" />
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-container">
            <RiLockPasswordFill className='uIcon' />
            <input type={showPassword ? "text"  : "password"} placeholder="Password" />
          </div>
          <label>
            <input type="checkbox" onClick={handleShowPassword} /> Show Password
          </label>
          <div className="actions">
            <button onClick={() => navigate('dashboard')}>Login</button>
          </div>
          <a href="#" className="forgot-password">Forgot Password?</a>
          <div className="extra-links">
            <p>Don't have an account? <a href="#">Sign Up</a></p>
            <p><a href="#">Terms and Conditions</a></p>
            <p><a href="#">Privacy Policy</a></p>
            <p>© 2024 #1 BookStore. All rights reserved.</p>
            <p>Powered by NITS</p>
          </div>
        </div>
      </div>
    </div>
  );
};