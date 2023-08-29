import { Body3, Heading3 } from '../../shared';
import { MdPlace } from 'react-icons/md';
import styled from 'styled-components';

const ItemStyles = styled.div`
  display: flex;
  gap: 2rem;
`;

const IconWrapper = styled.div`
  color: #245f02;
  padding: 0.5rem;
  font-size: 2.5rem;
  @media (max-width: 768px) {
    padding: 0.2rem;
    font-size: 24px;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export default function ContactInfoItem({ icon = <MdPlace />, title = 'Title', text = 'this is Text' }) {
  return (
    <ItemStyles>
      <IconWrapper>{icon}</IconWrapper>
      <InfoWrapper>
        <Heading3>{title}</Heading3>
        <Body3>{text}</Body3>
      </InfoWrapper>
    </ItemStyles>
  );
}
