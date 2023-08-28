import { Link } from 'react-router-dom';
import { Body2, Heading3, Heading5 } from '../../../shared';
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
      <Body2>{description}</Body2>
      <Link to={link}>
        <Heading5 style={{ display: 'flex', alignItems: 'center' }}>
          Read More
          <Icon icon={'mingcute:arrow-right-fill'} width={20} />
        </Heading5>
      </Link>
    </CardContainer>
  );
};

export default NewsletterCard;
