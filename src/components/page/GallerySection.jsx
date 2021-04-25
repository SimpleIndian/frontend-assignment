import 'splide-nextjs/splide/dist/css/themes/splide-default.min.css';

import { gallery } from 'data/gallery';
import { Splide, SplideSlide } from 'splide-nextjs/react-splide';

const splideOption = {
  type: 'loop',
  perPage: 1,
  rewind: true,
  arrows: false,
  pagination: false,
  breakpoints: {
    768: {
      fixedWidth: '300px',
      perPage: 1,
      gap: '1rem',
      padding: {
        left: '0.75rem'
      }
    },
    1920: {
      autoWidth: true,
      gap: 0,
      padding: {
        left: '0',
        right: '0'
      }
    }
  }
};

const GallerySection = () => {
  return (
    <section className="w-full py-10 bg-white md:p-0">
      <Splide options={splideOption}>
        {gallery.map((each) => (
          <SplideSlide key={each.alt}>
            <img
              src={each.src}
              alt={each.alt}
              className="w-full h-full rounded md:rounded-none"
              loading="lazy"
            />
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default GallerySection;
