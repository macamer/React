import {useState} from "react";
import * as React from "react";

interface Props {
    handleSum:()=>void
}

const ButtonClick:React.FC<Props>= ({handleSum}) => {
    const [count, setCount] = useState<number>(0)

    const handleClicks = () => {
        setCount(count+1)
        handleSum()
    }

    return (
        <button onClick={(handleClicks)}>
            Clicked {count} times
        </button>
    )
}

export default ButtonClick;