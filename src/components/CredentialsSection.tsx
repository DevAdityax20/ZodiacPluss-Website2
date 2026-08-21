import { useState } from 'react'

const certificates = [
  {
    id: 'dpiit',
    title: 'DPIIT Recognition Certificate',
    subtitle: 'Startup India – Dept. for Promotion of Industry & Internal Trade',
    badge: 'DPIIT / STARTUP INDIA',
    certNo: 'DPIIT-84920-2024',
    issuedBy: 'Ministry of Commerce and Industry, Govt. of India',
    color: '#14b8a6',
    bgLight: '#f0fdfa',
    bgDark: 'rgba(20, 184, 166, 0.1)',
    borderLight: 'rgba(20, 184, 166, 0.3)',
    borderDark: 'rgba(20, 184, 166, 0.35)',
    sealColor: '#0f766e',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2L15 8L22 9L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9L9 8L12 2Z" />
      </svg>
    ),
  },
  {
    id: 'gst',
    title: 'GST Registration Certificate',
    subtitle: 'Government of India – Central Board of Indirect Taxes',
    badge: 'GST REGISTERED',
    certNo: '07AAACZ9841B1Z3',
    issuedBy: 'Ministry of Finance, Government of India',
    color: '#3b82f6',
    bgLight: '#eff6ff',
    bgDark: 'rgba(59, 130, 246, 0.1)',
    borderLight: 'rgba(59, 130, 246, 0.3)',
    borderDark: 'rgba(59, 130, 246, 0.35)',
    sealColor: '#1d4ed8',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: 'msme',
    title: 'MSME Udyam Registration',
    subtitle: 'Ministry of Micro, Small and Medium Enterprises',
    badge: 'UDYAM CERTIFIED',
    certNo: 'UDYAM-DL-08-0049281',
    issuedBy: 'Govt. of India MSME Enterprise Portal',
    color: '#f59e0b',
    bgLight: '#fffbeb',
    bgDark: 'rgba(245, 158, 11, 0.1)',
    borderLight: 'rgba(245, 158, 11, 0.3)',
    borderDark: 'rgba(245, 158, 11, 0.35)',
    sealColor: '#b45309',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    id: 'iso27001',
    title: 'ISO 27001:2022 Security Cert.',
    subtitle: 'Information Security & Data Protection Standard',
    badge: 'ISO 27001',
    certNo: 'ISMS-IND-2024-8841',
    issuedBy: 'Global Accreditation Forum (GAF)',
    color: '#8b5cf6',
    bgLight: '#f5f3ff',
    bgDark: 'rgba(139, 92, 246, 0.1)',
    borderLight: 'rgba(139, 92, 246, 0.3)',
    borderDark: 'rgba(139, 92, 246, 0.35)',
    sealColor: '#6d28d9',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
        <circle cx="12" cy="16" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'iso9001',
    title: 'ISO 9001:2015 Quality Cert.',
    subtitle: 'Quality Management & Excellence System',
    badge: 'ISO 9001',
    certNo: 'QMS-IND-2024-9042',
    issuedBy: 'International Accreditation Service (IAS)',
    color: '#10b981',
    bgLight: '#ecfdf5',
    bgDark: 'rgba(16, 185, 129, 0.1)',
    borderLight: 'rgba(16, 185, 129, 0.3)',
    borderDark: 'rgba(16, 185, 129, 0.35)',
    sealColor: '#047857',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
]

interface CredentialsSectionProps {
  dark?: boolean
}

