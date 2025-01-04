import { createSlice } from "@reduxjs/toolkit";
import { IInitialState, TRootState } from "../../Interfaces";

const initialState: IInitialState = {
  tasks: [
    {
      id: "sax",
      title: "Initialize Frontend",
      description: "Create Homepage & Routing",
      dueDate: new Date("230232312"),
      isCompleted: false,
      priority: "High",
    },
    {
      id: "saxs",
      title: "Initialize Frontend",
      description: "Create Homepage & Routing",
      dueDate: new Date("230232312"),
      isCompleted: false,
      priority: "High",
    },
    {
      id: "saxssa",
      title: "Initialize Frontend",
      description: "Create Homepage & Routing",
      dueDate: new Date("230232312"),
      isCompleted: false,
      priority: "High",
    },
  ],
  filter: "All",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTask = (state: TRootState) => {
  return state.todo.tasks;
};
export const selectFilter = (state: TRootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
