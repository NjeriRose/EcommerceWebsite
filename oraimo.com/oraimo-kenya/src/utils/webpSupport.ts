// Cache for WebP support check
let webpSupportCache: boolean | null = null;

/**
 * Check if the browser supports WebP format using feature detection
 *
 * @returns Promise that resolves to a boolean indicating WebP support
 */
export async function isWebPSupported(): Promise<boolean> {
  // Return cached result if available
  if (webpSupportCache !== null) {
    return webpSupportCache;
  }

  // If not in browser environment, assume no support
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return false;
  }

  try {
    // Try to create a WebP image
    const webpImg = new Image();

    // Create a promise to handle the load/error events
    const webpSupport = await new Promise<boolean>((resolve) => {
      webpImg.onload = () => {
        // Image loaded successfully - WebP is supported
        resolve(true);
      };
      webpImg.onerror = () => {
        // Image failed to load - WebP is not supported
        resolve(false);
      };

      // A base64 representation of a tiny WebP image
      webpImg.src = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
    });

    // Cache the result for future use
    webpSupportCache = webpSupport;
    return webpSupport;
  } catch (e) {
    console.error('Error detecting WebP support:', e);
    return false;
  }
}

/**
 * Test if the browser supports WebP using a basic check (synchronous)
 * Less reliable but faster than isWebPSupported()
 *
 * @returns Boolean indicating WebP support
 */
export function supportsWebP(): boolean {
  if (webpSupportCache !== null) {
    return webpSupportCache;
  }

  // Basic feature detection - if canvas is supported, check if toDataURL produces WebP
  try {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (ctx) {
      webpSupportCache = canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
      return webpSupportCache;
    }
  } catch (e) {
    // Error means it's not supported
    webpSupportCache = false;
  }

  return false;
}

/**
 * Get the appropriate image URL based on WebP support
 *
 * @param webpUrl URL for WebP image
 * @param fallbackUrl URL for fallback format (JPG/PNG)
 * @returns The appropriate URL based on browser support
 */
export function getOptimalImageUrl(webpUrl: string, fallbackUrl: string): string {
  if (supportsWebP()) {
    return webpUrl;
  }
  return fallbackUrl;
}

/**
 * Generate srcset values with WebP and fallback formats
 *
 * @param baseUrl Base URL for the image (without extension)
 * @param widths Array of widths to include in srcset
 * @param webpExt WebP extension including dot (e.g., '.webp')
 * @param fallbackExt Fallback extension including dot (e.g., '.jpg')
 * @returns An object with webp and fallback srcset strings
 */
export function generateResponsiveSrcSet(
  baseUrl: string,
  widths: number[] = [320, 640, 960, 1280, 1920],
  webpExt = '.webp',
  fallbackExt = '.jpg'
): { webp: string, fallback: string } {
  // Remove any existing extension from baseUrl
  const baseWithoutExt = baseUrl.replace(/\.[^/.]+$/, '');

  // Generate the srcset strings
  const webpSrcSet = widths
    .map((width) => `${baseWithoutExt}${webpExt}?width=${width} ${width}w`)
    .join(', ');

  const fallbackSrcSet = widths
    .map((width) => `${baseWithoutExt}${fallbackExt}?width=${width} ${width}w`)
    .join(', ');

  return {
    webp: webpSrcSet,
    fallback: fallbackSrcSet
  };
}
