import logo from "../assets/GloboLogo.png";
import "./Header.css"
type Args = {
  subtitle: string;
};

const Header = ({ subtitle }: Args) => {
  return (
    <header className="navbared">
      <div className="row">
        <div className="col-1">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="col-11 mt-5 subtitle">{subtitle}</div>
      </div>
    </header>
  );
};

export default Header;
