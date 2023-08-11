import React from "react";
import styles from "./About.module.css";

export default function About() {
	return (
		<>
			<section className={styles.aboutSection}>
				<h2 class={styles.aboutHeading}>
					About Happy Hammies Charity
				</h2>
                <img src="" alt="image of hamster"></img>
				<p class={styles.aboutContent}>
					The Happy Hammies Charity was founded with a
					simple yet powerful mission – to provide a second
					chance for hamsters in need. These tiny creatures,
					once vibrant and full of life, get trapped in
					environments that offered them nothing but
					suffering and neglect.
				</p>
				<p class={styles.aboutContent}>
					We believe that every hamster deserves a life filled with happiness. At Happy Hammies, we specialize in
					taking in injured, unwanted hamsters and giving
					them the chance to experience a life they truly
					deserve.
				</p>
				<p class={styles.aboutContent}>
					We are proud to be a beacon of hope for hamsters
					in need, and we invite you to join us on this
					heartwarming journey. Together, we can make a
					difference, one happy hammy at a time.
				</p>
			</section>
		</>
	);
}
