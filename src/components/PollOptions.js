import financialHelpData from '../data/financialHelpData';
import OptionCard from './OptionCard';

const PollOptions = ({ handleChooseOption }) => {
  return (
    <div className="poll__options">
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
