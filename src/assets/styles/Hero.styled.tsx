import styled from "styled-components";
import ImageHeader from "../images/desktop/image-header.jpg";

export const StyledHero = styled.section`
  grid-column: 1/-1;
  background-image: url(${ImageHeader});
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
  padding-bottom: 100px;
`;
