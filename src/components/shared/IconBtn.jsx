const IconBtn = ({ icon, children, className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {icon}
      <span className="pl-2 font-medium capitalize">{children}</span>
    </div>
  );
};

export default IconBtn;
