import ResultsOption from './ResultsOption';

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
      <ResultsOption
        text="Варіант 1."
        value={option1}
        totalVoted={calculateVotedQuantity()}
      />
      <ResultsOption
        text="Варіант 2. Варіант 2."
        value={option2}
        totalVoted={calculateVotedQuantity()}
      />
      <ResultsOption
        text="Варіант 3. Варіант 3."
        value={option3}
        totalVoted={calculateVotedQuantity()}
      />
      <ResultsOption
        text="Варіант 4. Варіант"
        value={option4}
        totalVoted={calculateVotedQuantity()}
      />
      <ResultsOption
        text="Варіант 5.Вар"
        value={option5}
        totalVoted={calculateVotedQuantity()}
      />
      <ResultsOption
        text="Варіант 6."
        value={option6}
        totalVoted={calculateVotedQuantity()}
      />
      <ResultsOption
        text="Варіант 7."
        value={option7}
        totalVoted={calculateVotedQuantity()}
      />
    </div>
  );
};

export default Results;
