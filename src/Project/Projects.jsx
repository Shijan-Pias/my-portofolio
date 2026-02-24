import { ArrowUpRight, Github } from "lucide-react";
import AnimatedBorderButton from "../Button/ANimatedBorderButton";

const projects = [
  {
    title: "PharmaHub - Medicine E-Commerce",
    description:
      "A comprehensive multi-vendor pharmacy platform featuring a prescription-based ordering system, admin verification dashboard, and secure payment processing.",
    image: "/project_1.png",
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "Firebase"],
    link: "https://twelve1-assignment-ph.web.app/",
    ServerSite: "https://github.com/Shijan-Pias/assignment-12-server",
    clientSite: 'https://github.com/Shijan-Pias/assignment-12-client'
  },
  {
    title: "T-Shirt E-Commerce Store",
    description:
      "A complete role-based e-commerce solution with dedicated dashboards for users, sellers, and admins. Features inventory management and secure authentication.",
    image: "project_2.png",
    tags: ["React", "Express.js", "MongoDB", "daisyUI"],
    link: "https://t-shirt-project-fda13.web.app/",
    ServerSite: "https://github.com/Shijan-Pias/tShirt-server",
    clientSite: 'https://github.com/Shijan-Pias/t-shirt'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">

      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">

        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent full-stack work, showcasing problem-solving skills and end-to-end development capabilities.
          </p>
        </div>


        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 border border-border/50"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >

              <div className="relative overflow-hidden aspect-video bg-black rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />

                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm">


                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all text-sm font-medium text-white"
                  >
                    <ArrowUpRight className="w-4 h-4" /> Live Preview
                  </a>

                  <div className="flex gap-3">

                    <a
                      href={project.clientGithub}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all text-sm font-medium text-white"
                      title="Client Side Code"
                    >
                      <Github className="w-4 h-4" /> Client
                    </a>


                    <a
                      href={project.serverGithub}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all text-sm font-medium text-white"
                      title="Server Side Code"
                    >
                      <Github className="w-4 h-4" /> Server
                    </a>
                  </div>
                </div>
              </div>


              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <ArrowUpRight
                      className="w-5 h-5 
                    text-muted-foreground group-hover:text-primary
                     group-hover:translate-x-1 
                     group-hover:-translate-y-1 transition-all cursor-pointer"
                    />
                  </a>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a href="https://github.com/Shijan-Pias" target="_blank" rel="noreferrer">
            <AnimatedBorderButton>
              View GitHub Profile
              <ArrowUpRight className="w-5 h-5 ml-2 inline" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;