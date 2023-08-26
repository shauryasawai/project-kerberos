import { MeetTheTeam, Headline } from '../../molecules/TeamCard/styles';
import { Heading4, Heading1 } from '../../shared/Typography';
import TeamCard from '../../atoms/TeamCard';
import { TeamData } from '../../../data/TeamData';
import { TeamCards } from '../../atoms/TeamCard/styles';

const TeamSection = () => {
  const TeamDatas = TeamData;
  return (
    <MeetTheTeam>
      <Headline>
        <Heading1>Meet The Team</Heading1>
        <Heading4>Get to Know the talented individuals behind our club</Heading4>
      </Headline>
      <TeamCards>
        {TeamDatas.map(TeamMember => (
          <TeamCard key={TeamMember} TeamMember={TeamMember} />
        ))}
      </TeamCards>
    </MeetTheTeam>
  );
};

export default TeamSection;
