import { MentorCard, MentorDescription, MentorName } from './style';
export default function MentorBox({ imgUrl, imgTitle }) {
  return (
    <MentorCard>
      <img src={imgUrl} alt={imgTitle} />
      <MentorName>John Doe</MentorName>
      <MentorDescription>{imgTitle}</MentorDescription>
    </MentorCard>
  );
}
