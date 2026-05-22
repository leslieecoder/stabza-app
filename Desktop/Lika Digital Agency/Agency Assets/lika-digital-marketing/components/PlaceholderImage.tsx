import Image from "next/image";
import type { PlaceholderAccent, PlaceholderImage as PlaceholderImageType } from "@/config/client";

type PlaceholderImageProps = {
  image: PlaceholderImageType;
  className?: string;
  variant?: "card" | "gallery" | "split" | "service";
};

const accentStyles: Record<PlaceholderAccent, string> = {
  cyan: "from-[#7c7cff]/30 via-sky-300/10 to-slate-950/78 border-white/10 text-cyan-100",
  emerald: "from-emerald-400/24 via-emerald-300/10 to-slate-950/78 border-white/10 text-emerald-100",
  violet: "from-violet-400/28 via-fuchsia-300/10 to-slate-950/78 border-white/10 text-violet-100",
  amber: "from-amber-300/24 via-orange-300/10 to-slate-950/78 border-white/10 text-amber-50",
  rose: "from-rose-400/28 via-pink-300/10 to-slate-950/78 border-white/10 text-rose-50",
};

const variantStyles = {
  card: "aspect-[16/10] rounded-[var(--radius-card)] p-5",
  service: "aspect-square rounded-[1.75rem] p-5",
  gallery: "aspect-[4/3] rounded-[var(--radius-card)] p-5",
  split: "aspect-[5/4] rounded-(--radius-section) p-6 sm:p-8",
} as const;

const imageSizes = {
  card: "(min-width: 768px) 30vw, 100vw",
  service: "12rem",
  gallery: "(min-width: 1280px) 24rem, (min-width: 640px) 45vw, 100vw",
  split: "(min-width: 1024px) 32rem, 100vw",
} as const;

export function PlaceholderImage({ image, className = "", variant = "card" }: PlaceholderImageProps) {
  const accent = accentStyles[image.accent ?? "cyan"];
  const shape = variantStyles[variant];

  if (image.src) {
    return (
      <div
        role="img"
        aria-label={image.alt}
        className={`relative overflow-hidden ${variant === "service" ? "border-0 bg-transparent" : "border border-(--panel-border) bg-(--card-background)"} ${shape} ${className}`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={imageSizes[variant]}
          className={variant === "service" ? "object-contain p-4" : "object-cover"}
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={image.alt}
      className={`relative overflow-hidden border bg-linear-to-br ${accent} ${shape} ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_32%),linear-gradient(135deg,rgba(15,23,42,0.1),rgba(2,6,23,0.65))]" />
      <div className="absolute right-4 top-4 h-16 w-16 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute bottom-4 left-4 h-20 w-20 rounded-full bg-white/10 blur-3xl" />
      <div className="relative flex h-full items-end">
        <div className="rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 backdrop-blur-xl">
          <p className="text-sm font-semibold tracking-wide text-white">{image.label}</p>
        </div>
      </div>
    </div>
  );
}
