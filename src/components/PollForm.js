const PollForm = ({
  options,
  selectedOption,
  handleSubmit,
  handleOptionChange,
}) => {
  return (
    <form onSubmit={handleSubmit} className="poll-form">
      {options.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={handleOptionChange}
          />
          <span className="radio__label">{option.label}</span>
        </label>
      ))}
      <button
        type="submit"
        disabled={selectedOption ? false : true}
        className="btn"
      >
        Проголосувати
      </button>
    </form>
  );
};

export default PollForm;
