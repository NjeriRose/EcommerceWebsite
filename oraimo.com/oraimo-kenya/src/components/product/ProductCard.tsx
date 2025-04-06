import { Link } from 'react-router-dom';
import OptimizedImage from '../ui/OptimizedImage';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviewCount: number;
  features: string[];
  isNew?: boolean;
  link: string;
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviewCount,
  features,
  isNew = false,
  link,
}: ProductCardProps) => {
  // Generate stars for rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <img
            key={`star-${i}`}
            src="https://ext.same-assets.com/131099195/3942025084.svg"
            alt="Full Star"
            className="w-3 h-3"
            loading="lazy"
          />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <img
            key={`star-${i}`}
            src="https://ext.same-assets.com/131099195/3942025084.svg"
            alt="Half Star"
            className="w-3 h-3 opacity-50"
            loading="lazy"
          />
        );
      } else {
        stars.push(
          <img
            key={`star-${i}`}
            src="https://ext.same-assets.com/131099195/3942025084.svg"
            alt="Empty Star"
            className="w-3 h-3 opacity-20"
            loading="lazy"
          />
        );
      }
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
      {/* Product Image */}
      <Link to={link} className="relative block">
        <OptimizedImage
          src={image}
          alt={name}
          className="w-full h-60 object-contain p-4"
          width="100%"
          height={240}
          quality={85}
          shimmer={true}
        />
        {isNew && (
          <span className="absolute top-2 right-2 bg-oraimo-green text-white text-xs px-2 py-0.5 rounded">
            New Arrival
          </span>
        )}
      </Link>

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex mr-1">{renderStars()}</div>
          <span className="text-xs text-gray-500">({reviewCount})</span>
        </div>

        {/* Product Name */}
        <Link
          to={link}
          className="text-lg font-medium hover:text-oraimo-green mb-2 overflow-hidden"
          style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}
        >
          {name}
        </Link>

        {/* Features */}
        <div className="mb-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-sm text-gray-600 mb-1">{feature}</div>
          ))}
        </div>

        {/* Price */}
        <div className="mt-4 flex items-center">
          <span className="text-lg font-bold">KES {price.toLocaleString()}</span>
          {originalPrice > price && (
            <span className="ml-2 text-sm text-gray-500 line-through">
              KES {originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex space-x-2">
          <Link
            to={link}
            className="flex-1 bg-white text-oraimo-black border border-oraimo-light-gray hover:border-oraimo-gray px-3 py-2 rounded-md text-center text-sm"
          >
            Learn More
          </Link>
          <button className="flex-1 bg-oraimo-green text-white hover:bg-oraimo-dark-green px-3 py-2 rounded-md text-sm">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
