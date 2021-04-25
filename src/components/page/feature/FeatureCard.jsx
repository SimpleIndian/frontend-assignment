import { RiArrowRightSLine } from 'react-icons/ri';

const FeatureCard = ({ card }) => {
  return (
    <div className="flex flex-col items-center justify-center w-56 py-5 text-center">
      <img src={card.image} alt={card.heading} loading="lazy" />
      <h3 className="mt-4 mb-2 text-lg font-semibold text-gray-700 ">{card.heading}</h3>
      <p className="text-sm leading-relaxed text-gray-600 ">{card.description}</p>
      <button className="p-3 my-4 ml-10 text-base rounded-full shadow text-primary">
        <RiArrowRightSLine></RiArrowRightSLine>
      </button>
    </div>
  );
};

export default FeatureCard;
