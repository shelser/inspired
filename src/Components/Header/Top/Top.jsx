import cn from 'classnames';
import logo from '/src/assets/logo.svg';
import { NavLink } from 'react-router';

import CartSVG  from '../../../assets/cart.svg?react';
import LikeSVG  from '../../../assets/heart.svg?react';
import SearchSVG  from '../../../assets/search.svg?react';
import { Container } from "../../Layout/Container/Container";

import style from './Top.module.scss';



export const Top = () => {
  return (
    <div className={style.top}>
      <Container className={style.container}>
        <a href="tel:89304902620" className={cn(style.link, style.phone)}>8 930 490 26 20</a>

        <NavLink to="/" className={style.logo}>
          <img src={logo} alt="" />
        </NavLink>

        <div className={style.navigation}>
          <ul className={style.navList}>
            <li className={style.navItem}>
              <button className={style.link}>
                <SearchSVG />
              </button>
            </li>
            <li className={style.navItem}>
              <NavLink to="/cart" href="#" className={style.link}>
                <CartSVG />
              </NavLink>
            </li>
            <li className={style.navItem}>
              <NavLink to="/favorite" href="#" className={cn(style.link, style.like)}>
                <LikeSVG />
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};