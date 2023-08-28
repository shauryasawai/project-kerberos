import { useState } from 'react';
import NewsletterCard from '../Card';
import NewsletterNavigation from '../Navigation';
import { SwiperContainer, SwiperWrapper } from './styles';
import useSwipe from '../../../../hooks/useSwipe';

const Swiper = ({ data }) => {
  const [active, setActive] = useState(0);

  const handleSwipe = direction => {
    if (direction === 'left') {
      setActive(prev => (prev === 0 ? data.length - 1 : prev - 1));
    } else {
      setActive(prev => (prev === data.length - 1 ? 0 : prev + 1));
    }
  };

  const { handleTouchEnd, handleTouchMove, handleTouchStart } = useSwipe({
    onSwipeLeft: () => handleSwipe('left'),
    onSwipeRight: () => handleSwipe('right'),
    minDistance: 50,
  });

  return (
    <>
      <SwiperContainer onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
        <SwiperWrapper active={active}>
          {data.map(item => (
            <NewsletterCard key={item.id} {...item} />
          ))}
        </SwiperWrapper>
      </SwiperContainer>
      <NewsletterNavigation count={data.length} active={active} setActive={setActive} />
    </>
  );
};

export default Swiper;
