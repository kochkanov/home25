import "./App.css";
import { useSelector } from "react-redux";
import { Form } from "./components/Form";
import { Header } from "./components/layout/Header";
import LinearProgress from "@mui/material/LinearProgress";
import { useDispatch } from "react-redux";
import { uiActions } from "./store/reducers/uiSlice";

const App = () => {
  const dispatch = useDispatch();
  const { cartIsVisible } = useSelector((state) => state.cart);

  const spinner = useSelector((state) => state.cart.spinner);

  const showSpinner = () => {
    dispatch(uiActions.toggleSpinner());
    setTimeout(() => {
      dispatch(uiActions.toggle());
      dispatch(uiActions.toggleSpinner());
    }, 2000);
  };

  console.log(spinner);

  return (
    <div className="App">
      {cartIsVisible ? (
        <Header onShow={showSpinner} />
      ) : (
        <Form onShow={showSpinner} />
      )}
      {spinner && <LinearProgress />}
    </div>
  );
};

export default App;
