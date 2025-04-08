import localFont from 'next/font/local';

export const calsans = localFont({
  src: [
    {
      path: '../assets/fonts/CalSans-SemiBold.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-calsans',
}); 