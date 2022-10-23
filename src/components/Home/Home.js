import React from "react";
import "./style.css";
import HamCarImage from "../../Images/hamcar.png";
import logoImage from "../../Images/logoham.jpeg";
import { NavLink } from "react-router-dom";

export default function Home() {
	return (
		<>
			<div>
				<nav className='navbar-container'>
					<div className='left-nav'>
						<img
							src={logoImage}
							className='hamster-logo'
							alt='hamster'
						></img>
						<h1>Happy Hammies</h1>
					</div>
					<ul className='nav-ul'>
						<li className='nav-li'>
							<NavLink to='/'>Home</NavLink>
						</li>
						<li className='nav-li'>
							<NavLink to='/about'>About</NavLink>
						</li>
						<li className='nav-li'>
							<NavLink to='/hamsters'>Hamsters</NavLink>
						</li>
						<li className='nav-li'>
							<NavLink to='/todo'>Todo's</NavLink>
						</li>
					</ul>
				</nav>
			</div>

			<div className='call-to-container'>
				<h3 className='call-to-title'>Donate Now</h3>
				<p className='call-to-info'>
					Did you know that for only £1.50 a month you could
					feed 5 hamsters,<br></br> 3 sunflower seeds
					everyday! Nom Nom!
				</p>
				<div className='button-one-container'>
					<button className='button-one'>Donate</button>
				</div>
				<img
					src={HamCarImage}
					className='hamcar'
					alt='hamsters driving'
				></img>
			</div>
		</>
	);
}
