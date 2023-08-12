import React from "react";
import styles from "./Donate.module.css";
import hamster from "./lewis.jpg";

export default function Donate() {
	return (
		<>
			<section className={styles.donateSection}>
				<h2 className={styles.donateHeading}>
					Thanks for Helping!
				</h2>
				<img
					src={hamster}
					className={styles.donateImage}
					alt='image of hamster'
				></img>
				<p className={styles.paragraph}>
					Join us in making a difference for our adorable
					furry friends! Your generous contribution can have
					a tremendous impact on the lives of these tiny
					wonders. 
                    </p>
                    <p  className={styles.paragraph}>
                    For just £5, you can provide a week's
					worth of nourishing meals, ensuring our hamster
					pals stay happy and healthy.
                    </p>
                    <p className={styles.paragraph}>
					A heart warming gift of $20 can go towards vital medical care, ensuring
					that every hamster receives the attention they
					deserve.
                    </p>
                    <p className={styles.paragraph}>
                    Your support means more than words can express – it's a lifeline for these lovable
					creatures. Partner with us today and let's create
					a world where every hamster gets a chance to
					thrive and flourish!
                    </p>
				
				<button className={styles.donateButton} href='#'>
					Donate Now
				</button>
			</section>
		</>
	);
}
