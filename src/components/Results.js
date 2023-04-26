import ProgressBar from './ProgressBar';

const Results = ({
  option1,
  option2,
  option3,
  option4,
  option5,
  option6,
  option7,
  calculateVotedQuantity,
}) => {
  return (
    <>
      <br />
      <br />
      <br />

      <div>
        Option 1: {+option1} voted
        <ProgressBar percent={(+option1 * 100) / calculateVotedQuantity()} />
      </div>
      <div>
        Option 2: {+option2} voted
        <ProgressBar percent={(+option2 * 100) / calculateVotedQuantity()} />
      </div>
      <div>
        Option 3: {+option3} voted
        <ProgressBar percent={(+option3 * 100) / calculateVotedQuantity()} />
      </div>
      <div>
        Option 4: {+option4} voted
        <ProgressBar percent={(+option4 * 100) / calculateVotedQuantity()} />
      </div>
      <div>
        Option 5: {+option5} voted
        <ProgressBar percent={(+option5 * 100) / calculateVotedQuantity()} />
      </div>
      <div>
        Option 6: {+option6} voted
        <ProgressBar percent={(+option6 * 100) / calculateVotedQuantity()} />
      </div>
      <div>
        Option 7: {+option7} voted
        <ProgressBar percent={(+option7 * 100) / calculateVotedQuantity()} />
      </div>
    </>
  );
};

export default Results;
