import { portfolioData } from "../data/portfolio";

export default function ContactHero() {
  const { hero, email } = portfolioData.contact;
  const { socials } = portfolioData.personal;

  return (
    <div className="lg:col-span-5 flex flex-col justify-between min-h-[700px]">
      <div>
        <h1 className="text-7xl md:text-[9.5rem] font-black tracking-tighter leading-[0.85] text-on-surface mb-12">
          {hero.headline[0]} <br/>
          <span className="text-secondary italic">{hero.headline[1]}</span> <br/>
          {hero.headline[2].split(' ')[0]} <br/>
          {hero.headline[2].split(' ')[1]}
        </h1>
        <p className="text-lg text-on-surface-variant max-w-md leading-relaxed mb-16">
          {hero.description}
        </p>

        {/* Direct Email Card */}
        <div className="glass-card bg-surface-container/40 p-10 rounded-2xl border border-outline-variant/10 max-w-md hover:bg-surface-container/60 transition-all group">
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-secondary text-xl">mail</span>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-secondary">Direct Email</span>
          </div>
          <a 
            href={`mailto:${email.address}`} 
            className="text-2xl md:text-3xl font-bold text-on-surface hover:text-secondary transition-colors break-all"
          >
            {email.address}
          </a>
        </div>
      </div>

      {/* Social Badges Section */}
      <div className="flex flex-wrap gap-4 mt-12 lg:mt-0">
        {socials.map((social) => (
          <a 
            key={social.platform} 
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-surface-container/20 rounded-xl border border-outline-variant/5 hover:border-secondary/30 hover:bg-surface-container/40 transition-all group"
          >
            <span className="material-symbols-outlined text-lg text-on-surface-variant group-hover:text-secondary transition-colors">
              {social.platform === 'GitHub' ? 'code' : social.platform === 'LinkedIn' ? 'share' : 'link'}
            </span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant group-hover:text-on-surface">
              {social.platform}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
