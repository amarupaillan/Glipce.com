import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

// Redirect component for legacy blog article URLs
const LegacyArticleRedirect: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  useEffect(() => {
    // This is just for analytics or logging if needed
    console.log(`Legacy article URL accessed for slug: ${slug}, redirecting to new blog article`);
  }, [slug]);

  return <Navigate to={`/blog/${slug}`} replace />;
};

export default LegacyArticleRedirect; 