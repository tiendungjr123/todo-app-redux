
import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
   name: 'filters',
   initialState: {
      search: '',
      status: 'All',
      priorities: [],
   },
   reducers: {
      searchFilterChange: (state,action) =>{
         state.search = action.payload
      },
      priorityFilterChange: (state,action) =>{
         state.status = action.payload
      },
      statusFilterChange: (state,action) =>{
         state.priorities = action.payload
      },
   }
})