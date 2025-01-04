import { store } from "./store"

export interface ITask {
    id: string,
    title: string,
    description: string,
    dueDate: Date,
    isCompleted: false,
    priority: "High" | "Medium" | "Low",
}
export interface IInitialState {
    tasks: ITask[],
    filter: "All" | "High" | "Medium" | "Low",
}



export type TRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch