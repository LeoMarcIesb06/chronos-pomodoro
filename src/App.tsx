import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Heading atr={123} atr1='string'>
        Olá, Mundo!
      </Heading>
    </>
  );
}
