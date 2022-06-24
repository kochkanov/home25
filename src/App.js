import "./App.css";
import { useSelector } from "react-redux";
import { Form } from "./components/Form";
import { Header } from "./components/layout/Header";
import LinearProgress from "@mui/material/LinearProgress";
import { useDispatch } from "react-redux";
import { uiActions } from "./store/reducers/uiSlice";
import { useEffect, useState } from "react";
import { authEmailPassword } from "./store/reducers/authSlice";
import Notification from './UI/Notification';

const App = () => {
const[isInitial,setIsInitial]=useState(true)
  const dispatch = useDispatch();
  const { cartIsVisible } = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.cart.notification)
  const spinner = useSelector((state) => state.cart.spinner);
  const data = useSelector((state)=>state.user)
  console.log(data);

  useEffect(() => {
		let timer
		if (notification) {
			setTimeout(() => {
				dispatch(uiActions.hideNotification())
			}, 2000)
		}
		return () => {
			clearTimeout(timer)
		}
	}, [notification, dispatch])

	useEffect(() => {
		if (isInitial) {
			setIsInitial(false)
			return
		}
		dispatch(authEmailPassword(data))
	}, [data, dispatch])



  const showSpinner = () => {
    dispatch(uiActions.toggleSpinner());
    setTimeout(() => {
      dispatch(uiActions.toggle());
      dispatch(uiActions.toggleSpinner());
    }, 2000);
  };


  return (
    <div className="App">
      <>
      {notification && (
				<Notification
					status={notification.status}
					title={notification.title}
					message={notification.message}
				/>
			)}
      
      {cartIsVisible ? (
        <Header onShow={showSpinner} />
      ) : (
        <Form onShow={showSpinner} />
      )}
      {spinner && <LinearProgress />}
      </>
    </div>
  );
};

export default App;
