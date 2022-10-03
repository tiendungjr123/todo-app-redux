import { createSelector } from 'reselect'
export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const todosRemainingSelector = createSelector(
   todoListSelector,
   filterStatusSelector,
   searchTextSelector,
   (todoList, status, searchText) => {
      return todoList.filter((todo) => {
         if (status === 'All') {
            return todo.name.includes(searchText)
         }

         return (status === 'Completed' ? todo.completed : !todo.completed)
      })
   }
)