const PollForm = ({
  options,
  selectedOption,
  handleSubmit,
  handleOptionChange,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      {options.map((option) => (
        <label key={option.value} className="radio">
          <input
            type="radio"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={handleOptionChange}
          />
          {option.label}
        </label>
      ))}
      <button type="submit" disabled={selectedOption ? false : true}>
        Submit
      </button>
    </form>
  );
};

export default PollForm;
