import { Container } from "./styles";

const TitleUnderline: React.FC = ({ children }) => (
  <Container>
    {/* O type do button não pode ser vazio, logo precisamos passar ele além do "{...prop}" */}
    {children}
  </Container>
);
export default TitleUnderline;
