import cn from 'classnames';

import style from './Main.module.scss';



export const Main = ({ children }) => {
  return (
    <div className={cn(style.main)}>
      {children}
    </div>
  );
};
