import ResourceData from '../../../data/ResourceData.js';
import ResourceCard from '../../atoms/ResourceCard';
export default function Casebook() {
  return (
    <>
      {ResourceData.casebook.map(item => {
        return (
          <ResourceCard
            key={item.id}
            subtitle1={item.subtitle1}
            subtitle2={item.subtitle2}
            title={item.title}
            description={item.description}
            link={item.link}
            image={item.image}
          />
        );
      })}
    </>
  );
}
