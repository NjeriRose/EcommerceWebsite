import { Link } from 'react-router-dom';
import OptimizedImage from '../ui/OptimizedImage';

const Footer = () => {
  return (
    <footer className="bg-oraimo-black text-white">
      {/* Newsletter Section */}
      <div className="bg-oraimo-green py-10">
        <div className="oraimo-container">
          <div className="flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl font-bold mb-4">Subscribe now and earn 100 points!</h3>
            <p className="text-sm mb-6 max-w-xl">
              Subscribe to our newsletter to stay updated on our latest offers and promotions! Receive
              exclusive discounts on the newest oraimo products. Keep Exploring!
            </p>
            <div className="flex w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email address..."
                className="flex-grow px-4 py-2 rounded-l-md focus:outline-none text-black"
              />
              <button className="bg-oraimo-black text-white px-6 py-2 rounded-r-md hover:bg-opacity-90">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="pt-12 pb-8">
        <div className="oraimo-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Customer Service */}
            <div>
              <h4 className="text-lg font-medium mb-4">Customer Service</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <p>Monday - Friday (9 AM to 6 PM)</p>
                </li>
                <li>
                  <p>Phone: 0727 531 595 / 0271 898 599</p>
                </li>
                <li>
                  <p>WhatsApp: 0116 912 0797 700 598</p>
                </li>
                <li>
                  <p>Email: Care.KE@oraimo.com</p>
                </li>
              </ul>
            </div>

            {/* About oraimo */}
            <div>
              <h4 className="text-lg font-medium mb-4">About oraimo</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link to="/about-us" className="hover:text-oraimo-green">About Us</Link>
                </li>
                <li>
                  <Link to="/where-to-buy" className="hover:text-oraimo-green">Where to Buy</Link>
                </li>
                <li>
                  <Link to="/club" className="hover:text-oraimo-green">oraimo Club</Link>
                </li>
                <li>
                  <Link to="/contact-us" className="hover:text-oraimo-green">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* Terms */}
            <div>
              <h4 className="text-lg font-medium mb-4">Terms</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link to="/warranty" className="hover:text-oraimo-green">Warranty</Link>
                </li>
                <li>
                  <Link to="/shipping-delivery" className="hover:text-oraimo-green">Shipping & Delivery</Link>
                </li>
                <li>
                  <Link to="/return-refund-policy" className="hover:text-oraimo-green">Return & Refund Policy</Link>
                </li>
                <li>
                  <Link to="/terms-conditions" className="hover:text-oraimo-green">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="hover:text-oraimo-green">Privacy Policy</Link>
                </li>
              </ul>
            </div>

            {/* Get Help */}
            <div>
              <h4 className="text-lg font-medium mb-4">Get Help</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link to="/online-shopping-guide" className="hover:text-oraimo-green">Online Shopping Guide</Link>
                </li>
                <li>
                  <Link to="/track-order" className="hover:text-oraimo-green">Track Order</Link>
                </li>
                <li>
                  <Link to="/explorer-points-program" className="hover:text-oraimo-green">Explorer Points Program</Link>
                </li>
                <li>
                  <Link to="/visit-carlcare" className="hover:text-oraimo-green">Visit Carlcare</Link>
                </li>
                <li>
                  <Link to="/product-authentication" className="hover:text-oraimo-green">Product Authentication</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Links & App Download */}
          <div className="mt-12 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h4 className="text-lg font-medium mb-4 text-center md:text-left">FOLLOW US</h4>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/oraimo.ke/" className="w-8 h-8 flex items-center justify-center rounded-full bg-white bg-opacity-10 hover:bg-oraimo-green">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/oraimo.ke/" className="w-8 h-8 flex items-center justify-center rounded-full bg-white bg-opacity-10 hover:bg-oraimo-green">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/c/oraimoKenya" className="w-8 h-8 flex items-center justify-center rounded-full bg-white bg-opacity-10 hover:bg-oraimo-green">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@oraimo.ke" className="w-8 h-8 flex items-center justify-center rounded-full bg-white bg-opacity-10 hover:bg-oraimo-green">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4 text-center md:text-left">Download oraimo store App</h4>
              <div className="flex space-x-4">
                <a href="https://play.google.com/store/apps/details?id=com.transsion.oraimostore" className="flex items-center justify-center bg-black border border-gray-700 rounded-md px-4 py-2 hover:bg-gray-900">
                  <OptimizedImage
                    src="https://ext.same-assets.com/131099195/3750902181.svg"
                    alt="Google Play Store"
                    className="h-6"
                    width={24}
                    height={24}
                  />
                </a>
                <a href="https://apps.apple.com/app/oraimo-store/id6475294366" className="flex items-center justify-center bg-black border border-gray-700 rounded-md px-4 py-2 hover:bg-gray-900">
                  <OptimizedImage
                    src="https://ext.same-assets.com/131099195/3750902181.svg"
                    alt="Apple App Store"
                    className="h-6"
                    width={24}
                    height={24}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6">
        <div className="oraimo-container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <OptimizedImage
              src="https://ext.same-assets.com/131099195/52350043.png"
              alt="oraimo Kenya"
              className="h-7 mb-4 md:mb-0"
              width={112}
              height={28}
              priority={false}
              quality={85}
            />
            <p className="text-xs text-gray-400">© 2023-2025. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
