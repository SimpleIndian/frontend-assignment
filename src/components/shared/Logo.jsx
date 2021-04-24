import InLink from './InLink';

const Logo = ({ className }) => {
  return (
    <InLink href="/" className={className}>
      <img src="/images/UCLogo.svg" alt="Universacare Logo" width="190px" height="29px" />
    </InLink>
  );
};

export default Logo;
