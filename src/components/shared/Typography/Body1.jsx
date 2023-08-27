import styled from 'styled-components';
import { baseTypography } from './baseTypography';

export default styled.p`
  ${baseTypography}
  font-size: 32px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
