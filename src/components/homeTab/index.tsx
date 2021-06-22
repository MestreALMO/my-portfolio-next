import Image from "next/image";

import { Container } from "./styles";

export const HomeTab = () => {
  return (
    <>
      <Container id="home">
        <Image
          className="codeLong"
          src="/code-wide.png"
          alt="code_long"
          width="864"
          height="1152"
        />
        <div>
          <Image
            className="myPhoto"
            src="/my-photo.jpeg"
            alt="my_photo"
            width="864"
            height="1152"
          />
          <h1>Welcome!</h1>
          <h4>
            <p>I&apos;m André L. M. de Oliveira,</p>
            <p>it&apos;s a pleasure to have you here.</p>
          </h4>
        </div>
      </Container>
    </>
  );
};
