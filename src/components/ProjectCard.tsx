
'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/lib/data';
import { projectTypeIcons } from '@/lib/data';
import { ExternalLink } from 'lucide-react';

export default function ProjectCard({ project }: { project: Project }) {
  const Icon = projectTypeIcons[project.type];

  const handleClick = () => {
    window.open(project.artstationUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card 
      className="overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-primary/20 hover:shadow-2xl"
      onClick={handleClick}
    >
      <CardHeader className="p-0 relative">
        <div className="aspect-video bg-muted">
          <Image
            src={project.thumbnail}
            alt={project.title}
            width={600}
            height={400}
            className="object-cover w-full h-full"
            data-ai-hint={project.aiHint}
          />
        </div>
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <ExternalLink className="h-12 w-12 mx-auto" />
            <p className="font-bold mt-2">View on ArtStation</p>
          </div>
        </div>
        <Badge variant="secondary" className="absolute top-2 right-2 flex items-center gap-1">
          <Icon className="h-3 w-3" />
          <span>{project.type}</span>
        </Badge>
      </CardHeader>
      <CardContent className="p-4 bg-card">
        <h3 className="text-lg font-bold font-headline">{project.title}</h3>
        <p className="text-sm text-muted-foreground mt-1 h-10">{project.description}</p>
      </CardContent>
    </Card>
  );
}
