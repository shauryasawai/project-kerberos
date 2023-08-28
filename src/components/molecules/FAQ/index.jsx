import faqData from '../../../data/faq';
import FaqItem from '../../atoms/FAQ';
import { FaqContainer, FaqHeading, Caption, FaqLayout, Caption2, Caption3, Caption4 } from './style';

const FaqComponent = () => {
  const faqs = Object.values(faqData);

  return (
    <FaqContainer>
      <FaqHeading>Faqs</FaqHeading>
      <Caption>Find answers to community asked questions about the club and its service</Caption>
      <FaqLayout>
        {faqs.map((faq, index) => (
          <FaqItem key={index} faq={faq} />
        ))}
      </FaqLayout>
      <Caption2>Still Have Questions?</Caption2>
      <Caption3>Feel free to reach out to us for more information.</Caption3>
      <Caption4>Contact</Caption4>
    </FaqContainer>
  );
};

export default FaqComponent;
