import React from "react";
import car from "./car.png";
import styles from "./Hero.module.css";

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
					<button className={styles.buttonOne}>
						Donate
					</button>
				</div>
				<img
					src={car}
					className={styles.hamcar}
					alt='hamsters driving'
				></img>
			</div>
			<section className={styles.footer}>
				<h2>Contact Us</h2>
				<p>Email: happyhammies@example.com</p>
			</section>
		</>
	);
}
