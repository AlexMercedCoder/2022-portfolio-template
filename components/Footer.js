import about from "../data/about";
import { FooterWrapper } from "../styled_components/footer";

function Footer(props) {
  return (
    <FooterWrapper>
      Portfolio of {about.name} copyright {new Date().getFullYear()}
    </FooterWrapper>
  );
}

export default Footer;
