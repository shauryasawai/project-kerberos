import faqData from '../../../data/faq';
import FaqItem from '../../atoms/FAQ';
import { Button } from '../../shared';
import { FaqContainer, FaqHeading, Caption, FaqLayout, Caption2, Caption3 } from './style';

const FaqComponent = () => {
  const faqs = Object.values(faqData);
  const email = 'anc.nitr@gmail.com';
  const subject = 'Inquiry from Website';

  const handleClick = () => {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  };

  return (
    <FaqContainer id='faqs'>
      <FaqHeading>FAQs</FaqHeading>
      <Caption>Find answers to community asked questions about the club and its service</Caption>
      <FaqLayout>
        {faqs.map((faq, index) => (
          <FaqItem key={index} faq={faq} />
        ))}
      </FaqLayout>
      <Caption2>Still Have Questions?</Caption2>
      <Caption3>Feel free to reach out to us for more information.</Caption3>
      <Button text={'Contact Us'} style={{ marginTop: '30px' }} variant={'outline'} onClick={handleClick} />
    </FaqContainer>
  );
};

export default FaqComponent;
