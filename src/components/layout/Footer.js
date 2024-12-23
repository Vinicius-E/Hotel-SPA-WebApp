import "./Footer.css";
import { TextContent } from "../utils/StyledFonts";

const Footer = () => {
  return (
    <div className="wrapper">
      <a
        target="_blank"
        className="link"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/vinicius-esilva/?locale=en_US"
      >
        Vinicius Eduardo Da Silva
      </a>
      <>-</>
      <TextContent>Contact by: viniciuseduardo0702@hotmail.com </TextContent>
    </div>
  );
};

export default Footer;