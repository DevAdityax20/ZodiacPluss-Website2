/* ─────────────────────────────────────────────────────────────────
   ZodiacMissionSection
   Three stacked bands:
   1. Dark hero  – headline + cosmic woman + feature bullets
   2. White about – circular image + "We Create Experiences" copy
   3. Dark mission – "Empower. Heal. Guide." + 4-column icons
   ───────────────────────────────────────────────────────────────── */

const DARK_BG = '#071e19'
const ACCENT   = '#3ecfb3'   // bright teal headline accent
const TEAL     = '#14b8a6'
const TEAL_D   = '#065350'
const NAVY     = '#1a1060'
const GOLD     = 'rgba(212,168,83,0.55)'  // zodiac ring glow

const MEDITATION =
  'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=700&h=820&fit=crop&auto=format&q=80'

/* scattered zodiac glyphs for the dark background */
const ZODIAC_DECOR: { sym: string; top: string; left: string; size: number; op: number }[] = [
  { sym: '♈', top: '8%',  left: '3%',  size: 18, op: 0.35 },
  { sym: '♉', top: '22%', left: '6%',  size: 15, op: 0.25 },
  { sym: '♊', top: '60%', left: '2%',  size: 17, op: 0.30 },
  { sym: '♋', top: '80%', left: '8%',  size: 14, op: 0.28 },
  { sym: '♌', top: '5%',  left: '22%', size: 16, op: 0.22 },
  { sym: '♍', top: '88%', left: '22%', size: 15, op: 0.25 },
  { sym: '♎', top: '12%', left: '72%', size: 16, op: 0.22 },
  { sym: '♏', top: '72%', left: '68%', size: 18, op: 0.30 },
  { sym: '♐', top: '5%',  left: '88%', size: 15, op: 0.28 },
  { sym: '♑', top: '35%', left: '93%', size: 14, op: 0.25 },
  { sym: '♒', top: '80%', left: '88%', size: 17, op: 0.30 },
  { sym: '♓', top: '55%', left: '96%', size: 14, op: 0.22 },
]

/* ── Zodiac wheel ring (SVG) ────────────────────────────────────── */
function ZodiacRing({ size }: { size: number }) {
  const r = size / 2
  const signs = ['♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓']
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      <defs>
        <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={ACCENT} stopOpacity="0.7" />
          <stop offset="50%" stopColor="#d4a853" stopOpacity="0.5" />
          <stop offset="100%" stopColor={ACCENT} stopOpacity="0.7" />
        </linearGradient>
      </defs>
      {/* Outer ring */}
      <circle cx={r} cy={r} r={r - 4} fill="none" stroke="url(#ringGrad)" strokeWidth="1.5" strokeDasharray="6 4" />
      {/* Inner ring */}
      <circle cx={r} cy={r} r={r - 18} fill="none" stroke="rgba(212,168,83,0.3)" strokeWidth="1" />
      {/* Tick marks + signs */}
      {signs.map((s, i) => {
        const angle = (i / 12) * Math.PI * 2 - Math.PI / 2
        const rx = r - 11
        const x = r + rx * Math.cos(angle)
        const y = r + rx * Math.sin(angle)
        const tx = r + (r - 28) * Math.cos(angle)
        const ty = r + (r - 28) * Math.sin(angle)
        return (
          <g key={i}>
            <line x1={r + (r - 5) * Math.cos(angle)} y1={r + (r - 5) * Math.sin(angle)}
                  x2={x} y2={y} stroke="rgba(212,168,83,0.45)" strokeWidth="1" />
            <text x={tx} y={ty} textAnchor="middle" dominantBaseline="central"
                  fontSize="11" fill="rgba(212,168,83,0.7)" fontFamily="serif">{s}</text>
          </g>
        )
      })}
    </svg>
  )
}

/* ══════════════════════════════════════════════════════════════════
   BAND 1 – Dark hero
   ══════════════════════════════════════════════════════════════════ */
