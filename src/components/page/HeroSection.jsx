import HeroDesc from './hero/HeroDesc';
import HeroImg from './hero/HeroImg';

const HeroSection = () => {
  return (
    <section className="hero-bg">
      <div className="grid items-center grid-cols-1 md:grid-cols-2 ">
        <HeroDesc></HeroDesc>
        <HeroImg></HeroImg>
      </div>
    </section>
  );
};

export default HeroSection;
