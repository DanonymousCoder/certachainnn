export default function Badge({ children, type = "default" }) {
  const styles = {
    default: "bg-gray-100 text-gray-700",
    success: "bg-green-100 text-green-700",
    verified: "bg-indigo-50 text-indigo-600",
    solana: "bg-indigo-50 text-indigo-600"
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${styles[type]}`}>
      {children}
    </span>
  );
}
