import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false); // State for loading spinner
  const navigate = useNavigate();

  const handleSuccess = (credentialResponse) => {
    setIsLoading(true); // Show loading spinner
    console.log("Login Success:", credentialResponse);

    // Simulate a delay for loading (e.g., API call)
    setTimeout(() => {
      setIsLoading(false); // Hide loading spinner
      navigate("/under-construction"); // Redirect to under-construction page
    }, 2000); // Simulate 2 seconds of loading time
  };

  const handleError = () => {
    console.log("Login Failed");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back
        </h2>
        <p className="text-sm text-gray-600 text-center mb-4">
          Please log in to continue.
        </p>

        {/* Google Login Button with Hover Effect */}
        {isLoading ? (
          // Show Spinner when Loading
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          // Google Login Button with Hover Effect
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
          </motion.div>
        )}

        {/* Footer Text */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Don't have an account?{" "}
            <a href="#" className="text-blue-500 hover:text-blue-700">
              Register here
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
