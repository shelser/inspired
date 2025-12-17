import cn from 'classnames';
import { NavLink, useLocation } from 'react-router';

import s from './Gender.module.scss';
import { useSelector } from 'react-redux';


export const Gender = ({list}) => {
  const gender = useSelector(state => state.navigation.activeGender)

  return (
    <ul className={s.gender}>
      {list.map(item => (
        <li key={item.link} className={s.item}>
          <NavLink 
            to={item.link}
            className={({isActive}) => 
              cn(s.link, (isActive || gender === item.link) && s.linkActive)}>
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
