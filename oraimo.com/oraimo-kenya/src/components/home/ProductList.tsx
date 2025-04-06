import { Link } from 'react-router-dom';
import ProductCard from '../product/ProductCard';

interface Product {
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

interface ProductListProps {
  title: string;
  viewMoreLink?: string;
  products: Product[];
}

const ProductList = ({ title, viewMoreLink, products }: ProductListProps) => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="oraimo-container">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{title}</h2>
          {viewMoreLink && (
            <Link
              to={viewMoreLink}
              className="text-oraimo-dark-green hover:underline flex items-center"
            >
              View More
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              image={product.image}
              rating={product.rating}
              reviewCount={product.reviewCount}
              features={product.features}
              isNew={product.isNew}
              link={product.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
