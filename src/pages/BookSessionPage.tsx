import { useState } from 'react'

interface BookSessionPageProps {
  onNavigate: (page: string) => void
  dark?: boolean
}

const services = [
  'Personalized Horoscope',
  'Live Sessions with Experts',
  'AI-Powered Astro Insights',
  'Therapy That Helps',
  'Tarot Card of the Day',
  'Daily Horoscope',
  'Community Support',
  'Corporate Wellness Program',
]

/* ── Small icon inside a soft teal circle ── */
function InfoIcon({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        width: '38px',
        height: '38px',
        borderRadius: '50%',
        background: 'rgba(20,184,166,0.10)',
        border: '1px solid rgba(20,184,166,0.22)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        color: '#14b8a6',
      }}
    >
      {children}
    </span>
  )
}

/* ── Form field label ── */
function Label({ text, required }: { text: string; required?: boolean }) {
  return (
    <label
      style={{
        display: 'block',
        fontSize: '12.5px',
        fontWeight: 600,
        color: '#1e1035',
        marginBottom: '6px',
        fontFamily: 'Inter, sans-serif',
        letterSpacing: '0.1px',
      }}
    >
      {text}
      {required && (
        <span style={{ color: '#14b8a6', marginLeft: '2px' }}>*</span>
      )}
    </label>
  )
}

/* ── Shared input wrapper with left icon ── */
function InputWrap({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        border: '1px solid #e2daf5',
        borderRadius: '10px',
        padding: '0 14px',
        background: '#fafbff',
        transition: 'border-color 0.2s, box-shadow 0.2s',
      }}
      onFocusCapture={e =>
        ((e.currentTarget as HTMLDivElement).style.borderColor = '#14b8a6',
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 0 3px rgba(20,184,166,0.10)')
      }
      onBlurCapture={e =>
        ((e.currentTarget as HTMLDivElement).style.borderColor = '#e2daf5',
        (e.currentTarget as HTMLDivElement).style.boxShadow = 'none')
      }
    >
      <span style={{ color: '#14b8a6', flexShrink: 0, display: 'flex' }}>{icon}</span>
      {children}
    </div>
  )
}

const inputStyle: React.CSSProperties = {
  flex: 1,
  border: 'none',
  outline: 'none',
  background: 'transparent',
  fontSize: '13px',
  color: '#1e1035',
  fontFamily: 'Inter, sans-serif',
  padding: '11px 0',
}

const placeholderColor = '#aaa3c2'

