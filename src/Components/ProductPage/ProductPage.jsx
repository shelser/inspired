import cn from 'classnames';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router";

import Like  from '../../assets/heart.svg?react';
import { API_URL } from '../../const';
import { fetchProduct } from '../../features/productSlice';
import { ColorList } from '../ColorList/ColorList';
import { Count } from '../Count/Count';
import { Container } from '../Layout/Container/Container';

import s from './ProductPage.module.scss';



export const ProductPage = () => {

  const dispatch = useDispatch();
  const { id } = useParams();
  const {product} = useSelector(state => state.product);

  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [count, setCount] = useState(1);

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
    }
  };

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  return (
    <section className={s.card}>
      <Container className={s.container}>
        <img src={`${API_URL}/${product?.pic}`} alt={product?.title} className={s.image}/>
        <form className={s.content}>
          <h2 className={s.title}>{product.title}</h2>

          <p className={s.price}>руб {product.price}</p>

          <div className={s.vendorCode}>
            <span className={s.subtitle}>Артикул</span>
            <span className={s.id}>{product.id}</span>
          </div>

          <div className={s.color}>
            <p className={cn(s.subtitle, s.colorTitle)}>Цвет</p>
            <ColorList 
              colors={product.colors} 
              selectedColor={selectedColor}
              handleColorChange={handleColorChange}
            />
          </div>
          
          {/* <ProductSize size={product.size} /> */}

          <div className={s.description}>
            <p className={cn(s.subtitle, s.descriptionTitle)}>Описание</p>
            <p className={s.descriptionText}>{product.description}</p>
          </div>

          <div className={s.control}>
            <Count
              className={s.count}
              count={count}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
            />
            <button className={s.addCart} type="submit">В корзину</button>

            <button className={s.favorite} aria-label="Добавить в избранное" type="button">
              <Like />
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
};
