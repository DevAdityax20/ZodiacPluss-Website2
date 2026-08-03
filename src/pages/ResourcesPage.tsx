import { useState } from 'react'

interface ResourcesPageProps {
  onNavigate: (page: string) => void
}

const articles = [
  {
    category: 'Astrology',
    title: 'Understanding Your Birth Chart: A Complete Beginner\'s Guide',
    excerpt: 'Your natal chart is a celestial snapshot of the moment you were born. Learn how to read the houses, planets, and aspects that define your cosmic blueprint.',
    readTime: '8 min read',
    date: 'Jul 28, 2026',
    img: 'https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?w=600&h=400&fit=crop&auto=format&q=80',
    color: '#5b2d8e',
  },
  {
    category: 'Wellness',
    title: 'The Science Behind Astrology and Mental Health',
    excerpt: 'Emerging research explores how astrological archetypes can serve as powerful frameworks for self-understanding and emotional regulation.',
    readTime: '6 min read',
    date: 'Jul 22, 2026',
    img: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&h=400&fit=crop&auto=format&q=80',
    color: '#0d5f4f',
  },
  {
    category: 'Tarot',
    title: 'The Major Arcana: 22 Cards That Tell the Story of Your Soul',
    excerpt: 'Journey through the 22 cards of the Major Arcana and discover the archetypal forces shaping your personal and spiritual evolution.',
    readTime: '12 min read',
    date: 'Jul 15, 2026',
    img: 'https://images.unsplash.com/photo-1627656349459-58c83faa6bdf?w=600&h=400&fit=crop&auto=format&q=80',
    color: '#7c3aed',
  },
  {
    category: 'Relationships',
    title: 'Synastry: How Astrology Reveals Relationship Compatibility',
    excerpt: 'Discover how overlaying two birth charts can reveal the dynamics, challenges, and gifts present in any relationship — romantic or otherwise.',
    readTime: '10 min read',
    date: 'Jul 8, 2026',
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop&auto=format&q=80',
    color: '#d81b86',
  },
  {
    category: 'Daily Life',
    title: 'Moon Phases and Your Emotional Cycles',
    excerpt: 'The moon completes a cycle every 29.5 days. Learn how to align your energy, decisions, and self-care practices with each lunar phase.',
    readTime: '7 min read',
    date: 'Jul 1, 2026',
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&h=400&fit=crop&auto=format&q=80',
    color: '#1e40af',
  },
  {
    category: 'AI & Tech',
    title: 'How AI is Revolutionizing Personalized Astrology',
    excerpt: 'ZodiacPluss\'s AI engine analyzes millions of astrological data points to deliver the most accurate, personalized readings ever created.',
    readTime: '5 min read',
    date: 'Jun 25, 2026',
    img: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=600&h=400&fit=crop&auto=format&q=80',
    color: '#14b8a6',
  },
]

const categories = ['All', 'Astrology', 'Wellness', 'Tarot', 'Relationships', 'Daily Life', 'AI & Tech']

export default function ResourcesPage({ onNavigate }: ResourcesPageProps) {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? articles
    : articles.filter((a) => a.category === activeCategory)

  return (
    <div className="pt-20" style={{ background: '#f8f6ff' }}>
      {/* Hero */}
      <div
        className="relative overflow-hidden py-16 px-6 text-center"
        style={{ background: 'linear-gradient(135deg, #0d5f4f 0%, #2d1b4e 60%, #5b2d8e 100%)' }}
      >
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-teal-400/40 text-teal-300 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
            </svg>
            Resources & Blog
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Learn. Grow. Evolve.
          </h1>
          <p className="text-white/65 text-base max-w-xl mx-auto">
            Explore our library of astrology guides, wellness articles, and spiritual resources crafted by our expert team.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-[#2d1b4e] text-white'
                  : 'bg-white text-[#4a4a6a] border border-purple-100 hover:border-[#2d1b4e]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles grid */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        {/* Featured article */}
        {filtered.length > 0 && (
          <div className="mt-6 mb-6">
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-purple-100 hover:shadow-xl transition-all duration-300 md:flex">
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img
                  src={filtered[0].img}
                  alt={filtered[0].title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full text-white inline-block mb-4 self-start"
                  style={{ background: filtered[0].color }}
                >
                  {filtered[0].category}
                </span>
                <h2 className="text-2xl font-bold text-[#1e0d40] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {filtered[0].title}
                </h2>
                <p className="text-[#6b5b8f] text-sm leading-relaxed mb-5">{filtered[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-[#9b87c9]">{filtered[0].date} · {filtered[0].readTime}</div>
                  <button className="text-sm font-semibold text-[#2d1b4e] hover:text-[#d81b86] transition-colors flex items-center gap-1">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Rest of articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.slice(1).map((article) => (
            <div
              key={article.title}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-purple-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="h-44 overflow-hidden relative">
                <img
                  src={article.img}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
                    style={{ background: article.color }}
                  >
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#1e0d40] text-sm leading-snug mb-2">{article.title}</h3>
                <p className="text-xs text-[#6b5b8f] leading-relaxed mb-3 line-clamp-2">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-[#9b87c9]">{article.date} · {article.readTime}</span>
                  <button className="text-xs font-semibold text-[#2d1b4e] hover:text-[#d81b86] transition-colors">
                    Read →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-[#9b87c9]">
            <div className="text-4xl mb-3">✦</div>
            <p>No articles found in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}
