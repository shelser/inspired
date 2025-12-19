import { useSelector } from 'react-redux';

import { Color } from './Color/Color';
import s from './ColorList.module.scss';



export const ColorList = ({ colors }) => {
  const { colorsList } = useSelector(state => state.colors);
  console.log(colorsList);
  console.log(colors);
  const currentColors = colorsList.filter(colorList => colors.includes(colorList.id));
  console.log(currentColors);
  
  return (
    <ul className={s.colorList}>
      {currentColors.map((color, i) => (
        <Color key={color.id} color={color?.code} check={!i} />
      ))}
    </ul>
  );
};