export default function BookSessionPage({ onNavigate, dark }: BookSessionPageProps) {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    company: '',
    service: '',
    details: '',
    file: null as File | null,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  const bg = dark ? '#120e22' : '#f0f4f8'
  const cardBg = dark ? '#1a1235' : '#ffffff'
  const textPrimary = dark ? '#e9d5ff' : '#0f0a24'
  const textMuted = dark ? 'rgba(220,210,255,0.55)' : '#5a5272'
  const inputBg = dark ? '#231848' : '#fafbff'
  const inputBorder = dark ? 'rgba(139,92,246,0.25)' : '#e2daf5'
  const labelColor = dark ? '#d8ceff' : '#1e1035'

  return (
    <div
      style={{
        minHeight: '100vh',
        background: bg,
        padding: '40px 20px 60px',
        transition: 'background 0.4s ease',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Page wrapper card */}
      <div
        style={{
          maxWidth: '1060px',
          margin: '0 auto',
          background: cardBg,
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: dark
            ? '0 24px 80px rgba(0,0,0,0.5)'
            : '0 8px 48px rgba(90,50,160,0.10)',
          display: 'grid',
          gridTemplateColumns: '340px 1fr',
          transition: 'background 0.4s ease',
        }}
      >
        {/* ════ LEFT PANEL ════ */}
        <div
          style={{
            background: dark ? '#150f2a' : '#f5fbfa',
            padding: '44px 36px 36px',
            display: 'flex',
            flexDirection: 'column',
            gap: '0',
          }}
        >
          {/* CONTACT US badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              border: '1px solid rgba(20,184,166,0.40)',
              borderRadius: '100px',
              padding: '4px 12px',
              marginBottom: '22px',
              width: 'fit-content',
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="#14b8a6" strokeWidth="2" strokeLinecap="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            <span style={{ fontSize: '10.5px', fontWeight: 600, color: '#14b8a6',
              letterSpacing: '0.8px', textTransform: 'uppercase' }}>
              Contact Us
            </span>
          </div>

          {/* Heading */}
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '38px',
              fontWeight: 700,
              lineHeight: 1.1,
              margin: '0 0 4px',
              color: textPrimary,
            }}
          >
            Get in{' '}
            <span
              style={{
                color: '#14b8a6',
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              Touch
              {/* sparkle */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#14b8a6" style={{ marginLeft: '2px', flexShrink: 0 }}>
                <path d="M12 2l1.6 6.5H20l-5.3 3.9 2 6.6L12 15l-4.7 4 2-6.6L4 8.5h6.4z"/>
              </svg>
            </span>
          </h1>

          {/* Teal underline */}
          <div style={{ width: '40px', height: '3px', background: '#14b8a6',
            borderRadius: '2px', margin: '10px 0 16px' }} />

          {/* Description */}
          <p style={{ fontSize: '13px', color: textMuted, lineHeight: 1.7,
            margin: '0 0 28px', maxWidth: '260px' }}>
            We're here to answer your questions, help you get started, and guide
            you on your journey to clarity and growth.
          </p>

          {/* Contact rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '28px' }}>
            {/* Email */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <InfoIcon>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </InfoIcon>
              <div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: textPrimary, marginBottom: '2px' }}>Email</div>
                <div style={{ fontSize: '12.5px', color: textMuted }}>hello@zodiacpluss.com</div>
              </div>
            </div>

            {/* Phone */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <InfoIcon>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l1.3-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </InfoIcon>
              <div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: textPrimary, marginBottom: '2px' }}>Phone</div>
                <div style={{ fontSize: '12.5px', color: textMuted }}>+91 90566 41865</div>
              </div>
            </div>

            {/* Office */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <InfoIcon>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </InfoIcon>
              <div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: textPrimary, marginBottom: '2px' }}>Office</div>
                <div style={{ fontSize: '12px', color: textMuted, lineHeight: 1.6 }}>
                  Abhay Towers, 1st Floor, 410 C, Civil Lines<br />
                  Master Tara Singh Nagar, Jalandhar, Punjab 144001
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <InfoIcon>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </InfoIcon>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: textPrimary, marginBottom: '6px' }}>Business Hours</div>
                {[
                  ['Monday – Friday', '9:00 AM – 6:00 PM'],
                  ['Saturday', '10:00 AM – 6:00 PM'],
                  ['Sunday', 'Closed'],
                ].map(([day, hrs]) => (
                  <div key={day} style={{ display: 'flex', justifyContent: 'space-between',
                    fontSize: '11.5px', color: textMuted, marginBottom: '3px' }}>
                    <span>{day}</span>
                    <span style={{ color: hrs === 'Closed' ? '#f87171' : textMuted }}>{hrs}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* "Let's Create Clarity" card */}
          <div
            style={{
              marginTop: 'auto',
              borderRadius: '14px',
              padding: '18px 20px',
              background: dark
                ? 'linear-gradient(135deg, rgba(20,184,166,0.18), rgba(20,100,100,0.12))'
                : 'linear-gradient(135deg, #e6faf6, #d0f5ee)',
              border: dark ? '1px solid rgba(20,184,166,0.22)' : '1px solid rgba(20,184,166,0.18)',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Decorative world-map-like dots in background */}
            <svg
              style={{ position: 'absolute', right: '-10px', bottom: '-10px', opacity: 0.12 }}
              width="110" height="80" viewBox="0 0 110 80"
            >
              {Array.from({ length: 80 }).map((_, i) => (
                <circle
                  key={i}
                  cx={(i % 10) * 12 + 6}
                  cy={Math.floor(i / 10) * 12 + 6}
                  r="1.5"
                  fill="#14b8a6"
                />
              ))}
            </svg>

            {/* Icon */}
            <span
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(20,184,166,0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="#14b8a6" strokeWidth="1.8" strokeLinecap="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                <path d="M12 2l1.5 5h5l-4 3 1.5 5L12 12l-4 3 1.5-5L6 7h5z" fill="#14b8a6" opacity="0.5"/>
              </svg>
            </span>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontSize: '13.5px', fontWeight: 700, color: dark ? '#a7f3e8' : '#0d6b5e',
                marginBottom: '3px' }}>Let's Create Clarity</div>
              <div style={{ fontSize: '11px', color: dark ? 'rgba(167,243,232,0.70)' : '#2a8a7a',
                lineHeight: 1.55 }}>
                Your path to guidance begins<br />with a simple conversation.
              </div>
            </div>
          </div>
        </div>

        {/* ════ RIGHT PANEL — FORM ════ */}
        <div style={{ padding: '44px 40px 40px', background: cardBg }}>
          {/* Decorative top dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginBottom: '28px' }}>
            {[1, 2, 3].map(i => (
              <span key={i} style={{ width: '6px', height: '6px', borderRadius: '50%',
                background: i === 2 ? '#14b8a6' : (dark ? 'rgba(139,92,246,0.30)' : '#d4cef5') }} />
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {/* Row 1: Full Name + Email */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px', marginBottom: '18px' }}>
              <div>
                <Label text="Full Name" required />
                <InputWrap
                  icon={
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  }
                >
                  <input
                    required
                    placeholder="Enter your full name"
                    value={form.fullName}
                    onChange={e => setForm(f => ({ ...f, fullName: e.target.value }))}
                    style={{
                      ...inputStyle,
                      background: inputBg,
                      color: dark ? '#e9d5ff' : '#1e1035',
                    }}
                  />
                </InputWrap>
              </div>
              <div>
                <Label text="Email Address" required />
                <InputWrap
                  icon={
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  }
                >
                  <input
                    required
                    type="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    style={{
                      ...inputStyle,
                      background: inputBg,
                      color: dark ? '#e9d5ff' : '#1e1035',
                    }}
                  />
                </InputWrap>
              </div>
            </div>

            {/* Row 2: Company Name + Service */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px', marginBottom: '18px' }}>
              <div>
                <Label text="Company Name" />
                <InputWrap
                  icon={
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <rect x="2" y="7" width="20" height="14" rx="2"/>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                    </svg>
                  }
                >
                  <input
                    placeholder="Enter your company name"
                    value={form.company}
                    onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                    style={{
                      ...inputStyle,
                      background: inputBg,
                      color: dark ? '#e9d5ff' : '#1e1035',
                    }}
                  />
                </InputWrap>
              </div>
              <div>
                <Label text="Service Interested In" required />
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    border: `1px solid ${inputBorder}`,
                    borderRadius: '10px',
                    padding: '0 14px',
                    background: inputBg,
                  }}
                  onFocusCapture={e =>
                    ((e.currentTarget as HTMLDivElement).style.borderColor = '#14b8a6',
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 0 3px rgba(20,184,166,0.10)')
                  }
                  onBlurCapture={e =>
                    ((e.currentTarget as HTMLDivElement).style.borderColor = inputBorder,
                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none')
                  }
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                    stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0 }}>
                    <path d="M12 2L13.5 8.5L20 7L15.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L8.5 12L4 7L10.5 8.5L12 2Z"/>
                  </svg>
                  <select
                    required
                    value={form.service}
                    onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                    style={{
                      flex: 1,
                      border: 'none',
                      outline: 'none',
                      background: 'transparent',
                      fontSize: '13px',
                      fontFamily: 'Inter, sans-serif',
                      color: form.service ? (dark ? '#e9d5ff' : '#1e1035') : placeholderColor,
                      padding: '11px 0',
                      cursor: 'pointer',
                      appearance: 'none',
                    }}
                  >
                    <option value="" disabled>Select a service</option>
                    {services.map(s => (
                      <option key={s} value={s} style={{ color: '#1e1035', background: 'white' }}>{s}</option>
                    ))}
                  </select>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                    stroke="#aaa3c2" strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0 }}>
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Row 3: Upload */}
            <div style={{ marginBottom: '18px' }}>
              <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600,
                color: labelColor, marginBottom: '6px' }}>
                Upload Project File{' '}
                <span style={{ fontWeight: 400, color: dark ? 'rgba(220,210,255,0.45)' : '#aaa3c2' }}>(Optional)</span>
              </label>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  border: `1px solid ${inputBorder}`,
                  borderRadius: '10px',
                  padding: '9px 14px',
                  background: inputBg,
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                  stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0 }}>
                  <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
                </svg>
                <label
                  style={{
                    fontSize: '12.5px',
                    fontWeight: 600,
                    color: '#14b8a6',
                    cursor: 'pointer',
                    flexShrink: 0,
                    padding: '2px 10px',
                    border: '1px solid rgba(20,184,166,0.35)',
                    borderRadius: '6px',
                    background: 'rgba(20,184,166,0.07)',
                  }}
                >
                  Choose file
                  <input
                    type="file"
                    style={{ display: 'none' }}
                    onChange={e => setForm(f => ({ ...f, file: e.target.files?.[0] ?? null }))}
                  />
                </label>
                <span style={{ fontSize: '12px', color: placeholderColor }}>
                  {form.file ? form.file.name : 'No file chosen'}
                </span>
              </div>
            </div>

            {/* Row 4: Project Details textarea */}
            <div style={{ marginBottom: '22px' }}>
              <Label text="Project Details" required />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  border: `1px solid ${inputBorder}`,
                  borderRadius: '10px',
                  padding: '12px 14px',
                  background: inputBg,
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
                onFocusCapture={e =>
                  ((e.currentTarget as HTMLDivElement).style.borderColor = '#14b8a6',
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 0 3px rgba(20,184,166,0.10)')
                }
                onBlurCapture={e =>
                  ((e.currentTarget as HTMLDivElement).style.borderColor = inputBorder,
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none')
                }
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                  stroke="#14b8a6" strokeWidth="2" strokeLinecap="round"
                  style={{ flexShrink: 0, marginTop: '2px' }}>
                  <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your project and goals..."
                  value={form.details}
                  onChange={e => setForm(f => ({ ...f, details: e.target.value }))}
                  style={{
                    flex: 1,
                    border: 'none',
                    outline: 'none',
                    background: 'transparent',
                    fontSize: '13px',
                    fontFamily: 'Inter, sans-serif',
                    color: dark ? '#e9d5ff' : '#1e1035',
                    resize: 'vertical',
                    lineHeight: 1.6,
                  }}
                />
              </div>
            </div>

            {/* Security note */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="#14b8a6" strokeWidth="2" strokeLinecap="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span style={{ fontSize: '11.5px', color: dark ? 'rgba(220,210,255,0.50)' : '#7a6fa8' }}>
                Your information is secure and will never be shared.
              </span>
            </div>

            {/* Submit row */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
              <button
                type="submit"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: submitted
                    ? '#0d9488'
                    : 'linear-gradient(135deg, #0d9488, #14b8a6)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '100px',
                  padding: '12px 28px',
                  fontSize: '14px',
                  fontWeight: 600,
                  fontFamily: 'Inter, sans-serif',
                  cursor: 'pointer',
                  transition: 'all 0.25s',
                  boxShadow: '0 4px 16px rgba(20,184,166,0.35)',
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-1px)',
                  e.currentTarget.style.boxShadow = '0 6px 22px rgba(20,184,166,0.45)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'none',
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(20,184,166,0.35)')}
              >
                {submitted ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="white" strokeWidth="2.5" strokeLinecap="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="white" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </>
                )}
              </button>
              <span style={{ fontSize: '11px', color: dark ? 'rgba(220,210,255,0.40)' : '#aaa3c2' }}>
                * Required fields
              </span>
            </div>
          </form>
        </div>
      </div>

      {/* ════ MAP SECTION ════ */}
      <div
        style={{
          maxWidth: '1060px',
          margin: '24px auto 0',
        }}
      >
        {/* Section label */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '14px',
          paddingLeft: '4px',
        }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
            stroke="#14b8a6" strokeWidth="2" strokeLinecap="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span style={{
            fontSize: '12.5px',
            fontWeight: 600,
            color: dark ? 'rgba(220,210,255,0.65)' : '#5a5272',
            letterSpacing: '0.3px',
            fontFamily: 'Inter, sans-serif',
          }}>
            Our Location · Civil Lines, Jalandhar, Punjab 144001
          </span>
        </div>

        {/* Map card — rounded pill shape matching reference */}
        <div
          style={{
            position: 'relative',
            borderRadius: '28px',
            overflow: 'hidden',
            height: '320px',
            boxShadow: dark
              ? '0 16px 56px rgba(0,0,0,0.55)'
              : '0 8px 40px rgba(90,50,160,0.12)',
            border: dark
              ? '1px solid rgba(139,92,246,0.18)'
              : '1px solid rgba(200,190,230,0.35)',
          }}
        >
          {/* Google Maps iframe — Civil Lines, Jalandhar */}
          <iframe
            title="ZodiacPluss Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13624.86!2d75.55794!3d31.32602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a5747a9ef3f%3A0x2de19db7d8c28a7f!2sCivil%20Lines%2C%20Jalandhar%2C%20Punjab%20144001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{
              border: 'none',
              display: 'block',
              filter: dark ? 'invert(0.88) hue-rotate(180deg) saturate(0.7) brightness(0.85)' : 'none',
              transition: 'filter 0.4s ease',
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* "Open in Maps" overlay button — top-left, matching reference */}
          <a
            href="https://maps.google.com/maps?q=Civil+Lines,+Jalandhar,+Punjab+144001&z=15"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: 'absolute',
              top: '14px',
              left: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'white',
              borderRadius: '8px',
              padding: '7px 13px',
              fontSize: '12px',
              fontWeight: 600,
              color: '#1a73e8',
              textDecoration: 'none',
              boxShadow: '0 2px 10px rgba(0,0,0,0.18)',
              fontFamily: 'Inter, sans-serif',
              transition: 'box-shadow 0.2s, transform 0.2s',
              zIndex: 10,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.25)'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.18)'
              e.currentTarget.style.transform = 'none'
            }}
          >
            {/* Map pin icon */}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
              stroke="#1a73e8" strokeWidth="2.5" strokeLinecap="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            Open in Maps
            {/* External link arrow */}
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
              stroke="#1a73e8" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>

          {/* Address pill overlay — bottom center */}
          <div
            style={{
              position: 'absolute',
              bottom: '16px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'white',
              borderRadius: '100px',
              padding: '7px 18px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
              whiteSpace: 'nowrap',
              zIndex: 10,
            }}
          >
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#ea4335',
              flexShrink: 0,
              boxShadow: '0 0 0 3px rgba(234,67,53,0.20)',
            }} />
            <span style={{
              fontSize: '11.5px',
              fontWeight: 600,
              color: '#2d2d2d',
              fontFamily: 'Inter, sans-serif',
            }}>
              Abhay Towers, Civil Lines, Jalandhar
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
