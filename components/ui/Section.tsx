import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bg?: "white" | "cream" | "navy";
  id?: string;
}

export default function Section({ children, className, bg = "white", id }: SectionProps) {
  const bgMap = {
    white: "bg-white",
    cream: "bg-cream",
    navy: "bg-navy text-white",
  };

  return (
    <section id={id} className={cn("py-16 lg:py-24", bgMap[bg], className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({ eyebrow, title, subtitle, centered = true, light = false }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", centered && "text-center max-w-2xl mx-auto")}>
      {eyebrow && (
        <p className={cn("text-sm font-semibold uppercase tracking-widest mb-3", light ? "text-gold-light" : "text-navy-light")}>
          {eyebrow}
        </p>
      )}
      <h2 className={cn("font-serif text-3xl lg:text-4xl font-bold", light ? "text-white" : "text-navy")}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-lg leading-relaxed", light ? "text-white/70" : "text-slate")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
