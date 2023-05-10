import ProgressBar from './ProgressBar';

const ResultsOption = ({ text, value, totalVoted }) => (
  <div className="results__option">
    <div className="results__title">{text}</div>
    <div className="results__value"> {+value}</div>
    <ProgressBar percent={(+value * 100) / totalVoted} />
  </div>
);

export default ResultsOption;
