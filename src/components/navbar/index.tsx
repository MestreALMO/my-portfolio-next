import { Container, Buttons, MyName, ContainerSpacing } from "./styles";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <>
      <Container>
        <ContainerSpacing>
          <MyName>
            <h2>André Lusegardis</h2>
          </MyName>
          <Buttons>
            <li>
              <Link
                activeClass="active"
                to="home"
                spy
                smooth
                offset={0}
                duration={500}
              >
                <button>Home</button>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="about"
                spy
                smooth
                offset={0}
                duration={500}
              >
                <button>About</button>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy
                smooth
                offset={0}
                duration={500}
              >
                <button>Contact</button>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="portfolio"
                spy
                smooth
                offset={0}
                duration={500}
              >
                <button>Portfolio</button>
              </Link>
            </li>
          </Buttons>
        </ContainerSpacing>
      </Container>
    </>
  );
};
