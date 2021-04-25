import DesktopNav from 'components/Header/DesktopNav';
import Logo from 'components/shared/Logo';
import { navLinks } from 'data/navLinks';
import Hamburger from 'hamburger-react';
import { useEffect, useState } from 'react';

import MobileNav from './MobileNav';
import Tel from './Tel';

const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    let body = document.querySelector('body');
    isOpen ? body.classList.add('overflow-hidden') : body.classList.remove('overflow-hidden');
  }, [isOpen]);
  return (
    <nav className="flex items-center justify-between p-1 shadow-md md:py-3 xl:px-14 md:justify-between md:px-7">
      <Logo />
      <DesktopNav links={navLinks} />
      <MobileNav isOpen={isOpen} links={navLinks}></MobileNav>
      <Tel />
      <div className="z-50 rounded-full lg:hidden hover:bg-gray-100">
        <Hamburger size="20" rounded label="Show Menu" toggled={isOpen} toggle={setOpen} />
      </div>
    </nav>
  );
};

export default Nav;
