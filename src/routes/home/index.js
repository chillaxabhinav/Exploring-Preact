import { h } from 'preact';
import style from './style.css';
import {route} from 'preact-router';

const Home = () => {

	return (
		<div class={style.home}>
			<h1>Home</h1>
			<p>This is the Home component.</p>
			<button onClick={() => route('/profile/profile-main?yo=abhinav')}>Click to go to profile-main</button>
		</div>
	)
};

export default Home;
