import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';
import { Container } from './components/Container';

export function App() {
  return (
    <>
      <Container>
        <Heading>
          Chronos Pomodoro
          <TimerIcon size={32} />
        </Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          excepturi magnam, distinctio sint aliquam eos reprehenderit repellat
          eum corporis adipisci? Iste incidunt sapiente ipsa atque distinctio
          dignissimos nisi! Reiciendis, quis.
        </p>
      </Container>
    </>
  );
}
