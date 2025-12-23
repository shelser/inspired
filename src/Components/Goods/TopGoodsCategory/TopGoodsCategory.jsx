import { useSelector } from "react-redux";

import { Container } from "../../Layout/Container/Container";
import { Product } from '../../Product/Product';

import s from './TopGoodsCategory.module.scss';

export const TopGoodsCategory = () => {
  const { goodsList } = useSelector(state => state.goods);
  
  return (
    <section className={s.goods}>
      <Container>
        <h2 className={s.title}>Вам также может понравиться</h2>
        <ul className={s.list}>
          {goodsList.map(item => 
            <li key={item.id}>
              <Product {...item}/>
            </li>)}
        </ul>
      </Container>
    </section>
  );
};
