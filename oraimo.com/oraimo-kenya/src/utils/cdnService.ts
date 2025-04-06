/**
 * CDN Service utility to help with optimized image delivery
 * Simulates the functionality of a real CDN with edge caching
 */

// List of CDN domains we're using
export const CDN_DOMAINS = [
  'ext.same-assets.com',
  'cdn-img.oraimo.com',
  'same-app.com'
];

// Simulated CDN edge locations
export const CDN_EDGES = [
  'us-east',
  'us-west',
  'eu-west',
  'eu-central',
  'ap-southeast',
  'ap-northeast',
  'af-south',
  'sa-east'
];

/**
 * Check if a URL is from one of our supported CDNs
 *
 * @param url URL to check
 * @returns Boolean indicating if URL is from a supported CDN
 */
export const isCdnUrl = (url: string): boolean => {
  return CDN_DOMAINS.some((domain) => url.includes(domain));
};

/**
 * Get the closest CDN edge location based on user's location
 * In a real implementation, this would use geolocation or IP-based detection
 *
 * @returns The code for the nearest edge location
 */
export const getNearestEdge = (): string => {
  // In a real implementation, this would determine the user's location
  // and return the closest edge location. For this demo, we'll randomly select one.
  const randomIndex = Math.floor(Math.random() * CDN_EDGES.length);
  return CDN_EDGES[randomIndex];
};

/**
 * Transform a URL to use the nearest edge location
 *
 * @param url Original URL
 * @returns URL pointing to the nearest edge
 */
export const getEdgeOptimizedUrl = (url: string): string => {
  if (!isCdnUrl(url)) {
    return url;
  }

  // Get the nearest edge location
  const edge = getNearestEdge();

  // Add edge location as a URL parameter
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}edge=${edge}`;
};

/**
 * Convert a URL to use a CDN path if it's not already on a CDN
 *
 * @param url Original URL
 * @param preferredCdn Preferred CDN domain to use
 * @returns CDN-optimized URL
 */
export const toCdnUrl = (url: string, preferredCdn = 'ext.same-assets.com'): string => {
  // If it's already a CDN URL, return it as is
  if (isCdnUrl(url)) {
    return url;
  }

  // Don't proxy data: URLs
  if (url.startsWith('data:')) {
    return url;
  }

  // If it's an absolute URL, proxy it through our CDN
  if (url.startsWith('http')) {
    // Encode the URL to be used as a path parameter
    const encodedUrl = encodeURIComponent(url);
    return `https://${preferredCdn}/proxy?url=${encodedUrl}`;
  }

  // For relative URLs, rewrite to use the CDN
  // Remove leading slash if present
  const path = url.startsWith('/') ? url.substring(1) : url;
  return `https://${preferredCdn}/${path}`;
};

/**
 * Get an optimized image URL with all transformations applied
 *
 * @param url Original URL
 * @param width Optional width to resize the image to
 * @param height Optional height to resize the image to
 * @param options Additional image processing options
 * @returns Fully optimized image URL
 */
export const getOptimizedCdnUrl = (
  url: string,
  width?: number,
  height?: number,
  options: {
    quality?: number;
    format?: 'auto' | 'webp' | 'jpeg' | 'png';
    fit?: 'cover' | 'contain' | 'fill';
    edge?: boolean;
  } = {}
): string => {
  // Fix for URLs
  if (!url) return '';

  // Bypass data: URLs completely
  if (url.startsWith('data:')) {
    return url;
  }

  // If URL is already from a supported CDN, don't change it
  if (isCdnUrl(url)) {
    // Only add parameters, don't change the base URL
    const params = new URLSearchParams();

    if (width) params.append('width', width.toString());
    if (height) params.append('height', height.toString());
    if (options.quality) params.append('quality', options.quality.toString());
    if (options.format && options.format !== 'auto') params.append('format', options.format);
    if (options.fit) params.append('fit', options.fit);

    // Add parameters to URL
    const separator = url.includes('?') ? '&' : '?';
    let optimizedUrl = url;
    if (params.toString()) {
      optimizedUrl = `${url}${separator}${params.toString()}`;
    }

    // Add edge optimization if requested
    if (options.edge) {
      optimizedUrl = getEdgeOptimizedUrl(optimizedUrl);
    }

    return optimizedUrl;
  }

  // For non-CDN URLs, just return the original
  return url;
};
