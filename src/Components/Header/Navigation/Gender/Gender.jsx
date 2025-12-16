import cn from 'classnames';
import { NavLink } from 'react-router';

import s from './Gender.module.scss';


export const Gender = ({list}) => {
  return (
    <ul className={s.gender}>
      {list.map(item => (
        <li key={item.link} className={s.item}>
          <NavLink 
            to={item.link}
            className={({isActive}) => cn(s.link, isActive && s.linkActive)}>
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
