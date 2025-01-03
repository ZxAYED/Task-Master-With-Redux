import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, TRootState } from "./store";



export const useAppSelector = useSelector.withTypes<TRootState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()