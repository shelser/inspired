import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import LikeSVG  from '../../assets/heart.svg?react';
import {removeFromFavorite, addToFavorite} from '../../features/favoritesSlice';

import s from './BtnLike.module.scss';


export const BtnLike = ({id}) => {

  const dispatch = useDispatch();
  const isFavorite = useSelector(state => state.favorites.includes(id));

  const handleToogleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite({id}));
    } 
    else {
      dispatch(addToFavorite({id}));
    }
  };

  return (
    <button
      className={isFavorite ? cn(s.like, s.active) : s.like}
      aria-label="Добавить в избранное"
      type="button"
      onClick={handleToogleFavorite}
    >
      <LikeSVG />
    </button>
  );
};
