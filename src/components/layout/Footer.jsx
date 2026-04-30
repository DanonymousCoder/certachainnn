export default function Footer() {
  const links = [
    { label: "PROTOCOL DOCS", href: "#" },
    { label: "SECURITY AUDIT", href: "#" },
    { label: "PRIVACY POLICY", href: "#" },
    { label: "TERMS", href: "#" }
  ];

  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-6 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm font-semibold text-gray-600">
            © 2026 CERTACHAIN PROTOCOL. SOLANA-VERIFIED ACADEMIC LEDGER.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-gray-600 hover:text-indigo-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
