import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Share2, Linkedin, Twitter } from 'lucide-react';
import { newsData } from '../data/newsData';
import Breadcrumbs from '../components/layout/Breadcrumbs';

export default function NewsDetail() {
  const { newsId } = useParams();

  const article = newsData.find((n) => n.id === newsId);

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  const related = newsData.filter((n) => n.id !== article.id).slice(0, 3);

  return (
    <div className="w-full flex flex-col flex-1">
      <Breadcrumbs
        items={[
          { label: 'News & Media', link: '/news' },
          { label: article.title },
        ]}
      />

      {/* Article Header */}
      <section className="w-full bg-brand-navy text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="container-custom max-w-4xl mx-auto space-y-6">
          <Link
            to="/news"
            className="inline-flex items-center text-xs font-semibold text-slate-300 hover:text-brand-orange transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
            <span>Back to All News</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="bg-brand-orange text-white font-bold px-3 py-1 rounded-full uppercase tracking-wider text-[11px]">
              {article.category}
            </span>
            <div className="flex items-center text-slate-300">
              <Calendar className="w-3.5 h-3.5 mr-1.5 text-brand-orange" />
              <span>{article.date}</span>
            </div>
            {article.readTime && (
              <div className="flex items-center text-slate-300">
                <Clock className="w-3.5 h-3.5 mr-1.5 text-slate-400" />
                <span>{article.readTime}</span>
              </div>
            )}
            <div className="flex items-center text-slate-300">
              <User className="w-3.5 h-3.5 mr-1.5 text-slate-400" />
              <span>By {article.author}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight leading-tight">
            {article.title}
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed font-normal">
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* Article Body */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          {/* Main Hero Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl mb-12 aspect-[16/9]">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Editorial Content */}
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-6 text-base sm:text-lg">
            {article.content.split('\n\n').map((paragraph, pIdx) => {
              const trimmed = paragraph.trim();
              if (!trimmed) return null;
              return <p key={pIdx}>{trimmed}</p>;
            })}
          </div>

          {/* Social Share & Back */}
          <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Share this article:</span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-slate-100 hover:bg-brand-navy hover:text-white text-slate-600 transition-colors"
                title="Share on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-slate-100 hover:bg-brand-navy hover:text-white text-slate-600 transition-colors"
                title="Share on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>

            <Link
              to="/news"
              className="btn-outline text-xs py-2.5 px-6"
            >
              Browse More News
            </Link>
          </div>
        </div>
      </section>

      {/* Related News Carousel */}
      {related.length > 0 && (
        <section className="section-padding bg-slate-50 border-t border-slate-100">
          <div className="container-custom max-w-6xl">
            <h3 className="text-2xl font-heading font-bold text-brand-navy mb-8">
              Related Articles & Press
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((item) => (
                <Link
                  key={item.id}
                  to={`/news/${item.id}`}
                  className="bg-white rounded-3xl overflow-hidden shadow-card-subtle hover:shadow-card-hover border border-slate-100 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover card-img-zoom"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-brand-orange block mb-1">
                        {item.category}
                      </span>
                      <h4 className="text-base font-heading font-bold text-brand-navy group-hover:text-brand-orange transition-colors line-clamp-2">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                  <div className="px-6 pb-6 pt-2 text-xs font-bold text-brand-orange flex items-center">
                    <span>Read Story</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

