import 'splide-nextjs/splide/dist/css/themes/splide-default.min.css';

import IconBtn from 'components/shared/IconBtn';
import InLink from 'components/shared/InLink';
import { RiArrowRightLine } from 'react-icons/ri';

import GoogleReview from './review/GoogleReview';
import ReviewSlider from './review/ReviewSlider';

const reviews = [
  {
    name: 'alvin stanley',
    review:
      'Great company to work for! This organization cares for its team of caregivers, office employees, and clients. There is always someone available to pick up the phone when you need help. '
  },
  {
    name: 'alvin stanley',
    review: 'Great company to work '
  },
  {
    name: 'alvin stanley',
    review: 'awesome'
  }
];

const ReviewSection = () => {
  return (
    <section className="py-10 bg-gradient-to-br from-[#FFF1E1] to-white xl:flex xl:justify-around xl:items-center">
      <div className="m-5">
        <GoogleReview></GoogleReview>
      </div>
      <div>
        <ReviewSlider reviews={reviews} />
        <InLink href="#" className="inline-block m-5 font-medium text-primary">
          <IconBtn icon={<RiArrowRightLine />}>See all reviews</IconBtn>
        </InLink>
      </div>
    </section>
  );
};

export default ReviewSection;
