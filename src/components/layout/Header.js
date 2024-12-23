import "./Header.css";
import { Title1 } from "../utils/StyledFonts";

const Header = () => {
  return (
    <div className="headerContainer">
      <Title1 className="title">Hotel SPA - Challenge</Title1>
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/background-header.jpeg`}
        className="imgCover"
        alt="Hotel SPA - Challenge"
      />
    </div>
  );
};

export default Header;