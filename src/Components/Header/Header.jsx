import s from './Header.module.scss';
import { Navigation } from "./Navigation/Navigation";
import { Top } from "./Top/Top";


export const Header = () => {
  return (

    <header className={s.header}>
      <Top />
      <Navigation />
    </header>
  );
};