import 'splide-nextjs/splide/dist/css/themes/splide-default.min.css';

import { features } from 'data/features';
import { RiArrowRightSLine } from 'react-icons/ri';
import { Splide, SplideSlide } from 'splide-nextjs/react-splide';

import FeatureCard from './FeatureCard';

const splideOption = {
  type: 'loop',
  perPage: 1,
  rewind: true,
  arrows: false,
  pagination: false,
  gap: '1rem',
  focus: 'center',
  autoWidth: true,
  padding: {
    right: '3rem',
    left: '3rem'
  },
  breakpoints: {
    768: {
      destroy: false
    },
    1920: {
      destroy: 'completely'
    }
  }
};

const FeaturePreview = () => {
  return (
    <>
      <div className="py-5 md:hidden">
        <Splide options={splideOption}>
          {features.map((each) => (
            <SplideSlide key={each.heading}>
              <FeatureCard card={each}></FeatureCard>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {features.map((each) => (
        <div
          className="items-center hidden w-56 py-5 text-center md:flex-col md:flex"
          key={each.heading}>
          <img src={each.image} alt={each.heading} />
          <h3 className="mt-4 mb-2 text-lg font-semibold text-gray-700 ">{each.heading}</h3>
          <p className="text-sm leading-relaxed text-gray-600 ">{each.description}</p>
          <button className="p-3 my-4 ml-10 text-base rounded-full shadow text-primary">
            <RiArrowRightSLine></RiArrowRightSLine>
          </button>
        </div>
      ))}
    </>
  );
};

export default FeaturePreview;
