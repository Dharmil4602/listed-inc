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
              <div className="google-sign-in-text">Sign in with Google</div>
            </div>
            <div className="company-sign-in apple">
              <div className="apple-logo">
                <img
                  src="https://img.icons8.com/color/48/000000/mac-os--v1.png"
                  alt="apple-logo"
                />
              </div>
              <div className="apple-sign-in-text">Sign in with Apple</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
