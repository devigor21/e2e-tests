import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Navbar.module.scss';

function Navbar() {
  return (
    <nav className={s.nav}>
      <NavLink to="/" className={s.nav__wrapper}>
        <div className={s.nav__logo}>
          <span className={s.nav__logoTitle}>
            TEST API
          </span>
        </div>
      </NavLink>

      <ul className={s.nav__list}>
        <li className={s.nav__listItem}>
          <NavLink to="/about">About</NavLink>
        </li>
        <li className={s.nav__listItem}>
          <NavLink to="/">Home</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
