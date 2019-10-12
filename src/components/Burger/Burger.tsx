import React from 'react';
import BurgerIngredient, {
  IngredientTypes
} from './BurgerIngredient/BurgerIngredient';
import './Burger.scss';

interface Props {
  ingredients: {
    meat?: number;
    cheese?: number;
    salad?: number;
    bacon?: number;
  };
}

const Burger = (props: Props) => {
  let burgerIngredients = Object.entries(props.ingredients)
    .map(arr => {
      return [...Array(Number(arr[1]))].map((_, i) => {
        return <BurgerIngredient key={arr[0] + i} type={arr[0]} />;
      });
    })
    .reduce((arr, el) => [...arr, ...el], []);

  return (
    <div className="burger">
      <BurgerIngredient type={IngredientTypes.BREAD_TOP} />
      {burgerIngredients.length !== 0 ? (
        burgerIngredients
      ) : (
        <p>Please start adding ingredients!</p>
      )}
      <BurgerIngredient type={IngredientTypes.BREAD_BOTTOM} />
    </div>
  );
};

export default Burger;
