import cn from 'classnames';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router';

import { Container } from '../../../Layout/Container/Container';

import s from './Category.module.scss';


export const Category = () => {
  const { activeGender, categories } = useSelector(state => state.navigation);
  
  return (
    <Container>
      <ul className={s.category}>
        {categories[activeGender]?.list?.map(item => (
          <li className={s.categoryItem} key={item.slug}>
            <NavLink 
              to={`${activeGender}/${item.slug}`} 
              className={({isActive}) => cn(s.link, isActive && s.linkActive)}>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </Container>
  );
};
