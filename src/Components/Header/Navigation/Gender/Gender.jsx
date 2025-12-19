import cn from 'classnames';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router';

import s from './Gender.module.scss';

export const Gender = () => {
  const { genderList, activeGender, categories } = useSelector(state => state.navigation);

  return (
    <ul className={s.gender}>
      {genderList.map(gender => (
        <li key={gender} className={s.item}>
          <NavLink 
            to={gender}
            className={({isActive}) => 
              cn(s.link, (isActive || activeGender === gender) && s.linkActive)}>
            {categories[gender].title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
