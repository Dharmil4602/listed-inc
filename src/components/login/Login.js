import React from "react";
import "./login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="left-login-container">
        <div className="login-title">Board.</div>
      </div>
      <div className="right-login-container">
        <div className="login-form-container">
          <div className="login-form-title">Sign In</div>
          <div className="login-form-subTitle">Sign in to your account</div>
          <div className="company-authentication">
            <div className="company-sign-in">
              <div className="google-logo">
                <img
                  src="https://img.icons8.com/color/48/000000/google-logo.png"
                  alt="google-logo"
                />
              </div>
              <div className="text">Sign in with Google</div>
            </div>
            <div className="company-sign-in apple">
              <div className="apple-logo">
                <img
                  src="https://img.icons8.com/color/48/000000/mac-os--v1.png"
                  alt="apple-logo"
                />
              </div>
              <div className="text">Sign in with Apple</div>
            </div>
          </div>

          <div className="login-form">
            <div className="login-form-input">
              <div className="login-form-input-title">Email address</div>
              <input type="text" className="login-form-input-text" />
            </div>
            <div className="login-form-input">
              <div className="login-form-input-title">Password</div>
              <input type="password" className="login-form-input-text" />
            </div>
            <div className="forgot-password">
              <div className="forgot-password-text">Forgot password?</div>
            </div>
            <div className="login-button">Sign In</div>
          </div>

          <div className="login-form-footer">
            <div className="login-form-footer-text">
              Don't have an account?{" "}
              <span className="sign-up">Register Here</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
