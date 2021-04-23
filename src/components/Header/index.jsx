import Alert from 'components/shared/Alert';
import { RiInformationLine } from 'react-icons/ri';
const Header = () => {
  return (
    <header>
      <Alert className="p-3 shadow text-primary" icon={<RiInformationLine size={20} />}>
        Read about our covid-19 precautions
      </Alert>
    </header>
  );
};

export default Header;
