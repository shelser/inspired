import { Outlet } from "react-router";

import { Footer } from "../Components/Footer/Footer";
import { Header } from "../Components/Header/Header";
import { Main } from "../Components/Layout/Main/Main";

const list = [
  { link: 'women', 
    title: 'Женщины',
    categories: [
      { link: 'bras', title: 'Бюстгальтеры'},
      { link: 'underpants', title: 'Трусы'},
      { link: 'socks', title: 'Носки'},
      { link: 'dressing_gowns', title: 'Халаты'},
      { link: 'thermal_underwear', title: 'Термобелье'},
      { link: 'pajamas', title: 'Пижамы'},
    ],
  },
  { link: 'men', 
    title: 'Мужчины',
    categories: [
      { link: 'underpants', title: 'Трусы'},
      { link: 'socks', title: 'Носки'},
      { link: 'dressing_gowns', title: 'Халаты'},
      { link: 'thermal_underwear', title: 'Термобелье'},
    ],
  }
];

export const Root = () => {
  return (
    <>
      <Header list={list}/>
      <Main>
        <Outlet />
      </Main>
      <Footer list={list}/>
    </>
  );
};
