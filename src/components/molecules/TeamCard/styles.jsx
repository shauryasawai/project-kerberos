import { styled } from 'styled-components';

export const MeetTheTeam = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 24px;
  max-width: 1440px;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: 20px 32px;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    gap: 24px;
    padding: 24px 48px;
  }

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    padding: 28px 64px;
  }
`;

export const Headline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 7%;
  gap: 24px;
`;
export const TeamCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-around;
  column-gap: 60px;
  row-gap: 40px;
`;
