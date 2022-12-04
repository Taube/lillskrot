import Image from 'next/image'
import { useState } from 'react';
import styles from "../../jul.module.scss";

interface ImageAnimationProps {
    imageUrl: string;
    size: string;
    xpos: number;
    ypos: number;
    text: string;
    rotate: number;
}

const ImageAnimation = (props: ImageAnimationProps) => {

    let startXPos = props.size === "small" ? 490 : props.size === "large" ? 390 : 440;
    let startYPos = props.size === "small" ? 135 : props.size === "large" ? 0 : 70;
    const [xPos, setXPos] = useState(startXPos);
    const [yPos, setYPos] = useState(startYPos);
    const [rotate, setRotate] = useState(0);
    
    setTimeout(() => 
    {
        setXPos(props.xpos);
        setYPos(props.ypos);
        setRotate(props.rotate);
      console.log('Initial timeout!')}
       , 2500);

    return (
        <a 
            key={props.imageUrl} 
            href="#" 
            className={`start ${rotate == 0 ? "rotate" : rotate > 9 ? "rotate-plus10" : "roate-plus5"} ${props.size === "large" ? styles.big : props.size === "medium" ? styles.middle : styles.little } ${styles.polaroid}`} 
            style={{"top": `${yPos}px`, "left": `${xPos}px`, "transition": "top 2s,left 2s","WebkitTransform": `rotate(${rotate}deg)`, "MozTransformOrigin": `rotate(${rotate}deg)`, "transform": `rotate(${rotate}deg)`}}>



            {props.size === "small" && (
                <Image src={props.imageUrl} alt="" height="95" width="85" />
            )}
            {props.size === "medium" && (
                <Image src={props.imageUrl} alt="" height="200" width="170" />
            )}
            {props.size === "large" && (
                <Image src={props.imageUrl} alt="" height="400" width="300" />
            )}
            {props.text}
      </a>
    );
};

export default ImageAnimation;