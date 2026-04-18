import Image from "next/image";
import { portfolioData, ProjectItem } from "../data/portfolio";

export default function ProjectGrid() {
  const projects = portfolioData.projects.list as ProjectItem[];

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
      {projects.map((project) => (
        <div 
          key={project.id} 
          className={`${project.colSpan} group relative overflow-hidden rounded-xl bg-surface-container border border-outline-variant/15 hover:bg-surface-bright transition-all duration-500`}
        >
          <div className={project.fullWidth ? "grid md:grid-cols-2 items-center" : ""}>
            {/* Image Container */}
            <div className={`relative overflow-hidden ${project.fullWidth ? "order-1 md:order-2 h-full min-h-[400px]" : "aspect-video w-full"}`}>
              <Image
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                src={project.image}
                fill={project.fullWidth}
                width={project.fullWidth ? undefined : 1200}
                height={project.fullWidth ? undefined : 675}
                unoptimized
              />
              {project.fullWidth && (
                <div className="absolute inset-0 bg-linear-to-r from-surface-container via-transparent to-transparent hidden md:block"></div>
              )}
            </div>

            {/* Content Area */}
            <div className={`p-8 ${project.fullWidth ? "md:p-16 order-2 md:order-1" : "md:p-12"}`}>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className={`px-3 py-1 bg-surface-container-highest ${tag === 'Full Stack' ? 'text-secondary font-bold' : 'text-on-surface-variant'} text-[10px] uppercase tracking-widest rounded-full`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className={`${project.fullWidth ? "text-4xl font-black tracking-tight" : "text-3xl font-bold"} mb-4`}>
                {project.title}
              </h2>
              <p className={`text-on-surface-variant ${project.fullWidth ? "text-lg mb-10" : "text-sm mb-8"} leading-relaxed max-w-xl`}>
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-6 items-center">
                {project.links.map((link, idx) => {
                  if (link.button) {
                    return (
                      <a key={idx} href={link.href} className="bg-gradient-primary text-on-primary text-center px-10 py-3 rounded-lg font-bold transition-all hover:shadow-[0_0_20px_rgba(175,162,255,0.2)] w-full block">
                        {link.label}
                      </a>
                    );
                  }
                  if (link.underline) {
                    return (
                      <a key={idx} href={link.href} className="text-center w-full text-sm text-on-surface-variant hover:text-secondary transition-colors underline decoration-secondary/20 underline-offset-4">
                        {link.label}
                      </a>
                    );
                  }
                  if (link.fill) {
                    return (
                      <button key={idx} className="px-8 py-3 bg-white text-black font-bold rounded-lg transition-transform active:scale-95">
                        {link.label}
                      </button>
                    );
                  }
                  return (
                    <a 
                      key={idx} 
                      href={link.href} 
                      className={`inline-flex items-center gap-2 ${link.primary ? 'text-primary font-semibold' : link.secondary ? 'text-secondary font-medium hover:brightness-125' : 'text-on-surface-variant hover:text-white'} transition-all group/link`}
                    >
                      {link.icon && <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">{link.icon}</span>}
                      {link.label}
                      {link.primary && !link.icon && <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
