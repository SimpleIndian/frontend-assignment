import CtaButton from 'components/shared/CtaButton';
const HeroDesc = ({ className }) => {
  return (
    <div
      className={`order-2 lg:px-20 lg:py-5 text-center md:text-left md:w-5/6 md:order-1 py-10 md:py-3 px-5 md:px-10 ${className} `}>
      <h1 className="text-3xl font-bold text-gray-700 capitalize md:text-4xl lg:leading-relaxed">
        The Future of Health Care is Home Care
      </h1>
      <p className="pt-3 pb-6">Over a Decade of Trusted Care.</p>
      <CtaButton className="mb-0 text-white border-2 md:mb-4 border-primary bg-primary hover:bg-transparent hover:text-primary"></CtaButton>
    </div>
  );
};

export default HeroDesc;
