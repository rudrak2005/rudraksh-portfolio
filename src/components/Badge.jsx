export default function Badge({ children }) {
  return (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        border border-[var(--border)]
        bg-[var(--surface)]
        px-3 py-1
        font-mono
        text-xs
        text-[var(--text-secondary)]
      "
    >
      {children}
    </span>
  );
}