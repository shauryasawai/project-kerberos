import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 16px;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    max-width: 625px;
    margin: 0 auto;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: 20px 32px;
    max-width: 1440px;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    gap: 24px;
    padding: 24px 48px;
  }

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    padding: 28px 64px;
  }
`;

export const SocialItemContainer = styled.div`
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  justify-content: center;
  padding-top: 24px;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding-top: 48px;
  }
  a {
    color: #328201;
    font-weight: 700;
  }
`;
