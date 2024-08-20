import { configureStore, createSlice, PayloadAction, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist'

 export interface ITask {
  id: string;
  content: string;
  finished: boolean;
}

interface TasksState {
  tasks: ITask[];
}

const initialState: TasksState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<ITask[]>) => {
      state.tasks = action.payload;
    }
  },
});

export const { setTasks } = tasksSlice.actions;

const persistConfig = {
  key:'root',
  version: 1,
  storage
}

const reducer = combineReducers({
  tasks: tasksSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
  reducer: persistedReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
