export enum OuterIngredient {
  BREAD_BOTTOM = 'bread-bottom',
  BREAD_TOP = 'bread-top'
}

export enum InnerIngredient {
  MEAT = 'meat',
  CHEESE = 'cheese',
  SALAD = 'salad',
  BACON = 'bacon'
}

export interface Ingredient {
  type: InnerIngredient;
  amount: number;
}

export enum ButtonType {
  SUCCESS,
  DANGER
}

export enum InputType {
  INPUT = 'input',
  TEXTAREA = 'textarea',
  SELECT = 'select'
}
