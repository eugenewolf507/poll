import financialHelpData from '../data/financialHelpData';
import OptionCard from './OptionCard';

const PollOptions = ({ handleChooseOption }) => {
  console.log(financialHelpData);
  return (
    <div>
      {financialHelpData.map(
        ({ id, author, recipient, about, userPhoto, youtubeID }) => (
          <OptionCard
            key={id}
            id={id}
            author={author}
            recipient={recipient}
            about={about}
            userPhoto={userPhoto}
            youtubeID={youtubeID}
            handleChooseOption={handleChooseOption}
          />
        )
      )}
    </div>
  );
};

export default PollOptions;
