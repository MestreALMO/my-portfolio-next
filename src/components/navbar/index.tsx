import { Container, Buttons } from "./styles";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <>
      <Container>
        {/* <h1>André Lusegardis</h1> */}
        <Buttons>
          <li>
            <button>
              <Link
                activeClass="active"
                to="home"
                spy
                smooth
                offset={0}
                duration={500}
              >
                Home
              </Link>
            </button>
          </li>
          <li>
            <button>
              <Link
                activeClass="active"
                to="about"
                spy
                smooth
                offset={0}
                duration={500}
              >
                About
              </Link>
            </button>
          </li>
          <li>
            <button>
              <Link
                activeClass="active"
                to="portfolio"
                spy
                smooth
                offset={0}
                duration={500}
              >
                Portfolio
              </Link>
            </button>
          </li>
          <li>
            <button>
              <Link
                activeClass="active"
                to="contact"
                spy
                smooth
                offset={0}
                duration={500}
              >
                Contact
              </Link>
            </button>
          </li>
        </Buttons>
      </Container>
    </>
  );
};
