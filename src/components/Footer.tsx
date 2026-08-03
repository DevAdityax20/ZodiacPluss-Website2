import { useState } from 'react'

interface FooterProps {
  onNavigate: (page: string) => void
}

/* ─── Ethereal woman illustration ─── */
function WomanFigure() {
  return (
    <svg
      viewBox="0 0 120 180"
      width="120"
      height="180"
      style={{ display: 'block', overflow: 'visible' }}
    >
      <defs>
        {/* Outer ambient glow */}
        <radialGradient id="fAmbient" cx="50%" cy="48%" r="52%">
          <stop offset="0%" stopColor="#7fffd4" stopOpacity="0.22" />
          <stop offset="60%" stopColor="#14b8a6" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
        </radialGradient>
        {/* Head skin */}
        <radialGradient id="fHead" cx="50%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#e8faf6" stopOpacity="1" />
          <stop offset="100%" stopColor="#a8e6da" stopOpacity="0.9" />
        </radialGradient>
        {/* Dress gradient */}
        <linearGradient id="fDress" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#b0f0e4" stopOpacity="0.70" />
          <stop offset="50%" stopColor="#68d8c8" stopOpacity="0.50" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.28" />
        </linearGradient>
        {/* Hair */}
        <linearGradient id="fHair" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c8f0e8" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#68c8b8" stopOpacity="0.60" />
        </linearGradient>
        {/* Lotus */}
        <radialGradient id="fLotus" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#b0f4e8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.4" />
        </radialGradient>
        {/* Inner halo */}
        <radialGradient id="fHalo" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#e0fff8" stopOpacity="0.30" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
        </radialGradient>
        {/* Soft glow filter */}
        <filter id="fGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="fGlow2" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ── Outer ambient glow ellipse ── */}
      <ellipse cx="60" cy="90" rx="52" ry="68" fill="url(#fAmbient)" />

      {/* ── Inner halo ── */}
      <ellipse cx="60" cy="82" rx="34" ry="50" fill="url(#fHalo)" />

      {/* ── Ring decorations ── */}
      <ellipse cx="60" cy="100" rx="44" ry="56" fill="none"
        stroke="rgba(20,184,166,0.10)" strokeWidth="1" />
      <ellipse cx="60" cy="100" rx="32" ry="42" fill="none"
        stroke="rgba(20,184,166,0.14)" strokeWidth="0.8" />

      {/* ── Hair (behind head) ── */}
      {/* Left hair flow */}
      <path d="M44 30 Q34 42 36 60 Q34 70 38 80"
        stroke="url(#fHair)" strokeWidth="5" fill="none"
        strokeLinecap="round" opacity="0.7" />
      {/* Right hair flow */}
      <path d="M76 30 Q86 42 84 60 Q86 70 82 80"
        stroke="url(#fHair)" strokeWidth="5" fill="none"
        strokeLinecap="round" opacity="0.7" />

      {/* ── Head ── */}
      <circle cx="60" cy="26" r="14" fill="url(#fHead)" filter="url(#fGlow)" opacity="0.95" />
      {/* Face highlight */}
      <ellipse cx="57" cy="22" rx="5" ry="6" fill="white" opacity="0.25" />

      {/* ── Neck ── */}
      <rect x="56" y="38" width="8" height="10" rx="4"
        fill="rgba(180,240,228,0.65)" />

      {/* ── Shoulders ── */}
      <path d="M38 52 Q60 44 82 52"
        stroke="rgba(176,240,228,0.55)" strokeWidth="5"
        fill="none" strokeLinecap="round" />

      {/* ── Arms ── */}
      {/* Left arm */}
      <path d="M42 54 Q32 66 30 82 Q29 90 34 96"
        stroke="rgba(176,240,228,0.50)" strokeWidth="4"
        fill="none" strokeLinecap="round" />
      {/* Right arm */}
      <path d="M78 54 Q88 66 90 82 Q91 90 86 96"
        stroke="rgba(176,240,228,0.50)" strokeWidth="4"
        fill="none" strokeLinecap="round" />

      {/* ── Hands (small circles) ── */}
      <circle cx="34" cy="97" r="4" fill="rgba(180,240,228,0.50)" />
      <circle cx="86" cy="97" r="4" fill="rgba(180,240,228,0.50)" />

      {/* ── Torso ── */}
      <path d="M44 50 Q60 44 76 50 L78 76 Q60 82 42 76 Z"
        fill="url(#fDress)" filter="url(#fGlow)" />

      {/* ── Flowing skirt/dress ── */}
      <path
        d="M42 74 Q36 96 28 128 Q36 148 60 155 Q84 148 92 128 Q84 96 78 74 Q60 82 42 74Z"
        fill="url(#fDress)"
        filter="url(#fGlow)"
        opacity="0.85"
      />

      {/* Dress shimmer highlights */}
      <path d="M52 78 Q48 100 44 130"
        stroke="rgba(220,255,248,0.35)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M60 80 Q60 104 60 134"
        stroke="rgba(220,255,248,0.35)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M68 78 Q72 100 76 130"
        stroke="rgba(220,255,248,0.35)" strokeWidth="1.2" fill="none" strokeLinecap="round" />

      {/* ── Lotus flower base ── */}
      {/* Shadow/reflection */}
      <ellipse cx="60" cy="160" rx="20" ry="4"
        fill="rgba(20,184,166,0.18)" />
      {/* Petals outer ring */}
      <path d="M60 155 Q52 146 50 136 Q60 133 70 136 Q68 146 60 155Z"
        fill="url(#fLotus)" opacity="0.7" />
      <path d="M60 155 Q44 148 40 138 Q51 134 56 140 Q56 148 60 155Z"
        fill="url(#fLotus)" opacity="0.5" />
      <path d="M60 155 Q76 148 80 138 Q69 134 64 140 Q64 148 60 155Z"
        fill="url(#fLotus)" opacity="0.5" />
      <path d="M60 155 Q38 152 36 142 Q48 138 54 145 Q55 151 60 155Z"
        fill="url(#fLotus)" opacity="0.35" />
      <path d="M60 155 Q82 152 84 142 Q72 138 66 145 Q65 151 60 155Z"
        fill="url(#fLotus)" opacity="0.35" />
      {/* Center */}
      <circle cx="60" cy="148" r="5"
        fill="rgba(200,255,244,0.80)" filter="url(#fGlow)" />
      <circle cx="60" cy="148" r="2.5"
        fill="rgba(255,255,255,0.90)" />

      {/* ── Floating sparkles ── */}
      {[
        [18, 38, 1.8, 0.80],
        [102, 42, 1.4, 0.65],
        [12, 72, 1.2, 0.55],
        [108, 68, 1.6, 0.70],
        [24, 108, 1.0, 0.50],
        [96, 112, 1.3, 0.60],
        [16, 130, 1.1, 0.45],
        [104, 130, 1.0, 0.50],
      ].map(([cx, cy, r, op], i) => (
        <circle key={i} cx={cx} cy={cy} r={r}
          fill={`rgba(255,255,255,${op})`} />
      ))}

      {/* ── Cross sparkles ── */}
      {[
        [14, 58], [106, 55], [20, 92], [100, 90],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <line x1={cx - 3} y1={cy} x2={cx + 3} y2={cy}
            stroke="rgba(255,255,255,0.55)" strokeWidth="0.8" />
          <line x1={cx} y1={cy - 3} x2={cx} y2={cy + 3}
            stroke="rgba(255,255,255,0.55)" strokeWidth="0.8" />
        </g>
      ))}
    </svg>
  )
}

