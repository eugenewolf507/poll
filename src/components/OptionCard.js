import Image from 'next/image';

const OptionCard = ({
  id,
  author,
  recipient,
  about,
  userPhoto,
  youtubeID,
  handleChooseOption,
}) => (
  <div>
    <Image
      src={`/usersPhoto/${userPhoto}.jpeg`}
      alt="Picture of the author"
      width={437}
      height={437}
      className="user-image"
    />
    <p className="sub-title">
      {author} для {recipient}
    </p>
    <iframe
      // width="420"
      width="620"
      height="345"
      src={`https://www.youtube.com/embed/${youtubeID}`}
    ></iframe>

    <p>{about}</p>
    <button onClick={() => handleChooseOption(id)}>Віддати голос</button>
  </div>
);

export default OptionCard;
