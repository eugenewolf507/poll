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
}) => {
  const imgContext = require.context(
    '../../public/BGPhotos',
    true,
    /\.(png|jpe?g|svg)$/
  );
  const imageFilenames = imgContext
    .keys()
    .filter((x) => x.includes(`public/BGPhotos/${userPhoto}`));
  const images = imageFilenames.map(imgContext);

  return (
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
        <SimpleSlider>
          {youtubeID.map((url) => (
            <div key={url}>
              <div className="slider__vertical-center">
                <div className="iframe__wrapper">
                  <iframe
                    src={`https://www.youtube.com/embed/${url}`}
                    allowfullscreen="allowfullscreen"
                    mozallowfullscreen="mozallowfullscreen"
                    msallowfullscreen="msallowfullscreen"
                    oallowfullscreen="oallowfullscreen"
                    webkitallowfullscreen="webkitallowfullscreen"
                    className="iframe__responsive"
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
          {images.map((image, index) => (
            <div key={index}>
              <div className="slider__vertical-center">
                <Image
                  src={image}
                  loading="eager" // {lazy} | {eager}
                  alt="Picture of the author"
                  className="slider__image"
                  // width={437}
                  // height={437}
                />
              </div>
            </div>
          ))}
        </SimpleSlider>
        <div
          dangerouslySetInnerHTML={{ __html: about }}
          className="card__about"
        ></div>
      </div>
      <button onClick={() => handleChooseOption(id)} className="btn">
        Віддати голос
      </button>
    </div>
  );
};

export default OptionCard;
