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

  // console.log('userPhoto ', userPhoto);
  // console.log('imgContext ', imgContext);
  // console.log('imageFilenames ', imageFilenames);
  // console.log('images ', images);

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
        {/* <div className="video__wrapper"> */}
        <SimpleSlider>
          <div>
            <div className="slider__vertical-center">
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
            </div>
          </div>
          {images.map((image, index) => (
            <div key={index}>
              <div className="slider__vertical-center">
                <Image
                  src={image}
                  alt="Picture of the author"
                  className="slider__image"
                  // width={437}
                  // height={437}
                />
              </div>
            </div>
          ))}
        </SimpleSlider>
        {/* </div> */}
        <p className="card__about">{about}</p>
      </div>
      <button onClick={() => handleChooseOption(id)} className="btn">
        Віддати голос
      </button>
    </div>
  );
};

export default OptionCard;
