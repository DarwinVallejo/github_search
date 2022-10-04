import Link from 'next/link';
import React, { useState } from 'react'

const Header = () => {

  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="navbar is-warning" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <div >
            BrandsZe
          </div>
        </div>
        <a onClick={() => {
          setIsActive(!isActive)
        }} role="button" className={`navbar-burger burger ${isActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navbar-pages">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbar-pages" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <Link href={'/'}>
            <a className="navbar-item">
              Home
            </a>
          </Link>
          <Link href={'/user'}>
            <a className="navbar-item">
              Users
            </a>
          </Link>
          <Link href={'/repository'}>

            <a className="navbar-item">
              Repositories
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;