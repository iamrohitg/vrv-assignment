import React from "react";
import LoginForm from "@/components/Login/LoginForm";

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-16 px-4 sm:px-8 lg:px-12">
      <div className="w-full max-w-md space-y-10">
        <div className="text-center">
          <h2 className="mt-10 text-3xl font-bold text-gray-900">
            Welcome to VRV Admin Portal
          </h2>
          <p className="mt-6 text-sm text-gray-800">
            Please log in to your account to continue.
          </p>
        </div>

        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
