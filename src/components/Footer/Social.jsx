import NewsLetter from './NewsLetter';
import SocialMedia from './SocialMedia';

const Social = () => {
  return (
    <div className="space-y-6">
      <NewsLetter></NewsLetter>
      <div className="flex justify-center space-x-4 md:justify-start">
        <img src="/images/chap-foot.png" width="50" height="50" alt="chap" />
        <img src="/images/MWBE.png" width="50" height="50" alt="MWBE" />
      </div>
      <SocialMedia></SocialMedia>
    </div>
  );
};

export default Social;
