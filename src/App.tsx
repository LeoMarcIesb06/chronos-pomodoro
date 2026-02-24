import './styles/theme.css';
import './styles/global.css';

import { Heading } from './components/Heading/Heading';
import { Container } from './components/Container/Container';
import { Logo } from './components/Logo/Logo';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Heading>MENU</Heading>
      </Container>
    </>
  );
}
