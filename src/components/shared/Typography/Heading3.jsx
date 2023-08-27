import styled from 'styled-components';
import { baseTypography } from './baseTypography';

export default styled.h3`
  ${baseTypography}
  font-size: 32px;
  line-height: 40px;

  font-weight: 700;


  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 16px;
  }

`;
