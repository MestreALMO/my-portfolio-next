import Image from "next/image";

import { Container, Info, Email, Squares } from "./styles";
import TitleUnderline from "../../components/titleUnderline";

export const Contact = () => {
  return (
    <>
      <Container id="contact">
        <TitleUnderline>Contact</TitleUnderline>

        <Info>
          <Email href="mailto:lusegardis@gmail.com">
            <div>E-mail:&nbsp;</div>
            <div>lusegardis@gmail.com</div>
          </Email>

          <Squares>
            <a
              href="https://www.linkedin.com/in/andr%C3%A9-lusegardis/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure>
                <Image
                  src="/contact/linkedin.png"
                  alt="Linkedin"
                  width="100"
                  height="100"
                />
                <figcaption>Linkedin</figcaption>
              </figure>
            </a>

            <a
              href="https://github.com/MestreALMO"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure>
                <Image
                  src="/contact/github.png"
                  alt="Github"
                  width="100"
                  height="100"
                />
                <figcaption>Github</figcaption>
              </figure>
            </a>

            <a
              href="https://codepen.io/MestreALMO"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure>
                <Image
                  src="/contact/codepen.png"
                  alt="Codepen"
                  width="100"
                  height="100"
                />
                <figcaption>Codepen</figcaption>
              </figure>
            </a>
          </Squares>
        </Info>
      </Container>
    </>
  );
};
