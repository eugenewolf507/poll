import ProgressBar from './ProgressBar';

const TotallyVoted = ({
  numberOfUsers,
  calculateVotedQuantity,
  calculateVotedPercentage,
}) => (
  <>
    <p>
      Всього проголосувало: {calculateVotedPercentage()}% або{' '}
      {calculateVotedQuantity()} голос(ів) з {numberOfUsers} людей.
    </p>
    <div>
      <ProgressBar percent={calculateVotedPercentage()} />
    </div>
  </>
);

export default TotallyVoted;
