import { NavLink, useLocation, useParams } from 'react-router';

import { Container } from '../../../Layout/Container/Container';

import s from './Category.module.scss';


export const Category = ({list}) => {
  const location = useLocation();
  console.log(location);
  const params = useParams();
  console.log(params);
  console.dir(document)
  
  

  return (
    <Container className={s.category}>
      <ul className={s.categoryList}>
        {/* {list.categories.map(item => (
          <li className={s.categoryItem} key={item.link}>
            <NavLink to={item.category.link} className={s.link}></NavLink>
          </li>
        ))} */}
      </ul>
    </Container>
  );
};
