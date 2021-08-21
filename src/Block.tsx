import React from "react";
import { useState } from "react";

interface Props {
    margin: number
}

const Block = ( { margin }: Props) =>{

    const [color, setColor] = useState("red");

    const style: any = {
        height : "10px",
        width: "10px",
        border: "1px solid black",
        float: "left",
        backgroundColor: color,
    }

    const onClick = (e: React.MouseEvent<HTMLElement>) =>{
        setColor("white")
    }

    return <><div style={style} onClick={onClick}></div></>

}

export default Block