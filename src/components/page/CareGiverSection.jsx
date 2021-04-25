import { careGiverFeatures } from 'data/careGiverFeatures';

const CareGiverSection = () => {
  return (
    <section className="px-5 py-10 custom-bg">
      <h2 className="py-2 text-2xl font-medium text-center text-gray-700">
        How We Find <span className="font-semibold text-secondary">Best Caregiver</span> For You
      </h2>

      <div className="relative grid items-center grid-cols-1 pt-5 mx-auto max-w-7xl md:grid-cols-2 xl:grid-cols-4">
        <img
          src="/images/curve.svg"
          alt="curve"
          className="absolute z-auto hidden right-1/4 top-6 left-48 xl:inline-block"
          loading="lazy"
        />
        {careGiverFeatures.map((each) => (
          <div className="z-10 flex flex-col items-center py-4 text-center " key={each.heading}>
            <img src={each.image} alt={each.heading} />
            <h3 className="mt-4 mb-2 text-lg font-semibold text-gray-700 ">{each.heading}</h3>
            <p className="text-sm leading-relaxed text-gray-600 w-72">{each.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareGiverSection;
