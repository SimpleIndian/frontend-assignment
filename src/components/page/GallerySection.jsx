import 'splide-nextjs/splide/dist/css/themes/splide-default.min.css';

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
const images = [
  { src: '/images/p1.jpeg', alt: 'baby' },
  { src: '/images/p2.jpeg', alt: 'hand2' },
  { src: '/images/p3.jpeg', alt: 'bird' },
  { src: '/images/p4.jpeg', alt: 'care' },
  { src: '/images/p5.jpeg', alt: 'hand' }
];
const GallerySection = () => {
  return (
    <section className="w-full py-10 bg-white md:p-0">
      <Splide options={splideOption}>
        {images.map((each) => (
          <SplideSlide key={each.alt}>
            <img src={each.src} alt={each.alt} className="w-full h-full rounded md:rounded-none" />
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default GallerySection;
