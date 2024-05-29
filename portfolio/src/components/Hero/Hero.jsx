
import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Allan</h1>
                <p className={styles.description}>
                    I'm a full-stack developer with 3+ years of experience using React, React-Native, Angular, Kotlin and
                    NodeJS accompanied with several Database and cloud technologies, such as SQL, MongoDB and AWS.
                    Reach out if you'd like to know more!
                </p>
                <a href="mailto:a.bifom2@gmail.com" className={styles.contactBtn}>
                    Contact Me
                </a>
            </div>
            <img
                src={getImageUrl("hero/heroImage4.png")}
                alt="Image of me"
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};
