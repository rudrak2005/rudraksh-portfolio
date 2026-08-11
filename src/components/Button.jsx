export default function Button({
  children,
  href,
  variant = "primary",
}) {
  const styles =
    variant === "primary"
      ? `
        bg-[var(--text-primary)]
        text-black
        hover:-translate-y-1
        hover:shadow-[0_10px_30px_rgba(255,255,255,0.08)]
      `
      : `
        border
        border-[var(--border)]
        bg-transparent
        text-[var(--text-primary)]
        hover:-translate-y-1
        hover:bg-[var(--surface)]
      `;

  return (
    <a
      href={href}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-xl
        px-5
        py-3
        text-sm
        font-medium
        transition-all
        duration-300
        ${styles}
      `}
    >
      {children}
    </a>
  );
}