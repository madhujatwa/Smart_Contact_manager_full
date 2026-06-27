jsx
export default function Input({
  label,
  icon,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
}) {
  return (
    <div>
      <label className="block mb-2 font-medium">
        {label}
      </label>

      <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-xl px-4">

        {icon && (
          <span className="text-slate-400 mr-2">
            {icon}
          </span>
        )}

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full bg-transparent p-4 outline-none"
        />
      </div>
    </div>
  );
}

