import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { fetchGoods } from "../../features/goodsSlice";
import { Container } from "../Layout/Container/Container";
import { Product } from '../Product/Product';

import s from './MainPage.module.scss';




export const MainPage = ({ gender = 'women'}) => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const { goodsList } = useSelector(state => state.goods);

  useEffect(() => {
    dispatch(fetchGoods(gender));
  },[gender, dispatch]);

  return (
    <section className={s.goods}>
      <Container>
        <h2 className={s.title}>Новинки</h2>
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
