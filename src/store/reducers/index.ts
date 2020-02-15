import burgerBuilderReducer, { GeneralState } from './burgerBuilderReducer';
import orderReducer, { OrderState } from './orderReducer';
import { combineReducers } from 'redux';

export type ReduxState = GeneralState & OrderState;

export default combineReducers<ReduxState>({
  ...burgerBuilderReducer,
  ...orderReducer
});
