const OptionCard = ({ id, author, recipient, about, handleChooseOption }) => (
  <div>
    <p>{id}</p>
    <p>
      {author} для {recipient}
    </p>
    <p>{about}</p>
    <button onClick={() => handleChooseOption(id)}>Віддати голос</button>
  </div>
);

export default OptionCard;
