import { useEffect } from "react";
import molehill from "../assets/molehill.png";

const RAND_DEFAULT = 5000
const RAND_MIN = 1000

export default function Empty({ setIsShowing }){
    useEffect(()=>{
        let randMilSec = Math.ceil(Math.random() * RAND_DEFAULT + RAND_MIN)
        let timer = setTimeout(() =>{
            setIsShowing(true)
        },randMilSec)
        return () => clearTimeout(timer)
    })
    return(
        <div>
            <img src={molehill}
                style={{'width': '30vw'}}
            />
        </div>
    )
}