/* ─── Social icon components ─── */
const SocialIcons = {
  Facebook: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  Instagram: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  ),
  LinkedIn: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  YouTube: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75,15.02 15.5,12 9.75,8.98" fill="white" />
    </svg>
  ),
}

/* ─── Contact row ─── */
function ContactRow({
  icon, text, href,
}: {
  icon: React.ReactNode
  text: string
  href: string
}) {
  return (
    <a
      href={href}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        textDecoration: 'none',
      }}
      onMouseEnter={e =>
        (e.currentTarget.querySelector('span')!.style.color = 'rgba(255,255,255,0.9)')
      }
      onMouseLeave={e =>
        (e.currentTarget.querySelector('span')!.style.color = 'rgba(255,255,255,0.55)')
      }
    >
      {/* Icon circle */}
      <span
        style={{
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          background: 'rgba(20,184,166,0.18)',
          border: '1px solid rgba(20,184,166,0.32)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          color: '#14b8a6',
        }}
      >
        {icon}
      </span>
      <span
        style={{
          fontSize: '11.5px',
          color: 'rgba(255,255,255,0.55)',
          transition: 'color 0.2s',
          lineHeight: 1.4,
        }}
      >
        {text}
      </span>
    </a>
  )
}

/* ─── Main Footer ─── */
export default function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState('')

  return (
    <footer
      style={{
        background: 'white',
        padding: '0 14px 14px',
      }}
    >
      {/* ── Rounded card ── */}
      <div
        style={{
          borderRadius: '18px',
          overflow: 'hidden',
          /* gradient: dark navy-teal left → vivid teal-green right */
          background:
            'linear-gradient(120deg, #0b1d2c 0%, #0c2a34 20%, #0a3535 38%, #0a4a42 55%, #0a5a4e 72%, #0c6a58 88%, #0e7862 100%)',
        }}
      >
        {/* ════ Main four-column grid ════ */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '200px 1fr 120px 200px',
            gap: '0',
            padding: '32px 36px 22px',
            alignItems: 'start',
          }}
        >
          {/* ── Col 1 : Brand + woman ── */}
          <div style={{ paddingRight: '12px' }}>
            {/* Logo row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '7px',
              }}
            >
              {/* ✦ sparkle icon */}
              <span
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'rgba(20,184,166,0.20)',
                  border: '1px solid rgba(20,184,166,0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="11" height="11" viewBox="0 0 20 20" fill="#14b8a6">
                  <path d="M10 1l1.6 6H18l-5.2 3.8 2 6.2L10 13.4l-4.8 3.6 2-6.2L2 7h6.4z" />
                </svg>
              </span>
              <span
                style={{
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '15px',
                  letterSpacing: '0.15px',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                ZodiacPluss
              </span>
            </div>

            {/* Tagline */}
            <p
              style={{
                color: 'rgba(255,255,255,0.48)',
                fontSize: '11px',
                lineHeight: 1.6,
                margin: '0 0 10px',
                maxWidth: '148px',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Your space for guidance clarity, and well being.
            </p>

            {/* Woman illustration */}
            <div style={{ marginLeft: '-6px', marginTop: '2px' }}>
              <WomanFigure />
            </div>
          </div>

          {/* ── Col 2 : Stay connected ── */}
          <div style={{ padding: '0 28px 0 12px' }}>
            <h4
              style={{
                color: 'white',
                fontWeight: 600,
                fontSize: '15px',
                margin: '0 0 8px',
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '0.1px',
              }}
            >
              Stay connected
            </h4>
            <p
              style={{
                color: 'rgba(255,255,255,0.44)',
                fontSize: '11px',
                lineHeight: 1.65,
                margin: '0 0 18px',
                maxWidth: '210px',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Join our newsletter for tips, updates and discreet hightones—only the good stuff.
            </p>

            {/* Email field */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.13)',
                borderRadius: '100px',
                padding: '7px 7px 7px 15px',
                maxWidth: '280px',
              }}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: 'rgba(255,255,255,0.78)',
                  fontSize: '11.5px',
                  fontFamily: 'Inter, sans-serif',
                  minWidth: 0,
                }}
              />
              <button
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: '#14b8a6',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e =>
                  (e.currentTarget.style.background = '#0d9488')
                }
                onMouseLeave={e =>
                  (e.currentTarget.style.background = '#14b8a6')
                }
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* ── Col 3 : Nav links (no heading) ── */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '11px',
              paddingTop: '2px',
            }}
          >
            {['Home', 'Services', 'About', 'Blog', 'Contact'].map(link => (
              <button
                key={link}
                onClick={() => onNavigate(link)}
                style={{
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  padding: 0,
                  color: 'rgba(255,255,255,0.60)',
                  fontSize: '13px',
                  fontFamily: 'Inter, sans-serif',
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e =>
                  (e.currentTarget.style.color = '#14b8a6')
                }
                onMouseLeave={e =>
                  (e.currentTarget.style.color = 'rgba(255,255,255,0.60)')
                }
              >
                {link}
              </button>
            ))}
          </div>

          {/* ── Col 4 : Get in touch ── */}
          <div style={{ paddingLeft: '16px' }}>
            <h4
              style={{
                color: 'white',
                fontWeight: 600,
                fontSize: '14px',
                margin: '0 0 15px',
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '0.1px',
              }}
            >
              Get in touch
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <ContactRow
                href="tel:+918892000260"
                text="+91.8892.000 260"
                icon={
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                    stroke="#14b8a6" strokeWidth="2" strokeLinecap="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l1.3-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                }
              />
              <ContactRow
                href="tel:+919971904253"
                text="+91.9971.904 253"
                icon={
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                    stroke="#14b8a6" strokeWidth="2" strokeLinecap="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l1.3-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                }
              />
              <ContactRow
                href="mailto:hello@zodiacpluss.com"
                text="hello@zodiacpluss.com"
                icon={
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                    stroke="#14b8a6" strokeWidth="2" strokeLinecap="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                }
              />
              <ContactRow
                href="https://www.zodiacpluss.com"
                text="www.zodiacpluss.com"
                icon={
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                    stroke="#14b8a6" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                }
              />
            </div>
          </div>
        </div>

        {/* ════ Bottom bar ════ */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            padding: '13px 36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '8px',
            flexWrap: 'wrap',
          }}
        >
          {/* Social icons */}
          <div style={{ display: 'flex', gap: '7px' }}>
            {(
              [
                ['Facebook', SocialIcons.Facebook],
                ['Instagram', SocialIcons.Instagram],
                ['LinkedIn', SocialIcons.LinkedIn],
                ['YouTube', SocialIcons.YouTube],
              ] as [string, React.FC][]
            ).map(([label, Icon]) => (
              <button
                key={label}
                aria-label={label}
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.13)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255,255,255,0.48)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  padding: 0,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(20,184,166,0.22)'
                  e.currentTarget.style.color = '#2dd4bf'
                  e.currentTarget.style.borderColor = 'rgba(20,184,166,0.40)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.color = 'rgba(255,255,255,0.48)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.13)'
                }}
              >
                <Icon />
              </button>
            ))}
          </div>

          {/* Privacy */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
              stroke="rgba(255,255,255,0.32)" strokeWidth="1.8">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span
              style={{
                color: 'rgba(255,255,255,0.30)',
                fontSize: '10.5px',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Your privacy and trust are important to us.
            </span>
            <button
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                color: '#14b8a6',
                fontSize: '10.5px',
                fontFamily: 'Inter, sans-serif',
                cursor: 'pointer',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#2dd4bf')}
              onMouseLeave={e => (e.currentTarget.style.color = '#14b8a6')}
            >
              Privacy Policy
            </button>
          </div>

          {/* Copyright */}
          <span
            style={{
              color: 'rgba(255,255,255,0.28)',
              fontSize: '10.5px',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            © 2026 ZodiacPluss.
          </span>

          {/* Dev credit */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="rgba(255,255,255,0.28)" strokeWidth="1.8" strokeLinecap="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            <span
              style={{
                color: 'rgba(255,255,255,0.28)',
                fontSize: '10.5px',
                lineHeight: 1.45,
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Designed &amp; Developed by<br />Advent Sortinars Solutions
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
