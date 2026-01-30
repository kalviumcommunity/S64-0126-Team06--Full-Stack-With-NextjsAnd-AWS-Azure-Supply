type ProjectCardProps = {
  category: string;
  categoryClass: string;
  title: string;
  description: string;
  avatars: string[];
  progress: number;
  nextDeadline: string;
  statusDot: "green" | "orange" | "gray";
  statusText: string;
};

export function ProjectCard({
  category,
  categoryClass,
  title,
  description,
  avatars,
  progress,
  nextDeadline,
  statusDot,
  statusText,
}: ProjectCardProps) {
  const dotClass =
    statusDot === "green"
      ? "bg-emerald-500"
      : statusDot === "orange"
        ? "bg-amber-400"
        : "bg-slate-300";

  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <span
            className={`inline-block rounded-md px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${categoryClass}`}
          >
            {category}
          </span>
          <h3 className="mt-2 text-base font-semibold text-slate-800">{title}</h3>
          <p className="mt-1 text-sm leading-snug text-slate-500">{description}</p>
        </div>
        <button
          type="button"
          className="shrink-0 rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
          aria-label="Options"
        >
          ⋯
        </button>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex -space-x-2">
          {avatars.map((label, i) => (
            <div
              key={i}
              className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-slate-100 text-xs font-medium text-slate-600 shadow-sm"
            >
              {label}
            </div>
          ))}
        </div>
        <div className="text-right">
          <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
            Next Deadline
          </p>
          <p className="text-sm font-semibold text-slate-800">{nextDeadline}</p>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>Progress</span>
          <span className="font-semibold text-slate-700">{progress}%</span>
        </div>
        <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-blue-500 transition-all"
            style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
          />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
        <div className="flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${dotClass}`} aria-hidden />
          <span className="text-xs text-slate-500">{statusText}</span>
        </div>
        <button
          type="button"
          className="text-sm font-medium text-blue-600 hover:text-blue-500"
        >
          View Details
        </button>
      </div>
    </article>
  );
}
