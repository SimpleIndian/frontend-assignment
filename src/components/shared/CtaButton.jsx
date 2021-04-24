const CtaButton = ({ className }) => {
  return (
    <button className={`font-bold px-6 md:px-4 py-3 my-6 ${className} capitalize rounded`}>
      request an appointment
    </button>
  );
};

export default CtaButton;
