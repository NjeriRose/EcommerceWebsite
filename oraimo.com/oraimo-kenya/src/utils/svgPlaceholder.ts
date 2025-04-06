// Function to create a simple SVG placeholder
export function createSimpleSvgPlaceholder(
  width: number,
  height: number,
  backgroundColor = '#f2f2f2'
): string {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}' fill='${encodeURIComponent(
    backgroundColor
  )}'%3E%3Crect width='${width}' height='${height}' /%3E%3C/svg%3E`;
}

// Function to create a shimmer SVG placeholder
export function createShimmerSvgPlaceholder(
  width: number,
  height: number,
  primaryColor = '#f6f7f8',
  secondaryColor = '#edeef1'
): string {
  // Encode characters that need to be escaped in data URIs
  const encodedPrimaryColor = encodeURIComponent(primaryColor);
  const encodedSecondaryColor = encodeURIComponent(secondaryColor);

  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='${width}' height='${height}' viewBox='0 0 ${width} ${height}'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' stop-color='${encodedPrimaryColor}' stop-opacity='1' /%3E%3Cstop offset='50%25' stop-color='${encodedSecondaryColor}' stop-opacity='1' /%3E%3Cstop offset='100%25' stop-color='${encodedPrimaryColor}' stop-opacity='1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='${width}' height='${height}' fill='url(%23g)'%3E%3C/rect%3E%3C/svg%3E`;
}

// Function to create a logo placeholder for oraimo
export function createOraimoLogoPlaceholder(
  width: number,
  height: number,
  backgroundColor = '#1c2424',
  logoColor = '#95e427'
): string {
  // Simple "o" for oraimo
  const encodedBgColor = encodeURIComponent(backgroundColor);
  const encodedLogoColor = encodeURIComponent(logoColor);

  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(width, height) / 4;

  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 ${width} ${height}'%3E%3Crect width='${width}' height='${height}' fill='${encodedBgColor}' /%3E%3Ccircle cx='${centerX}' cy='${centerY}' r='${radius}' stroke='${encodedLogoColor}' stroke-width='${radius/3}' fill='none' /%3E%3C/svg%3E`;
}

// Function to create placeholder based on aspect ratio and image type
export function getPlaceholderForImage(
  src: string,
  width = 300,
  height = 200
): string {
  // If it's a product image, use a basic placeholder
  if (src.includes('/product/')) {
    return createSimpleSvgPlaceholder(width, height, '#f5f5f5');
  }

  // If it's a hero/banner image, use a darker placeholder
  if (src.includes('/banner/') || src.includes('hero')) {
    return createSimpleSvgPlaceholder(width, height, '#1c2424');
  }

  // If it's an oraimo logo
  if (src.includes('logo')) {
    return createOraimoLogoPlaceholder(width, height);
  }

  // Default to shimmer placeholder
  return createShimmerSvgPlaceholder(width, height);
}
