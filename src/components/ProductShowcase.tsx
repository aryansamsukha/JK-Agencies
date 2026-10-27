import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import type { Product } from '../data/products';
import { ProductModal } from './ProductModal';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ProductShowcaseProps {
  onRequestQuote: (productName: string) => void;
}

const CATEGORIES = ['ALL', 'Downlights', 'Track', 'Indoor', 'Outdoor'] as const;

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onRequestQuote }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState<(typeof CATEGORIES)[number]>('ALL');

  const filteredProducts = PRODUCTS.filter((p) =>
    activeCategory === 'ALL' ? true : p.category === activeCategory,
  );

  return (
    <section id="products" className="relative py-32 bg-[#050505] text-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6" data-reveal>
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C1121F]" />
              <span className="text-xs font-mono tracking-[0.3em] text-[#C1121F] uppercase font-bold">
                NORTEK FLAGSHIP RANGE
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-white leading-none">
              PRECISION <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F5F5F5] to-white/40">
                INSTRUMENTS.
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-xs sm:text-sm text-[#888888] leading-relaxed mb-5">
              The best of{' '}
              <a
                href="https://nortekled.com/"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-[#C1121F] underline underline-offset-4"
              >
                nortekled.com
              </a>
              {' '}— Creta, Evana, Della, Spica, Omnia — stocked and specified at JK Agencies, Jodhpur.
            </p>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-[10px] font-mono tracking-widest uppercase transition-all ${
                    activeCategory === cat
                      ? 'bg-[#C1121F] text-white shadow-[0_0_15px_rgba(193,18,31,0.4)]'
                      : 'bg-white/[0.04] text-[#888888] hover:text-white hover:bg-white/[0.08]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <button
              key={product.id}
              type="button"
              onClick={() => setSelectedProduct(product)}
              data-cursor="EXPLORE"
              className="group text-left rounded-3xl overflow-hidden bg-[#0A0A0A] border border-white/10 hover:border-[#C1121F]/50 transition-all duration-500 shadow-xl hover:shadow-[0_16px_50px_rgba(193,18,31,0.22)]"
            >
              <div className="relative h-64 sm:h-72 bg-[#F3EEE4] flex items-center justify-center px-8 py-6 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  decoding="async"
                  className="relative z-10 max-h-full max-w-full object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.18)] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-white/90 text-[9px] font-mono tracking-widest text-[#C1121F] font-bold">
                    {product.brand}
                  </span>
                  {product.featured && (
                    <span className="px-2.5 py-1 rounded-full bg-[#050505] text-[9px] font-mono tracking-widest text-[#FCE5C8] flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      BEST
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6">
                <div className="text-[10px] font-mono tracking-[0.22em] text-[#888888] uppercase mb-2">
                  {product.category}
                  {product.specs.wattage ? `  ·  ${product.specs.wattage}` : ''}
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white tracking-wide uppercase mb-2 group-hover:text-[#FCE5C8] transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs text-[#888888] leading-relaxed mb-5">
                  {product.subtitle}
                </p>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] font-mono text-[#A4A4A4] tracking-widest uppercase">
                    {product.specs.ipRating || product.specs.finish}
                  </span>
                  <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] uppercase text-white group-hover:text-[#C1121F] transition-colors">
                    View
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onRequestQuote={onRequestQuote}
        />
      </div>
    </section>
  );
};
