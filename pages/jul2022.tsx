import type { NextPage } from "next";
import styles from "./jul.module.scss";
import Image from 'next/image'
import { useState } from "react";
import { ImageAnimation } from "./components/ImageAnimation/ImageAnimation";

const Jul2022: NextPage = () => {
  // const classNamePic1 = ´${styles.large} ${styles.polaroid} ${styles.img1}´;    
    //var valuesArray = JSON.parse(imgJson1);

    //const [extraClass, setExtraClass] = useState('');
    
  
    const imgJson2 = { "cards": [
      {
        "imageUrl": "/imgs/Jul2022/leo3.jpg",
        "text":"God Jul",
        "size": "large",
        "top": 0,
        "left": 30,
        "rotate": -10,
      },
      {
        "imageUrl": "/imgs/Jul2022/balett3.jpg",
        "text":"Inspiration",
        "size": "medium",
        "top": 350,
        "left": 495,
        "rotate": -20,
      }, 
      {
        "imageUrl": "/imgs/Jul2022/ellis.png",
        "text":"Ljustekniker",
        "size": "large",
        "top": 240,
        "left": 120,
        "rotate": 8,
      }, 
      {
        "imageUrl": "/imgs/Jul2022/jeaola_big.png",
        "text":"Stöd",
        "size": "medium",
        "top": 270,
        "left": 10,
        "rotate": -8,
      },
      {
        "imageUrl": "/imgs/Jul2022/lampa.jpg",
        "text":"Lampa",
        "size": "small",
        "top": 260,
        "left": 480,
        "rotate": -4
      }, 
      {
        "imageUrl": "/imgs/Jul2022/leg2.jpg",
        "text":"Stöd",
        "size": "medium",
        "top": 0,
        "left": 360,
        "rotate": -8,
      }, 
      {
        "imageUrl": "/imgs/Jul2022/Linnea2.jpg",
        "text":"Ballerina",
        "size": "large",
        "top": 0,
        "left": 680,
        "rotate": 18,
      },
      {
        "imageUrl": "/imgs/Jul2022/Linnea3.jpg",
        "text":"Smidig",
        "size": "small",
        "top": 240,
        "left": 400,
        "rotate": 10,
      },
      {
        "imageUrl": "/imgs/Jul2022/Linnea4.jpg",
        "text":"Håller i benet",
        "size": "medium",
        "top": 30,
        "left": 530,
        "rotate": -4,
      },
      {
        "imageUrl": "/imgs/Jul2022/ola.jpg",
        "text":"Stark man",
        "size": "small",
        "top": 440,
        "left": 0,
        "rotate": -13,
      },
      {
        "imageUrl": "/imgs/Jul2022/skate_black.jpg",
        "text":"Skridskor",
        "size": "small",
        "top": 350,
        "left": 605,
        "rotate": -7,
      },
      {
        "imageUrl": "/imgs/Jul2022/skate_white.jpg",
        "text":"Skridsko",
        "size": "small",
        "top": 320,
        "left": 680,
        "rotate": 18,
      },
      {
        "imageUrl": "/imgs/Jul2022/leg.jpg",
        "text":"Ben",
        "size": "small",
        "top": 30,
        "left": 0,
        "rotate": 8,
      }, 
      {
        "imageUrl": "/imgs/Jul2022/linnis_ola_big.png",
        "text":"Ben upp",
        "size": "medium",
        "top": 400,
        "left": 700,
        "rotate": -10,
      },
      {
        "imageUrl": "/imgs/Jul2022/leo.jpg",
        "text":"Skylt",
        "size": "medium",
        "top": 250,
        "left": 850,
        "rotate": 0,
      },
      {
        "imageUrl": "/imgs/Jul2022/balett1.jpg",
        "text":"Inspiration",
        "size": "small",
        "top": 160,
        "left": 990,
        "rotate": 8
      },
      {
        "imageUrl": "/imgs/Jul2022/balett4.jpg",
        "text":"Inspiration",
        "size": "small",
        "top": 0,
        "left": 920,
        "rotate": 8,
      }, 
      {
        "imageUrl": "/imgs/Jul2022/dress.jpg",
        "text":"Tutu",
        "size": "small",
        "top": 460,
        "left": 330,
        "rotate": 2,
      }, 
      {
        "imageUrl": "/imgs/Jul2022/balett5.jpg",
        "text":"Inspiration",
        "size": "small",
        "top": 40,
        "left": 280,
        "rotate": -1,
      }, 
      {
        "imageUrl": "/imgs/Jul2022/bg.jpg",
        "text":"Scen",
        "size": "small",
        "top": 480,
        "left": 880,
        "rotate": 4,
      }, 
      {
        "imageUrl": "/imgs/Jul2022/balett2.jpg",
        "text":"Inspiration",
        "size": "small",
        "top": 500,
        "left": 400,
        "rotate": 18,
      },
    ]};

  return (
    <div className={styles.jul}>

      <div className={styles.header}>
        <h1>God Jul</h1>
      </div>

      <div className={styles.photoAlbum}>
        <h1><span>The making of 2022...</span></h1>
        
        {imgJson2.cards.map((card, index) => {
          return <ImageAnimation key={card.imageUrl} imageUrl={card.imageUrl} size={card.size} text={card.text} xpos={card.left} ypos={card.top} rotate={card.rotate}  />
        })}
      </div>

      <h4 className={styles.copyright}>&copy; Lillskrot & Jag</h4>
    </div>
	
  );
};

export default Jul2022;
