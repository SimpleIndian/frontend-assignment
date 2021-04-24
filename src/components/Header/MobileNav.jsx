import Alert from 'components/shared/Alert';
import InLink from 'components/shared/InLink';
import { RiPhoneFill } from 'react-icons/ri';

const MobileNav = ({ isOpen, links }) => {
  return (
    <div
      aria-label="Mobile Menu"
      className={`
        fixed top-10 w-full h-screen pt-4 bg-white z-20 left-0
        transition-all duration-500 ease-out transform-gpu 
        ${isOpen ? 'translate-y-0  opacity-1' : 'translate-y-5 opacity-0 invisible'}
        `}>
      <InLink href="tel:866-986-3356 inline-block">
        <Alert className="py-3 text-primary" icon={<RiPhoneFill size={20} />}>
          866-986-3356
        </Alert>
      </InLink>
      <ul className="p-3 text-center">
        {links.map((each) => (
          <li key={each.label}>
            <InLink
              href={each.link}
              className="block px-4 py-2 text-lg font-medium text-gray-800 capitalize hover:text-primary">
              {each.label}
            </InLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNav;
