export const profile = {
  name: 'Emran Shafaq',
  description: 'Projects, research interests, and personal writing by Emran Shafaq.',
  interests: [
    'Fast mathematical visualizations',
    'Numerical & randomized linear algebra',
    'Unconventional computing',
    'High-performance computing',
  ],
  portrait: 'assets/emran.png', // Place an image in public/ and set e.g. 'assets/portrait.jpg'.
  email: 'emran.shafaq@gmail.com',
  github: 'https://github.com/emzatos', // Full URL to your GitHub profile.
  cv: '', // Place a PDF in public/ and set e.g. 'cv.pdf'.
};
export const href = (path = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
