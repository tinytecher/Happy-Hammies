import React from "react";
import { HamstersData } from "../../data/HamstersData";
import { Link } from "react-router-dom";
import styles from "./AdoptPage.module.css";

export default function HamstersPage() {
	return (
		<>
			<div className={styles.container}>
				<ul className={styles.hamsterList}>
					{Object.entries(HamstersData).map(
						([id, { name, description }]) => (
							<li key={id} className={styles.hamsterItem}>
								<Link to={`/hamsters/${id}`}>
									<h3>{name}</h3>
									<img
										className={styles.hamsters}
										alt='hamsters'
									></img>
									<p>{description}</p>
								</Link>
							</li>
						)
					)}
				</ul>
			</div>
		</>
	);
}

{
	/* {HamstersData.map((hamster) => {
		return (
			<div>
				<h2>{hamster.name}</h2>
				<p>{hamster.description}</p>
				<img
			
					width='50'
					height='50'
					alt='hamsters'
				/>
			</div>
		);
	})} */
}
