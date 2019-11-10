import React, { FC } from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import './Burger.scss';
import { Ingredient, OuterIngredient } from '../../common/Types';

interface Props {
  ingredients: Ingredient[];
}

const Burger: FC<Props> = props => {
  let burgerIngredients = props.ingredients
    .map(i => {
      return [...Array(i.amount)].map((_, index) => (
        <BurgerIngredient key={i.type + index} type={i.type} />
      ));
    })
    .reduce((arr, el) => [...arr, ...el], []);

  return (
    <div className="burger">
      <BurgerIngredient type={OuterIngredient.BREAD_TOP} />
      {burgerIngredients.length !== 0 ? (
        burgerIngredients
      ) : (
        <p>Please start adding ingredients!</p>
      )}
      <BurgerIngredient type={OuterIngredient.BREAD_BOTTOM} />
    </div>
  );
};

export default Burger;
