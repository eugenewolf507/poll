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
  <div className="card">
    <div className="card__header">
      <Image
        src={`/usersPhoto/${userPhoto}.jpeg`}
        alt="Picture of the author"
        width={437}
        height={437}
        className="user-image"
      />
      <p className="card__title">
        {author} для {recipient}
      </p>
    </div>
    <div className="card__main">
      <iframe
        // width="430"
        // height="250"
        src={`https://www.youtube.com/embed/${youtubeID}`}
      ></iframe>
      <p className="card__about">{about}</p>
    </div>
    <button onClick={() => handleChooseOption(id)} className="btn">
      Віддати голос
    </button>
  </div>
);

export default OptionCard;
