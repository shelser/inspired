import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { Container } from '../../Layout/Container/Container';

import { Category } from "./Category/Category";
import { Gender } from "./Gender/Gender";
import { useEffect } from 'react';
import { setActiveGender } from '../../../features/navigationSlice';



export const Navigation = () => {
  const dispatch = useDispatch();
  const {pathname} = useLocation();
  const currentGender = pathname.split('/')[1] || 'women';

  useEffect(() => {
    
    dispatch(setActiveGender(currentGender))
  },[currentGender, dispatch])

  return (
    <nav>
      <Container>
        <Gender />
        <Category />
      </Container>
    </nav>
  );
};