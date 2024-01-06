const PrimaryBtn = ({ title = "View All", onClick, customClasses }) => {
  return (
    <div className={`${customClasses} primaryBtn transition-all cursor-pointer`}>
      <span className="top-key"></span>
      <span className="primaryBtnText">{title}</span>
      <span className="bottom-key-1"></span>
      <span className="bottom-key-2"></span>
    </div>
  );
};

export default PrimaryBtn;
