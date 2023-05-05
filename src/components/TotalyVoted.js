import ProgressBar from './ProgressBar';

const TotallyVoted = ({
  numberOfUsers,
  calculateVotedQuantity,
  calculateVotedPercentage,
}) => (
  <div className="totally-voted">
    <p className="totally-voted__title">
      Всього проголосувало: {calculateVotedPercentage()}% або{' '}
      {calculateVotedQuantity()} голос(ів) з {numberOfUsers} людей.
    </p>
    <div>
      <ProgressBar percent={calculateVotedPercentage()} />
    </div>
  </div>
);

export default TotallyVoted;
