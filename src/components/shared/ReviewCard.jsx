import { RiStarFill } from 'react-icons/ri';

const ReviewCard = ({ name, review }) => {
  return (
    <div className="h-full p-3 my-4 bg-white rounded shadow-md w-72">
      <h4 className="font-medium text-gray-700 capitalize">{name}</h4>
      <div className="flex py-2 space-x-1">
        <RiStarFill className="text-[#FFC107]" size={18} />
        <RiStarFill className="text-[#FFC107]" size={18} />
        <RiStarFill className="text-[#FFC107]" size={18} />
        <RiStarFill className="text-[#FFC107]" size={18} />
        <RiStarFill className="text-[#FFC107]" size={18} />
      </div>
      <p className="text-sm text-gray-500">{review}</p>
    </div>
  );
};

export default ReviewCard;
