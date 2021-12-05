import ImageMilkBottles from "../images/desktop/image-gallery-milkbottles.jpg";
import ImageOrange from "../images/desktop/image-gallery-orange.jpg";
import ImageCone from "../images/desktop/image-gallery-cone.jpg";
import ImageSugarCubes from "../images/desktop/image-gallery-sugarcubes.jpg";
import styled from "styled-components";

export const StyledImageGallery = styled.section`
  display: flex;
  grid-column: 1/-1;

  > * {
    width: 25%;
    background-position: center;
    background-size: cover;
  }
  > :first-child {
    background-image: url(${ImageMilkBottles});
  }
  > :nth-child(2) {
    background-image: url(${ImageOrange});
  }
  > :nth-child(3) {
    background-image: url(${ImageCone});
  }
  > :nth-child(4) {
    background-image: url(${ImageSugarCubes});
  }
`;
