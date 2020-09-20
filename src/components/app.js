import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';
import ProfileMain from '../routes/profile/profile-main';
import MyForm from '../routes/MyForm';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<Profile path="/profile/" user="me" />
			<Profile path="/profile/:user" />
			<ProfileMain path="/profile/profile-main" another="My Prop"/>
			<MyForm path="/myform" />
		</Router>
	</div>
)

export default App;
