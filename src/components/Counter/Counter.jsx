import { useState } from "react"
import Doubled from "./Doubled"
import Controls from "./Controls"
import Display from "./Display"

function Counter() {
    const [counter, setCounter] = useState(0)
    
    return (
        <>
            <Display number={counter}/>
            <Doubled number={counter}/>
            <Controls updateNumber={setCounter}/>
        </>
    )
}

export default Counter