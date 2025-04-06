import { useState } from 'react';
import { Link } from 'react-router-dom';
import OptimizedImage from '../ui/OptimizedImage';

const TopAnnouncement = () => {
  return (
    <div className="bg-oraimo-black text-white text-xs py-1 px-4 flex justify-center items-center">
      <span>Register and subscribe to earn 100 points each! Redeem your points for order discounts or free gifts in our points mall!</span>
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <TopAnnouncement />

      <div className="bg-oraimo-black text-white">
        <div className="oraimo-container flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <OptimizedImage
              src="https://ext.same-assets.com/131099195/52350043.png"
              alt="oraimo Kenya"
              className="h-6"
              width={96}
              height={24}
              priority={true}
              quality={90}
            />
          </Link>

          {/* Main Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/oraimo-daily-deals.html" className="text-white text-sm hover:text-oraimo-green">
              Daily Deals
            </Link>
            <div className="relative group">
              <button className="text-white text-sm hover:text-oraimo-green flex items-center">
                Products
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 hidden group-hover:block pt-2 w-52">
                <div className="bg-white shadow-lg rounded-md text-black py-2">
                  <Link to="/collections/power" className="flex items-center px-4 py-2 hover:bg-gray-100">
                    Power
                  </Link>
                  <Link to="/collections/audio" className="flex items-center px-4 py-2 hover:bg-gray-100">
                    Audio <span className="ml-1 text-xs font-bold text-oraimo-green">HOT</span>
                  </Link>
                  <Link to="/collections/smart-office" className="flex items-center px-4 py-2 hover:bg-gray-100">
                    Smart & Office
                  </Link>
                  <Link to="/collections/personal-care" className="flex items-center px-4 py-2 hover:bg-gray-100">
                    Personal Care
                  </Link>
                  <Link to="/collections/home-appliances" className="flex items-center px-4 py-2 hover:bg-gray-100">
                    Home Appliances <span className="ml-1 text-xs font-bold text-oraimo-green">NEW</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="text-white text-sm hover:text-oraimo-green flex items-center">
                Hot & New
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 hidden group-hover:block pt-2 w-40">
                <div className="bg-white shadow-lg rounded-md text-black py-2">
                  <Link to="/best-seller.html" className="block px-4 py-2 hover:bg-gray-100">
                    Best Seller
                  </Link>
                  <Link to="/new-arrival.html" className="block px-4 py-2 hover:bg-gray-100">
                    New Arrival
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="text-white text-sm hover:text-oraimo-green flex items-center">
                Support
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 hidden group-hover:block pt-2 w-40">
                <div className="bg-white shadow-lg rounded-md text-black py-2">
                  <Link to="/order/track" className="block px-4 py-2 hover:bg-gray-100">
                    Track Order
                  </Link>
                  <a href="https://www.carlcare.com/ke/" className="block px-4 py-2 hover:bg-gray-100">
                    Visit Carlcare
                  </a>
                  <Link to="/authenticate.html" className="block px-4 py-2 hover:bg-gray-100">
                    Product Authentication
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* User Controls */}
          <div className="flex items-center space-x-4">
            {/* User Account */}
            <div className="relative">
              <button
                className="text-white hover:text-oraimo-green"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
                </svg>
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-md text-black py-2">
                  <div className="px-4 py-2 border-b border-gray-200">
                    <p className="font-semibold">My Account</p>
                    <div className="mt-2 flex space-x-2">
                      <Link to="/auth/sign-in" className="text-sm text-oraimo-dark-green hover:underline">
                        Sign in
                      </Link>
                      <Link to="/auth/sign-up" className="text-sm text-oraimo-dark-green hover:underline">
                        Register & Get Points &gt;
                      </Link>
                    </div>
                  </div>
                  <div className="px-4 py-2 border-b border-gray-200">
                    <p className="font-semibold">Transaction Management</p>
                    <Link to="/user/order" className="block text-sm py-1 hover:text-oraimo-dark-green">
                      My Order
                    </Link>
                  </div>
                  <div className="px-4 py-2">
                    <p className="font-semibold">Account</p>
                    <Link to="/user/person" className="block text-sm py-1 hover:text-oraimo-dark-green">
                      Personal Information
                    </Link>
                    <Link to="/user/wishlist" className="block text-sm py-1 hover:text-oraimo-dark-green">
                      My Wish
                    </Link>
                    <Link to="/user/point" className="block text-sm py-1 hover:text-oraimo-dark-green">
                      My Explorer Points
                    </Link>
                    <Link to="/user/coupon" className="block text-sm py-1 hover:text-oraimo-dark-green">
                      Coupons Center
                    </Link>
                    <Link to="/user/address" className="block text-sm py-1 hover:text-oraimo-dark-green">
                      Address Management
                    </Link>
                    <Link to="/user/review" className="block text-sm py-1 hover:text-oraimo-dark-green">
                      Product Reviews
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Search */}
            <button className="text-white hover:text-oraimo-green">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="currentColor"/>
              </svg>
            </button>

            {/* Cart */}
            <div className="relative">
              <button
                className="text-white hover:text-oraimo-green"
                onClick={() => setIsCartOpen(!isCartOpen)}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18ZM7.17 14.75L7.2 14.63L8.1 13H16.55C17.3 13 17.96 12.59 18.3 11.97L22.1 5.5C22.23 5.28 22.1 5 21.84 5H6.21L5.27 2.5H2V4.5H4L7.2 11.13L5.87 13.6C5.31 14.64 6.06 15.88 7.19 15.88H19V13.88H7.88C7.5 13.88 7.19 14.11 7.17 14.75ZM8 11.13L6.25 7.5H19.01L16.14 12.03L10 12L8 11.13Z" fill="currentColor"/>
                </svg>
              </button>

              {isCartOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white shadow-lg rounded-md text-black p-4">
                  <h4 className="font-medium text-lg mb-4">Shopping Cart</h4>
                  <div className="py-6 flex flex-col items-center justify-center text-gray-500">
                    <p>Your cart is empty</p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <p className="font-semibold">Subtotal</p>
                      <p>KES 0</p>
                    </div>
                    <Link to="/cart" className="w-full bg-oraimo-green text-white py-2 px-4 rounded-md text-center block">
                      View Cart
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white hover:text-oraimo-green"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col py-2">
            <Link to="/oraimo-daily-deals.html" className="px-4 py-2 hover:bg-gray-100">
              Daily Deals
            </Link>
            <div className="px-4 py-2 hover:bg-gray-100">
              <button className="flex items-center justify-between w-full">
                <span>Products</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="pl-4 mt-2 space-y-1">
                <Link to="/collections/power" className="block py-1">
                  Power
                </Link>
                <Link to="/collections/audio" className="block py-1">
                  Audio <span className="ml-1 text-xs font-bold text-oraimo-green">HOT</span>
                </Link>
                <Link to="/collections/smart-office" className="block py-1">
                  Smart & Office
                </Link>
                <Link to="/collections/personal-care" className="block py-1">
                  Personal Care
                </Link>
                <Link to="/collections/home-appliances" className="block py-1">
                  Home Appliances <span className="ml-1 text-xs font-bold text-oraimo-green">NEW</span>
                </Link>
              </div>
            </div>
            <div className="px-4 py-2 hover:bg-gray-100">
              <button className="flex items-center justify-between w-full">
                <span>Hot & New</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="pl-4 mt-2 space-y-1">
                <Link to="/best-seller.html" className="block py-1">
                  Best Seller
                </Link>
                <Link to="/new-arrival.html" className="block py-1">
                  New Arrival
                </Link>
              </div>
            </div>
            <div className="px-4 py-2 hover:bg-gray-100">
              <button className="flex items-center justify-between w-full">
                <span>Support</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="pl-4 mt-2 space-y-1">
                <Link to="/order/track" className="block py-1">
                  Track Order
                </Link>
                <a href="https://www.carlcare.com/ke/" className="block py-1">
                  Visit Carlcare
                </a>
                <Link to="/authenticate.html" className="block py-1">
                  Product Authentication
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}

      {/* Service Banner */}
      <div className="bg-white border-b border-gray-200">
        <div className="oraimo-container flex justify-between py-3">
          <div className="flex items-center text-sm">
            <OptimizedImage
              src="https://ext.same-assets.com/131099195/3942025084.svg"
              alt="Fast Free Shipping"
              className="w-5 h-5 mr-2"
              width={20}
              height={20}
              priority={true}
            />
            <span>Fast Free Shipping over KES1500</span>
          </div>
          <div className="flex items-center text-sm">
            <OptimizedImage
              src="https://ext.same-assets.com/131099195/3942025084.svg"
              alt="Cash On Delivery"
              className="w-5 h-5 mr-2"
              width={20}
              height={20}
              priority={true}
            />
            <span>Cash On Delivery</span>
          </div>
          <div className="flex items-center text-sm">
            <OptimizedImage
              src="https://ext.same-assets.com/131099195/3942025084.svg"
              alt="Hassle-Free Warranty"
              className="w-5 h-5 mr-2"
              width={20}
              height={20}
              priority={true}
            />
            <span>Hassle-Free Warranty</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
