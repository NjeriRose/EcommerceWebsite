/**
 * Utility to generate SVG icon placeholders for PWA
 * In a real app, you would use actual image files instead of placeholder SVGs
 */

import { createOraimoLogoPlaceholder } from './svgPlaceholder';
import fs from 'fs';
import path from 'path';

// Array of icon sizes to generate
const ICON_SIZES = [72, 96, 128, 144, 152, 192, 384, 512];

/**
 * Generate SVG icon placeholders for PWA
 * This would typically be run as a build step
 */
function generateIconPlaceholders() {
  const iconsDir = path.resolve(process.cwd(), 'public/icons');

  // Ensure directory exists
  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
  }

  // Generate icons for each size
  ICON_SIZES.forEach(size => {
    const svg = createOraimoLogoPlaceholder(size, size);

    // Convert data URL to SVG content
    const svgContent = decodeURIComponent(svg.replace('data:image/svg+xml,', ''));

    // Write SVG file
    fs.writeFileSync(path.join(iconsDir, `icon-${size}x${size}.svg`), svgContent);

    // In a real scenario, you would convert SVG to PNG here using a library like sharp
    console.log(`Generated icon placeholder for ${size}x${size}`);
  });
}

// This would be called as part of the build process
// generateIconPlaceholders();

export { generateIconPlaceholders };
