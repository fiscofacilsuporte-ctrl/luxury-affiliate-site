import Navigation from '@/components/Navigation';
import ProductCard from '@/components/ProductCard';
import { ArrowRight, Sparkles } from 'lucide-react';

const products = [
  {
    id: 1,
    title: 'Rolex Datejust',
    category: 'Relógio de Luxo',
    price: 'A partir de €12.000',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663516745800/bPwSfSiPwbm8USwf4vUHup/luxury-watch-MNqE6PF2F5RgwKSWKf7i97.webp',
    description: 'Relógio suíço de precisão com movimento automático e caixa em ouro rosa. Símbolo de elegância atemporal.',
    affiliateLink: 'https://www.ashford.com',
    affiliateProgram: 'Ashford - 6%',
  },
  {
    id: 2,
    title: 'Oxford Italiano Premium',
    category: 'Sapatos',
    price: 'A partir de €800',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663516745800/bPwSfSiPwbm8USwf4vUHup/luxury-shoes-H7KdsNFE97euNKf7QepHWp.webp',
    description: 'Sapatos oxford em couro italiano genuíno. Artesanato impecável e conforto excepcional.',
    affiliateLink: 'https://www.farfetch.com',
    affiliateProgram: 'Farfetch - 5%',
  },
  {
    id: 3,
    title: 'Vacheron Constantin',
    category: 'Relógio de Luxo',
    price: 'A partir de €15.000',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663516745800/bPwSfSiPwbm8USwf4vUHup/luxury-watch-MNqE6PF2F5RgwKSWKf7i97.webp',
    description: 'Manufatura suíça de excelência. Complicações sofisticadas e design atemporal.',
    affiliateLink: 'https://www.exquisitetimepieces.com',
    affiliateProgram: 'Exquisite Timepieces - 6%',
  },
  {
    id: 4,
    title: 'Sapato de Gala Elegante',
    category: 'Sapatos',
    price: 'A partir de €1.200',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663516745800/bPwSfSiPwbm8USwf4vUHup/luxury-shoes-H7KdsNFE97euNKf7QepHWp.webp',
    description: 'Sapato de gala em couro fino com acabamento espelhado. Perfeito para ocasiões especiais.',
    affiliateLink: 'https://www.saks.com',
    affiliateProgram: 'Saks Fifth Avenue - 3%',
  },
  {
    id: 5,
    title: 'Omega Seamaster',
    category: 'Relógio de Luxo',
    price: 'A partir de €5.500',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663516745800/bPwSfSiPwbm8USwf4vUHup/luxury-watch-MNqE6PF2F5RgwKSWKf7i97.webp',
    description: 'Relógio de mergulho profissional com resistência à água de 300m. Durabilidade e estilo.',
    affiliateLink: 'https://www.creationwatches.com',
    affiliateProgram: 'Creation Watches - 5%',
  },
  {
    id: 6,
    title: 'Loafer de Couro Nobre',
    category: 'Sapatos',
    price: 'A partir de €950',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663516745800/bPwSfSiPwbm8USwf4vUHup/luxury-shoes-H7KdsNFE97euNKf7QepHWp.webp',
    description: 'Loafer clássico em couro de primeira qualidade. Conforto e sofisticação em cada passo.',
    affiliateLink: 'https://www.farfetch.com',
    affiliateProgram: 'Farfetch - 5%',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663516745800/bPwSfSiPwbm8USwf4vUHup/hero-luxury-mcpkpkgmERtjezSwgEGvtv.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles size={20} className="text-accent" />
              <span className="text-accent text-sm font-semibold uppercase tracking-widest font-body">
                Curadoria Premium
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl mb-6 leading-tight">
              Artigos de Luxo Selecionados
            </h1>

            <p className="font-body text-lg text-foreground/80 mb-8 max-w-xl">
              Descubra uma coleção curada de relógios suíços, sapatos italianos e acessórios premium. Cada peça representa o apogeu da artesania e do design.
            </p>

            <button className="btn-luxury flex items-center gap-2">
              Explorar Catálogo
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Accent Line */}
      <div className="accent-line my-8" />

      {/* Products Section */}
      <section id="products" className="py-20 bg-secondary/30">
        <div className="container">
          <div className="mb-16">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest font-body mb-3">
              Catálogo
            </p>
            <h2 className="font-display text-4xl md:text-5xl mb-4">Produtos em Destaque</h2>
            <p className="font-body text-foreground/70 max-w-2xl">
              Seleção exclusiva de artigos de luxo com links de afiliados para os melhores programas de comissão.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={product.id} className="stagger-item fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accent Line */}
      <div className="accent-line my-8" />

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent text-sm font-semibold uppercase tracking-widest font-body mb-3">
                Sobre Nós
              </p>
              <h2 className="font-display text-4xl md:text-5xl mb-6">Luxo Autêntico</h2>
              <p className="font-body text-foreground/80 mb-4">
                Luxury Elite é uma plataforma dedicada à curação de artigos de luxo autênticos. Cada produto é selecionado com rigor, garantindo qualidade, autenticidade e valor excepcional.
              </p>
              <p className="font-body text-foreground/80 mb-6">
                Através de parcerias com os melhores programas de afiliados globais, oferecemos acesso a relógios suíços, sapatos italianos e acessórios premium com as melhores comissões do mercado.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <p className="font-body text-sm">Curadoria rigorosa de produtos premium</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <p className="font-body text-sm">Comissões competitivas de afiliados</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <p className="font-body text-sm">Atendimento ao cliente excepcional</p>
                </div>
              </div>
            </div>
            <div
              className="rounded-lg overflow-hidden h-96"
              style={{
                backgroundImage:
                  'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663516745800/bPwSfSiPwbm8USwf4vUHup/abstract-luxury-nm4LakXPwEQPSujvK2FUJM.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
        </div>
      </section>

      {/* Accent Line */}
      <div className="accent-line my-8" />

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-heading text-lg mb-4">Luxury Elite</h3>
              <p className="font-body text-sm text-foreground/70">
                Curadoria premium de artigos de luxo com links de afiliados.
              </p>
            </div>
            <div>
              <h4 className="font-heading text-sm mb-4 uppercase tracking-wide">Categorias</h4>
              <ul className="space-y-2 font-body text-sm text-foreground/70">
                <li><a href="#watches" className="hover:text-accent transition-colors">Relógios</a></li>
                <li><a href="#shoes" className="hover:text-accent transition-colors">Sapatos</a></li>
                <li><a href="#accessories" className="hover:text-accent transition-colors">Acessórios</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-sm mb-4 uppercase tracking-wide">Programas</h4>
              <ul className="space-y-2 font-body text-sm text-foreground/70">
                <li><a href="#" className="hover:text-accent transition-colors">Ashford</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Farfetch</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Saks Fifth Avenue</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-sm mb-4 uppercase tracking-wide">Legal</h4>
              <ul className="space-y-2 font-body text-sm text-foreground/70">
                <li><a href="#" className="hover:text-accent transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Termos</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contacto</a></li>
              </ul>
            </div>
          </div>

          <div className="accent-line my-8" />

          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="font-body text-sm text-foreground/50">
              © 2026 Luxury Elite. Todos os direitos reservados.
            </p>
            <p className="font-body text-xs text-foreground/40 mt-4 md:mt-0">
              Este site contém links de afiliados. Ganhamos comissões sem custo adicional para você.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
