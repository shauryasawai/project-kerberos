import { Heading3 } from '../../shared';
import { MdPlace } from 'react-icons/md';
import styled from 'styled-components';

const ItemStyles = styled.div`
  padding: 2rem;
  background-color: var(--deep-dark);
  display: flex;
  align-items: flex-start; /* Align items to the top */
  gap: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

const IconWrapper = styled.div`
  color: #39ff14; /* Fluorescent green */
  background-color: var(--deep-dark);
  padding: 1rem; /* Increase the padding to make the icon larger */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 2.5rem;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function ContactInfoItem({ icon = <MdPlace />, title = 'Title', text = 'this is Text' }) {
  return (
    <ItemStyles>
      <IconWrapper>{icon}</IconWrapper>
      <InfoWrapper>
        <div className='title'>
          <Heading3>{title}</Heading3>
        </div>
        <div className='info'>
          <p>{text}</p>
        </div>
      </InfoWrapper>
    </ItemStyles>
  );
}
