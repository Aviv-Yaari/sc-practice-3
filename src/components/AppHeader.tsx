import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { StyledAppHeader } from "../assets/styles/AppHeader.styled";

export function AppHeader() {
  return (
    <StyledAppHeader>
      <Logo />
      <div>
        <button>About</button>
        <button>Services</button>
        <button>Projects</button>
        <button>Contact</button>
      </div>
    </StyledAppHeader>
  );
}