function DarkHero({ onNavigate }: { onNavigate?: (p: string) => void }) {
  const features = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.8">
          <circle cx="12" cy="8" r="4"/><path d="M4 20c0-3.87 3.58-7 8-7s8 3.13 8 7"/>
          <path d="m9 11 2 2 4-4" stroke={ACCENT}/>
        </svg>
      ),
      title: 'Trusted Experts',
      desc: 'Verified astrologers and therapists',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.8">
          <rect x="5" y="11" width="14" height="10" rx="2"/>
          <path d="M8 11V7a4 4 0 0 1 8 0v4"/>
          <circle cx="12" cy="16" r="1" fill={ACCENT}/>
        </svg>
      ),
      title: 'Private & Secure',
      desc: 'Your conversations are 100% confidential',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.8">
          <path d="M12 2a9 9 0 0 1 9 9c0 3.5-2 6.6-5 8.2v.8a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-.8C5 17.6 3 14.5 3 11a9 9 0 0 1 9-9z"/>
          <path d="M9 17h6M10 14h4"/>
        </svg>
      ),
      title: 'Holistic Well-being',
      desc: 'Mind, emotions & destiny — all in one place',
    },
  ]

  return (
    <section style={{ background: 'transparent', position: 'relative', overflow: 'hidden', minHeight: 520 }}>
      {/* Scattered zodiac decor */}
      {ZODIAC_DECOR.map((z, i) => (
        <span key={i} style={{
          position: 'absolute', top: z.top, left: z.left,
          fontSize: z.size, opacity: z.op, color: '#d4a853',
          pointerEvents: 'none', userSelect: 'none', fontFamily: 'serif',
        }}>{z.sym}</span>
      ))}

      {/* Radial glow from center */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 55% 80% at 50% 60%, rgba(61,214,172,0.08) 0%, transparent 70%)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(48px,7vw,80px) 24px', position: 'relative', zIndex: 1 }}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

          {/* LEFT – headline */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            {/* ZodiacPluss wordmark */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 32 }}>
              <span style={{ color: ACCENT, fontSize: 14 }}>✦</span>
              <span style={{ color: 'white', fontSize: 14, fontWeight: 700, fontFamily: "'Inter', sans-serif", letterSpacing: '0.05em' }}>ZodiacPluss</span>
            </div>

            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(30px, 4vw, 50px)',
              fontWeight: 700, color: 'white', lineHeight: 1.15,
              margin: '0 0 6px',
            }}>
              Guidance for<br />Your Stars.
            </h2>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 700, color: ACCENT, lineHeight: 1.2,
              margin: '0 0 24px', fontStyle: 'italic',
            }}>
              Support for Your Soul.
            </h2>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(13px, 1.3vw, 15px)',
              color: 'rgba(255,255,255,0.60)',
              lineHeight: 1.75, margin: '0 0 36px', maxWidth: 340,
            }}>
              ZodiacPluss is where ancient wisdom meets modern healing. Astrology to light your path, therapy to heal your heart.
            </p>
            <button
              onClick={() => onNavigate?.('Book')}
              style={{
                background: `linear-gradient(135deg, ${TEAL}, ${TEAL_D})`,
                border: 'none', borderRadius: 999,
                padding: '12px 26px', color: 'white',
                fontFamily: "'Inter', sans-serif",
                fontSize: 14, fontWeight: 700, cursor: 'pointer',
                display: 'inline-flex', alignItems: 'center', gap: 8,
                boxShadow: '0 6px 20px rgba(20,184,166,0.35)',
              }}
            >
              Begin Your Journey
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          {/* CENTER – cosmic woman */}
          <div className="order-1 lg:order-2 flex justify-center" style={{ position: 'relative' }}>
            {/* Outer glow ring */}
            <div style={{
              width: 'clamp(220px,35vw,340px)',
              height: 'clamp(220px,35vw,340px)',
              position: 'relative',
              filter: 'drop-shadow(0 0 40px rgba(61,214,172,0.25))',
            }}>
              {/* Golden cosmic glow behind */}
              <div style={{
                position: 'absolute', inset: 0, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(212,168,83,0.55) 0%, rgba(212,168,83,0.15) 45%, transparent 70%)',
                boxShadow: '0 0 60px 20px rgba(212,168,83,0.25)',
              }} />
              {/* Zodiac ring SVG */}
              <ZodiacRing size={340} />
              {/* Photo */}
              <div style={{
                position: 'absolute',
                top: '12%', left: '12%', right: '12%', bottom: '12%',
                borderRadius: '50%', overflow: 'hidden',
                border: '2px solid rgba(212,168,83,0.4)',
              }}>
                <img
                  src={MEDITATION}
                  alt="Woman meditating in cosmic light"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(180deg, rgba(7,30,25,0.2) 0%, rgba(7,30,25,0.45) 100%)',
                }} />
              </div>
            </div>
          </div>

          {/* RIGHT – feature bullets */}
          <div className="order-3 space-y-0">
            {features.map((f, i) => (
              <div key={i} style={{
                display: 'flex', gap: 14, alignItems: 'flex-start',
                padding: '18px 0',
                borderBottom: i < features.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                  background: 'rgba(61,214,172,0.10)',
                  border: '1px solid rgba(61,214,172,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {f.icon}
                </div>
                <div>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14, fontWeight: 700, color: 'white', margin: '0 0 4px',
                  }}>{f.title}</p>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13, color: 'rgba(255,255,255,0.50)', margin: 0, lineHeight: 1.6,
                  }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════════
   BAND 2 – White about
   ══════════════════════════════════════════════════════════════════ */
function AboutBand({ onNavigate }: { onNavigate?: (p: string) => void }) {
  return (
    <section style={{ background: 'white', padding: 'clamp(56px,7vw,88px) 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT – circular image with zodiac ring + badge */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: 'clamp(260px,38vw,420px)', height: 'clamp(260px,38vw,420px)' }}>
              {/* Outer decorative ring */}
              <div style={{
                position: 'absolute', inset: -18,
                borderRadius: '50%',
                border: '1.5px dashed rgba(20,184,166,0.35)',
              }} />
              <div style={{
                position: 'absolute', inset: -36,
                borderRadius: '50%',
                border: '1px solid rgba(20,184,166,0.15)',
              }} />

              {/* Zodiac ring */}
              <div style={{ position: 'absolute', inset: -46, zIndex: 2, pointerEvents: 'none' }}>
                <ZodiacRing size={420 + 92} />
              </div>

              {/* Circle photo */}
              <div style={{
                width: '100%', height: '100%',
                borderRadius: '50%', overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(7,30,25,0.18)',
                border: '4px solid white',
                position: 'relative', zIndex: 1,
              }}>
                <img
                  src={MEDITATION}
                  alt="Woman in meditation — ZodiacPluss spiritual guidance"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(180deg, transparent 50%, rgba(7,30,25,0.35) 100%)',
                }} />
              </div>

              {/* Happy souls badge */}
              <div style={{
                position: 'absolute', bottom: '8%', left: '-6%', zIndex: 3,
                background: 'white',
                borderRadius: 12, padding: '10px 16px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                display: 'flex', alignItems: 'center', gap: 10,
                border: '1px solid rgba(20,184,166,0.2)',
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                  background: `linear-gradient(135deg, ${TEAL}, ${TEAL_D})`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 16,
                }}>🌟</div>
                <div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, fontWeight: 900, color: NAVY, lineHeight: 1 }}>2,500+</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#888', marginTop: 1 }}>Happy Souls</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT – copy */}
          <div>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
              color: TEAL, textTransform: 'uppercase', marginBottom: 16,
            }}>About Us</p>

            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(28px,4vw,48px)',
              fontWeight: 700, color: NAVY, lineHeight: 1.15, margin: '0 0 8px',
            }}>
              We Create Experiences<br />That{' '}
              <span style={{ color: TEAL, fontStyle: 'italic' }}>Transform Lives</span>
            </h2>

            <div style={{ width: 48, height: 3, background: TEAL, borderRadius: 2, margin: '16px 0 24px' }} />

            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(13px,1.3vw,15.5px)',
              color: '#6b7280', lineHeight: 1.8, margin: '0 0 16px',
            }}>
              ZodiacPluss was built with one simple belief — everyone deserves clarity and emotional well-being. We combine the timeless wisdom of astrology with professional mental health support to help you navigate life with confidence and peace.
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(13px,1.3vw,15.5px)',
              color: '#6b7280', lineHeight: 1.8, margin: '0 0 36px',
            }}>
              From birth chart readings to one-on-one therapy sessions, {"we've"} created a safe, supportive space where guidance feels personal, private, and truly meaningful.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button
                onClick={() => onNavigate?.('About Us')}
                style={{
                  background: `linear-gradient(135deg, ${TEAL}, ${TEAL_D})`,
                  border: 'none', borderRadius: 999,
                  padding: '12px 24px', color: 'white',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14, fontWeight: 700, cursor: 'pointer',
                  display: 'inline-flex', alignItems: 'center', gap: 7,
                  boxShadow: '0 6px 20px rgba(20,184,166,0.30)',
                  transition: 'transform 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'}
                onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.transform = 'none'}
              >
                Our Journey
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              <button
                onClick={() => onNavigate?.('Services')}
                style={{
                  background: 'transparent',
                  border: `1.5px solid ${TEAL}`,
                  borderRadius: 999,
                  padding: '12px 24px', color: TEAL_D,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14, fontWeight: 700, cursor: 'pointer',
                  display: 'inline-flex', alignItems: 'center', gap: 7,
                  transition: 'background 0.15s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(20,184,166,0.07)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent' }}
              >
                Our Services
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════════
   BAND 3 – Dark mission
   ══════════════════════════════════════════════════════════════════ */
