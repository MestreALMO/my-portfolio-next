import React, { useMemo } from "react";
import Image from "next/image";

import { Container, Element, Elements } from "./styles";
import TitleUnderline from "../../components/titleUnderline";
import * as Projects from "./projects";

const ProjectInPair = Projects.projects.reduce((acc, curr, index) => {
  if (index && (index + 1) % 2 === 0) {
    acc.push([Projects.projects[index - 1], Projects.projects[index]]);
  }
  return acc;
}, [] as Array<string[]>);

export const Portfolio = () => {
  const automaticHtml = useMemo(() => {
    return Projects.projects.map((item) => (
      <Element
        key={item}
        href={"https://github.com/MestreALMO/" + `${item}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <figure>
          <Image
            src={
              `${Projects.githubLink}` +
              `${item}` +
              `/blob/main/_README.md/img01.png?raw=true`
            }
            alt={item}
            width="1919"
            height="1079"
          />
          <figcaption>{item}</figcaption>
        </figure>
      </Element>
    ));
  }, []);

  return (
    <>
      <Container id="portfolio">
        <TitleUnderline>Portfolio</TitleUnderline>
        <Elements>
          <Element
            key="xx21"
            href={"https://github.com/MestreALMO/Retractable-Accordion"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <figure>
              <Image
                src={`https://i.imgur.com/acxjJyr.png`}
                alt="test"
                width="1919"
                height="1079"
              />
              <figcaption>test</figcaption>
            </figure>
          </Element>
          <Element
            key="xx22"
            href={"https://github.com/MestreALMO/Retractable-Accordion"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <figure>
              <Image
                src={`https://raw.githubusercontent.com/MestreALMO/Retractable-Accordion/main/_README.md/img01.png`}
                alt="test"
                width="1919"
                height="1079"
              />
              <figcaption>test</figcaption>
            </figure>
          </Element>
          <Element
            key="xx22"
            href={"https://github.com/MestreALMO/Retractable-Accordion"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <figure>
              <Image
                src={`https://github.com/MestreALMO/Retractable-Accordion/blob/main/_README.md/img01.png?raw=true`}
                alt="test"
                width="1919"
                height="1079"
              />
              <figcaption>test</figcaption>
            </figure>
          </Element>

          {automaticHtml}
        </Elements>
      </Container>
    </>
  );
};
