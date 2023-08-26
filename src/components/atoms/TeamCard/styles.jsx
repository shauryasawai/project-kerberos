import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;

export const Image = styled.img`
  width: 262.742px;
  height: 260px;
  padding-bottom: 26px;
  border-radius: 16px;
`;

export const Links = styled.a`
  color: black;
`;

export const Socials = styled.div`
  display: flex;
  padding-top: 26px;
  color: black;
  align-items: flex-start;
  gap: 48px;
  top-margin: 24px;
`;

export const TeamCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-around;
  column-gap: 60px;
  row-gap: 40px;
`;
