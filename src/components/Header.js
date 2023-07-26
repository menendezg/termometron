const Header = (props) => {
  return (
    <div className="pb-3 mb-4 border-bottom">
      <div className="d-flex align-items-center text-body-emphasis text-decoration-none">
        <p className="fs-4">{props.name}</p>
      </div>
    </div>
  );
};

export default Header;
