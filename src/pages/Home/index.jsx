import { Button, Heading1 } from '../../components/shared';
import { Container } from './styles';

const Home = () => {
  return (
    <Container>
      <Heading1>Home</Heading1>
      <Button text='Primary Button' variant='secondary' />
    </Container>
  );
};

export default Home;
