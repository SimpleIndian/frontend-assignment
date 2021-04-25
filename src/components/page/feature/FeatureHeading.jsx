const FeatureHeading = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-2xl font-medium">
        Your peace of mind is <span className="font-bold">our number one priority.</span>
      </h2>
      <hr className="h-1 my-5 w-36 bg-secondary" />
      <p>
        UniversaCare offers a range of services for in-home care. We are your partners in care, and
        work with you to come up with a plan of action.
      </p>
    </div>
  );
};

export default FeatureHeading;
