import Contact from './feature/Contact';
import FeatureHeading from './feature/FeatureHeading';
import FeaturePreview from './feature/FeaturePreview';

const FeatureSection = () => {
  return (
    <section className="py-12 m-auto md:py-16 max-w-7xl">
      <div className="grid items-center content-center grid-cols-1 lg:grid-cols-5 lg:grid-row-2 md:grid-cols-3 md:gap-y-5">
        <FeatureHeading className="px-5 md:col-span-2"></FeatureHeading>
        <FeaturePreview></FeaturePreview>
        <Contact></Contact>
      </div>
    </section>
  );
};

export default FeatureSection;
