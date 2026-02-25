import './styles/theme.css';
import './styles/global.css';

import { Menu } from './components/Menu/Menu';
import { Container } from './components/Container/Container';
import { Logo } from './components/Logo/Logo';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>
    </>
  );
}
