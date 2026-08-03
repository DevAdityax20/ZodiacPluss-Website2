/* ── Company Certifications & Licences ──────────────────────────── */

const credentials = [
  {
    title: 'GST Registered',
    subtitle: 'Government of India',
    badge: 'GST',
    color: '#14b8a6',
    bg: 'rgba(20,184,166,0.08)',
    border: 'rgba(20,184,166,0.25)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    title: 'DPIIT Recognition',
    subtitle: 'Startup India – Dept. for Promotion of Industry & Internal Trade',
    badge: 'DPIIT',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.08)',
    border: 'rgba(139,92,246,0.25)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    title: 'MSME Registered',
    subtitle: 'Udyam Registration Certificate',
    badge: 'MSME',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.25)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
  },
  {
    title: 'ISO 27001:2022 Certified',
    subtitle: 'Information Security Management System',
    badge: 'ISO',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.08)',
    border: 'rgba(6,182,212,0.25)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="5" y="11" width="14" height="10" rx="2"/>
        <path d="M8 11V7a4 4 0 0 1 8 0v4"/>
        <circle cx="12" cy="16" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: 'ISO 9001:2015 Certified',
    subtitle: 'Quality Management System',
    badge: 'ISO',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.25)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
  },
]

interface CredentialsSectionProps {
  compact?: boolean
}

export default function CredentialsSection({ compact = false }: CredentialsSectionProps) {
  return (
    <section
      style={{
        background: compact ? 'transparent' : 'linear-gradient(180deg, #f0fdf9 0%, #f8f6ff 100%)',
        padding: compact ? '40px 0 0' : 'clamp(56px,7vw,80px) 24px',
      }}
    >
      {!compact && (
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
            color: '#14b8a6', textTransform: 'uppercase', marginBottom: 12,
          }}>
            Verified & Recognised
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(26px, 3.5vw, 40px)',
            fontWeight: 700, color: '#1a1060', margin: '0 0 12px',
          }}>
            Our Credentials &amp; Licences
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 15, color: '#6b7280', maxWidth: 520, margin: '0 auto',
          }}>
            ZodiacPluss is a registered, certified, and government-recognised private limited company.
          </p>
        </div>
      )}

      {compact && (
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
          color: '#14b8a6', textTransform: 'uppercase', marginBottom: 20,
        }}>
          Our Credentials
        </p>
      )}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 16,
          maxWidth: compact ? '100%' : 1100,
          margin: compact ? 0 : '0 auto',
        }}
      >
        {credentials.map((c, i) => (
          <div
            key={i}
            style={{
              background: c.bg,
              border: `1px solid ${c.border}`,
              borderRadius: 16,
              padding: '20px 20px 18px',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              transition: 'transform 0.18s, box-shadow 0.18s',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'
              ;(e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 24px ${c.color}22`
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'none'
              ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
            }}
          >
            {/* Icon + badge row */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ color: c.color }}>{c.icon}</div>
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 9, fontWeight: 900, letterSpacing: '0.1em',
                color: c.color, background: `${c.color}18`,
                border: `1px solid ${c.color}30`,
                borderRadius: 6, padding: '2px 7px',
              }}>
                {c.badge}
              </span>
            </div>

            {/* Shield check mark */}
            <div>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 13.5, fontWeight: 800, color: '#1a1060',
                margin: '0 0 4px', lineHeight: 1.3,
              }}>{c.title}</p>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11, color: '#6b7280',
                margin: 0, lineHeight: 1.5,
              }}>{c.subtitle}</p>
            </div>

            {/* Verified tick */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 5, marginTop: 2,
            }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={c.color} strokeWidth="2.5" strokeLinecap="round">
                <path d="m20 6-11 11-5-5"/>
              </svg>
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 10.5, fontWeight: 600, color: c.color,
              }}>Verified &amp; Active</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
