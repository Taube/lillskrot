import Image from 'next/image'
import {useEffect, useLayoutEffect, useRef, useState} from 'react';
import styles from "../../jul.module.scss";

interface ImageAnimationProps {
    width: number;
    imageUrl: string;
    size: string;
    xpos: number;
    ypos: number;
    text: string;
    rotate: number;
}

const ImageAnimation = (props: ImageAnimationProps) => {

    //let startXPos = props.size === "small" ? (props.width - 95) / 2 : props.size === "large" ? (props.width - 300) / 2 : (props.width - 200) / 2;
    let startXPos = 0;
    switch(props.size)
    {
        case "small": 
            startXPos = (props.width - 95) / 2;
            break;
        case "large":
            startXPos = (props.width - 300) / 2;
            break;
        case "tiny":
            startXPos = (props.width - 50) / 2;
            break;
        default: 
            startXPos = (props.width - 180) / 2;
            break;
    }   

    //let startYPos = props.size === "small" ? 135 : props.size === "large" ? 0 : 70;
    let startYPos = 0;
    switch(props.size)
    {
        case "small": 
        startYPos = 135;
            break;
        case "large":
            startYPos = 0;
            break;
        case "tiny":
            startYPos = 155;
            break;
        default: 
            startYPos = 70;
            break;
    }
    
    const [xPos, setXPos] = useState(startXPos);
    const [yPos, setYPos] = useState(startYPos);    
    const [rotate, setRotate] = useState(0);

    setTimeout(() => 
    {
        const newXpos = (props.width / 100 * props.xpos);
        let newYpos = props.ypos;
        if (props.width < 400)
        {
            if (props.ypos > 300)
            {
                newYpos = props.ypos - 100;
            }
            else if (props.ypos > 200) {
                newYpos = props.ypos - 50;
            }
        }
        setXPos(newXpos);
        setYPos(newYpos);
        setRotate(props.rotate);
    }, 500);

    let cssSize = "medium";
    if (props.size === "large") {
        cssSize = styles.big;
    } else if (props.size === "largemobile") {
        cssSize = styles.bigmobile;
    } else if (props.size === "medium") {
        cssSize = styles.middle;
    } else if (props.size === "tiny") {
            cssSize = styles.tiny;
    } else {
        cssSize = styles.little;
    }

    return (
        <a 
            key={props.imageUrl} 
            href="#" 
            className={`start ${rotate == 0 ? "rotate" : rotate > 9 ? "rotate-plus10" : "roate-plus5"} ${cssSize} ${styles.polaroid}`} 
            //style={{"top": `${yPos}px`, "left": `${xPos}px`, "transition": "top 2s,left 2s","WebkitTransform": `rotate(${rotate}deg)`, "MozTransformOrigin": `rotate(${rotate}deg)`, "transform": `rotate(${rotate}deg)`}}>
            style={{"top": `${yPos}px`, "left": `${xPos}px`, "transition": "top 2s,left 2s","WebkitTransform": `rotate(${rotate}deg)`, "MozTransformOrigin": `rotate(${rotate}deg)`, "transform": `rotate(${rotate}deg)`}}>


            {props.size === "tiny" && (
                <Image src={props.imageUrl} alt="" height="55" width="50" />
            )}
            {props.size === "small" && (
                <Image src={props.imageUrl} alt="" height="95" width="85" />
            )}
            {props.size === "medium" && (
                <Image src={props.imageUrl} alt="" height="200" width="170" />
            )}
            {props.size === "largemobile" && (
                <Image src={props.imageUrl} alt="" height="200" width="150" />
            )}
            {props.size === "large" && (
                <Image src={props.imageUrl} alt="" height="400" width="300" />
            )}
            {props.text}
      </a>
    );
};

export default ImageAnimation;