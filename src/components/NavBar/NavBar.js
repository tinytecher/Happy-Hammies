import React from "react";
import styles from "./NavBar.module.css";
import logoImage from "./../../images/logoham.jpeg";
import { NavLink } from "react-router-dom";

export default function NavBar() {
	return (
		<>
			<div>
				<nav className={styles.navbarContainer}>
					<div className={styles.leftNav}>
						<NavLink to='/'>
							<img
								src={logoImage}
								className={styles.hamsterLogo}
								alt='hamster'
							></img>
						</NavLink>
						<h1>Happy Hammies</h1>
					</div>
					<ul className={styles.navUl}>
						<li>
							<NavLink to='/about'>About</NavLink>
						</li>
						<li>
							<NavLink to='/hamsters'>Hamsters</NavLink>
						</li>
						<li>
							<NavLink to='/donate'>Donate</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
}
