import { ImgHTMLAttributes, useState, useRef, useEffect, useCallback } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { getOptimizedImageUrl } from '../../utils/imageUtils';
import { getPlaceholderForImage } from '../../utils/svgPlaceholder';

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'onLoad'> {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  priority?: boolean;
  shimmer?: boolean;
  smallSrc?: string;
  sizes?: string;
  className?: string;
  isHero?: boolean;
  quality?: number;
  effect?: 'blur' | 'opacity' | 'black-and-white' | undefined;
  useSvgPlaceholder?: boolean;
}

// Add shimmer animation to global styles
const shimmerAnimation = `
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
`;

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  priority: explicitPriority = false,
  shimmer = true,
  smallSrc,
  sizes = '100vw',
  className = '',
  isHero = false,
  quality = 80,
  effect = 'blur',
  useSvgPlaceholder = true,
  ...props
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Ensure the src isn't transformed in a way that breaks it
  const originalSrc = src;

  // Only attempt to optimize the URL if it's not a data: URL
  const optimizedSrc = src.startsWith('data:') ? src : getOptimizedImageUrl(originalSrc,
    typeof width === 'number' ? width : undefined,
    quality
  );

  // Generate a placeholder image - either an SVG or smallSrc if provided
  const placeholderImage = useSvgPlaceholder && typeof width === 'number' && typeof height === 'number'
    ? getPlaceholderForImage(originalSrc, width, height)
    : smallSrc;

  // Handle image load complete - using useCallback to memoize the function
  const handleImageLoaded = useCallback(() => {
    setIsLoaded(true);
  }, []);

  // Handle image load error - using useCallback to memoize the function
  const handleImageError = useCallback(() => {
    console.error(`Failed to load image: ${optimizedSrc}`);
    setImgError(true);
    // If there was an error, use a fallback placeholder
    if (containerRef.current && typeof width === 'number' && typeof height === 'number') {
      containerRef.current.style.backgroundImage = `url("${getPlaceholderForImage(originalSrc, width, height)}")`;
      containerRef.current.style.backgroundSize = 'cover';
      containerRef.current.style.backgroundPosition = 'center';
    }
  }, [optimizedSrc, originalSrc, width, height]);

  // Prepare background styles for container
  const beforeLoadCallback = useCallback(() => {
    if (containerRef.current && placeholderImage) {
      containerRef.current.style.backgroundImage = `url("${placeholderImage}")`;
    }
  }, [placeholderImage]);

  // Determine if this image should load with priority
  const priority = explicitPriority || isHero;

  // Use direct image tag for priority images
  if (priority) {
    return (
      <div
        ref={containerRef}
        className={`relative overflow-hidden ${className}`}
        style={{
          width: width ? (typeof width === 'number' ? `${width}px` : width) : 'auto',
          height: height ? (typeof height === 'number' ? `${height}px` : height) : 'auto',
          backgroundImage: placeholderImage ? `url("${placeholderImage}")` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <img
          src={originalSrc} // Use original src for critical images
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          width={typeof width === 'number' ? width : undefined}
          height={typeof height === 'number' ? height : undefined}
          sizes={sizes}
          loading="eager"
          onLoad={handleImageLoaded}
          onError={handleImageError}
          style={{
            objectFit: 'cover',
            objectPosition: 'center'
          }}
          {...props}
        />
      </div>
    );
  }

  // For non-priority images, use LazyLoadImage with placeholder
  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden"
      style={{
        width: width ? (typeof width === 'number' ? `${width}px` : width) : 'auto',
        height: height ? (typeof height === 'number' ? `${height}px` : height) : 'auto',
        backgroundImage: placeholderImage && !isLoaded ? `url("${placeholderImage}")` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {shimmer && !isLoaded && !placeholderImage && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300"
          style={{
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite linear'
          }}
        />
      )}

      <LazyLoadImage
        src={originalSrc} // Use original src
        alt={alt}
        effect={effect}
        width={typeof width === 'number' ? width : undefined}
        height={typeof height === 'number' ? height : undefined}
        threshold={300}
        afterLoad={handleImageLoaded}
        beforeLoad={beforeLoadCallback}
        onError={handleImageError}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} w-full h-full object-cover ${className}`}
        placeholderSrc={smallSrc}
        visibleByDefault={priority}
        wrapperClassName="w-full h-full"
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
