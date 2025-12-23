import s from './ProductSize.module.scss';

export const ProductSize = ({size, selectedSize, handleSizeChange}) => {
  
  return (
    <div className={s.size }>
      <h3 className={s.title}>Размер</h3>
      <ul className={s.list}>
        {size?.map(si => 
          <li key={si}>
            <label className={s.item}>
              <input 
                type="checkbox" 
                className={s.input}
                name="size"
                value={si}
                checked={selectedSize === si}
                onChange={handleSizeChange}
              />
              <span className={s.check}>{si}</span>
            </label>
          </li>
        )}
      </ul>
    </div>
  );
};
