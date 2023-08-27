import styled from 'styled-components';
import MapImg from './images/map.png';

const MapStyles = styled.div`
  border: 2px solid black; /* Add black border */
  padding: 1rem; /* Add padding for spacing */
  background: var(--deep-dark); /* Set background color */

  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 300px; /* Adjust the height */
  width: 100%; /* Adjust the width */
  max-width: 400px; /* Set a maximum width */

  .container {
    position: relative;
    min-height: 300px; /* Adjust the height */
    width: 100%; /* Adjust the width */
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className='container'>
        <div className='map__card'>
          <a
            className='map__card__link'
            href='https://www.google.com/maps/place/GEC+More,+Chittagong/@22.3590818,91.8195583,17z/data=!3m1!4b1!4m5!3m4!1s0x30acd89aaa8239cd:0x6e65fa00001dd59f!8m2!3d22.3590715!4d91.8215486'
            target='_blank'
            rel='noreferrer'></a>
        </div>
      </div>
    </MapStyles>
  );
}
