import { useState } from "react"
import Mole from "./Mole"
import Empty from "./Empty"


export default function MoleContainer({ score, setScore }){
    const [isShowing, setIsShowing] = useState(false)

    const onMoleClick = e => {
        if(isShowing){
            setScore(score + 1)
            setIsShowing(false)
        }
    }

    return(
        <div className="Mole-Container">
            {
                isShowing ?
                <Mole setIsShowing={setIsShowing} onMoleClick={onMoleClick}/>
                :
                <Empty setIsShowing={setIsShowing}/>
            }
        </div>
    )
}