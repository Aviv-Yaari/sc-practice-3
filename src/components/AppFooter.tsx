import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { ReactComponent as IconFacebook } from "../assets/images/icon-facebook.svg";
import { ReactComponent as IconInstagram } from "../assets/images/icon-instagram.svg";
import { ReactComponent as IconTwitter } from "../assets/images/icon-twitter.svg";
import { ReactComponent as IconPinterest } from "../assets/images/icon-pinterest.svg";
import {
  Actions,
  FooterContent,
  SocialLinks,
  StyledAppFooter,
} from "../assets/styles/AppFooter.styled";

export function AppFooter() {
  return (
    <StyledAppFooter>
      <FooterContent>
        <Logo />
        <Actions>
          <button>About</button>
          <button>Services</button>
          <button>Projects</button>
        </Actions>
        <SocialLinks>
          <IconFacebook />
          <IconInstagram />
          <IconTwitter />
          <IconPinterest />
        </SocialLinks>
      </FooterContent>
    </StyledAppFooter>
  );
}
