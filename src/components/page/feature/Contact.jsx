const Contact = () => {
  return (
    <div className="text-center">
      <img
        src="/images/feature/feature-phone.svg"
        alt="contact-us"
        className="inline-block"
        loading="lazy"
      />
      <h3 className="text-lg font-semibold text-gray-600">Do you need support?</h3>
      <p className="text-gray-700">We glad to help!</p>
      <button className="px-6 py-3 my-6 text-sm font-medium tracking-wider text-white uppercase rounded md:px-4 bg-primary hover:bg-opacity-70">
        contact us
      </button>
    </div>
  );
};

export default Contact;
