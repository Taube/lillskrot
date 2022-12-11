import type { NextPage } from "next";
import styles from "./jul.module.scss";
import Image from 'next/image'
import { useEffect, useState } from "react";
import ImageAnimation from "./components/ImageAnimation/ImageAnimation";

const Jul2022: NextPage = () => {
    
  const imgJson2 = { "cards": [
      //     {
  //       "imageUrl": "/imgs/Jul2022/leo3.jpg",
  //       "text":"God Jul",
  //       "size": "large",
  //       "top": 0,
  //       "left": 30,
  //       "rotate": -10,
  //     },
       {
         "imageUrl": "/imgs/Jul2022/leo3.jpg",
         "text":"God Jul",
         "size": "large",
         "top": 0,
         "left": 4,
         "rotate": -9,
       },
         //     {
  //       "imageUrl": "/imgs/Jul2022/balett3.jpg",
  //       "text":"Inspiration",
  //       "size": "medium",
  //       "top": 350,
  //       "left": 495,
  //       "rotate": -20,
  //     }, 
       {
        "imageUrl": "/imgs/Jul2022/balett3.jpg",
        "text":"Inspiration",
        "size": "medium",
        "top": 350,
        "left": 46,
        "rotate": -20,
      }, 
  //     {
  //       "imageUrl": "/imgs/Jul2022/ellis.png",
  //       "text":"Ljustekniker",
  //       "size": "large",
  //       "top": 240,
  //       "left": 120,
  //       "rotate": 8,
  //     }, 
        {
        "imageUrl": "/imgs/Jul2022/ellis.png",
        "text":"Ljustekniker",
        "size": "large",
        "top": 240,
        "left": 10,
        "rotate": 8,
      }, 
  //     {
  //       "imageUrl": "/imgs/Jul2022/jeaola_big.png",
  //       "text":"Stöd",
  //       "size": "medium",
  //       "top": 270,
  //       "left": 10,
  //       "rotate": -8,
  //     },
        {
        "imageUrl": "/imgs/Jul2022/jeaola_big.png",
        "text":"Stöd",
        "size": "medium",
        "top": 270,
        "left": 3,
        "rotate": -8,
      },
  //     {
  //       "imageUrl": "/imgs/Jul2022/lampa.jpg",
  //       "text":"Lampa",
  //       "size": "small",
  //       "top": 260,
  //       "left": 480,
  //       "rotate": -4
  //     }, 
      {
        "imageUrl": "/imgs/Jul2022/lampa.jpg",
        "text":"Lampa",
        "size": "small",
        "top": 260,
        "left": 45,
        "rotate": -4
      }, 
  //     {
  //       "imageUrl": "/imgs/Jul2022/leg2.jpg",
  //       "text":"Stöd",
  //       "size": "medium",
  //       "top": 0,
  //       "left": 360,
  //       "rotate": -8,
  //     }, 
      {
        "imageUrl": "/imgs/Jul2022/leg2.jpg",
        "text":"Stöd",
        "size": "medium",
        "top": 0,
        "left": 30,
        "rotate": -8,
      }, 
  //     {
  //       "imageUrl": "/imgs/Jul2022/linnea2.jpg",
  //       "text":"Ballerina",
  //       "size": "large",
  //       "top": 0,
  //       "left": 700,
  //       "rotate": 18,
  //     },
        {
        "imageUrl": "/imgs/Jul2022/linnea2.jpg",
        "text":"Ballerina",
        "size": "large",
        "top": 0,
        "left": 55,
        "rotate": 14,
      },
  //     {
  //       "imageUrl": "/imgs/Jul2022/linnea3.jpg",
  //       "text":"Smidig",
  //       "size": "small",
  //       "top": 240,
  //       "left": 400,
  //       "rotate": 10,
  //     },
        {
        "imageUrl": "/imgs/Jul2022/linnea3.jpg",
        "text":"Smidig",
        "size": "small",
        "top": 240,
        "left": 37,
        "rotate": 10,
      },
  //     {
  //       "imageUrl": "/imgs/Jul2022/linnea4.jpg",
  //       "text":"Håller i benet",
  //       "size": "medium",
  //       "top": 30,
  //       "left": 530,
  //       "rotate": -4,
  //     },
        {
        "imageUrl": "/imgs/Jul2022/linnea4.jpg",
        "text":"Håller i benet",
        "size": "medium",
        "top": 30,
        "left": 50,
        "rotate": -4,
      },
  //     {
  //       "imageUrl": "/imgs/Jul2022/ola.jpg",
  //       "text":"Stark man",
  //       "size": "small",
  //       "top": 440,
  //       "left": 0,
  //       "rotate": -13,
  //     },
        {
        "imageUrl": "/imgs/Jul2022/ola.jpg",
        "text":"Stark man",
        "size": "small",
        "top": 440,
        "left": 3,
        "rotate": -13,
      },
  //     {
  //       "imageUrl": "/imgs/Jul2022/skate_black.jpg",
  //       "text":"Skridskor",
  //       "size": "small",
  //       "top": 350,
  //       "left": 605,
  //       "rotate": -7,
  //     },
        {
        "imageUrl": "/imgs/Jul2022/skate_black.jpg",
        "text":"Skridskor",
        "size": "small",
        "top": 350,
        "left": 57,
        "rotate": -7,
      },
  //     {
  //       "imageUrl": "/imgs/Jul2022/skate_white.jpg",
  //       "text":"Skridsko",
  //       "size": "small",
  //       "top": 320,
  //       "left": 680,
  //       "rotate": 18,
  //     },
        {
        "imageUrl": "/imgs/Jul2022/skate_white.jpg",
        "text":"Skridsko",
        "size": "small",
        "top": 320,
        "left": 64,
        "rotate": 18,
      },
  //     {
  //       "imageUrl": "/imgs/Jul2022/leg.jpg",
  //       "text":"Ben",
  //       "size": "small",
  //       "top": 30,
  //       "left": 0,
  //       "rotate": 8,
  //     }, 
        {
        "imageUrl": "/imgs/Jul2022/leg.jpg",
        "text":"Ben",
        "size": "small",
        "top": 30,
        "left": 2,
        "rotate": 8,
      }, 
  //     {
  //       "imageUrl": "/imgs/Jul2022/linnis_ola_big.png",
  //       "text":"Ben upp",
  //       "size": "medium",
  //       "top": 400,
  //       "left": 700,
  //       "rotate": -10,
  //     },
        {
        "imageUrl": "/imgs/Jul2022/linnis_ola_big.png",
        "text":"Ben upp",
        "size": "medium",
        "top": 400,
        "left": 65,
        "rotate": -10,
      },
  //     {
  //       "imageUrl": "/imgs/Jul2022/leo.jpg",
  //       "text":"Skylt",
  //       "size": "medium",
  //       "top": 250,
  //       "left": 870,
  //       "rotate": 0,
  //     },
        {
        "imageUrl": "/imgs/Jul2022/leo.jpg",
        "text":"Skylt",
        "size": "medium",
        "top": 250,
        "left": 72,
        "rotate": 0,
      },
  //     {
  //       "imageUrl": "/imgs/Jul2022/balett1.jpg",
  //       "text":"Inspiration",
  //       "size": "small",
  //       "top": 160,
  //       "left": 1000,
  //       "rotate": 8
  //     },
        {
        "imageUrl": "/imgs/Jul2022/balett1.jpg",
        "text":"Inspiration",
        "size": "small",
        "top": 160,
        "left": 82,
        "rotate": 8
      },
  //     {
  //       "imageUrl": "/imgs/Jul2022/balett4.jpg",
  //       "text":"Inspiration",
  //       "size": "small",
  //       "top": 0,
  //       "left": 940,
  //       "rotate": 8,
  //     }, 
        {
        "imageUrl": "/imgs/Jul2022/balett4.jpg",
        "text":"Inspiration",
        "size": "small",
        "top": 0,
        "left": 82,
        "rotate": 8,
      }, 
  //     {
  //       "imageUrl": "/imgs/Jul2022/dress.jpg",
  //       "text":"Tutu",
  //       "size": "small",
  //       "top": 460,
  //       "left": 330,
  //       "rotate": 2,
  //     }, 
        {
        "imageUrl": "/imgs/Jul2022/dress.jpg",
        "text":"Tutu",
        "size": "small",
        "top": 460,
        "left": 29,
        "rotate": 2,
      }, 
  //     {
  //       "imageUrl": "/imgs/Jul2022/balett5.jpg",
  //       "text":"Inspiration",
  //       "size": "small",
  //       "top": 40,
  //       "left": 280,
  //       "rotate": -1,
  //     }, 
        {
        "imageUrl": "/imgs/Jul2022/balett5.jpg",
        "text":"Inspiration",
        "size": "small",
        "top": 40,
        "left": 24,
        "rotate": -1,
      }, 
  //     {
  //       "imageUrl": "/imgs/Jul2022/bg.jpg",
  //       "text":"Scen",
  //       "size": "small",
  //       "top": 480,
  //       "left": 880,
  //       "rotate": 4,
  //     }, 
        {
        "imageUrl": "/imgs/Jul2022/bg.jpg",
        "text":"Scen",
        "size": "small",
        "top": 480,
        "left": 84,
        "rotate": 4,
      }, 
  //     {
  //       "imageUrl": "/imgs/Jul2022/balett2.jpg",
  //       "text":"Inspiration",
  //       "size": "small",
  //       "top": 500,
  //       "left": 400,
  //       "rotate": 17,
  //     },
        {
        "imageUrl": "/imgs/Jul2022/balett2.jpg",
        "text":"Inspiration",
        "size": "small",
        "top": 500,
        "left": 36,
        "rotate": 17,
      },
     ]};

     const [dimensions, setDimensions] = useState({
      height: 0,
      width: 0
    });


  useEffect(() => {
      setDimensions({
          height: window.innerHeight,
          width: window.innerWidth
  });

  function handleResize() {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }
  window.addEventListener("resize", handleResize);
}, []);

console.log("dimensions.width", dimensions.width);



  return (
    <div className={styles.jul}>

      <div className={styles.header}>
        <h1>God Jul</h1>
      </div>

      <div className={styles.photoAlbum}>
        <h1><span>The making of 2022...</span></h1>
        
        {dimensions.width > 0 && imgJson2.cards.map((card, index) => {
          let cardSize = card.size;
          if (dimensions.width < 700)
          {
            console.log("cardSize", dimensions.width);
            if (card.size === "large")
            {
              cardSize = "largemobile";
            }
            else if (card.size == "medium")
            {
              cardSize = "small"
            }
            else if (card.size == "small")
            {
              cardSize = "tiny"
            }
          }
          console.log("cardSize", cardSize, card.imageUrl);
          return <ImageAnimation width={dimensions.width} key={card.imageUrl} imageUrl={card.imageUrl} size={cardSize} text={card.text} xpos={card.left} ypos={card.top} rotate={card.rotate}  />
        })}
      </div>

      <h4 className={styles.copyright}>&copy; Lillskrot & Jag</h4>
    </div>
	
  );
};

export default Jul2022;
