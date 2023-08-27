import styled from 'styled-components';
import { baseTypography } from './baseTypography';

export default styled.h5`
  ${baseTypography}
  font-size: 16px;
  line-height: 19px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 16px;
  }
`;
