import Alert from 'components/shared/Alert';
import InLink from 'components/shared/InLink';
import { RiInformationLine } from 'react-icons/ri';

import Nav from './Nav';
const Header = () => {
  return (
    <header>
      <InLink href="#">
        <Alert className="p-3 shadow text-primary" icon={<RiInformationLine size={20} />}>
          Read about our covid-19 precautions
        </Alert>
      </InLink>
      <Nav></Nav>
    </header>
  );
};

export default Header;
