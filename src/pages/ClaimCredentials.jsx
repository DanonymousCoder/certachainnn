import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { claimWallet } from '../utils/api';
import { Loader2, Mail, ShieldCheck, ExternalLink, AlertCircle } from 'lucide-react';

const ClaimCredentials = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');
  const [certId, setCertId] = useState('');

  const handleClaim = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const res = await claimWallet(email, certId);
      if (res.success) {
        setSuccess(res);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#f8f9ff] flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center p-6 py-20">
        <div className="max-w-md w-full space-y-8 text-center">
          <div className="inline-flex p-4 bg-indigo-50 rounded-2xl text-indigo-600 mb-4">
            <ShieldCheck size={40} />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-slate-900">Claim Your Credentials</h1>
            <p className="text-slate-500 mt-3">If an institution issued you a certificate via email, enter your details below to claim your on-chain wallet.</p>
          </div>

          <form onSubmit={handleClaim} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xl shadow-indigo-500/5 space-y-5 text-left">
            {success ? (
              <div className="space-y-6 text-center animate-in zoom-in duration-300">
                <div className="bg-emerald-50 text-emerald-700 p-4 rounded-xl text-sm font-medium">
                  Success! A custodial wallet has been generated for you.
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Your New Wallet Address</p>
                  <p className="text-xs font-mono bg-slate-50 p-3 rounded border border-slate-100 break-all">{success.custodialWalletAddress}</p>
                </div>
                <div className="pt-2">
                  <p className="text-sm text-slate-600 mb-4">An email with your claim link and private key access has been sent to <strong>{email}</strong>.</p>
                  <a 
                    href={success.claimLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-indigo-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all"
                  >
                    Go to Claim Portal <ExternalLink size={14} />
                  </a>
                </div>
                <button 
                  onClick={() => setSuccess(null)}
                  className="text-xs text-indigo-600 font-bold hover:underline"
                >
                  Claim another certificate
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 text-slate-400" size={18} />
                    <input
                      required
                      type="email"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
                      placeholder="alex@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Certificate ID</label>
                  <input
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
                    placeholder="Enter the ID from your notification..."
                    value={certId}
                    onChange={(e) => setCertId(e.target.value)}
                  />
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-red-500 text-xs font-bold bg-red-50 p-3 rounded-lg border border-red-100">
                    <AlertCircle size={14} /> {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-black text-white py-4 rounded-xl font-bold text-sm shadow-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 disabled:opacity-50 mt-2"
                >
                  {loading ? <Loader2 className="animate-spin" size={18} /> : 'Claim My Wallet'}
                </button>
              </>
            )}
          </form>

          <p className="text-xs text-slate-400">
            By claiming, you agree to our terms. Your private key is encrypted and stored securely until you transfer ownership.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ClaimCredentials;
