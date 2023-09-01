import { styled } from 'styled-components';
import { Heading5 } from '../../../shared';

export const CardContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  width: 100%;
  max-width: 625px;
  white-space: normal;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    gap: 10px;
  }
`;

export const CardTitle = styled(Heading5)`
  span {
    color: ${props => props.theme.colors.primaryDark};
  }
`;

export const ImageContainer = styled.img`
  width: 100%;
  aspect-ratio: 5/3;
`;
