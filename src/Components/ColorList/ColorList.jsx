import { useSelector } from 'react-redux';

import { Color } from './Color/Color';
import { ColorLabel } from './ColorLabel/ColorLabel';
import s from './ColorList.module.scss';




export const ColorList = ({ colors, selectedColor, handleColorChange }) => {
  const { colorsList } = useSelector(state => state.colors);
  const currentColors = colorsList.filter(colorList => colors?.includes(colorList.id));
  
  return handleColorChange ? (
    <div className={s.colorList}>
      {colors?.map((id, i) => {
        const color = colorsList.find(color => color.id === id);
        return <ColorLabel 
          key={id}
          color={color}
          check={!i}
          selectedColor={selectedColor}
          handleColorChange={handleColorChange}
        />;
      })} 
    </div>
  ) : (
    <ul className={s.colorList}>
      {currentColors.map((color, i) => (
        <Color key={color.id} color={color?.code} check={!i} />
      ))}
    </ul>
  );
};
