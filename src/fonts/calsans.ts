// Standard CSS variables for the CalSans font
export const calsans = {
  variable: '--font-calsans',
  style: {
    fontFamily: "'CalSans', sans-serif"
  }
};

// Add a function to inject the CalSans font
export function injectCalSansFont() {
  // Create a style element for the font-face definition
  if (!document.getElementById('font-face-calsans')) {
    const style = document.createElement('style');
    style.id = 'font-face-calsans';
    style.textContent = `
      @font-face {
        font-family: 'CalSans';
        src: url('/fonts/CalSans-SemiBold.woff2') format('woff2');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
      }
    `;
    document.head.appendChild(style);
  }
} 