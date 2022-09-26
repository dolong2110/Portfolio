import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className='bottom-bar'>
      <h2>
        Designed and Developed by Chau Long Do
      </h2>
      <h2>
        Copyright © {year} CLD
      </h2>
      <ul>
        <li>
          <a target='_blank' rel='noreferrer' href='https://twitter.com/dolong2110'>
            <FontAwesomeIcon icon={faTwitter} color='#f2f2f2' />
          </a>
        </li>
        <li>
          <a target='_blank' rel='noreferrer' href='https://www.instagram.com/chaulong98'>
            <FontAwesomeIcon icon={faInstagram} color='#f2f2f2' />
          </a>
        </li>
        <li>
          <a target='_blank' rel='noreferrer' href='https://www.facebook.com/cek.long.94'>
            <FontAwesomeIcon icon={faFacebook} color='#f2f2f2' />
          </a>
        </li>
        <li>
          <a target='_blank' rel='noreferrer' href='https://www.tiktok.com/@longdo2110'>
            <FontAwesomeIcon icon={faTiktok} color='#f2f2f2' />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer;