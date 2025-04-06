const PromoSection = () => {
  return (
    <section className="bg-oraimo-black text-white py-16">
      <div className="oraimo-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Stat 1 */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-5xl font-bold mb-2 text-oraimo-green">60+</h3>
            <p className="text-xl">Countries</p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-5xl font-bold mb-2 text-oraimo-green">200 Million+</h3>
            <p className="text-xl">Users</p>
          </div>

          {/* Brand Highlight */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-oraimo-green px-6 py-3 rounded-md mb-4">
              <h3 className="text-2xl font-bold">oraimo</h3>
            </div>
            <p className="text-xl font-semibold">Kenya's NO.1</p>
            <p className="text-lg">Smart Accessories Brand</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
