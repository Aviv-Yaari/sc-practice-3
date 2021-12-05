import styled from "styled-components";

export const StyledClientTestimonials = styled.section`
  display: grid;
  place-content: center;
  grid-column: 1/-1;
  text-align: center;
  gap: 75px;
  padding: 40px;

  h5 {
    font-family: "Fraunces", serif;
    color: gray;
    text-transform: uppercase;
    letter-spacing: 5px;
  }
`;

export const ClientsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

export const ClientStory = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  p {
    max-width: 300px;
  }

  img {
    max-width: 70px;
    max-height: 70px;
    border-radius: 50%;
  }
`;

export const Author = styled.div`
  margin-top: auto;
`;
