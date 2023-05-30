import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import { FaEnvelope, FaPhoneVolume, FaHome, FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaRssSquare, FaBlind } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="">
      {/* <Container> */}
      <div>
        <h2>Contact us</h2>
        <ul>
          <li className='emailIcon'><FaEnvelope /> <a href="mailto:contact@galactosaemia.org">contact@galactosaemia.org</a></li>
          <li className=''><FaPhoneVolume /> <a href="tel:01213785143">0121 378 5143</a></li>
          <li className='addressIcon'><FaHome /> GSG, 757 Manchester Road, Stocksbridge, Sheffield, S36 1DQ</li>
        </ul>
      </div>
      <div>
        <h2>The charity</h2>
        <ul className='noIcons'>
          <li><a href="#">Become a member</a></li>
          <li><a href="#">Donate</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">Charity details</a></li>
        </ul>
      </div>
      <div>
        <h2>Social</h2>
        <ul>
          <li><FaFacebook /> <a href="#">Facebook</a></li>
          <li><FaInstagram /> <a href="#">Instagram</a></li>
          <li><FaPinterest /> <a href="#">Pinterest</a></li>
          <li><FaTwitter /> <a href="#">Twitter</a></li>
          <li><FaRssSquare /> <a href="#">RSS Feed</a></li>
        </ul>
      </div>
      <div>
        <h2>Useful links</h2>
        <ul className='noIcons'>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Cookie Policy</a></li>
          <li><a href="#">GDPR</a></li>
          <li><a href="#">Shop T&Cs</a></li>
          <li><a href="#">Accessibility</a></li>
        </ul>
      </div>
      {/* </Container> */}
    </footer>
  )
}
