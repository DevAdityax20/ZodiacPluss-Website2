import { useState } from 'react'

interface ExpertsPageProps {
  onNavigate: (page: string) => void
}

const experts = [
  {
    name: 'Dr. Priya Sharma',
    role: 'Vedic Astrologer',
    rating: 4.9,
    reviews: 1847,
    exp: '18 yrs',
    price: '₹1,299/session',
    specialty: ['Vedic Astrology', 'Numerology', 'Career Guidance'],
    available: true,
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&auto=format&q=80',
    bio: 'Expert in Vedic traditions with a PhD in Astrology from BHU. Helped over 10,000 individuals find clarity.',
  },
  {
    name: 'Rahul Mehta',
    role: 'Therapist & Counselor',
    rating: 4.8,
    reviews: 1203,
    exp: '12 yrs',
    price: '₹1,999/session',
    specialty: ['CBT', 'Anxiety & Depression', 'Relationship Issues'],
    available: true,
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&auto=format&q=80',
    bio: 'Licensed clinical therapist who integrates mindfulness, CBT, and spiritual insights for holistic healing.',
  },
  {
    name: 'Anika Verma',
    role: 'Tarot & Crystal Healer',
    rating: 4.9,
    reviews: 987,
    exp: '10 yrs',
    price: '₹899/session',
    specialty: ['Tarot Reading', 'Crystal Healing', 'Past Life Regression'],
    available: false,
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&auto=format&q=80',
    bio: 'Gifted intuitive with deep expertise in energy healing modalities and spiritual transformation.',
  },
  {
    name: 'Suresh Pillai',
    role: 'Jyotish Astrologer',
    rating: 4.7,
    reviews: 2134,
    exp: '22 yrs',
    price: '₹1,599/session',
    specialty: ['Jyotish', 'Marriage Compatibility', 'Business Astrology'],
    available: true,
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&auto=format&q=80',
    bio: 'One of India\'s most renowned Jyotish practitioners with a track record of accurate predictions.',
  },
  {
    name: 'Maya Singh',
    role: 'Western Astrologer',
    rating: 4.8,
    reviews: 765,
    exp: '9 yrs',
    price: '₹1,099/session',
    specialty: ['Western Astrology', 'Natal Charts', 'Transit Readings'],
    available: true,
    img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&auto=format&q=80',
    bio: 'Certified AFA astrologer specializing in psychological astrology and transformative birth chart work.',
  },
  {
    name: 'Arjun Das',
    role: 'Life Coach & Numerologist',
    rating: 4.6,
    reviews: 543,
    exp: '7 yrs',
    price: '₹799/session',
    specialty: ['Numerology', 'Life Coaching', 'Goal Setting'],
    available: false,
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&auto=format&q=80',
    bio: 'Combines numerology with powerful life coaching to help clients build purpose-driven lives.',
  },
]

export default function ExpertsPage({ onNavigate }: ExpertsPageProps) {
  const [filter, setFilter] = useState('All')
  const filters = ['All', 'Available Now', 'Astrology', 'Therapy', 'Tarot']

  const filtered = experts.filter((e) => {
    if (filter === 'All') return true
    if (filter === 'Available Now') return e.available
    if (filter === 'Therapy') return e.specialty.some(s => s.includes('CBT') || s.includes('Therapy') || s.includes('Coaching'))
    if (filter === 'Astrology') return e.role.includes('Astrol') || e.role.includes('Jyotish') || e.role.includes('Numerol')
    if (filter === 'Tarot') return e.specialty.some(s => s.includes('Tarot') || s.includes('Crystal'))
    return true
  })

  return (
    <div className="pt-20" style={{ background: '#f8f6ff' }}>
      {/* Hero */}
      <div
        className="relative overflow-hidden py-16 px-6 text-center"
        style={{ background: 'linear-gradient(135deg, #2d1b4e 0%, #5b2d8e 50%, #d81b86 100%)' }}
      >
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-purple-300/40 text-purple-200 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            Our Experts
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Meet Your Guides
          </h1>
          <p className="text-white/65 text-base max-w-xl mx-auto">
            Handpicked, certified professionals ready to offer personalized guidance. Every expert is verified, experienced, and deeply committed to your growth.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-4">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === f
                  ? 'bg-[#2d1b4e] text-white shadow-md'
                  : 'bg-white text-[#4a4a6a] border border-purple-100 hover:border-[#2d1b4e]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Experts grid */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filtered.map((expert) => (
            <div
              key={expert.name}
              className="bg-white rounded-2xl shadow-sm border border-purple-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Top */}
              <div className="relative p-5 pb-4">
                <div className="flex items-start gap-4">
                  <div className="relative flex-shrink-0">
                    <img
                      src={expert.img}
                      alt={expert.name}
                      className="w-16 h-16 rounded-2xl object-cover"
                    />
                    <div
                      className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white"
                      style={{ background: expert.available ? '#22c55e' : '#94a3b8' }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-[#1e0d40] text-sm">{expert.name}</h3>
                    <p className="text-[#d81b86] text-xs font-medium">{expert.role}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex text-yellow-400">
                        {'★'.repeat(Math.floor(expert.rating))}
                        <span className="text-gray-300">{'★'.repeat(5 - Math.floor(expert.rating))}</span>
                      </div>
                      <span className="text-xs text-[#6b5b8f]">{expert.rating} ({expert.reviews})</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-[#6b5b8f]">{expert.exp}</div>
                    <div
                      className="text-xs px-2 py-0.5 rounded-full mt-1 text-white"
                      style={{ background: expert.available ? '#22c55e' : '#94a3b8' }}
                    >
                      {expert.available ? 'Online' : 'Offline'}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-[#6b5b8f] mt-3 leading-relaxed">{expert.bio}</p>
              </div>

              {/* Specialties */}
              <div className="px-5 pb-4 flex flex-wrap gap-1.5">
                {expert.specialty.map((s) => (
                  <span key={s} className="text-[10px] font-medium bg-purple-50 text-[#5b2d8e] px-2.5 py-1 rounded-full">
                    {s}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-purple-50 px-5 py-3 flex items-center justify-between">
                <span className="font-bold text-[#1e0d40] text-sm">{expert.price}</span>
                <button
                  onClick={() => onNavigate('Book')}
                  disabled={!expert.available}
                  className={`text-xs font-semibold px-4 py-1.5 rounded-full text-white transition-all ${
                    expert.available
                      ? 'bg-[#2d1b4e] hover:bg-[#d81b86]'
                      : 'bg-gray-300 cursor-not-allowed'
                  }`}
                >
                  {expert.available ? 'Book Session' : 'Notify Me'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
