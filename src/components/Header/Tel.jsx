import Alert from 'components/shared/Alert';
import InLink from 'components/shared/InLink';
import { RiPhoneFill } from 'react-icons/ri';

const Tel = () => {
  return (
    <InLink href="tel:866-986-3356">
      <Alert className="hidden text-primary sm:block" icon={<RiPhoneFill size={20} />}>
        866-986-3356
      </Alert>
    </InLink>
  );
};

export default Tel;
