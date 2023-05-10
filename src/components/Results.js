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
        text="Анастасія Матюшенко для Кужель Олександра"
        value={option1}
        totalVoted={calculateVotedQuantity()}
      />
      <ResultsOption
        text="Вікторія Соколова для 73 Морського Центру Сил спеціальних операцій"
        value={option2}
        totalVoted={calculateVotedQuantity()}
      />
      <ResultsOption
        text="Аліна Тустановська для Сергія Дороніна"
        value={option3}
        totalVoted={calculateVotedQuantity()}
      />
      <ResultsOption
        text="Ігор Кішко для БФ «СОЛОМ’ЯНСЬКІ КОТИКИ»"
        value={option4}
        totalVoted={calculateVotedQuantity()}
      />
      <ResultsOption
        text="Аллан Фатулаєв для Служби військових капеланів"
        value={option5}
        totalVoted={calculateVotedQuantity()}
      />
      <ResultsOption
        text="Юлія Стаднік для Баланської Оксани"
        value={option6}
        totalVoted={calculateVotedQuantity()}
      />
    </div>
  );
};

export default Results;
