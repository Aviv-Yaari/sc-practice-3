import styled from "styled-components";

export const StyledClientTestimonials = styled.section`
  display: grid;
  place-content: center;
  grid-column: 1/-1;
  text-align: center;
  gap: 75px;

  h5 {
    font-family: "Fraunces", serif;
    color: gray;
    text-transform: uppercase;
    letter-spacing: 5px;
  }
`;

export const ClientsWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const ClientStory = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  img {
    max-width: 70px;
    border-radius: 50%;
  }
`;
