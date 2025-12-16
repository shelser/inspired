import { NavLink, useLocation, useParams } from 'react-router';
import cn from 'classnames';

import { Container } from '../../../Layout/Container/Container';

import s from './Category.module.scss';


export const Category = ({list}) => {
  let currentGender = '';
  const {pathname} = useLocation();
  currentGender = pathname === '/' ? 'women' : pathname.slice(1);
  
  const currentCategory = list.find((item) => item.link === currentGender);

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
