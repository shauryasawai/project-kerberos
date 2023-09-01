import MentorBox from '../../atoms/MentorCard';
import { CarouselContainer, CarouselTrack } from './styles';
import Mentors from '../../../data/Mentors';
export default function MentorCarousel() {
  return (
    <CarouselContainer>
      <CarouselTrack>
        {Object.keys(Mentors).map(detailKey => (
          <MentorBox
            key={detailKey}
            imgUrl={Mentors[detailKey].imgUrl}
            imgTitle={Mentors[detailKey].title}
            imgDescription={Mentors[detailKey].description}
          />
        ))}
        {Object.keys(Mentors).map(detailKey => (
          <MentorBox
            key={detailKey}
            imgUrl={Mentors[detailKey].imgUrl}
            imgTitle={Mentors[detailKey].title}
            imgDescription={Mentors[detailKey].description}
          />
        ))}
        {Object.keys(Mentors).map(detailKey => (
          <MentorBox
            key={detailKey}
            imgUrl={Mentors[detailKey].imgUrl}
            imgTitle={Mentors[detailKey].title}
            imgDescription={Mentors[detailKey].description}
          />
        ))}
      </CarouselTrack>
    </CarouselContainer>
  );
}
