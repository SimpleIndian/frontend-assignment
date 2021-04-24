const IconBtn = ({ icon, children, className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="pr-2 font-medium capitalize">{children}</span>
      {icon}
    </div>
  );
};

export default IconBtn;
