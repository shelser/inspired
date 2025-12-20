import cn from 'classnames';
import { useEffect } from 'react';
import { useRef } from 'react';

import s from './Color.module.scss';


export const Color = ({color, check}) => {
  const colorRef = useRef(null);

  useEffect(() => {
    if (colorRef.current && color) {
      colorRef.current.style.setProperty('--data-color', color);
    }
  }, [color]);
  
  return (
    <li 
      className={cn(s.color, check ? s.colorCheck: '')}
      ref={colorRef}
    />
  );
};
