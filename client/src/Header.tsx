const Header = (props: { score: number; total: number }) => {
  return (
    <header className="sticky-top">
      <nav className="navbar navbar-light bg-blur text-center shadow-sm">
        <div className="col-lg-6 col-md-8 col-12 mx-auto">
          <div className="row">
            <h2> Knaus purity test </h2>
          </div>
          <div className="row">
            <div className="col">
              <h5>Purity</h5>
              <h6 className="text-muted">
                {props.total - props.score} / {props.total}
              </h6>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
