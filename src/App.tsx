import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./assets/styles/GlobalStyle.styled";
import { MainContainer } from "./assets/styles/MainContainer.styled";
import { theme } from "./assets/styles/theme";
import { AppHeader } from "./components/AppHeader";
import { ClientTestimonials } from "./components/ClientTestimonials";
import { Hero } from "./components/Hero";
import { SeperatedBoxes } from "./components/SeperatedBoxes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainContainer>
        <AppHeader />
        <Hero />
        <SeperatedBoxes />
        <ClientTestimonials />
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
