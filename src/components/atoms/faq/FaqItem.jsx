import { useState } from 'react';
import { FaqItemContainer, Answer, ArrowIcon } from './style';

const FaqItem = ({ faq }) => {
  const [isActive, setIsActive] = useState(false);
  const toggleFaq = () => {
    setIsActive(!isActive);
  };

  return (
    <FaqItemContainer className={isActive ? 'active' : ''} onClick={toggleFaq}>
      <div>
        {faq.question}
        <ArrowIcon isActive={isActive} icon='akar-icons:chevron-down' />
      </div>
      <Answer active={isActive}>{faq.answer}</Answer>
    </FaqItemContainer>
  );
};
export default FaqItem;
