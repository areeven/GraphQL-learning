import '../assets/css/pages/AboutPage.css';
import '../assets/css/global.css';
import Emilie from '../assets/images/emilie-ost.png'

const AboutPage: React.FC = () => {
  return (
    <>
      <div className="page-container">
        <div className="bio-container">
          <img className="bio-image" src={`${Emilie}`} alt="emilie"/>
          <div className="bio-text">
            <h3>Vem är jag</h3>
            <p>Hej jag heter Emilie och jag är fullstackutvecklare</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage;