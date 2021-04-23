import InLink from 'components/shared/InLink';

const Alert = ({ children, icon, className }) => {
  return (
    <div className={className}>
      <InLink className="flex items-center justify-center space-x-2 font-medium" href="#">
        {icon}
        <span className="text-sm capitalize">{children}</span>
      </InLink>
    </div>
  );
};

export default Alert;
