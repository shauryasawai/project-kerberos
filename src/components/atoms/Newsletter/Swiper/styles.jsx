import { styled } from 'styled-components';

export const SwiperContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const SwiperWrapper = styled.div`
  white-space: nowrap;
  transition: 0.5s ease-in-out;
  transform: translateX(-${props => props.active * 100}%);
`;
