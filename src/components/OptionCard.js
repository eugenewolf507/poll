const OptionCard = ({ id, author, recipient, about }) => (
  <div>
    <p>{id}</p>
    <p>
      {author} для {recipient}
    </p>
    <p>{about}</p>
  </div>
);

export default OptionCard;
