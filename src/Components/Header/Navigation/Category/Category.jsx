import { NavLink } from 'react-router';
import { useSelector } from 'react-redux';
import cn from 'classnames';

import { Container } from '../../../Layout/Container/Container';

import s from './Category.module.scss';


export const Category = ({list}) => {
  const gender = useSelector(state => state.navigation.activeGender)

  
  const currentCategory = list.find((item) => item.link === gender);

  return (
    <Container>
      <ul className={s.category}>
        {currentCategory.categories.map(item => (
          <li className={s.categoryItem} key={item.link}>
            <NavLink 
              to={`${currentCategory.link}/${item.link}`} 
              className={({isActive}) => cn(s.link, isActive && s.linkActive)}>
                {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </Container>
  );
};
