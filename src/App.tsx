import Navbar from "./pages/Navbar";
// import { decrement, increment } from "./redux/features/counter/counterSlice";

// import { useAppDispatch, useAppSelector } from "./redux/hook";

import { Outlet } from "react-router-dom";

function App() {
  // const dispatch = useAppDispatch();
  // const counter = useAppSelector((state) => state.counter);

  // const handleIncrement = (amount) => {
  //   dispatch(increment(amount));
  // };
  // const handleDecrement = (amount) => {
  //   dispatch(decrement(amount));
  // };

  return (
    <div>
      <Navbar></Navbar>

      <Outlet></Outlet>
    </div>
  );
}

export default App;
