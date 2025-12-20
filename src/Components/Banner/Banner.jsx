import { NavLink } from 'react-router';

import { API_URL } from '../../const';
import { Container } from '../Layout/Container/Container';

import s from './Banner.module.scss';
import { useEffect, useState } from 'react';
import { useMedia } from 'react-use';


export const Banner = ({data}) => {
  const isMobile = useMedia('(max-width: 540px');
  const isTablet = useMedia('(max-width: 768px');
  const islaptop = useMedia('(max-width: 1024px');
  

  const [device, setDevice] = useState('');

  useEffect(() => {
    if(isMobile) {
      setDevice('mobile')
    } else if (isTablet) {
      setDevice('tablet')
    } else if (islaptop) {
      setDevice('laptop')
    } else {
      setDevice('desktop')
    }
  }, [isMobile, isTablet, islaptop])

  return (
    data &&
    <section 
      className={s.banner} 
      style={{
        backgroundImage: `url(${API_URL}/${data.bg[device]})`
      }}
    >
      <Container>
        <div className={s.content}>
          <h2 className={s.title}>{data.description}</h2>
          <NavLink className={s.link} to={`/product/${data.id}`}>
            Перейти
          </NavLink>
        </div>
      </Container>
    </section> 
  );
}; 
