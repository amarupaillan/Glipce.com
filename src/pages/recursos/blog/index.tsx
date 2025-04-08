import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

// Redirect component for legacy blog URL
const LegacyBlogRedirect: React.FC = () => {
  useEffect(() => {
    // This is just for analytics or logging if needed
    console.log("Legacy blog URL accessed, redirecting to new blog");
  }, []);

  return <Navigate to="/blog" replace />;
};

export default LegacyBlogRedirect; 