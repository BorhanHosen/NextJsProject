import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Degital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.imgTitle}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            nulla iste distinctio, porro illo facere, itaque natus laborum
            quidem asperiores rerum magnam neque dolorem suscipit reiciendis
            animi eaque voluptates. Facere maxime quis sequi, dolorum officia
            totam doloribus repellendus, cupiditate corporis adipisci quas,
            <br />
            <br />
            fuga ea iste libero odio repellendus. Odio iure molestias sequi,
            rerum harum accusantium, quibusdam rem dolorem ea quae expedita nemo
            necessitatibus amet veritatis, ipsum quia. Qui, magni debitis. Eaque
            laboriosam expedita dolorem a unde amet quibusdam.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            nulla iste distinctio, porro illo facere, itaque natus laborum
            quidem asperiores rerum magnam neque dolorem suscipit reiciendis
            animi eaque voluptates. Facere maxime quis sequi, dolorum officia
            totam doloribus repellendus,
            <br />
            <br />
            - Creative Illustrations
            <br />
            <br />
            - Dynamic Website
            <br />
            <br />- Fast and handy Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
