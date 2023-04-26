import ProgressBar from './ProgressBar';

const TotallyVoted = ({
  numberOfUsers,
  calculateVotedQuantity,
  calculateVotedPercentage,
}) => (
  <>
    <p>
      {calculateVotedQuantity()} voted from {numberOfUsers}
    </p>
    <p>Percent of voted: {calculateVotedPercentage()}</p>
    <div>
      <ProgressBar percent={calculateVotedPercentage()} />
    </div>
  </>
);

export default TotallyVoted;
