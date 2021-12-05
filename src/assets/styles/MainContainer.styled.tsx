import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  grid-template-rows:
    100vh repeat(4, minmax(50vh, auto)) repeat(3, minmax(100vh, auto))
    repeat(2, minmax(30vh, auto));
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 100vh repeat(4, 70vh) repeat(2, 50vh);
  }
`;
