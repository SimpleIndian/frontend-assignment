import CtaButton from 'components/shared/CtaButton';
import { RiArrowUpSLine } from 'react-icons/ri';
import { ScrollTo } from 'react-scroll-to';

const CtaSection = () => {
  return (
    <section className="bg-[#395FA9] flex md:flex-row flex-col justify-evenly pt-10 md:pt-3 px-3 relative space-y-5 items-center">
      <div className="text-center md:text-left md:w-2/6 ">
        <h2 className="text-2xl font-bold text-white capitalize">
          we do whatever it makes to bring you peace of mind
        </h2>
        <CtaButton className="bg-white border-2 border-white text-primary hover:text-white hover:bg-transparent"></CtaButton>
      </div>
      <div>
        <img src="/images/healthcare.svg" alt="healthcare" width="250px" />
      </div>
      <ScrollTo>
        {({ scroll }) => (
          <button
            className="absolute inline-block p-3 bg-white rounded-full shadow-md outline-none -bottom-5 right-14 text-primary"
            onClick={() =>
              scroll({
                x: 0,
                y: 0
              })
            }>
            <RiArrowUpSLine size={24} />
          </button>
        )}
      </ScrollTo>
    </section>
  );
};

export default CtaSection;
