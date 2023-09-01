import styled from 'styled-components';
import { Body2, Heading3 } from '../../shared/Typography';

export const MentorCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 550px;
  aspect-ratio: 4/3;
  border-radius: 10px;
  object-fit: cover;
  object-position: center bottom;
  img {
    width: 410px;
    aspect-ratio: 1/1;
    border-radius: 40px;
    @media (max-width: 768px) {
      width: 190px;
    }
    @media (max-width: 576px) {
      width: 200px;
    }
  }
  @media (max-width: 768px) {
    width: 480px;
  }
  @media (max-width: 576px) {
    width: 230px;
  }
`;
export const MentorName = styled(Heading3)`
  color: #fff;
  margin-top: 20px;
  margin-bottom: 10px;
`;
export const MentorDescription = styled(Body2)`
  color: #fff;
  padding-bottom: 20px;
`;
