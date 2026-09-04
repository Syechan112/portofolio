import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const BlogSection = () => {
  return (
    <section id="blog" className="py-28 px-6 sm:px-8 bg-dark relative border-t border-dark-border/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
              Insights &amp; Writing
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Thoughts on Design &amp; Code
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm sm:text-base leading-relaxed">
            Deep dives into modern frontend architecture, micro-interactions, and high-conversion design methodologies.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioData.blog.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="group rounded-3xl bg-dark-card border border-dark-border hover:border-accent/50 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-accent/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-dark-surface">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width="600"
                    height="375"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-dark/80 backdrop-blur-md border border-white/10 text-xs font-semibold text-accent">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Bottom Link */}
              <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:text-accent-hover transition-colors">
                  Read Article
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
