jsx
export default function Button({
  children,
  type = "button",
  onClick,
  className = "",
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-6 py-3
        rounded-xl
        bg-gradient-to-r
        from-blue-600
        to-indigo-600
        text-white
        font-semibold
        shadow-md
        hover:scale-105
        duration-300
        disabled:opacity-50
        ${className}
      `}
    >
      {children}
    </button>
  );
}

