export default function Button({ children, variant = "primary", ...props }) {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-200";
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "border-2 border-gray-300 text-gray-700 hover:bg-gray-50",
    gradient: "bg-gradient-to-r from-indigo-600 to-cyan-500 text-white hover:opacity-90",
    ghost: "text-gray-700 hover:bg-gray-50"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}
