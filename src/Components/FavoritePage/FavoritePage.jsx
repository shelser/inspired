import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { fetchCategory } from '../../features/goodsSlice';
import { usePageFromSearchParams } from '../../hooks/usePageFromSearchParams';
import { Goods } from '../Goods/Goods';





export const FavoritePage = () => {

  const dispatch = useDispatch();
  
  const favorites = useSelector(state => state.favorites);

  const page = usePageFromSearchParams(dispatch);

  
  useEffect(() => {
    const param = {list: favorites};
    
    
    if (page) {
      param.page = page;
      
    }

    dispatch(fetchCategory(param));
  }, [dispatch, favorites, page]);

  return (
    <Goods title="Избранное" />
  );
};