function MissionBand({ onNavigate }: { onNavigate?: (p: string) => void }) {
  const pillars = [
    {
      title: 'Authentic Guidance',
      desc: 'Rooted in knowledge and experience',
    },
    {
      title: 'Emotional Healing',
      desc: 'Professional support for your well-being',
    },
    {
      title: 'Safe & Confidential',
      desc: 'Your privacy is our highest priority',
    },
    {
      title: 'Community First',
      desc: 'We grow when you do — always in touch',
    },
  ]

  return (
    <section style={{
      background: 'transparent',
      position: 'relative', overflow: 'hidden',
      padding: 'clamp(52px,7vw,80px) 24px',
    }}>
      {/* Subtle glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 70% at 30% 50%, rgba(61,214,172,0.07) 0%, transparent 65%)',
      }} />

      {/* Scattered zodiac decor (subset) */}
      {ZODIAC_DECOR.slice(0, 6).map((z, i) => (
        <span key={i} style={{
          position: 'absolute', top: z.top, left: z.left,
          fontSize: z.size - 2, opacity: z.op * 0.7, color: '#d4a853',
          pointerEvents: 'none', userSelect: 'none', fontFamily: 'serif',
        }}>{z.sym}</span>
      ))}

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT – mission text */}
          <div>
            <button
              onClick={() => onNavigate?.('About Us')}
              style={{
                background: 'none', border: `1px solid rgba(61,214,172,0.35)`,
                borderRadius: 999, padding: '5px 14px',
                color: ACCENT, fontFamily: "'Inter', sans-serif",
                fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', cursor: 'pointer', marginBottom: 24,
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}
            >
              Our Mission
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>

            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(36px,5.5vw,68px)',
              fontWeight: 800, color: 'white', lineHeight: 1.08,
              margin: '0 0 24px', letterSpacing: '-0.01em',
            }}>
              Empower.<br />Heal. Guide.
            </h2>

            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(13px,1.3vw,15.5px)',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.8, margin: 0, maxWidth: 440,
            }}>
              We empower individuals to understand themselves better, heal emotionally, and make conscious decisions. Through trusted experts and a compassionate community, we aim to provide balance, clarity, and growth in every life we touch.
            </p>
          </div>

          {/* RIGHT – 4 pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((p, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(61,214,172,0.14)',
                borderRadius: 16, padding: '20px 20px',
                backdropFilter: 'blur(8px)',
                transition: 'background 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = 'rgba(61,214,172,0.07)'}
                onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.04)'}
              >
                <div style={{ fontSize: 26, marginBottom: 10 }}>{}</div>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13.5, fontWeight: 700, color: 'white',
                  margin: '0 0 5px',
                }}>{p.title}</p>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12.5, color: 'rgba(255,255,255,0.45)',
                  margin: 0, lineHeight: 1.6,
                }}>{p.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════════
   Export
   ══════════════════════════════════════════════════════════════════ */
interface Props { onNavigate?: (page: string) => void }

export default function ZodiacMissionSection({ onNavigate }: Props) {
  return (
    <>
      <DarkHero    onNavigate={onNavigate} />
      <AboutBand   onNavigate={onNavigate} />
      <MissionBand onNavigate={onNavigate} />
    </>
  )
}
