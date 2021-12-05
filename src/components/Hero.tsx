import { ReactComponent as IconArrowDown } from "../assets/images/icon-arrow-down.svg";
import { StyledHero } from "../assets/styles/Hero.styled";

export function Hero() {
  return (
    <StyledHero>
      <h2>We are creatives</h2>
      <IconArrowDown />
    </StyledHero>
  );
}
