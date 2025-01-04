import { configureStore } from "@reduxjs/toolkit"
import counterReducer from './features/counter/counterSlice';
// import logger from "./middlewares/logger";
import taskSlice from './features/task/taskSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: taskSlice,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

