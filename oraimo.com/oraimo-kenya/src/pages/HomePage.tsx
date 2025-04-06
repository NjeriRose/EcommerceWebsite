import HeroSlider from '../components/home/HeroSlider';
import CategorySection from '../components/home/CategorySection';
import ProductList from '../components/home/ProductList';
import PromoSection from '../components/home/PromoSection';

const HomePage = () => {
  // Sample data for hero slider
  const heroSlides = [
    {
      id: 1,
      image: 'https://ext.same-assets.com/1325134528/1248550479.jpeg',
      title: 'AirBuds 4 - Smart LED Display',
      subtitle: 'Experience 38 Hours of Playtime with ENC Technology',
      link: '/product/oraimo-airbuds-4-led-display-36-hours-playtime-enc-true-wireless-earbuds',
    },
    {
      id: 2,
      image: 'https://ext.same-assets.com/1325134528/3983405056.jpeg',
      title: 'SpaceBuds Pro Hybrid ANC',
      subtitle: '50dB Hybrid ANC Noise Cancellation with Personalized Lighting Effect',
      link: '/product/oraimo-spacebuds-50db-anc-noise-cancelling-earbuds-with-personalized-voice-prompt',
    },
    {
      id: 3,
      image: 'https://ext.same-assets.com/1325134528/2673154732.jpeg',
      title: 'Watch 5 Series',
      subtitle: 'HD Calling & 100+ Sport Modes',
      link: '/collections/smart-watches',
    },
  ];

  // Sample data for categories
  const categories = [
    {
      id: 'audio',
      name: 'Audio',
      image: 'https://cdn-img.oraimo.com/2024/08/27/990-630.jpg',
      link: '/collections/audio',
      isHot: true,
    },
    {
      id: 'power',
      name: 'Power',
      image: 'https://cdn-img.oraimo.com/2024/11/19/OPB-727SQ-M.jpg',
      link: '/collections/power',
    },
    {
      id: 'smart-office',
      name: 'Smart & Office',
      image: 'https://cdn-img.oraimo.com/2024/08/27/670x330-1.jpg',
      link: '/collections/smart-office',
    },
    {
      id: 'personal-care',
      name: 'Personal Care',
      image: 'https://cdn-img.oraimo.com/2024/12/05/OCL-560-m.jpg',
      link: '/collections/personal-care',
    },
    {
      id: 'home-appliances',
      name: 'Home Appliances',
      image: 'https://cdn-img.oraimo.com/2024/08/27/20240827-183858.jpg',
      link: '/collections/home-appliances',
      isNew: true,
    },
  ];

  // Sample data for best sellers
  const bestSellers = [
    {
      id: 'necklace-lite',
      name: 'Necklace Lite Call Vibration Wireless Headphones',
      price: 1600,
      originalPrice: 3000,
      image: 'https://ext.same-assets.com/1325134528/225906153.jpeg',
      rating: 4.8,
      reviewCount: 3800,
      features: ['30Hr Playtime (Lights On)', 'Vibration Notifications'],
      link: '/product/oraimo-necklace-lite-call-vibration-30-hrs-playtime-app-wireless-headphones',
    },
    {
      id: 'airbuds-4',
      name: 'AirBuds 4 ENC True Wireless Earbuds',
      price: 2100,
      originalPrice: 4000,
      image: 'https://ext.same-assets.com/1325134528/2673154732.jpeg',
      rating: 4.8,
      reviewCount: 3625,
      features: ['38-Hr Long Playtime', 'LED Screen Display'],
      link: '/product/oraimo-airbuds-4-led-display-36-hours-playtime-enc-true-wireless-earbuds',
    },
    {
      id: 'boompop-lite',
      name: 'BoomPop Lite ENC Over-Ear Wireless Headphones',
      price: 3000,
      originalPrice: 5000,
      image: 'https://ext.same-assets.com/1325134528/360117820.jpeg',
      rating: 4.6,
      reviewCount: 238,
      features: ['60-Hour Long Playtime', 'Charge 10 Mins, Play 600 Mins'],
      isNew: true,
      link: '/product/oraimo-boompoplite-enc-65hr-playtime-over-ear-wireless-headphones',
    },
    {
      id: 'freepods-lite',
      name: 'FreePods Lite ENC True Wireless Earbuds',
      price: 1900,
      originalPrice: 3500,
      image: 'https://ext.same-assets.com/1325134528/2155912197.jpeg',
      rating: 4.8,
      reviewCount: 3975,
      features: ['40-Hr Long Playtime', 'HD Voice in Calls'],
      link: '/product/oraimo-freepods-lite-40-hour-playtime-enc-true-wireless-earbuds',
    },
  ];

  // Sample data for new arrivals
  const newArrivals = [
    {
      id: 'spacebuds-n',
      name: 'SpaceBuds N ANC True Wireless Earbuds',
      price: 2800,
      originalPrice: 4000,
      image: 'https://ext.same-assets.com/1325134528/2953403598.jpeg',
      rating: 4.9,
      reviewCount: 650,
      features: ['38-Hr Long Playtime', 'Sound360 Spatial Audio'],
      isNew: true,
      link: '/product/oraimo-spacebuds-n-active-noise-cancellation-38-hour-play-time-true-wireless-earbuds',
    },
    {
      id: 'watch-5n',
      name: 'Watch 5N 2.01\'\' TFT IP68 Smart Watch',
      price: 2800,
      originalPrice: 4000,
      image: 'https://ext.same-assets.com/1325134528/1402125755.jpeg',
      rating: 4.7,
      reviewCount: 300,
      features: ['Wireless HD Calling', '100+ Sports Modes'],
      isNew: true,
      link: '/product/oriamo-watch-5n-2.01\'\'-tft-screen-wireless-hd-calling-100+-sport-modes-smart-watch',
    },
    {
      id: 'watch-5-lite',
      name: 'Watch 5 Lite 2.01" HD IP68 Smart Watch',
      price: 2200,
      originalPrice: 3000,
      image: 'https://ext.same-assets.com/1325134528/3170186371.jpeg',
      rating: 4.9,
      reviewCount: 46,
      features: ['2.01" HD Screen', 'HD Voice in Calls'],
      isNew: true,
      link: '/product/oraimo-watch-5-lite-ip68-hd-smart-watch-osw-804',
    },
    {
      id: 'spacebox',
      name: 'SpaceBox 8W FM Wireless Speaker',
      price: 2500,
      originalPrice: 4000,
      image: 'https://ext.same-assets.com/1325134528/2075846554.png',
      rating: 4.8,
      reviewCount: 360,
      features: ['Powerful and Punchy Bass', 'Personalized Light Show'],
      isNew: true,
      link: '/product/fm-and-customizable-lights-and-eq-speaker-spacebox-obs-382',
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroSlider slides={heroSlides} />

      <CategorySection
        title="Shop by Category"
        categories={categories}
      />

      <ProductList
        title="Best Sellers"
        viewMoreLink="/best-seller.html"
        products={bestSellers}
      />

      <PromoSection />

      <ProductList
        title="New Arrivals"
        viewMoreLink="/new-arrival.html"
        products={newArrivals}
      />
    </div>
  );
};

export default HomePage;
