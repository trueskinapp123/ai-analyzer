import React from 'react';
import { ExternalLink, ShoppingBag } from 'lucide-react';

interface Product {
  name: string;
  description: string;
  price: string;
  affiliateUrl: string;
  imageUrl: string;
}

interface ProductRecommendationProps {
  skinType: string;
}

export function ProductRecommendation({ skinType }: ProductRecommendationProps) {
  // Product recommendations based on skin type
  const getProductsByType = (type: string): Product[] => {
    const products: Record<string, Product[]> = {
      'Combination': [
        {
          name: 'CeraVe Foaming Facial Cleanser',
          description: 'Gentle foaming cleanser for combination skin with ceramides and niacinamide',
          price: '$16.99',
          affiliateUrl: 'https://www.amazon.com/CeraVe-Foaming-Facial-Cleanser-Washing/dp/B01N1LL62W?tag=YOUR-AFFILIATE-ID',
          imageUrl: 'https://images.unsplash.com/photo-1556229162-5c63ed9c4efb?w=300'
        },
        {
          name: 'The Ordinary Niacinamide 10% + Zinc 1%',
          description: 'Oil control and pore-refining serum',
          price: '$11.99',
          affiliateUrl: 'https://www.amazon.com/Ordinary-Niacinamide-10-Zinc-30ml/dp/B01MDTVZTZ?tag=YOUR-AFFILIATE-ID',
          imageUrl: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300'
        }
      ],
      'Dry': [
        {
          name: 'La Roche-Posay Toleriane Hydrating Cleanser',
          description: 'Gentle hydrating cleanser for dry sensitive skin',
          price: '$14.99',
          affiliateUrl: 'https://www.amazon.com/La-Roche-Posay-Toleriane-Hydrating-Gentle/dp/B01N7T7JKJ?tag=YOUR-AFFILIATE-ID',
          imageUrl: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=300'
        }
      ],
      // Add more skin types and products as needed
    };

    return products[type] || products['Combination']; // Default to combination skin products
  };

  const products = getProductsByType(skinType);

  return (
    <div className="mt-8">
      <div className="flex items-center mb-4">
        <ShoppingBag className="w-5 h-5 text-blue-600 mr-2" />
        <h4 className="text-lg font-semibold text-gray-900">Recommended Products</h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((product, index) => (
          <a
            key={index}
            href={product.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="group block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
          >
            <div className="aspect-video relative overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h5 className="font-medium text-gray-900">{product.name}</h5>
                <span className="text-blue-600 font-medium">{product.price}</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">{product.description}</p>
              <div className="flex items-center text-blue-600 text-sm font-medium">
                View on Amazon
                <ExternalLink className="w-4 h-4 ml-1" />
              </div>
            </div>
          </a>
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-4">
        Note: As an Amazon Associate, we earn from qualifying purchases.
      </p>
    </div>
  );
}