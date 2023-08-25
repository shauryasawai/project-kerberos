import styled from 'styled-components';
import { Body2, Heading2 } from '../../shared/Typography';

export const MentorCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 672px;
  aspect-ratio: 4/3;
  border-radius: 10px;
  object-fit: cover;
  img {
    width: 522px;
    aspect-ratio: 4/3;
    border-radius: 40px;
    @media (max-width: 768px) {
      width: 380px;
    }
    @media (max-width: 576px) {
      width: 250px;
    }
  }
  @media (max-width: 768px) {
    width: 480px;
  }
  @media (max-width: 576px) {
    width: 230px;
  }
`;
export const MentorName = styled(Heading2)`
  color: #fff;
  margin-top: 20px;
  margin-bottom: 10px;
`;
export const MentorDescription = styled(Body2)`
  color: #fff;
`;
