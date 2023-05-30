import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'
import { FaSearch, FaShoppingBasket, FaEnvelope } from 'react-icons/fa';

export default function Alert({ preview }) {
  return (
    <div className={'alert'}>
      <div></div>
      <div>
        <a href="#">Become a member of Galactosaemia Support Group for only £25 per year</a>
      </div>
      <div className='alertNav'>
        <ul>
          <li className='alertIcon'><a href='#' title='Search site'><FaSearch /></a></li>
          <li className='alertIcon'><a href='#' title='Contact us'><FaEnvelope /></a></li>
          <li className='alertIcon'><a title='Shopping cart' href='#'><FaShoppingBasket /></a></li>
        </ul>
        
      </div>
    </div>
  )
}
