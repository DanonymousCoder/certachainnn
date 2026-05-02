import { ExternalLink, Landmark, Shield, Briefcase, Award, Download } from 'lucide-react';

const CredentialCard = ({ title, issuer, date, type, icon, certId, ipfsGatewayUrl, fileGatewayUrl }) => {
  const hasLiveData = Boolean(title || issuer || certId);

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative group overflow-hidden">
      <Shield className="absolute -right-4 -bottom-4 w-24 h-24 text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex justify-between items-start mb-6">
        <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600">
          {icon === 'edu' && <Landmark size={20} />}
          {icon === 'shield' && <Shield size={20} />}
          {icon === 'code' && <Briefcase size={20} />}
          {icon === 'license' && <Award size={20} />}
          {!icon && <Shield size={20} />}
        </div>
        <span className="text-[9px] font-black bg-slate-50 text-slate-400 px-2 py-1 rounded border border-slate-100 tracking-widest uppercase">
          {type || 'Credential'}
        </span>
      </div>

      {hasLiveData ? (
        <>
          <div className="space-y-1 mb-8">
            <h3 className="font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">{title}</h3>
            <p className="text-xs text-slate-500 break-all">{issuer}</p>
            <p className="text-[10px] font-bold text-slate-300 tracking-tighter uppercase">{date}</p>
          </div>

          <div className="flex justify-between items-center gap-4 pt-4 border-t border-slate-50">
            <div className="min-w-0">
              <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Certificate ID</p>
              <span className="text-[10px] font-mono text-slate-400 break-all">{certId}</span>
            </div>
            {ipfsGatewayUrl || fileGatewayUrl ? (
              <div className="flex flex-col gap-2 shrink-0">
                {ipfsGatewayUrl && (
                  <a
                    href={ipfsGatewayUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[9px] font-bold text-indigo-500 flex items-center gap-1 hover:underline"
                  >
                    Metadata <ExternalLink size={10} />
                  </a>
                )}
                {fileGatewayUrl && (
                  <a
                    href={fileGatewayUrl}
                    target="_blank"
                    rel="noreferrer"
                    download
                    className="text-[9px] font-bold text-emerald-600 flex items-center gap-1 hover:underline bg-emerald-50 px-2 py-1 rounded-lg transition-all hover:bg-emerald-100"
                  >
                    <Download size={10} /> Download File
                  </a>
                )}
              </div>
            ) : null}
          </div>
        </>
      ) : (
        <div className="space-y-3">
          <h3 className="font-bold text-slate-800">Live credentials appear here</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Connect a wallet or verify a student record to load real certificate data from the API.
          </p>
        </div>
      )}
    </div>
  );
};

export default CredentialCard;
