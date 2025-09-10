
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { projects, projectCategories } from '@/lib/data';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-10 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background/80">
      <div className="container mx-auto max-w-screen-xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-headline">My Creations</h2>
          <p className="text-muted-foreground mt-2 text-sm sm:text-base">A selection of my favorite projects.</p>
        </div>
        <Tabs defaultValue="All" className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto max-w-md mb-6 sm:mb-8">
            <TabsTrigger value="All" className="text-xs sm:text-sm">All</TabsTrigger>
            {projectCategories.map((category) => (
              <TabsTrigger key={category} value={category} className="text-xs sm:text-sm">{category}</TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="All">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          {projectCategories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {projects
                  .filter((p) => p.category === category)
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
