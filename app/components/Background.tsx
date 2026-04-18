import { User, GraduationCap } from "lucide-react";

export default function Background() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px w-12 bg-outline-variant" />
          <h2 className="text-2xl font-bold tracking-tight text-on-surface">Background</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* About Me Card */}
          <div className="group relative rounded-2xl border border-outline-variant/10 bg-surface-container p-8 transition-all hover:border-primary/20 hover:bg-surface-container-high">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <User className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-on-surface">About Me</h3>
            <div className="space-y-4 text-on-surface-variant leading-relaxed">
              <p>
                I am a final-year BCA student at Kannur University with a profound passion for frontend development, UI/UX design, performance optimization, and web accessibility. I believe that great code is invisible, letting the user experience take center stage.
              </p>
              <p>
                My approach blends technical rigor with design thinking, ensuring that the applications I build are not only functionally robust but aesthetically refined and intuitive to navigate.
              </p>
            </div>
          </div>

          {/* Education Card */}
          <div className="group relative rounded-2xl border border-outline-variant/10 bg-surface-container p-8 transition-all hover:border-secondary/20 hover:bg-surface-container-high">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-on-surface">Education</h3>
            
            <div className="space-y-6">
              <div>
                <p className="font-medium text-on-surface">Bachelor of Computer Applications</p>
                <p className="text-sm text-on-surface-variant">Kannur University</p>
                <div className="mt-2 inline-flex rounded-md bg-surface-container-highest px-2 py-1 text-xs font-mono text-on-surface-variant uppercase">
                  2023 — 2026
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
