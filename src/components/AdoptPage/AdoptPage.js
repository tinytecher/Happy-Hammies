import React from "react";
import { HamstersData } from "../../data/HamstersData.js";
import { Link } from "react-router-dom";
import styles from "./AdoptPage.module.css";

export default function HamstersPage() {
	return (
		<>
			<div className={styles.container}>
				<ul className={styles.hamsterList}>
					{Object.entries(HamstersData).map(
						([id, { name, description, image }]) => (
							<li key={id} className={styles.hamsterItem}>
								<h3>{name}</h3>
								<img
									className={styles.hamsterImage}
									src={image}
									alt='hamster'
								/>
								<p>{description}</p>
								<button className={styles.buttonOne}>
									Adopt {name}
								</button>
							</li>
						)
					)}
				</ul>
			</div>
		</>
	);
}
