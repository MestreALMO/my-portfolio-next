import { Container } from "../styles/index";
import { Navbar } from "../components/navbar";
import { HomeTab } from "../components/homeTab";
import { About } from "../components/about";
import { Portfolio } from "../components/portfolio";
import { Contact } from "../components/contact";
import { GlobalStyle } from "../styles/global";

export default function Home() {
  return (
    <>
      <GlobalStyle />

      <Container>
        <Navbar />
        <HomeTab />
        <About />
        <Contact />
        <Portfolio />
      </Container>
    </>
  );
}
