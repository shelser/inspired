import cn from 'classnames';
import { useEffect } from 'react';
import { useRef } from 'react';

import s from './Color.module.scss';
import { NavLink } from 'react-router';

export const Color = ({color, check}) => {
  const colorRef = useRef(null);
  console.log(colorRef);
  console.log(check);
  

  useEffect(() => {
    if (colorRef.current && color) {
      colorRef.current.style.setProperty('--data-color', color);
    }
  }, [color]);
  
  return (
    <li className={s.colorItem}>
      <NavLink 
        to="#"
        ref={colorRef}
        className={({isActive}) => cn(s.color, (check && isActive && s.colorCheck))}
      >
      </NavLink>
    </li>
  );
};
// ({isActive}) => cn(s.color, isActive && s.colorCheck)
// `${s.color} ${check ? s.colorCheck : ''}`