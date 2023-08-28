import styled from 'styled-components';
import { Body3 } from '../../shared/Typography';

export const FooterContainer = styled.div`
  width: 100%;
  height: 450px;
  background-color: #2a2a2a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8%;
`;
export const FooterInsights = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const FooterCopyright = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const FooterImage = styled.img`
  width: 180px;
  aspect-ratio: 4/3;
  @media (max-width: 768px) {
    width: 150px;
  }
`;
export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  gap: 8px;
`;
export const FooterText = styled(Body3)`
  color: #6c757d;
  font-weight: 500;
  text-align: left;
`;
export const FooterSocials = styled.div`
  gap: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
