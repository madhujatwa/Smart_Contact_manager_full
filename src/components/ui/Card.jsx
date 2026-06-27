jsx
export default function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`
      bg-white
      dark:bg-slate-900
      rounded-3xl
      shadow-xl
      p-6
      ${className}
      `}
    >
      {children}
    </div>
  );
}
