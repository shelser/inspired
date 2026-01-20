import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router";

import { fetchGender } from "../../features/goodsSlice";
import { fetchCategory } from "../../features/goodsSlice";
import { setActiveGender } from "../../features/navigationSlice";
import { Banner } from "../Banner/Banner";
import { Goods } from "../Goods/Goods";



export const MainPage = () => {
  const { gender, category } = useParams();
  const dispatch = useDispatch();
  const {activeGender, categories} = useSelector(state => state.navigation);
  const genderData = categories[activeGender];

  const categoryData = genderData?.list.find(item => item.slug === category);

  useEffect(() => {
    dispatch(setActiveGender(gender));
  },[gender, dispatch]);

  useEffect(() => {
    if (gender && category) {
      dispatch(fetchCategory({ gender, category }));
      return;
    }
    if (gender) {
      dispatch(fetchGender(gender));
      return;
    }
    
  },[gender, category, dispatch]);

    
  return (
    <>
      {!category && <Banner data={genderData?.banner} />}
      <Goods
        title ={categoryData?.title}
      />
    </>
  );
    
};
