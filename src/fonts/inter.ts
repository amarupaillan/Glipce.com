// Standard CSS variables for the Inter font
export const inter = {
  variable: '--font-inter',
  style: {
    fontFamily: "'Inter', sans-serif"
  }
};

// Add a function to inject Google Fonts link
export function injectInterFont() {
  // Check if the Google Fonts link already exists
  if (!document.getElementById('google-fonts-inter')) {
    const link = document.createElement('link');
    link.id = 'google-fonts-inter';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
    document.head.appendChild(link);
  }
} 