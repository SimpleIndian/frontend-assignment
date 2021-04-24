import ChapSection from 'components/page/ChapSection';
import CtaSection from 'components/page/CtaSection';
import FeatureSection from 'components/page/FeatureSection';
import GallerySection from 'components/page/GallerySection';
import ReviewSection from 'components/page/ReviewSection';
import Layout from 'src/Layout';

export default function Home() {
  return (
    <Layout>
      <FeatureSection></FeatureSection>
      <ChapSection></ChapSection>
      <ReviewSection></ReviewSection>
      <GallerySection></GallerySection>
      <CtaSection></CtaSection>
    </Layout>
  );
}
