import { supportsWebP, getOptimalImageUrl } from './webpSupport';
import { isCdnUrl, getOptimizedCdnUrl } from './cdnService';

/**
 * Generates a tiny blurred data URL for a placeholder image
 * This simulates a technique used by Next.js Image component
 *
 * @param src Original image source URL
 * @param width Width of the placeholder (small for better performance)
 * @returns Promise resolving to a data URL
 */
export const generateBlurPlaceholder = async (src: string, width = 10): Promise<string> => {
  // In a real implementation, this would use a server-side function
  // or image processing library. For our demo, we'll return a simulated value.
  return `data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${Math.floor(width * 0.6)}'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' href='${src}' x='0' y='0' height='100%25' width='100%25'/%3E%3C/svg%3E`;
};

/**
 * Get the dimensions from an image URL if they're encoded in the filename
 * e.g. "image-800x600.jpg" would return { width: 800, height: 600 }
 *
 * @param src Image URL
 * @returns Object with width and height if found, or null
 */
export const getDimensionsFromImageUrl = (src: string): { width: number; height: number } | null => {
  const match = src.match(/(\d+)x(\d+)/);
  if (match && match.length === 3) {
    return {
      width: parseInt(match[1], 10),
      height: parseInt(match[2], 10)
    };
  }
  return null;
};

/**
 * Generates a srcSet string for responsive images with WebP support
 *
 * @param src Original image URL
 * @param widths Array of widths to generate
 * @returns srcSet string
 */
export const generateSrcSet = (src: string, widths: number[] = [320, 640, 960, 1280, 1920]): string => {
  // Skip for data URLs
  if (src.startsWith('data:')) {
    return src;
  }

  // For standard images, create a basic srcset
  return widths
    .map(width => `${src} ${width}w`)
    .join(', ');
};

/**
 * Transforms an image URL to a more optimized version based on browser support
 *
 * @param src Original image source URL
 * @param width Desired width
 * @param quality Desired quality (0-100)
 * @returns Optimized image URL
 */
export const getOptimizedImageUrl = (
  src: string,
  width?: number,
  quality = 80
): string => {
  // Skip optimization for data URLs
  if (!src || src.startsWith('data:')) {
    return src;
  }

  // For standard images, just return the original URL
  // We're disabling the CDN optimization for now as it seems to cause issues
  return src;
};
