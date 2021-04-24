const { default: Logo } = require('components/shared/Logo');

const Address = () => {
  return (
    <div>
      <h3 className="relative text-lg font-medium capitalize text-secondary custom-heading">
        Headquarters
      </h3>
      <p className="my-4 text-sm text-gray-600 ">
        246-50 57th Drive Douglaston,
        <br /> NY 11362 hello@universacare.com <br />
        P: (718) 224-3758 <br />
        F: 8777999065
      </p>
      <Logo className="hidden lg:inline-block"></Logo>
    </div>
  );
};

export default Address;
