/** @type {import('tailwindcss').Config} */

import konstaConfig from 'konsta/config';

export default konstaConfig({
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/index.html'],
  darkMode: 'class',
});

// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }