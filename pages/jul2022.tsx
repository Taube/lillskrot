import type { NextPage } from "next";
import styles from "./jul.module.scss";
import Image from 'next/image'
import img1 from './/Images/Linnea1.jpg';
import img2 from './/Images/Linnea2.jpg';
import img3 from './/Images/jeaben.jpg';
import img4 from './/Images/balett.jpg';
import img5 from './/Images/balettpar.jpg';
import img6 from './/Images/Ellis.jpg';
import img7 from './/Images/swanlake.jpg';
import img8 from './/Images/linneaola.jpg';
import img9 from './/Images/bgschen.jpg';
import img10 from './/Images/Leo.jpg';
import img11 from './/Images/skate.png';
import img12 from './/Images/skridskor.jpg';

import imgA from './/Images/skate.png';

const Jul2022: NextPage = () => {
  // const classNamePic1 = ´${styles.large} ${styles.polaroid} ${styles.img1}´;

  return (
    <div className={styles.jul}>
      <h1>God Jul</h1><br/>
      <div className={styles.photoAlbum}>
			<h1><span>The making of 2022...</span></h1>
      <a href="htts://www.lillskrot.se/" className={`${styles.large} ${styles.polaroid} ${styles.img1}`}>
        <Image src={img1} alt="" />
        xxx
      </a>
      <a href="htts://www.lillskrot.se/" className={`${styles.small} ${styles.polaroid} ${styles.img3}`}>
        <Image src={img3} alt="" />
        xxx
      </a>
      <a href="htts://www.lillskrot.se/" className={`${styles.medium} ${styles.polaroid} ${styles.img4}`}>
        <Image src={img4} alt="" />
        xxx
      </a>
      <a href="htts://www.lillskrot.se/" className={`${styles.large} ${styles.polaroid} ${styles.img10}`}>
        <Image src={img10} alt="" />
        xxx
      </a>
      <a href="htts://www.lillskrot.se/" className={`${styles.polaroid} ${styles.img5}`}>
        <Image src={img5} alt="" />
        xxx
      </a>
      <a href="htts://www.lillskrot.se/" className={`${styles.medium} ${styles.polaroid} ${styles.img6}`}>
        <Image src={img6} alt="" />
        xxx
      </a>
      <a href="htts://www.lillskrot.se/" className={`${styles.polaroid} ${styles.img7}`}>
        <Image src={img7} alt="" />
        xxx
      </a>
      <a href="htts://www.lillskrot.se/" className={`${styles.polaroid} ${styles.img8}`}>
        <Image src={img8} alt="" />
        xxx
      </a>
      <a href="htts://www.lillskrot.se/" className={`${styles.medium} ${styles.polaroid} ${styles.img9}`}>
        <Image src={img9} alt="" />
        xxx
      </a>
      <a href="htts://www.lillskrot.se/" className={`${styles.polaroid} ${styles.img2}`}>
        <Image src={img2} alt="" />
        xxx
      </a>
      <a href="htts://www.lillskrot.se/" className={`${styles.polaroid} ${styles.imgA}`}>
        <Image src={imgA} alt="" />
        xxx
      </a>
      
      <a href="htts://www.lillskrot.se/" className={`${styles.small} ${styles.polaroid} ${styles.img11}`}>
        <Image src={img11} alt="" />
        xxx
      </a>
      <a href="htts://www.lillskrot.se/" className={`${styles.small} ${styles.polaroid} ${styles.img12}`}>
        <Image src={img12} alt="" />
        xxx
      </a>
      {/* <a href="htts://www.lillskrot.se/" className={`${styles.small} ${styles.polaroid} ${styles.img13}`}>
        <Image src={img8} alt="" />
        xxx
      </a>
      <a href="htts://www.lillskrot.se/" className={`${styles.small} ${styles.polaroid} ${styles.img14}`}>
        <Image src={img8} alt="" />
        xxx
      </a>
      <a href="htts://www.lillskrot.se/" className={`${styles.polaroid} ${styles.img11}`}>
        <Image src={img8} alt="" />
        xxx
      </a> */}
    </div>

    <h4 className={styles.copyright}>&copy; Lillskrot & Jag</h4>
    </div>
	
  );
};

export default Jul2022;
