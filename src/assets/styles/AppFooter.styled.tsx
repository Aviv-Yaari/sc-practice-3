import styled from "styled-components";

export const StyledAppFooter = styled.footer`
  background: #6aa88b;
  grid-column: 1/-1;
  display: grid;
  place-content: center;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export const SocialLinks = styled.section`
  display: flex;
  gap: 20px;
  margin-top: 50px;
`;

export const Actions = styled.section`
  display: flex;
  gap: 20px;
`;