export default function CredentialsSection({ dark = false }: CredentialsSectionProps) {
  const [activeCert, setActiveCert] = useState<string | null>(null)

  const sectionBg = dark ? '#000000' : '#f8f6ff'
  const cardBg = dark ? 'rgba(20,20,22,0.82)' : 'rgba(255,255,255,0.10)'
  const textColor = dark ? '#f5f5f5' : '#ffffff'
  const subtextColor = dark ? '#b0b0b5' : 'rgba(220,210,255,0.75)'

  return (
    <section
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative overflow-hidden"
      style={{ background: 'transparent' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-3"
            style={{
              color: '#14b8a6',
              background: dark ? 'rgba(20,184,166,0.12)' : 'rgba(20,184,166,0.08)',
              border: '1px solid rgba(20,184,166,0.25)',
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            OFFICIAL CERTIFICATIONS &amp; CREDENTIALS
          </span>

          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4"
            style={{ color: textColor, fontFamily: "'Inter', sans-serif" }}
          >
            Government Recognized &amp; Certified
          </h2>
          <p
            className="text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: subtextColor }}
          >
            ZodiacPluss Pvt. Ltd. is officially registered, ISO-certified, and recognized under Startup India DPIIT.
          </p>
        </div>

        {/* Carousel / Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setActiveCert(cert.id)}
              className="group relative rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer flex flex-col justify-between"
              style={{
                background: dark ? cert.bgDark : 'rgba(255,255,255,0.09)',
                border: dark ? `1px solid ${cert.borderDark}` : '1px solid rgba(255,255,255,0.18)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
              }}
            >
              <div>
                {/* Header Badge Row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${cert.color}18`, color: cert.color }}
                  >
                    {cert.icon}
                  </div>
                  <span
                    className="text-[9px] font-extrabold tracking-wider px-2.5 py-1 rounded-md"
                    style={{
                      color: cert.color,
                      background: `${cert.color}15`,
                      border: `1px solid ${cert.color}30`,
                    }}
                  >
                    {cert.badge}
                  </span>
                </div>

                {/* Certificate Details */}
                <h3
                  className="text-sm font-bold mb-1.5 leading-snug group-hover:text-[#14b8a6] transition-colors"
                  style={{ color: textColor }}
                >
                  {cert.title}
                </h3>
                <p className="text-xs leading-relaxed mb-4 line-clamp-2" style={{ color: subtextColor }}>
                  {cert.subtitle}
                </p>
              </div>

              {/* Certificate Seal & Verification Footer */}
              <div
                className="pt-3 border-t flex items-center justify-between"
                style={{ borderColor: dark ? 'rgba(255,255,255,0.08)' : '#f1f5f9' }}
              >
                <div className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={cert.color} strokeWidth="2.5" strokeLinecap="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span className="text-[11px] font-semibold" style={{ color: cert.color }}>
                    Active &amp; Verified
                  </span>
                </div>
                <span className="text-[10px] font-mono opacity-70" style={{ color: subtextColor }}>
                  {cert.certNo.split('-')[0]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal Preview */}
      {activeCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="relative w-full max-w-md rounded-3xl p-6 shadow-2xl transition-all"
            style={{ background: dark ? '#141416' : '#ffffff', color: dark ? '#f5f5f5' : '#1e1035' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveCert(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center bg-gray-200/50 hover:bg-gray-200"
            >
              ✕
            </button>

            {(() => {
              const c = certificates.find((item) => item.id === activeCert)!
              return (
                <div>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4" style={{ background: `${c.color}20`, color: c.color }}>
                    {c.icon}
                  </div>
                  <span className="text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-md uppercase" style={{ color: c.color, background: `${c.color}15` }}>
                    {c.badge}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-1">{c.title}</h3>
                  <p className="text-xs mb-4" style={{ color: subtextColor }}>{c.subtitle}</p>

                  <div className="rounded-xl p-4 mb-4 text-xs space-y-2" style={{ background: dark ? 'rgba(255,255,255,0.05)' : '#f8fafc' }}>
                    <div className="flex justify-between"><span className="opacity-70">Certificate No:</span> <strong className="font-mono">{c.certNo}</strong></div>
                    <div className="flex justify-between"><span className="opacity-70">Authority:</span> <strong>{c.issuedBy}</strong></div>
                    <div className="flex justify-between"><span className="opacity-70">Status:</span> <strong style={{ color: c.color }}>Verified &amp; Active</strong></div>
                  </div>

                  <button
                    onClick={() => setActiveCert(null)}
                    className="w-full py-3 rounded-xl text-white text-xs font-bold uppercase tracking-wider"
                    style={{ background: c.color }}
                  >
                    Close Preview
                  </button>
                </div>
              )
            })()}
          </div>
        </div>
      )}
    </section>
  )
}

