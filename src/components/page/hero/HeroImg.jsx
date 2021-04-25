const HeroImg = () => {
  return (
    <div className="order-1 md:order-2">
      <img src="/images/hero.jpg" alt="hero" className="w-full h-full md:hidden" />
      <img
        src="/images/home-hero.png"
        loading="lazy"
        alt="hero-home"
        className="hidden w-full h-full md:inline-block"
      />
    </div>
  );
};

export default HeroImg;
