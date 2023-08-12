import React from "react";
import HamCarImage from "../../images/hamcar.png";
import styles from "./Hero.module.css"

export default function Hero() {
	return (
		<>
			<div className={styles.mainContainer}>
				<h3 className={styles.title}>Donate Now</h3>
				<p className={styles.info}>
					Did you know that for only £1.50 a month you could
					feed 5 hamsters,<br></br> 3 sunflower seeds
					everyday! Nom Nom!
				</p>
				<div className={styles.buttonContainer}>
					<button className={styles.buttonOne}>Donate</button>
				</div>
				<img
					src={HamCarImage}
					className={styles.hamcar}
					alt='hamsters driving'
				></img>
			</div>
		</>
	);
}
