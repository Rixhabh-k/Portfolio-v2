const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <p>
          {new Date()
            .toLocaleDateString("en-GB", {
              weekday: "long",
              day: "2-digit",
              month: "long",
              year: "numeric",
            })
            .toUpperCase()}
        </p>
      </div>

      <div className="header-content">
        <p>VOL.i</p>
      </div>

      <div className="header-content">
        <p>Selected Works & Notes</p>
      </div>

      <div className="header-content">
        <p>Price: One Coffee</p>
      </div>
    </div>
  );
};

export default Header;
