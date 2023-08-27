import styled from 'styled-components';
import { baseTypography } from './baseTypography';

export default styled.h2`
  ${baseTypography}
  font-size: 48px;
  line-height: 56px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 36px;
  }

`;
