import 'splide-nextjs/splide/dist/css/themes/splide-default.min.css';

import ReviewCard from 'components/shared/ReviewCard';
import { Splide, SplideSlide } from 'splide-nextjs/react-splide';
const splideOption = {
  perPage: 1,
  arrows: false,
  pagination: false,
  autoWidth: true,
  gap: '1rem',
  padding: '1rem'
};
const ReviewSlider = ({ reviews }) => {
  return (
    <Splide options={splideOption}>
      {reviews.map((each) => (
        <SplideSlide key={each.review}>
          <ReviewCard name={each.name} review={each.review}></ReviewCard>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default ReviewSlider;
