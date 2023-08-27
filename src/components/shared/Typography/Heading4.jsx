import styled from 'styled-components';
import { baseTypography } from './baseTypography';

export default styled.h4`
  ${baseTypography}
  font-size: 24px;

  font-weight: 700;

  line-height: 32px;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 18px;
  }

`;
