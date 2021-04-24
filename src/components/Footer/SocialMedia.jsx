import OutLink from 'components/shared/OutLink';
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterFill
} from 'react-icons/ri';

const socialMediaLinks = [
  {
    link: '#',
    title: 'facebook',
    icon: <RiFacebookBoxFill size={20} />
  },
  {
    link: '#',
    title: 'instagram',
    icon: <RiInstagramFill size={20} />
  },
  {
    link: '#',
    title: 'linkedin',
    icon: <RiLinkedinBoxFill size={20} />
  },
  {
    link: '#',
    title: 'twitter',
    icon: <RiTwitterFill size={20} />
  }
];

const SocialMedia = () => {
  return (
    <div>
      <ul className="flex justify-center mt-5 space-x-3 md:justify-start">
        <p className="text-gray-600">Follow Us</p>
        {socialMediaLinks.map((each) => (
          <li key={each.title}>
            <OutLink href={each.link} className="text-primary" title={each.title}>
              {each.icon}
            </OutLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMedia;
