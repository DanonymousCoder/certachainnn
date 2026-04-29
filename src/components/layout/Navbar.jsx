export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-900">CertaChain</div>
        <div className="hidden md:flex items-center gap-8">
          <button className="text-gray-700 hover:text-gray-900 font-medium">Institutions</button>
          <button className="text-gray-700 hover:text-gray-900 font-medium">Students</button>
          <button className="text-gray-700 hover:text-gray-900 font-medium">Employers</button>
        </div>
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
}
