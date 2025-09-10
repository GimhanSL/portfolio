
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
    title: '8-Bit Hero Sprites',
    description: 'A collection of classic 8-bit style character sprites.',
    category: 'Pixel art',
    thumbnail: 'https://picsum.photos/600/400?random=3',
    type: 'image',
    artstationUrl: 'https://www.artstation.com/kanagamestudios',
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
    title: 'Animated Pixel Effects',
    description: 'A set of animated pixel art effects like explosions, smoke, and magic spells.',
    category: 'Pixel art',
    thumbnail: 'https://picsum.photos/600/400?random=6',
    type: 'image',
    artstationUrl: 'https://www.artstation.com/kanagamestudios',
    aiHint: 'pixel effects'
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
    title: 'Platformer Tile Set',
    description: 'A versatile tile set for creating 2D platformer levels.',
    category: 'Pixel art',
    thumbnail: 'https://picsum.photos/600/400?random=8',
    type: 'image',
    artstationUrl: 'https://www.artstation.com/kanagamestudios',
    aiHint: 'platformer tileset'
  },
];

export const projectCategories: ('Pixel art' | '3D models')[] = ['Pixel art', '3D models'];

export const projectTypeIcons = {
  image: ImageIcon,
  video: Video,
  pdf: FileText,
};
