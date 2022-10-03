// import { createStore } from 'redux';
// import rootReducer from './reducer';
// import { composeWithDevTools } from 'redux-devtools-extension';
// const composedEnhancers = composeWithDevTools();
// const store = createStore(rootReducer, composedEnhancers);

import todoListReducer from '../components/TodoList/TodosSlice';
import filtersReducer from '../components/Filters/FiltersSlice';
import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
   filters: filtersReducer,
   todoList: todoListReducer,
})
export default store;