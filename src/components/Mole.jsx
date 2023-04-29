import { useEffect } from "react";
import mole from "../assets/mole.png";

const RAND_DEFAULT = 5000
const RAND_MIN = 1000


export default function Mole({ onMoleClick, setIsShowing }){
    useEffect(() => {
        let randMilSec = Math.ceil(Math.random() * RAND_DEFAULT + RAND_MIN)
        let timer = setTimeout(() =>{
            setIsShowing(false)
        },randMilSec)
        return () => clearTimeout(timer)
    })
    return(
        <div>
            <img src={mole}
                style={{'width': '30vw'}}
                onClick={onMoleClick}
            />
        </div>
    )
}