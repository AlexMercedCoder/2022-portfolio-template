import about from "../data/about";
import { ALink, Menu, NavBar, SubLink, Title } from "../styled_components/header";
import Link from "next/link";

function Header(props) {
  return (
    <NavBar>
      <Title>{about.title}</Title>
      <Menu>
          <Link href="/blog"><SubLink>Blog</SubLink></Link>
          <ALink href={about.github}>Github</ALink>
          <ALink href={about.linkedIn}>LinkedIn</ALink>
          <ALink href={about.twitter}>Twitter</ALink>
      </Menu>
    </NavBar>
  );
}

export default Header;
