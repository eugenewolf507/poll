import financialHelpData from '../data/financialHelpData';
import OptionCard from './OptionCard';

const PollOptions = () => {
  console.log(financialHelpData);
  return (
    <div>
      {financialHelpData.map(({ id, author, recipient, about }) => (
        <OptionCard
          key={id}
          id={id}
          author={author}
          recipient={recipient}
          about={about}
        />
      ))}
    </div>
  );
};

export default PollOptions;
