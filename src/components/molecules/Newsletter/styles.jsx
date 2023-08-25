import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 42px;
  padding: 24px 0px;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px 32px;
    gap: 10px;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    gap: 24px;
    padding: 24px 48px;
  }

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    padding: 28px 64px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  max-width: 100%;
  gap: 20px;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    max-width: 625px;
  }
`;

export const TitleContainer = styled.div`
  padding: 0 8px;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    padding: 0;
  }

  span {
    color: ${props => props.theme.colors.primaryDark};
  }

  @media (min-width: 850px) {
    flex: 1 0 max-content;
  }
`;
