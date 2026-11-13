import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Search, Newspaper } from 'lucide-react';
import { newsData } from '../data/newsData';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import PageHero from '../components/layout/PageHero';
import SectionTitle from '../components/common/SectionTitle';

export default function NewsMedia() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'ESG & Sustainability', 'Technology & Innovation', 'Corporate Excellence', 'Insights & Whitepapers'];

  const filteredNews = useMemo(() => {
    return newsData.filter((item) => {
      const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full flex flex-col flex-1">
      <Breadcrumbs items={[{ label: 'News & Media' }]} />

      {/* Signature OCS Enterprise Hero with Premium Photography & Floating Card */}
      <PageHero
        badge="Press & Thought Leadership"
        badgeLinkText="Browse articles"
        badgeLinkUrl="#articles"
        title="News, Insights & Industry Perspectives"
        description="Stay informed with the latest corporate press releases, research whitepapers, Net Zero case studies, and technological breakthroughs from NEXAAGEN."
        image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2400&q=85"
        imageAlt="Corporate News, Research Whitepapers, and Industry Perspectives"
        stats={[
          { value: "30+", label: "Published Insights" },
          { value: "Weekly", label: "Industry Analysis" },
          { value: "Global", label: "Media Reach" }
        ]}
        primaryCta={{
          text: "Read Featured Story",
          url: "#featured",
          isAnchor: true
        }}
        secondaryCta={{
          text: "Filter Topics",
          url: "#articles",
          isAnchor: true
        }}
      />

      {/* News Controls & Filtering */}
      <section id="articles" className="section-padding bg-white">
        <div className="container-custom">
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-brand-navy text-white shadow-md'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Local Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-brand-navy"
              />
            </div>
          </div>

          {/* Articles Grid */}
          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-card-subtle hover:shadow-card-hover border border-slate-100 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Thumbnail */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover card-img-zoom"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 bg-brand-navy/90 text-white text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                        {article.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7">
                      <div className="flex items-center space-x-3 text-xs text-slate-500 mb-2">
                        <div className="flex items-center">
                          <Calendar className="w-3.5 h-3.5 mr-1 text-brand-orange" />
                          <span>{article.date}</span>
                        </div>
                        {article.readTime && (
                          <div className="flex items-center">
                            <Clock className="w-3.5 h-3.5 mr-1 text-slate-400" />
                            <span>{article.readTime}</span>
                          </div>
                        )}
                      </div>

                      <h2 className="text-xl font-heading font-bold text-brand-navy group-hover:text-brand-orange transition-colors line-clamp-2 leading-snug">
                        {article.title}
                      </h2>

                      <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-7 pb-7 pt-2 border-t border-slate-50 flex items-center justify-between">
                    <Link
                      to={`/news/${article.id}`}
                      className="inline-flex items-center text-xs font-bold text-brand-orange hover:text-red-700 transition-colors"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <span className="text-[11px] text-slate-400 font-medium">By {article.author}</span>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-100">
              <Newspaper className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-brand-navy">No articles match your filter</h3>
              <p className="text-sm text-slate-500 mt-1">Try resetting your category or searching with different keywords.</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="mt-4 btn-navy text-xs py-2 px-5"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

