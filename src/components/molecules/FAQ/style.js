import styled from 'styled-components';

export const FaqContainer = styled.div`
  width: 100%;
  padding: 16px;
  border-bottom: 1px solid #e5e5e5;

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

export const FaqHeading = styled.div`
  font-weight: 500;
  font-size: 56px;
  font-family: Roboto;
  font-style: normal;
  text-align: left;
  padding-right: 25px;
  line-height: 130.187%;

  @media (max-width: 768px) {
    font-size: 36px;
    padding-right: 15px;
    margin-bottom: 80px;
  }
`;

export const Caption = styled.div`
  font-size: 24px;
  text-align: left;
  font-style: normal;
  font-family: Roboto;
  padding-bottom: 40px;
`;

export const FaqLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

export const FaqItem = styled.div`
  background-color: #f0f0f0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 16px;
  font-size: 22px;
  cursor: pointer;
  transition: background-color 0.3s;

  &.active {
    background-color: #d9d9d9;
  }
  > div:first-child {
    text-align: left;
  }
`;

export const Answer = styled.div`
  font-size: 22px;
  padding-top: 16px;
  display: ${props => (props.active ? 'block' : 'none')};
  text-align: left;
`;
export const Caption2 = styled.div`
  font-weight: bold;
  margin-top: 40px;
  text-align: left;
  font-family: Roboto;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #2a2a2a;
  margin-bottom: 24px;

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    font-size: 40px;
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 36px;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 24px;
  }
`;
export const Caption3 = styled.div`
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: left;
  color: #6c757d;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 18px;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 16px;
  }
`;

export const Caption4 = styled.div`
  color: var(--primary-green-1, #52cd00);
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  padding: 16px 24px;
  align-items: center;
  gap: 10px;
  margin-top: 48px;
  text-align: left;
  border: 3px solid var(--primary-green-1, #52cd00);
  width: fit-content;
`;
