export default function TechnicalArsenal() {
  const techStack = [
    { name: "C", bg: "bg-blue-900" },
    { name: "C++", bg: "bg-blue-800" },
    { name: "CSS3", bg: "bg-[#264de4]" },
    { name: "JAVASCRIPT", bg: "bg-[#f7df1e]", text: "text-black" },
    { name: "JAVA", bg: "bg-[#5382a1]" },
    { name: "HTML5", bg: "bg-[#e34c26]" },
    { name: "TYPESCRIPT", bg: "bg-[#3178c6]" },
    { name: "PYTHON", bg: "bg-[#3776ab]" },
    { name: "VERCEL", bg: "bg-black", border: "border-outline-variant/20" },
    { name: "FIREBASE", bg: "bg-[#ffca28]", text: "text-black" },
    { name: "NETLIFY", bg: "bg-[#00c7b7]", text: "text-black" },
    { name: "AWS", bg: "bg-[#ff9900]", text: "text-black" },
    { name: "VITE", bg: "bg-[#646cff]" },
    { name: "VUE.JS", bg: "bg-[#4fc08d]", text: "text-black" },
    { name: "THREEJS", bg: "bg-black", border: "border-outline-variant/10" },
    { name: "TAILWIND CSS", bg: "bg-[#38bdf8]", text: "text-black" },
    { name: "REACT", bg: "bg-[#61dafb]", text: "text-black" },
    { name: "NEXT.JS", bg: "bg-white", text: "text-black" },
    { name: "NODE.JS", bg: "bg-[#339933]" },
    { name: "NPM", bg: "bg-[#cb3837]" },
    { name: "FLUTTER", bg: "bg-[#02569b]" },
    { name: "FIGMA", bg: "bg-[#f24e1e]" },
    { name: "GIT", bg: "bg-[#f05032]" },
    { name: "GITHUB", bg: "bg-[#181717]", border: "border-outline-variant/10" },
    { name: "MYSQL", bg: "bg-[#4479a1]" },
    { name: "MONGODB", bg: "bg-[#47a248]", text: "text-black" },
    { name: "POSTGRES", bg: "bg-[#4169e1]" },
    { name: "DOCKER", bg: "bg-[#2496ed]" },
    { name: "ESLINT", bg: "bg-[#4b32c3]" },
    { name: "PRETTIER", bg: "bg-[#f7b93e]", text: "text-black" },
    { name: "PRISMA", bg: "bg-[#2d3748]" },
    { name: "SUPABASE", bg: "bg-[#3ecf8e]", text: "text-black" },
  ];

  return (
    <section id="projects" className="py-24 bg-background border-t border-outline-variant/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px w-12 bg-outline-variant" />
          <h2 className="text-2xl font-bold tracking-tight text-on-surface">Technical Arsenal</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3">
          {techStack.map((tech) => (
            <div 
              key={tech.name}
              className={`flex items-center justify-center p-3 rounded-md border border-transparent transition-all hover:scale-105 hover:z-10 cursor-default shadow-lg ${tech.bg} ${tech.text || "text-white/90"} ${tech.border || ""}`}
            >
              <span className="text-[10px] sm:text-xs font-black tracking-widest uppercase">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
