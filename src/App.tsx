import {
  Mail,
  Phone,
  MapPin,
  Code,
  Database,
  Server,
  Braces,
  Monitor,
  Zap,
  ExternalLink,
  Globe,
  // Chrome is not in lucide-react, using FaChrome
} from "lucide-react"
import { FaReact, FaHtml5, FaGithub, FaCloudflare, FaLinkedin, FaChrome } from "react-icons/fa";
import { SiSpring, SiNestjs, SiMongodb } from "react-icons/si";
import { DiRedis, DiPostgresql } from "react-icons/di";
import { RiVercelLine } from "react-icons/ri";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { FadeIn } from "@/components/FadeIn"

export default function App() {
  // technologies array removed as it is not used in the return

  const projects = [
    {
      title: "E-commerce para PYME",
      description: "Tienda online completa con carrito de compras y panel administrativo",
      tech: ["React", "NestJS", "PostgreSQL"],
      size: "large",
      githubUrl: "https://github.com/C0kke",
      liveUrl: "https://ecommerce-demo.com",
      previewImage: "/previews/ecommerce.png"
    },
    {
      title: "Sistema de Gestión",
      description: "CRM personalizado para pequeñas empresas",
      tech: ["Java", "Spring Boot", "MySQL"],
      size: "medium",
      githubUrl: "https://github.com/C0kke",
      liveUrl: "https://crm-demo.com",
      previewImage: "/previews/management.png"
    },
    {
      title: "Landing Page Corporativa",
      description: "Sitio web responsivo con formulario de contacto",
      tech: ["HTML", "CSS", "JavaScript"],
      size: "medium",
      githubUrl: "https://github.com/C0kke",
      liveUrl: "https://landing-demo.com",
      previewImage: "/previews/landing.png"
    },
    {
      title: "API REST",
      description: "Backend escalable con autenticación JWT",
      tech: ["NestJS", "MongoDB"],
      size: "small",
      githubUrl: "https://github.com/C0kke"
    },
    {
      title: "Dashboard Analytics",
      description: "Panel de control con métricas en tiempo real",
      tech: ["React", "Redis"],
      size: "small",
      githubUrl: "https://github.com/C0kke"
    },
    {
      title: "App Móvil Web",
      description: "PWA para gestión de inventarios",
      tech: ["React", "PostgreSQL"],
      size: "small",
      githubUrl: "https://github.com/C0kke"
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-500/30">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-red-950/20 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent transform transition-all duration-700 hover:scale-105">
                COKKE
              </h1>
              <h2 className="text-2xl md:text-3xl font-light text-gray-300 mb-2 font-outfit">Jorge Bustos</h2>
              <p className="text-xl md:text-2xl text-red-400 font-medium tracking-wide">Desarrollador Web</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Transformo ideas en soluciones digitales. Especializado en desarrollo web moderno.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-3 group" onClick={() => window.location.href = "mailto:coke.bustos.alvarez@gmail.com"}>
                <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Contactar
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-3 group"
                onClick={() => window.location.href = "https://github.com/C0kke"}
              >
                <FaGithub className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Ver Proyectos
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-red-400">Sobre Mí</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-white font-outfit">Estudiante de Ingeniería Civil en Informática y Computación</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Mi nombre es Jorge Bustos, estoy cursando mi penúltimo año de ingeniería. Durante estos años he aprendido
                    sobre el mundo de desarrollo web. A medida que complemento mis aprendizajes con certificaciones.
                    Me especializo en crear soluciones web personalizadas, tanto páginas como aplicaciones web.
                  </p>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Con experiencia en desarrollo frontend and backend, me enfoco en entregar productos de calidad que sean
                    escalables y fáciles de mantener.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center text-red-400 bg-red-900/10 px-3 py-1.5 rounded-full border border-red-900/30">
                      <FaChrome className="mr-2 h-4 w-4" />
                      <span className="text-sm">Páginas web</span>
                    </div>
                    <div className="flex items-center text-red-400 bg-red-900/10 px-3 py-1.5 rounded-full border border-red-900/30">
                      <Code className="mr-2 h-4 w-4" />
                      <span className="text-sm">Aplicaciones Web</span>
                    </div>
                    <div className="flex items-center text-red-400 bg-red-900/10 px-3 py-1.5 rounded-full border border-red-900/30">
                      <Braces className="mr-2 h-4 w-4" />
                      <span className="text-sm">API's y Bases de Datos</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-red-900/20 to-transparent p-8 rounded-2xl border border-red-900/30 shadow-2xl backdrop-blur-sm w-full max-w-xs md:max-w-sm mx-auto">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Experiencia</span>
                        <span className="text-red-400 font-bold text-lg">2+ años</span>
                      </div>
                      <div>
                        <span className="text-gray-400 block mb-2">Certificaciones</span>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-red-900/40 text-red-300 font-semibold px-3 py-1 rounded-full text-[10px] border border-red-800/40 shadow-sm uppercase tracking-wider">
                            Oracle: Back-end Java Spring
                          </span>
                          <span className="bg-red-900/40 text-red-300 font-semibold px-3 py-1 rounded-full text-[10px] border border-red-800/40 shadow-sm uppercase tracking-wider">
                            Google UX Design
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Especialidad</span>
                        <span className="text-red-400 font-bold text-lg">Full Stack Web</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-red-400">Tecnologías</h2>
          </FadeIn>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <FadeIn delay={0.1}>
                <div className="text-center p-6 rounded-2xl border border-gray-900 hover:border-red-900/50 transition-colors bg-gray-950/50">
                  <Monitor className="h-12 w-12 text-red-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4 text-white">Frontend</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2 text-gray-400">
                      <FaReact className="h-4 w-4" />
                      <span>React</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-400">
                      <FaHtml5 className="h-4 w-4" />
                      <span>HTML5 / CSS / JS</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="text-center p-6 rounded-2xl border border-gray-900 hover:border-red-900/50 transition-colors bg-gray-950/50">
                  <Server className="h-12 w-12 text-red-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4 text-white">Backend</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2 text-gray-400">
                      <SiSpring className="h-4 w-4" />
                      <span>Java Spring</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-400">
                      <SiNestjs className="h-4 w-4" />
                      <span>NestJS</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="text-center p-6 rounded-2xl border border-gray-900 hover:border-red-900/50 transition-colors bg-gray-950/50">
                  <Database className="h-12 w-12 text-red-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4 text-white">Bases de Datos</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2 text-gray-400">
                      <SiMongodb className="h-4 w-4" />
                      <span>MongoDB</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-400">
                      <DiPostgresql className="h-5 w-5" />
                      <span>PostgreSQL</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-400">
                      <DiRedis className="h-4 w-4" />
                      <span>Redis</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="text-center p-6 rounded-2xl border border-gray-900 hover:border-red-900/50 transition-colors bg-gray-950/50">
                  <Zap className="h-12 w-12 text-red-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4 text-white">Herramientas</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2 text-gray-400">
                      <FaGithub className="h-4 w-4" />
                      <span>Github & Git</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-400">
                      <RiVercelLine className="h-4 w-4" />
                      <span>Vercel</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-400">
                      <FaCloudflare className="h-4 w-4" />
                      <span>Cloudflare</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Bento Grid */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-red-400">Proyectos</h2>
          </FadeIn>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
              {projects.map((project, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <Card
                    className={`
                      border-gray-800 hover:border-red-600 group overflow-hidden flex flex-col h-full
                      ${project.size === "large" ? "md:col-span-2 md:row-span-2" : ""}
                      ${project.size === "medium" ? "md:col-span-2" : ""}
                    `}
                  >
                  {project.previewImage && (
                    <div className={cn(
                      "relative overflow-hidden border-b border-gray-800",
                      project.size === "large" ? "h-80" : "h-40"
                    )}>
                      <img
                        src={project.previewImage}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                        {project.liveUrl && (
                          <Button size="sm" className="rounded-full" onClick={() => window.open(project.liveUrl, "_blank")}>
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </Button>
                        )}
                      </div>
                    </div>
                  )}
                  <CardContent className="p-6 flex-grow flex flex-col justify-between relative z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">{project.title}</h3>
                        {!project.previewImage && project.liveUrl && (
                          <ExternalLink className="h-5 w-5 text-gray-500 hover:text-red-400 cursor-pointer" onClick={() => window.open(project.liveUrl, "_blank")} />
                        )}
                      </div>
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-0.5 bg-red-900/10 text-red-300 text-[10px] font-semibold rounded-full border border-red-900/20 uppercase"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 relative z-10">
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 text-[11px] font-bold border-gray-700 hover:border-red-600"
                          onClick={() => window.open(project.githubUrl, "_blank")}
                        >
                          <FaGithub className="mr-2 h-3.5 w-3.5" />
                          Ver repo
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 text-[11px] font-bold text-gray-400 hover:text-red-400"
                          onClick={() => window.open(project.liveUrl, "_blank")}
                        >
                          <Globe className="mr-2 h-3.5 w-3.5" />
                          Live Demo
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer className="bg-black py-20 border-t border-gray-900">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-red-400 font-outfit">¿Listo para digitalizar tu negocio?</h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Contacta conmigo y llevemos tus ideas al siguiente nivel digital
              </p>

              <div className="grid md:grid-cols-3 gap-12 mb-16">
                <div className="flex flex-col items-center group cursor-pointer" onClick={() => window.location.href = "mailto:coke.bustos.alvarez@gmail.com"}>
                  <div className="h-16 w-16 bg-red-900/10 rounded-2xl flex items-center justify-center mb-4 border border-red-900/20 group-hover:bg-red-600 group-hover:text-white transition-all">
                    <Mail className="h-8 w-8 text-red-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-400 text-sm">coke.bustos.alvarez@gmail.com</p>
                </div>
                <div className="flex flex-col items-center group cursor-pointer" onClick={() => window.location.href = "tel:+56933995923"}>
                  <div className="h-16 w-16 bg-red-900/10 rounded-2xl flex items-center justify-center mb-4 border border-red-900/20 group-hover:bg-red-600 group-hover:text-white transition-all">
                    <Phone className="h-8 w-8 text-red-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Teléfono</h3>
                  <p className="text-gray-400 text-sm">+56 9 3399 5923</p>
                </div>
                <div className="flex flex-col items-center group">
                  <div className="h-16 w-16 bg-red-900/10 rounded-2xl flex items-center justify-center mb-4 border border-red-900/20">
                    <MapPin className="h-8 w-8 text-red-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Ubicación</h3>
                  <p className="text-gray-400 text-sm">Chile</p>
                </div>
              </div>

              <div className="flex justify-center space-x-4 mb-12">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full h-12 w-12 border-gray-800 hover:border-red-600"
                  onClick={() => window.open("https://github.com/C0kke", "_blank")}
                >
                  <FaGithub className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full h-12 w-12 border-gray-800 hover:border-red-600"
                  onClick={() => window.open("https://www.linkedin.com/in/jorge-bustos-%C3%A1lvarez-655763262/", "_blank")}
                >
                  <FaLinkedin className="h-5 w-5" />
                </Button>
              </div>

              <div className="border-t border-gray-900 pt-8 opacity-50">
                <p className="text-gray-500 text-sm tracking-widest uppercase">
                  Developed by Cokke &bull; 2024
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </footer>
    </div>
  )
}
