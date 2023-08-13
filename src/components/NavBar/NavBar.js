import React from "react";
import styles from "./NavBar.module.css";
import logoImage from "./logoham.jpeg";
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
						<h1 className={styles.heading}>Happy Hammies</h1>
					</div>
					<ul className={styles.navUl}>
						<li>
						<button className={styles.buttonGeneral}>
							<NavLink to='/about'>About</NavLink>
						</button>
						</li>
						<li>
						<button className={styles.buttonGeneral}>
							<NavLink to='/hamsters'>Adopt</NavLink>
						</button>
						</li>
						<li>
						<button className={styles.donateButton} type="submit">
							<NavLink to='/donate'>Donate</NavLink>
						</button>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
}
