import { Button, Heading1 } from '../../components/shared';
import { Container } from './styles';

const Playground = () => {
  return (
    <Container>
      <Heading1>Playground</Heading1>
      <Button text='Primary Button' variant='primary' />
      <Button text='Primary Button' variant='secondary' />
    </Container>
  );
};

export default Playground;
