import { MentorCard, MentorDescription, MentorName } from './style';
export default function MentorBox({ imgUrl, imgTitle, imgDescription }) {
  return (
    <MentorCard>
      <img src={imgUrl} alt={imgTitle} />
      <MentorName>{imgTitle}</MentorName>
      <MentorDescription>{imgDescription}</MentorDescription>
    </MentorCard>
  );
}
