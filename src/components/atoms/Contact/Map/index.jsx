import { Container, Map } from './styles';
import MapImage from '../../../../assets/images/map.png';

export const MapContainer = () => {
  return (
    <Container>
      <Map src={MapImage} alt='Map' />
    </Container>
  );
};
