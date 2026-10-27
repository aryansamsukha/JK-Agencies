import React from 'react';
import type { Product } from '../data/products';
import { X, ArrowRight, MessageSquare, Sliders } from 'lucide-react';
import { useLockLenis } from '../hooks/useLockLenis';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onRequestQuote: (productName: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onRequestQuote,
}) => {
  useLockLenis(Boolean(product));
  const [activeImage, setActiveImage] = React.useState<string>(product?.image || '');

  React.useEffect(() => {
    if (product) {
      setActiveImage(product.image);
    }
  }, [product]);

  if (!product) return null;

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello JK Agencies! I am interested in technical details and quote for: ${product.brand} - ${product.name}.`
    );
    window.open(`https://wa.me/919829000000?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-xl animate-fadeIn">
      {/* Container */}
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0B0B0B] text-white shadow-2xl custom-scrollbar">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-3 rounded-full bg-white/[0.05] hover:bg-[#C1121F] text-white transition-colors shadow-md"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 md:p-12">
          
          {/* Left Column: Image Gallery (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden bg-[#F3EEE4] h-[360px] sm:h-[420px] shadow-lg flex items-center justify-center p-8">
              <img
                src={activeImage}
                alt={product.name}
                className="max-h-full max-w-full object-contain transition-opacity duration-300"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono tracking-widest text-[#C1121F] font-bold shadow-md">
                {product.brand}
              </div>
            </div>

            {/* Thumbnail Strip */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`rounded-xl overflow-hidden h-20 bg-[#F3EEE4] border-2 transition-all shadow-md ${
                      activeImage === img ? 'border-[#C1121F] scale-95 shadow-[0_0_12px_rgba(193,18,31,0.5)]' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-contain p-1.5" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Technical Details (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-white/[0.04] shadow-md">
                <img src="/logo.png" alt="JK Agencies" className="h-4 w-auto object-contain" />
                <span className="text-[10px] font-mono tracking-[0.2em] text-[#D4AF37] font-bold uppercase">
                  JK AGENCIES • A LEGACY OF 90+ YEARS
                </span>
              </div>
              <div className="text-xs font-mono tracking-[0.3em] text-[#C1121F] font-bold uppercase mb-2">
                {product.brand} // {product.category}
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase mb-2">
                {product.name}
              </h3>
              <div className="text-xs font-semibold tracking-wider text-[#A4A4A4] uppercase mb-6">
                {product.subtitle}
              </div>

              <p className="text-sm text-[#A4A4A4] leading-relaxed mb-8 pb-6">
                {product.description}
              </p>

              {/* Technical Specifications Grid */}
              <div className="mb-8">
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-white uppercase font-bold mb-4">
                  <Sliders className="w-4 h-4 text-[#C1121F]" />
                  <span>TECHNICAL SPECIFICATIONS</span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs bg-[#111111] p-4 rounded-xl shadow-inner">
                  {product.specs.wattage && (
                    <div>
                      <div className="text-[10px] font-mono text-[#A4A4A4]">WATTAGE / OUTPUT</div>
                      <div className="font-bold text-white">{product.specs.wattage}</div>
                    </div>
                  )}
                  {product.specs.beamAngle && (
                    <div>
                      <div className="text-[10px] font-mono text-[#A4A4A4]">BEAM ANGLE</div>
                      <div className="font-bold text-white">{product.specs.beamAngle}</div>
                    </div>
                  )}
                  {product.specs.cri && (
                    <div>
                      <div className="text-[10px] font-mono text-[#A4A4A4]">COLOR RENDERING</div>
                      <div className="font-bold text-white">{product.specs.cri}</div>
                    </div>
                  )}
                  {product.specs.colorTemp && (
                    <div>
                      <div className="text-[10px] font-mono text-[#A4A4A4]">COLOR TEMPERATURE</div>
                      <div className="font-bold text-white">{product.specs.colorTemp}</div>
                    </div>
                  )}
                  {product.specs.finish && (
                    <div>
                      <div className="text-[10px] font-mono text-[#A4A4A4]">FINISH OPTIONS</div>
                      <div className="font-bold text-white">{product.specs.finish}</div>
                    </div>
                  )}
                  {product.specs.controlProtocol && (
                    <div>
                      <div className="text-[10px] font-mono text-[#A4A4A4]">CONTROL PROTOCOL</div>
                      <div className="font-bold text-white">{product.specs.controlProtocol}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Architectural Applications */}
              <div className="mb-8">
                <div className="text-[10px] font-mono tracking-widest text-[#A4A4A4] uppercase mb-3">
                  SUITED APPLICATIONS
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app) => (
                    <span key={app} className="px-3 py-1 rounded-md bg-white/[0.04] text-xs text-[#F5F5F5]">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  onClose();
                  onRequestQuote(product.name);
                }}
                className="flex-1 py-3.5 rounded-xl bg-[#C1121F] hover:bg-[#E01B2E] text-white font-bold text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(193,18,31,0.4)] transition-all"
              >
                <span>REQUEST A QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleWhatsApp}
                className="py-3.5 px-6 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white font-bold text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WHATSAPP</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
