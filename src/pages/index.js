import CareGiverSection from 'components/page/CareGiverSection';
import ChapSection from 'components/page/ChapSection';
import CtaSection from 'components/page/CtaSection';
import FeatureSection from 'components/page/FeatureSection';
import GallerySection from 'components/page/GallerySection';
import HeroSection from 'components/page/HeroSection';
import ReviewSection from 'components/page/ReviewSection';
import Alert from 'components/shared/Alert';
import { RiMapPin2Fill } from 'react-icons/ri';
import Layout from 'src/Layout';

export default function Home() {
  return (
    <Layout>
      <HeroSection></HeroSection>
      <Alert
        icon={<RiMapPin2Fill />}
        className="py-3 text-gray-700 bg-gradient-to-r from-[#FFC03D] to-[#FFC107] tracking-wider">
        UNIVERSACARE AREAS OF COVERAGE
      </Alert>
      <FeatureSection></FeatureSection>
      <CareGiverSection></CareGiverSection>
      <ChapSection></ChapSection>
      <ReviewSection></ReviewSection>
      <GallerySection></GallerySection>
      <CtaSection></CtaSection>
    </Layout>
  );
}
