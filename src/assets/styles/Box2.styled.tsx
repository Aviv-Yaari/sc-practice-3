import styled from "styled-components";
import ImageCherry from "../images/desktop/image-graphic-design.jpg";
import ImageOrange from "../images/desktop/image-photography.jpg";

export const Box2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 50px;
  gap: 20px;
  text-align: center;
  background-size: cover;

  p {
    max-width: 400px;
  }
`;

export const GraphicDesign = styled(Box2)`
  background-image: url(${ImageCherry});
`;

export const Photography = styled(Box2)`
  background-image: url(${ImageOrange});
`;
