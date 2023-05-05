import Image from 'next/image';
import SimpleSlider from './Slider';

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
      <div className="video__wrapper">
        <SimpleSlider>
          <div className="iframe__wrapper">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeID}`}
              allowfullscreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
              className="iframe__responsive"
            ></iframe>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </SimpleSlider>
      </div>
      <p className="card__about">{about}</p>
    </div>
    <button onClick={() => handleChooseOption(id)} className="btn">
      Віддати голос
    </button>
    <div className="divideLine"></div>
  </div>
);

export default OptionCard;
