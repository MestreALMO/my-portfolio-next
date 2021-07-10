import React, { useMemo } from "react";
import Image from "next/image";

import { Container, Row, Frame } from "./styles";
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
    return ProjectInPair.map((item) => (
      <Row key={item.join()}>
        <Frame
          href={Projects.githubLink + item[0]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <figure>
            <img
              src={`${
                Projects.githubLink + item[0]
              }/blob/master/_README.md/app.gif?raw=true`}
              alt={item[0]}
            />
            <Image
              src={`${
                Projects.githubLink + item[0]
              }/blob/master/_README.md/app.gif?raw=true`}
              alt={"test 02"}
              width="600"
              height="336"
            />
            <p>{item[0]}</p>
            <Image
              src={
                `${Projects.githubLink}` +
                `${item[0]}` +
                `/blob/master/_README.md/app.gif?raw=true`
              }
              alt={item[0]}
              width="600"
              height="336"
            />
            <figcaption>{item[0]}</figcaption>
          </figure>
        </Frame>
        <Frame
          href={Projects.githubLink + item[1]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <figure>
            <img
              src={`${
                Projects.githubLink + item[1]
              }/blob/master/_README.md/app.gif?raw=true`}
              alt={item[1]}
            />
            <figcaption>{item[1]}</figcaption>
            {/* <p>test</p> */}
          </figure>
        </Frame>
      </Row>
    ));
  }, []);

  return (
    <>
      <Container id="portfolio">
        <TitleUnderline>Portfolio</TitleUnderline>
        {automaticHtml}
      </Container>
    </>
  );
};
