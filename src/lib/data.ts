
import { Instagram, Linkedin, Twitter, Package, FileText, Image as ImageIcon, Video } from 'lucide-react';
import { SteamIcon, PinterestIcon } from '@/components/Icons';
import type { ComponentType, SVGProps } from 'react';

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const socialLinks: { name: string; href: string; icon: ComponentType<SVGProps<SVGSVGElement>> }[] = [
  { name: 'Instagram', href: 'https://www.instagram.com/kanagamestudios/', icon: Instagram },
  { name: 'Twitter', href: 'https://x.com/KanaGamestudios', icon: Twitter },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/gimhan-sajee-kumara-5229131ab/', icon: Linkedin },
  { name: 'Pinterest', href: 'https://www.pinterest.com/kanagamestudios/', icon: PinterestIcon },
];

export const assetLinks = [
    { name: 'itch.io Assets', href: 'https://kana-games.itch.io/', icon: Package },
    { name: 'Unity Asset Store', href: 'https://assetstore.unity.com/', icon: Package },
]

export type Project = {
  id: number;
  title: string;
  description: string;
  category: 'Pixel art' | '3D models';
  thumbnail: string;
  type: 'image' | 'video' | 'pdf';
  artstationUrl: string;
  aiHint: string;
};

export const projects: Project[] = [
  {
    id: 0,
    title: 'War game assets',
    description: 'These are for conceptual game. used some realistic materials for realistic look.',
    category: '3D models',
    thumbnail: 'https://cdna.artstation.com/p/assets/images/images/091/744/722/medium/gimhan-sajee-kumara-scene.jpg?1757663319',
    type: 'image',
    artstationUrl: 'https://www.artstation.com/artwork/nJGQAe',
    aiHint: '3D weapons'
  },
  {
    id: 1,
    title: 'Elementor Gun Game asset.',
    description: 'This one is a game asset from a ongoing game that have 3 elements as bullets.',
    category: '3D models',
    thumbnail: 'https://cdna.artstation.com/p/assets/images/images/091/712/898/medium/gimhan-sajee-kumara-p1.jpg?1757574001',
    type: 'image',
    artstationUrl: 'https://www.artstation.com/artwork/5WGm1g',
    aiHint: 'Gun'
  },
  {
    id: 2,
    title: 'Robot fight animation workflow',
    description: 'This project shows a red enemy robot searching for another robot to kill.',
    category: '3D models',
    thumbnail: 'https://cdnb.artstation.com/p/assets/images/images/088/367/387/large/gimhan-sajee-kumara-c4.jpg?1748105387',
    type: 'image',
    artstationUrl: 'https://www.artstation.com/artwork/oJm9b4',
    aiHint: 'Robo fight animation'
  },
  {
    id: 3,
    title: 'pixel hero cards',
    description: 'ach card player have their own abilities and strengths',
    category: 'Pixel art',
    thumbnail: 'https://cdnb.artstation.com/p/assets/images/images/091/715/303/medium/gimhan-sajee-kumara-2.jpg?1757581644',
    type: 'image',
    artstationUrl: 'https://www.artstation.com/artwork/XJ8qYY',
    aiHint: 'pixel art'
  },
  {
    id: 5,
    title: 'Low poly car with some boxes',
    description: 'Basic low poly car model with some camera angles.',
    category: '3D models',
    thumbnail: 'https://cdnb.artstation.com/p/assets/images/images/088/156/385/large/gimhan-sajee-kumara-car2.jpg?1747593202',
    type: 'image',
    artstationUrl: 'https://www.artstation.com/artwork/NqYROg',
    aiHint: 'car'
  },
  {
    id: 6,
    title: 'Minecraft texture pack',
    description: 'A set of pixel art textures for Minecraft.',
    category: 'Pixel art',
    thumbnail: 'https://cdna.artstation.com/p/assets/images/images/091/746/386/medium/gimhan-sajee-kumara-i1.jpg?1757668914',
    type: 'image',
    artstationUrl: 'https://www.artstation.com/artwork/bgRKKn',
    aiHint: 'minecraft texture pack'
  },
  {
    id: 7,
    title: 'Mining tools models (Blender)',
    description: 'Mining tools models made in Blender with basic materials.',
    category: '3D models',
    thumbnail: 'https://cdna.artstation.com/p/assets/images/images/087/986/528/large/gimhan-sajee-kumara-mine.jpg?1747169476',
    type: 'image',
    artstationUrl: 'https://www.artstation.com/artwork/wr4BZO',
    aiHint: 'Mining tools'
  },
  {
    id: 8,
    title: 'Dog stylised Props',
    description: 'A set of pixel art props for a game.',
    category: 'Pixel art',
    thumbnail: 'https://cdna.artstation.com/p/assets/images/images/091/747/000/medium/gimhan-sajee-kumara-33.jpg?1757670735',
    type: 'image',
    artstationUrl: 'https://www.artstation.com/artwork/a0eYo0',
    aiHint: 'Dog props'
  },
];

export const projectCategories: ('Pixel art' | '3D models')[] = ['Pixel art', '3D models'];

export const projectTypeIcons = {
  image: ImageIcon,
  video: Video,
  pdf: FileText,
};
