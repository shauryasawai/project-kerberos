import styled, { keyframes } from 'styled-components';

export const CarouselContainer = styled.div`
  overflow: hidden;
  position: relative;
  padding: 15px;
  margin: 2% 0px;
  height: 600px;
  border-color: #4b5563;
  background-color: #2a2a2a;
  width: 100%;
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const slideAnimation = keyframes`
0% {
  transform: translate(50vw, 0);
}
100% {
  transform: translate(-200%, 0);
}
`;

export const CarouselTrack = styled.div`
  position: absolute;
  display: flex;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 200%;
  height: 100%;
  animation: ${slideAnimation} 30s linear 0s infinite;
  animation-delay: -5s;
  &:hover {
    animation-play-state: paused;
  }
  @media (max-width: 720px) {
    animation: ${slideAnimation} 20s linear 0s infinite;
  }
`;
