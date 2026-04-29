export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 ${className}`}>
      {children}
    </div>
  );
}
