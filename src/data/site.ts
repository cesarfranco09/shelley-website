// Central place for business details. Update here and every page follows.

export const site = {
  name: 'Healthy Communications',
  owner: 'Shelley Marks-Kramer',
  tagline: 'Wellness, safe products & art that heals',
  description:
    'Healthy Communications by Shelley Marks-Kramer — guidance on safe, non-toxic personal care and home products, nutrition, pure essential oils, and impressionist art from Malibu, California.',
  url: 'https://healthy-communications.com',
  email: 'shelley@healthy-communications.com',
  phones: [
    { label: 'Office', display: '310-457-5176', href: 'tel:+13104575176' },
    { label: 'Mobile', display: '310-924-5187', href: 'tel:+13109245187' },
  ],
  location: 'Malibu, California',
  social: {
    instagram: 'https://www.instagram.com/healthycom4u/',
    linkedin: 'https://www.linkedin.com/in/shelleymarkskramer/',
    artSite: 'https://shelley-marks-kramer.com/',
  },
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/wellness/', label: 'Wellness' },
  { href: '/art/', label: 'Art & Handmade' },
  { href: '/community/', label: 'Community' },
];

/** Build a mailto link with a prefilled subject. */
export const mailto = (subject: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
