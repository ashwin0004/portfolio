export default function TimelineItem({ 
  period, 
  title, 
  company, 
  description, 
  tags, 
  icon, 
  color, 
  isLeft 
}: { 
  period: string; 
  title: string; 
  company: string; 
  description: string; 
  tags: string[]; 
  icon: string; 
  color: string; 
  isLeft: boolean;
}) {
  return (
    <div className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 mb-32 group ${isLeft ? "" : "md:flex-row-reverse"}`}>
      {/* Content Box */}
      <div className={`flex flex-col items-start ${isLeft ? "md:items-end md:text-right" : "md:order-2"}`}>
        <div className="glass-card p-8 rounded-xl transition-all duration-500 hover:bg-surface-bright/40 hover:translate-y-[-4px]">
          <span className={`text-${color} font-mono text-sm mb-2 block`}>{period}</span>
          <h3 className="text-2xl font-bold text-on-surface mb-1">{title}</h3>
          <p className={`${color === 'primary' ? 'text-primary' : color === 'secondary' ? 'text-secondary' : 'text-on-surface-variant'} font-medium mb-4`}>
            {company}
          </p>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6 max-w-md">
            {description}
          </p>
          <div className={`flex flex-wrap gap-2 ${isLeft ? "md:justify-end" : ""}`}>
            {tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-[10px] uppercase tracking-wider rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Visual Marker */}
      <div className="absolute left-4 md:left-1/2 top-10 -translate-x-1/2 z-10 hidden md:block">
        <div className={`w-4 h-4 rounded-full bg-${color} ring-8 ring-${color}/10 shadow-[0_0_15px_rgba(var(--${color}-rgb),0.8)]`}></div>
      </div>

      {/* Accessory Icon */}
      <div className={`order-1 self-center flex ${isLeft ? "justify-start pl-12 md:pl-0" : "hidden md:flex md:order-1 justify-end pr-12 md:pr-0"}`}>
        <div className="opacity-10 group-hover:opacity-40 transition-opacity duration-700">
          <span className={`material-symbols-outlined text-8xl text-${color}`} style={{ fontVariationSettings: "'opsz' 48" }}>
            {icon}
          </span>
        </div>
      </div>
    </div>
  );
}
