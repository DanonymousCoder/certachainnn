import React, { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Sidebar from '../features/dashboard/Sidebar';
import { issueCertificate } from '../utils/api';
import { Loader2, CheckCircle, AlertCircle, Upload, FileText, X } from 'lucide-react';

const IssueCertificate = () => {
  const { publicKey } = useWallet();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const [formData, setFormData] = useState({
    student_name: '',
    student_wallet: '',
    course: '',
    grade: 'A',
    institution: 'CertaChain Academy'
  });

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!publicKey) return;

    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const data = new FormData();
      data.append('institutionWallet', publicKey.toBase58());
      
      const studentDetails = {
        ...formData,
        name: `${formData.course} Certificate`,
        description: `Verified completion of ${formData.course}`
      };
      
      data.append('studentDetails', JSON.stringify(studentDetails));
      
      if (selectedFile) {
        data.append('file', selectedFile);
      }

      const res = await issueCertificate(data);
      if (res.success) {
        setSuccess(res);
        setFormData({
          student_name: '',
          student_wallet: '',
          course: '',
          grade: 'A',
          institution: 'CertaChain Academy'
        });
        setSelectedFile(null);
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
      <main className="flex-1 w-full">
        <div className="flex items-start">
          <Sidebar />
          <section className="flex-1 p-6 lg:p-12">
            <div className="max-w-2xl mx-auto space-y-8">
              <header>
                <h1 className="text-3xl font-bold text-slate-900">Issue New Certificate</h1>
                <p className="text-slate-500 text-sm mt-2">Mint a tamper-proof academic record directly onto the Solana blockchain.</p>
              </header>

              {!publicKey ? (
                <div className="bg-white p-8 rounded-xl border border-dashed border-slate-300 text-center space-y-4">
                  <p className="text-slate-600 font-medium">Please connect your institution wallet to issue credentials.</p>
                  <div className="flex justify-center">
                    <WalletMultiButton style={{ background: '#4f46e5', borderRadius: '8px' }} />
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
                  {success && (
                    <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-lg flex items-start gap-3">
                      <CheckCircle className="text-emerald-500 shrink-0" size={20} />
                      <div>
                        <p className="text-emerald-800 font-bold text-sm">Certificate Issued Successfully!</p>
                        <p className="text-emerald-600 text-xs mt-1">Transaction recorded on Solana Devnet.</p>
                        {success.fileGatewayUrl && (
                          <a 
                            href={success.fileGatewayUrl} 
                            target="_blank" 
                            rel="noreferrer"
                            className="text-indigo-600 text-[10px] font-bold hover:underline block mt-1"
                          >
                            View Uploaded Certificate File
                          </a>
                        )}
                        <p className="text-emerald-600 text-[10px] font-mono mt-2 break-all">ID: {success.certId}</p>
                      </div>
                    </div>
                  )}

                  {error && (
                    <div className="bg-red-50 border border-red-200 p-4 rounded-lg flex items-start gap-3">
                      <AlertCircle className="text-red-500 shrink-0" size={20} />
                      <p className="text-red-800 font-medium text-sm">{error}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Student Name</label>
                      <input
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
                        placeholder="John Doe"
                        value={formData.student_name}
                        onChange={(e) => setFormData({...formData, student_name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Student Wallet (Optional)</label>
                      <input
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
                        placeholder="Enter Solana address..."
                        value={formData.student_wallet}
                        onChange={(e) => setFormData({...formData, student_wallet: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Course Name</label>
                    <input
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
                      placeholder="e.g. Master of Blockchain Architecture"
                      value={formData.course}
                      onChange={(e) => setFormData({...formData, course: e.target.value})}
                    />
                  </div>

                  {/* File Upload Section */}
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Upload Certificate File (PDF/Image)</label>
                    {!selectedFile ? (
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-200 border-dashed rounded-lg cursor-pointer bg-slate-50 hover:bg-slate-100 transition-all">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 mb-3 text-slate-400" />
                          <p className="mb-2 text-sm text-slate-500 font-semibold tracking-tight">Click to upload or drag and drop</p>
                          <p className="text-xs text-slate-400">PDF, PNG, JPG (MAX. 5MB)</p>
                        </div>
                        <input type="file" className="hidden" accept=".pdf,image/*" onChange={handleFileChange} />
                      </label>
                    ) : (
                      <div className="flex items-center justify-between p-4 bg-indigo-50 border border-indigo-100 rounded-lg">
                        <div className="flex items-center gap-3">
                          <FileText className="text-indigo-600" />
                          <div>
                            <p className="text-sm font-bold text-slate-800 truncate max-w-[200px]">{selectedFile.name}</p>
                            <p className="text-[10px] text-indigo-600 font-medium">{(selectedFile.size / 1024).toFixed(1)} KB</p>
                          </div>
                        </div>
                        <button 
                          type="button"
                          onClick={() => setSelectedFile(null)}
                          className="p-1 hover:bg-indigo-100 rounded-full transition-colors"
                        >
                          <X size={18} className="text-indigo-600" />
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Grade</label>
                      <select
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
                        value={formData.grade}
                        onChange={(e) => setFormData({...formData, grade: e.target.value})}
                      >
                        <option>A+</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        <option>Distinction</option>
                        <option>Pass</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Issuing Institution</label>
                      <input
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
                        value={formData.institution}
                        onChange={(e) => setFormData({...formData, institution: e.target.value})}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-black text-white py-4 rounded-xl font-bold text-sm shadow-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? <Loader2 className="animate-spin" size={18} /> : 'Mint On-Chain Certificate'}
                  </button>
                </form>
              )}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IssueCertificate;
