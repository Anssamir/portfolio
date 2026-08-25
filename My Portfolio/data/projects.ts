import { assets } from './assets';

export interface Project {
  slug: string;
  title: string;
  date: string;
  image: string;
  tags: string[];
  description: string;
}

export const projects: Project[] = [
  {
    slug: 'danske',
    title: 'DanoGPT',
    date: 'June 2024',
    image: assets.dansk,
    tags: ['GenAI Banking', 'UX Conversational Design', 'Figma'],
    description: 'An internal GenAI tool built for frontline banking staff at a Danish bank. Designed to speed up customer query resolution, reduce tool-switching, and create a smarter, conversational AI experience tailored for banking operations.',
  },
  {
    slug: 'nissan',
    title: 'Ventra & Luxoro',
    date: 'February 2023',
    image: assets.nissan,
    tags: ['Automotive Platform', 'Service Design', 'User Research', 'Figma'],
    description: 'A digital car ownership experience for Canadian customers — helping users manage finances, track orders, schedule maintenance, and personalize their vehicles. A seamless one-stop solution for premium and luxury car owners.',
  },
  {
    slug: 'loreal',
    title: 'GrowthOrbit by Aveline',
    date: 'October 2023',
    image: assets.loreal,
    tags: ['Analytics Dashboard', 'Data Visualization', 'Enterprise UX', 'Figma'],
    description: 'Redesigned two key analytics dashboards for a global beauty & cosmetics brand. Transformed cluttered, spreadsheet-like layouts into clear, insight-driven dashboards — improving usability, efficiency, and decision-making.',
  },
  {
    slug: 'marketly',
    title: 'Marketly Portal',
    date: 'May 2025',
    image: assets.marketly,
    tags: ['Marketing Platform', 'Dashboard Design', 'UI/UX', 'Figma'],
    description: 'A representational presales marketing portal bringing everything in one place — dashboards, templates, content hub, and insights. Designed to help teams discover, share, and track impactful sales assets with ease.',
  },
];
