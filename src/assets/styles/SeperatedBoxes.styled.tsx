import styled from "styled-components";

export const EggImage = styled.img`
  object-fit: cover;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-row: 2;
  }
`;

export const GlassImage = styled.img`
  object-fit: cover;
`;
