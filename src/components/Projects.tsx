import { Github, ExternalLink } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com React e Node.js",
      image: "/projects/ecommerce.jpg",
      tags: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/username/ecommerce",
      demo: "https://demo-ecommerce.com"
    },
    {
      title: "Task Manager",
      description: "Aplicativo de gerenciamento de tarefas com React e Firebase",
      image: "/projects/taskmanager.jpg", 
      tags: ["React", "Firebase", "Tailwind"],
      github: "https://github.com/username/taskmanager",
      demo: "https://demo-taskmanager.com"
    },
    {
      title: "Portfolio CMS",
      description: "Sistema de gerenciamento de conteúdo para portfolios",
      image: "/projects/portfolio.jpg",
      tags: ["TypeScript", "Next.js", "Prisma"],
      github: "https://github.com/username/portfolio-cms",
      demo: "https://demo-portfolio.com"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos meus projetos mais recentes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <Github size={20} className="mr-2" />
                    Código
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-purple-600 hover:text-purple-700"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}