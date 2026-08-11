export default function SectionHeading({
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--text-secondary)] md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}