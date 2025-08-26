
import { Github, Linkedin, Twitter, Package, FileText, Image as ImageIcon, Video } from 'lucide-react';
import { SteamIcon } from '@/components/Icons';
import type { ComponentType, SVGProps } from 'react';

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const socialLinks: { name: string; href: string; icon: ComponentType<SVGProps<SVGSVGElement>> }[] = [
  { name: 'GitHub', href: 'https://github.com', icon: Github },
  { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { name: 'Steam', href: 'https://steamcommunity.com', icon: SteamIcon },
];

export const assetLinks = [
    { name: 'Unreal Engine Assets', href: '#', icon: Package },
    { name: 'Unity Asset Store', href: '#', icon: Package },
]

export type Project = {
  id: number;
  title: string;
  description: string;
  category: 'Games' | '2D Pixel Art' | '3D Assets';
  thumbnail: string;
  type: 'image' | 'video' | 'pdf';
  contentUrl: string;
  aiHint: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Fantasy Kingdom',
    description: 'A sprawling 2D world with castles, dragons, and epic quests.',
    category: 'Games',
    thumbnail: 'https://picsum.photos/600/400?random=1',
    type: 'video',
    contentUrl: '#',
    aiHint: 'fantasy world'
  },
  {
    id: 2,
    title: 'Cyberpunk Alley',
    description: 'Detailed 3D models of a futuristic city alley.',
    category: '3D Assets',
    thumbnail: 'https://picsum.photos/600/400?random=2',
    type: 'image',
    contentUrl: 'https://picsum.photos/1200/800?random=2',
    aiHint: 'cyberpunk city'
  },
  {
    id: 3,
    title: '8-Bit Hero Sprites',
    description: 'A collection of classic 8-bit style character sprites.',
    category: '2D Pixel Art',
    thumbnail: 'https://picsum.photos/600/400?random=3',
    type: 'image',
    contentUrl: 'https://picsum.photos/1200/800?random=3',
    aiHint: 'pixel art'
  },
  {
    id: 4,
    title: 'Space Voyager',
    description: 'A top-down space shooter game with procedurally generated levels.',
    category: 'Games',
    thumbnail: 'https://picsum.photos/600/400?random=4',
    type: 'video',
    contentUrl: '#',
    aiHint: 'space shooter'
  },
  {
    id: 5,
    title: 'Low-Poly Nature Pack',
    description: 'A collection of low-poly trees, rocks, and foliage for game development.',
    category: '3D Assets',
    thumbnail: 'https://picsum.photos/600/400?random=5',
    type: 'image',
    contentUrl: 'https://picsum.photos/1200/800?random=5',
    aiHint: 'low-poly nature'
  },
  {
    id: 6,
    title: 'Animated Pixel Effects',
    description: 'A set of animated pixel art effects like explosions, smoke, and magic spells.',
    category: '2D Pixel Art',
    thumbnail: 'https://picsum.photos/600/400?random=6',
    type: 'image',
    contentUrl: 'https://picsum.photos/1200/800?random=6',
    aiHint: 'pixel effects'
  },
  {
    id: 7,
    title: 'Medieval Weapon Set',
    description: 'High-quality 3D models of swords, axes, and shields.',
    category: '3D Assets',
    thumbnail: 'https://picsum.photos/600/400?random=7',
    type: 'image',
    contentUrl: 'https://picsum.photos/1200/800?random=7',
    aiHint: 'medieval weapons'
  },
  {
    id: 8,
    title: 'Platformer Tile Set',
    description: 'A versatile tile set for creating 2D platformer levels.',
    category: '2D Pixel Art',
    thumbnail: 'https://picsum.photos/600/400?random=8',
    type: 'image',
    contentUrl: 'https://picsum.photos/1200/800?random=8',
    aiHint: 'platformer tileset'
  },
  {
    id: 9,
    title: 'Forgotten Dungeon',
    description: 'An atmospheric dungeon crawler game.',
    category: 'Games',
    thumbnail: 'https://picsum.photos/600/400?random=9',
    type: 'video',
    contentUrl: '#',
    aiHint: 'dungeon crawler'
  },
];

export const projectCategories: ('Games' | '2D Pixel Art' | '3D Assets')[] = ['Games', '2D Pixel Art', '3D Assets'];

export const projectTypeIcons = {
  image: ImageIcon,
  video: Video,
  pdf: FileText,
};
