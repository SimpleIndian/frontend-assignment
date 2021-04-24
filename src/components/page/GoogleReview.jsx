import { RiStarFill } from 'react-icons/ri';
const GoogleReview = () => {
  return (
    <>
      <h3 className="text-3xl font-semibold text-gray-800">5.0</h3>
      <div className="flex py-2 space-x-1">
        <RiStarFill className="text-[#FFC107]" size={20} />
        <RiStarFill className="text-[#FFC107]" size={20} />
        <RiStarFill className="text-[#FFC107]" size={20} />
        <RiStarFill className="text-[#FFC107]" size={20} />
        <RiStarFill className="text-[#FFC107]" size={20} />
      </div>
      <p className="text-gray-700">
        2,054 verified customers reviews by <span className="font-bold"> Google</span>.
      </p>
    </>
  );
};

export default GoogleReview;
