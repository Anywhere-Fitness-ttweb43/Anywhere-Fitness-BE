import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import GetUserInfo from "./components/UserInfo";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./components/Register";
import HomePage from './components/HomePage'

function App() {
	return (
		<div className="App" style={ {padding: 0, margin: 0} }>
			<Route exact path="/" component={HomePage} />
			<Route exact path="/login" component={Login} />
			<ProtectedRoute exact path="/userinfo" component={GetUserInfo} />
			<Route exact path='/register' component={Register}/>
				
			
		</div>
	);
}

export default App;
