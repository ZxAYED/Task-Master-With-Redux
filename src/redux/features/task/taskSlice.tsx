import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { IInitialState, TRootState } from "../../Interfaces";
import { ITask } from "./../../Interfaces";

const initialState: IInitialState = {
  tasks: [],
  filter: "All",
};
type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: DraftTask): ITask => {
  return { id: nanoid(), isCompleted: false, ...taskData };
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      // const taskData = { ...action.payload, id:nanoid(), isCompleted: true };
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
  },
});

export const { addTask } = taskSlice.actions;

export const selectTask = (state: TRootState) => {
  return state.todo.tasks;
};
export const selectFilter = (state: TRootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
