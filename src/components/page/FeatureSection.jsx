const features = [
  {
    image: '/images/Careviger1.svg',
    heading: '1. Initial Consultation',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.'
  },
  {
    image: '/images/Careviger2.svg',
    heading: '2. Customized Care Plan',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.'
  },
  {
    image: '/images/Careviger3.svg',
    heading: '3. Caregiver Matching',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.'
  },
  {
    image: '/images/careviger4.svg',
    heading: '4. Ongoing Support & Supervision',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.'
  }
];

const FeatureSection = () => {
  return (
    <section className="px-5 py-10 custom-bg ">
      <h2 className="py-2 text-2xl font-medium text-center text-gray-700">
        How We Find <span className="font-semibold text-secondary">Best Careviger</span> For You
      </h2>
      <img src="" alt="" />
      <div className="grid items-center grid-cols-1 pt-5 mx-auto max-w-7xl md:grid-cols-2 xl:grid-cols-4">
        {features.map((each) => (
          <div className="flex flex-col items-center py-4 text-center" key={each.heading}>
            <img src={each.image} alt={each.heading} />
            <h3 className="my-3 text-lg font-semibold text-gray-700">{each.heading}</h3>
            <p className="text-sm leading-relaxed text-gray-600 w-72">{each.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
