const Alert = ({ children, icon, className }) => {
  return (
    <div className={className}>
      <p className="flex items-center justify-center space-x-2 font-medium">
        {icon}
        <span className="text-sm capitalize">{children}</span>
      </p>
    </div>
  );
};

export default Alert;
