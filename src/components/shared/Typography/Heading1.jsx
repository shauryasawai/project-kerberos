import styled from 'styled-components';
import { baseTypography } from './baseTypography';

export default styled.h1`
  ${baseTypography}
  font-size: 56px;
  line-height: 72px;


  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }

`;
