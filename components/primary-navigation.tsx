import CoverImage from './cover-image'
import Link from 'next/link'
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleScroll = () => {
    if (window.pageYOffset > 65) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }
  return (
    <div className={`primaryNav ${isScrolled && 'scrolled'}`}>
      <div>
        <ul>
          <li><a href="#">Get support</a></li>
          <li><a href="#">Food &amp; Drink</a></li>
          <li><a href="#">Publications</a></li>
          <li><a href="#">Dontate</a></li>
        </ul>
      </div>
      <div><a className='logo' href="#" title="Return to homepage"><span className='visuallyHidden'>Home</span></a></div>
      <div className='last'>
        <ul>
          <li><a href="#">Documents</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Fundraising</a></li>
          <li><a href="#">Membership</a></li>
        </ul>
      </div>
    </div>
  );
}
