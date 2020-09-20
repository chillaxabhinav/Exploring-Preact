import { h, Fragment } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<Fragment>
		<header class={style.header}>
			<h1>Preact App</h1>
			<nav>
				<Link activeClassName={style.active} href="/">Home</Link>
				<Link activeClassName={style.active} href="/profile">Me</Link>
				<Link activeClassName={style.active} href="/profile/john">John</Link>
				<Link href="/profile/profile-main">Profile Page </Link>
				<Link href="/myform">My Form</Link>
			</nav>
		</header>
	</Fragment>
);

export default Header;
