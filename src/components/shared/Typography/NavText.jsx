import styled from 'styled-components';
import { baseTypography } from './baseTypography';

export default styled.h3`
  ${baseTypography}
  font-size: 24px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
