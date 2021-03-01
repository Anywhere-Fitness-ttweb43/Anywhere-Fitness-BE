import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import GetUserInfo from "./components/UserInfo";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";
import Register from "./components/Register";

function App() {
	return (
		<div className="App">
			<Route exact path="/" component={Login} />
			<ProtectedRoute exact path="/userinfo" component={GetUserInfo} />
			<Route exact path='/register' component={Register}/>
				
			
		</div>
	);
}

export default App;
