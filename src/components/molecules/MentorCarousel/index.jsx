import MentorBox from '../../atoms/MentorCard';
import { CarouselContainer, CarouselTrack } from './styles';
import Mentors from '../../../data/Mentors';
export default function MentorCarousel() {
  return (
    <CarouselContainer>
      <CarouselTrack>
        {Object.keys(Mentors).map(detailKey => (
          <MentorBox key={detailKey} imgUrl={Mentors[detailKey].imgUrl} imgTitle={Mentors[detailKey].title} />
        ))}
        {Object.keys(Mentors).map(detailKey => (
          <MentorBox key={detailKey} imgUrl={Mentors[detailKey].imgUrl} imgTitle={Mentors[detailKey].title} />
        ))}
        {Object.keys(Mentors).map(detailKey => (
          <MentorBox key={detailKey} imgUrl={Mentors[detailKey].imgUrl} imgTitle={Mentors[detailKey].title} />
        ))}
      </CarouselTrack>
    </CarouselContainer>
  );
}
