import { NavLink } from 'react-router';

import Like  from '../../assets/heart.svg?react';
import { API_URL } from '../../const';
import { ColorList } from '../ColorList/ColorList';

import s from './Product.module.scss';




export const Product = ( {id, pic, title, price, colors} ) => {
  return (
    <article className={s.product}>
      <NavLink to={`product/${id}`} className={s.link}>
        <img src={`${API_URL}/${pic}`} alt="" className={s.image} />
        <h3 className={s.title}>{title}</h3>
      </NavLink>

      <div className={s.row}>
        <p className={s.price}>руб {price}</p>

        <button className={s.favorite}>
          <Like />
        </button>
      </div>
      <ColorList colors={colors}/>
    </article>
  );
};
