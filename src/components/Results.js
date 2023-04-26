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
    <div className="results">
      <div>Варіант 1.</div>
      <div> {+option1} людей проголосувало</div>
      <ProgressBar percent={(+option1 * 100) / calculateVotedQuantity()} />
      <div>Варіант 2.</div>
      <div> {+option2} людей проголосувало</div>
      <ProgressBar percent={(+option2 * 100) / calculateVotedQuantity()} />
      <div>Варіант 3.</div>
      <div> {+option3} людей проголосувало</div>
      <ProgressBar percent={(+option3 * 100) / calculateVotedQuantity()} />
      <div>Варіант 4.</div>
      <div> {+option4} людей проголосувало</div>
      <ProgressBar percent={(+option4 * 100) / calculateVotedQuantity()} />
      <div>Варіант 5.</div>
      <div> {+option5} людей проголосувало</div>
      <ProgressBar percent={(+option5 * 100) / calculateVotedQuantity()} />
      <div>Варіант 6.</div>
      <div> {+option6} людей проголосувало</div>
      <ProgressBar percent={(+option6 * 100) / calculateVotedQuantity()} />
      <div>Варіант 7.</div>
      <div> {+option7} людей проголосувало</div>
      <ProgressBar percent={(+option7 * 100) / calculateVotedQuantity()} />
    </div>
  );
};

export default Results;
