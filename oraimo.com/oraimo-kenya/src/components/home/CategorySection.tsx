import { Link } from 'react-router-dom';
import OptimizedImage from '../ui/OptimizedImage';

interface CategoryProps {
  id: string;
  name: string;
  image: string;
  link: string;
  isNew?: boolean;
  isHot?: boolean;
}

interface CategorySectionProps {
  title: string;
  categories: CategoryProps[];
}

const CategorySection = ({ title, categories }: CategorySectionProps) => {
  return (
    <section className="py-10">
      <div className="oraimo-container">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={category.link}
              className="relative block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-40 overflow-hidden">
                <OptimizedImage
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  priority={index < 2} // Priority loading for first two categories
                  quality={85}
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-medium">
                  {category.name}
                  {category.isNew && (
                    <span className="ml-2 text-xs font-bold text-oraimo-green">NEW</span>
                  )}
                  {category.isHot && (
                    <span className="ml-2 text-xs font-bold text-oraimo-green">HOT</span>
                  )}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
