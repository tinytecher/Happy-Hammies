import React from "react";
import car from "./car.png";
import styles from "./Hero.module.css";

export default function Hero() {
	return (
		<>
			<div className={styles.mainContainer}>
				<h3 className={styles.title}>Donate Now</h3>
				<p className={styles.info}>
					For only £2.50 a month you<br></br> could feed 5
					hungry hamsters!<br></br>Nom Nom!
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
