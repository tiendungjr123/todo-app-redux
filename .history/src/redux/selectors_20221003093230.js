import {createSelector} from 'reselect'
export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;