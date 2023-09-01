import { Link } from 'react-router-dom';
import { Body3, Heading3, Heading5 } from '../../../shared';
import { CardContainer, CardTitle, ImageContainer } from './styles';
import { Icon } from '@iconify/react';

const NewsletterCard = ({ title, description, category, type, id, image, link }) => {
  return (
    <CardContainer id={id}>
      <ImageContainer src={image} alt={title} draggable={false} />
      <CardTitle transform='uppercase'>
        <span>{category}</span> / {type}
      </CardTitle>
      <Heading3>{title}</Heading3>
      <Body3>{description}</Body3>
      <Link to={link} target='_blank' rel='noopener noreferrer'>
        <Heading5 style={{ display: 'flex', alignItems: 'center', color: '#245F02' }}>
          <span>Read More</span>
          <Icon icon={'mingcute:arrow-right-fill'} width={20} />
        </Heading5>
      </Link>
    </CardContainer>
  );
};

export default NewsletterCard;
