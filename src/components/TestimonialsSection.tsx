import { useState } from 'react'
import svgPaths from '@/imports/Frame471/svg-ct2kapt684'
import imgVector from '@/imports/Frame471/b68f3b856e8d35864d9aba9627f000b9289b7268.png'
import imgBg from '@/imports/Frame471/2f7998d128a34b09994aec13889a56ac27ff78af.png'

const testimonials = [
  {
    name: 'Aryan Sharma',
    quote: 'I loved how  therapists solve my problems and help me in my tough phase of life.',
  },
  {
    name: 'Priya Mehta',
    quote: 'The AI astro insights were shockingly accurate. It felt like the stars truly understood me.',
  },
  {
    name: 'Rahul Verma',
    quote: 'My personalized horoscope gave me clarity I had been searching for years. Truly life-changing.',
  },
]

function TestimonialCard({ name, quote }: { name: string; quote: string }) {
  return (
    <div className="relative w-full" style={{ height: '236px' }}>
      {/* Card background – exact SVG from Figma */}
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 724 236"
      >
        <path d={svgPaths.p242b1f00} fill="#04496C" fillOpacity="0.3" />
      </svg>

      {/* Avatar – top: 8.54%, right: 91.9%, bottom: 69.17%, left: 0.9% */}
      <div className="absolute" style={{ top: '8.54%', right: '91.9%', bottom: '69.17%', left: '0.9%' }}>
        <img alt="" className="absolute block inset-0 max-w-none size-full object-cover rounded-full" src={imgVector} />
      </div>

      {/* Star 1 */}
      <div className="absolute" style={{ top: '34.15%', right: '87.2%', bottom: '55.55%', left: '9.3%' }}>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.3468 24.3072">
          <path d={svgPaths.p3c1b2680} fill="#FD853A" />
        </svg>
      </div>
      {/* Star 2 */}
      <div className="absolute" style={{ top: '34.15%', right: '83%', bottom: '55.55%', left: '13.5%' }}>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.3468 24.3072">
          <path d={svgPaths.p3c1b2680} fill="#FD853A" />
        </svg>
      </div>
      {/* Star 3 */}
      <div className="absolute" style={{ top: '34.15%', right: '78.79%', bottom: '55.55%', left: '17.7%' }}>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.3468 24.3072">
          <path d={svgPaths.p3c1b2680} fill="#FD853A" />
        </svg>
      </div>
      {/* Star 4 */}
      <div className="absolute" style={{ top: '34.15%', right: '74.59%', bottom: '55.55%', left: '21.91%' }}>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.3468 24.3072">
          <path d={svgPaths.p3c1b2680} fill="#FD853A" />
        </svg>
      </div>
      {/* Star 5 */}
      <div className="absolute" style={{ top: '34.15%', right: '70.39%', bottom: '55.55%', left: '26.11%' }}>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.3468 24.3072">
          <path d={svgPaths.p3c1b2680} fill="#FD853A" />
        </svg>
      </div>

      {/* "5.0" rating */}
      <div className="absolute" style={{ top: '35.77%', right: '64.87%', bottom: '56.77%', left: '30.7%' }}>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.0772 17.6042">
          <path d={svgPaths.p333c2100} fill="black" />
        </svg>
      </div>

      {/* Quotation mark shadow layer */}
      <div className="absolute" style={{ top: '10.16%', right: '3.71%', bottom: '62.2%', left: '91.79%' }}>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.604 65.2358">
          <path d={svgPaths.p36bb5300} fill="black" fillOpacity="0.4" />
        </svg>
      </div>
      {/* Quotation mark main layer */}
      <div className="absolute" style={{ top: '10.16%', right: '9.14%', bottom: '62.2%', left: '86.36%' }}>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.604 65.2358">
          <path d={svgPaths.p1ec40400} fill="black" fillOpacity="0.4" />
        </svg>
      </div>

      {/* Name */}
      <p
        className="absolute leading-normal text-black text-center"
        style={{
          top: '13.41%', right: '65.43%', bottom: '65.85%', left: '7.02%',
          fontFamily: "'Sora', sans-serif",
          fontWeight: 400,
          fontSize: '25px',
          wordBreak: 'break-word',
          overflow: 'hidden',
        }}
      >
        {name}
      </p>

      {/* Quote */}
      <p
        className="absolute leading-normal text-center"
        style={{
          top: '55.93%', right: '10.01%', bottom: '15.25%', left: '12.78%',
          fontFamily: "'Sora', sans-serif",
          fontWeight: 600,
          fontSize: '18px',
          color: '#065350',
          wordBreak: 'break-word',
          whiteSpace: 'pre-wrap',
        }}
      >
        {quote}
      </p>
    </div>
  )
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)

  return (
    <section className="relative w-full" style={{ minHeight: '560px' }}>
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: '32px', margin: '0 16px' }}>
        <img
          alt=""
          src={imgBg}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(255,255,255,0.08)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-8 pt-14 pb-16">
        {/* "Testimonials" – Playball */}
        <p
          className="text-center mb-1"
          style={{
            fontFamily: "'Playball', cursive",
            fontSize: 'clamp(36px, 5vw, 80px)',
            lineHeight: 'normal',
            color: '#065350',
          }}
        >
          Testimonials
        </p>

        {/* Main heading */}
        <p
          className="text-center mb-4"
          style={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: 400,
            fontSize: 'clamp(22px, 3.5vw, 56px)',
            lineHeight: 0,
            color: '#065350',
          }}
        >
          <span style={{ lineHeight: 'normal', color: 'black' }}>Trusted by seekers,</span>
          {' '}
          <span
            style={{
              fontFamily: "'Sour Gummy', cursive",
              lineHeight: 'normal',
              color: '#096e49',
              fontVariationSettings: '"wdth" 100',
            }}
          >
            Written by stars
          </span>
        </p>

        {/* Subtext */}
        <p
          className="text-center max-w-3xl mb-10"
          style={{
            fontFamily: "'Song Myung', serif",
            fontSize: 'clamp(14px, 1.5vw, 30px)',
            lineHeight: 'normal',
            color: '#4b7675',
            marginTop: '24px',
          }}
        >
          {"Real readings, real turning points. Here's what members of Zodiac Pluss say after their charts came into alignment."}
        </p>

        {/* Desktop: 3 cards */}
        <div className="w-full max-w-[1200px]">
          <div className="hidden lg:grid gap-5" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} name={t.name} quote={t.quote} />
            ))}
          </div>

          {/* Mobile: carousel */}
          <div className="lg:hidden px-2">
            <TestimonialCard name={testimonials[active].name} quote={testimonials[active].quote} />
            <div className="flex justify-center gap-2 mt-5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    width: i === active ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: i === active ? '#065350' : '#a0c4c0',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
