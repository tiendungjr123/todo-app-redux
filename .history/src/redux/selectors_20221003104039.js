import { createSelector } from 'reselect'
export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritiesSelector = (state) => state.filters.priorities;
export const todosRemainingSelector = createSelector(
   todoListSelector,
   filterStatusSelector,
   searchTextSelector,
   filterPrioritiesSelector,
   (todoList, status, searchText, priorities) => {
      return todoList.filter((todo) => {
         if (status === 'All') {
            return priorities.length
               ? todo.name.includes(searchText) && priorities.includes(todo.priority)
               : todo.name.includes(searchText)
         }

         return (status === 'Completed' ? todo.completed : !todo.completed)
      })
   }
)