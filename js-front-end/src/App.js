import React, { useReducer } from "react";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import GetUserInfo from "./components/UserInfo";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./components/Register";
import HomePage from './components/HomePage'
import AllClasses from './components/AllClasses'
import Search from './components/Search'

import reducer, { initialState } from './reducers/index';
import { classCreate, classUpdate, classDelete } from './actions/index';

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div className="App" style={ {padding: 0, margin: 0} }>
			<Route exact path="/" component={HomePage} />
			<Route exact path="/all" component={AllClasses} state={state} />
			<Route exact path="/search" component={Search} />
			<Route exact path="/login" component={Login} />
			<ProtectedRoute exact path="/userinfo" component={GetUserInfo} />
			<Route exact path='/register' component={Register}/>
				
			
		</div>
	);
}

export default App;
