import React from 'react';
import BurgerIngredient, { Types } from './BurgerIngredient/BurgerIngredient';
import './Burger.scss';

const Burger = () => {
  return (
    <div className="burger">
      <BurgerIngredient type={Types.BREAD_TOP} />
      <BurgerIngredient type={Types.CHEESE} />
      <BurgerIngredient type={Types.MEAT} />
      <BurgerIngredient type={Types.BREAD_BOTTOM} />
    </div>
  );
};

export default Burger;
