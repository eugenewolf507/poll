import ProgressBar from './ProgressBar';

const TotallyVoted = ({
  numberOfUsers,
  calculateVotedQuantity,
  calculateVotedPercentage,
}) => (
  <>
    <p>
      {calculateVotedQuantity()} голос(ів) з {numberOfUsers} людей.
    </p>
    <p>Відсоток людей, що проголосували: {calculateVotedPercentage()}</p>
    <div>
      <ProgressBar percent={calculateVotedPercentage()} />
    </div>
  </>
);

export default TotallyVoted;
