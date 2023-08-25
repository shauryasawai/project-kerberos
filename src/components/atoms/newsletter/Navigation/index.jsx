import { Icon } from '@iconify/react';
import { NavButton, PageNavigation, Wrapper } from './styles';

const NewsletterNavigation = ({ count, active, setActive }) => {
  return (
    <Wrapper>
      <NavButton onClick={() => setActive(prev => (prev - 1 >= 0 ? prev - 1 : 0))} disabled={active === 0}>
        <Icon icon='mdi:chevron-left' width={72} />
      </NavButton>
      <PageNavigation>
        {Array(count)
          .fill()
          .map((_, i) => (
            <span key={i} className={i === active ? 'active' : ''} onClick={() => setActive(i)} />
          ))}
      </PageNavigation>
      <NavButton onClick={() => setActive(prev => (prev + 1 < count ? prev + 1 : count - 1))} disabled={active === count - 1}>
        <Icon icon='mdi:chevron-right' width={72} />
      </NavButton>
    </Wrapper>
  );
};

export default NewsletterNavigation;
