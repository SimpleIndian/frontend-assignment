import { companyLinks, serviceLinks } from 'data/footLinks';

import Address from './Address';
import Copyright from './Copyright';
import FooterLinks from './FooterLinks';
import Social from './Social';

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-1 px-5 pt-10 pb-3 m-auto max-w-7xl lg:grid-cols-3">
        <Address></Address>
        <div className="flex justify-between py-5 md:space-x-10 md:justify-start lg:justify-evenly lg:py-0">
          <FooterLinks footLinks={serviceLinks}></FooterLinks>
          <FooterLinks footLinks={companyLinks}></FooterLinks>
        </div>
        <Social></Social>
      </div>
      <hr></hr>
      <Copyright />
    </footer>
  );
};

export default Footer;
