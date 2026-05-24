import { ExternalLink } from 'lucide-react';

interface ProductCardProps {
  title: string;
  category: string;
  price: string;
  image: string;
  description: string;
  affiliateLink: string;
  affiliateProgram: string;
}

export default function ProductCard({
  title,
  category,
  price,
  image,
  description,
  affiliateLink,
  affiliateProgram,
}: ProductCardProps) {
  return (
    <div className="luxury-card fade-in-up group">
      {/* Product Image */}
      <div className="product-image">
        <img src={image} alt={title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-1">
              {category}
            </p>
            <h3 className="font-heading text-xl text-foreground">{title}</h3>
          </div>
        </div>

        {/* Accent Line */}
        <div className="accent-line my-4" />

        {/* Description */}
        <p className="font-body text-sm text-foreground/70 mb-4 line-clamp-2">
          {description}
        </p>

        {/* Price and Program */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-display text-lg text-accent">{price}</span>
          <span className="text-xs text-foreground/50 font-body">{affiliateProgram}</span>
        </div>

        {/* CTA Button */}
        <a
          href={affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full btn-luxury flex items-center justify-center gap-2 text-sm"
        >
          Ver Produto
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
}
