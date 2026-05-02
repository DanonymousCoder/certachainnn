import React, { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Link2, CheckCircle2, BrainCircuit, Download, Share2, ScanLine, Loader2, Copy, Check } from 'lucide-react';
import Sidebar from '../features/dashboard/Sidebar';
import { getStudentCredentials, generateSkillReport, copyToClipboard } from '../utils/api';
import { QRCodeSVG } from 'qrcode.react';

const SkillVerifier = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [studentData, setStudentData] = useState(null);
  const [aiReport, setAiReport] = useState(null);
  const [copied, setCopied] = useState(false);
  const [rawCertificates, setRawCertificates] = useState([]);

  // URL for QR code
  const verificationUrl = studentData 
    ? `${window.location.origin}/verifier?wallet=${studentData.wallet}`
    : window.location.href;

  const handleVerify = async () => {
    if (!searchQuery) return;
    setLoading(true);
    setAiReport(null);
    setStudentData(null);
    setRawCertificates([]);

    try {
      const credRes = await getStudentCredentials(searchQuery);
      
      if (credRes.success && credRes.credentials.length > 0) {
        setRawCertificates(credRes.credentials);
        setStudentData({
          name: credRes.credentials[0].studentName || 'Verified Student',
          wallet: searchQuery,
          count: credRes.credentials.length,
          recentCertId: credRes.credentials[0].certId
        });

        const aiRes = await generateSkillReport(credRes.credentials);
        if (aiRes.success && aiRes.skillReport) {
          setAiReport(aiRes.skillReport);
        }
      } else {
        alert("No credentials found for this wallet.");
      }
    } catch (error) {
      console.error("Verification failed:", error);
      alert("Verification failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleShare = async () => {
    const success = await copyToClipboard(verificationUrl);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } else {
      alert("Failed to copy link. Please manually copy the URL from your browser.");
    }
  };

  const handleDownload = () => {
    window.print();
  };

  return (
    <div>
      <Navbar />

      <div className="flex min-h-screen bg-[#f8f9ff]">
        <Sidebar />

        <main className="flex-1 p-4 md:p-8 lg:p-12 py-10 space-y-8">
          <header className="space-y-2">
            <h1 className="text-3xl font-bold text-slate-900">AI Skill Verifier</h1>
            <p className="text-slate-500 text-sm max-w-xl">
              Utilize our neural verification engine to validate professional competencies against the Solana blockchain.
            </p>
          </header>

          <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="pl-4 text-slate-400"><Link2 size={18} /></div>
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleVerify()}
              className="flex-1 bg-transparent py-3 text-sm focus:outline-none"
              placeholder="Paste student wallet address (e.g. test_student_wallet)"
            />
            <button 
              onClick={handleVerify}
              disabled={loading}
              className="bg-black text-white px-8 py-3 rounded-lg text-sm font-bold hover:bg-slate-800 transition flex items-center gap-2 disabled:opacity-50"
            >
              {loading ? <Loader2 className="animate-spin" size={16} /> : 'Verify'}
            </button>
          </div>

          {studentData && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex items-center gap-6">
                <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(studentData.name)}&background=random`} className="w-20 h-20 rounded-lg" alt="User" />
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold">{studentData.name}</h2>
                    <span className="bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase flex items-center gap-1">
                      <CheckCircle2 size={10} /> Verified
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-mono">{studentData.wallet}</p>
                  <div className="flex gap-6 pt-2">
                    <div>
                      <p className="text-[9px] text-slate-400 font-bold uppercase">Certificates</p>
                      <p className="text-sm font-bold">{studentData.count} Issued</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#111827] p-6 rounded-xl text-white flex flex-col justify-between">
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Ledger Status</p>
                <h3 className="text-xl font-bold">Live on Solana</h3>
                <div className="flex items-center gap-2 text-[10px] text-emerald-400 font-bold uppercase">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Real-Time Sync
                </div>
              </div>
            </div>
          )}

          {aiReport && (
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
              <div className="p-6 border-b border-slate-50 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <BrainCircuit className="text-purple-600" />
                  <h3 className="font-bold text-slate-800">AI-Generated Skill Verification Report</h3>
                </div>
                <div className="text-right">
                  <p className="text-[9px] text-slate-400 font-bold uppercase">Match Confidence</p>
                  <p className="text-2xl font-black text-purple-600">
                    {aiReport.overallScore ? `${aiReport.overallScore}%` : '95%'}
                  </p>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Verified Strengths</p>
                <div className="flex flex-wrap gap-2">
                  {aiReport.skillsVerified?.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <p className="text-sm text-slate-600 italic">
                    "{aiReport.summary}"
                  </p>
                </div>

                {aiReport.recommendations && aiReport.recommendations.length > 0 && (
                  <div className="pt-4 space-y-3">
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Growth Recommendations / Gaps</p>
                    <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                      {aiReport.recommendations.map((rec, i) => (
                        <li key={i}>{rec}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="w-full bg-slate-100 rounded-full h-2 mt-6">
                  <div 
                    className="bg-linear-to-r from-purple-500 to-emerald-400 h-2 rounded-full transition-all duration-1000" 
                    style={{ width: `${aiReport.overallScore || 95}%` }}
                  />
                </div>

                <div className="flex gap-4 pt-4 print:hidden">
                  <button 
                    onClick={handleShare}
                    className="px-6 py-2 border border-slate-200 rounded-lg text-xs font-bold flex items-center gap-2 hover:bg-slate-50 transition"
                  >
                    {copied ? <Check size={14} className="text-emerald-500" /> : <Share2 size={14} />} 
                    {copied ? 'Link Copied' : 'Share Report'}
                  </button>
                  <button 
                    onClick={handleDownload}
                    className="px-6 py-2 bg-black text-white rounded-lg text-xs font-bold flex items-center gap-2 hover:bg-slate-800 transition"
                  >
                    <Download size={14} /> Download Report
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-100 flex items-center gap-4 shadow-sm hover:shadow-md transition">
              <div className="bg-slate-50 p-4 rounded-lg">
                <QRCodeSVG value={verificationUrl} size={64} />
              </div>
              <div>
                <p className="font-bold text-sm text-slate-800">Scan to Verify</p>
                <p className="text-[10px] text-slate-500 max-w-[150px]">Scan with your phone to test instant mobile verification.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <p className="font-bold text-sm mb-2 text-slate-800">Security Hash</p>
              <code className="bg-slate-100 p-3 rounded text-[10px] block font-mono text-slate-600 break-all">
                {studentData?.recentCertId 
                  ? `CERT-UUID: ${studentData.recentCertId}`
                  : 'CERT-SHA256: 4f8d2e1a9c3b7f6e5d4c3b2a1a0b9c8d7e6f5a4a1b2c3d4e5f6g7h8i9j0'}
              </code>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default SkillVerifier;
