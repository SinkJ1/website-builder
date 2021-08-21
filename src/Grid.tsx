import React from "react";
import Block from "./Block";

const Grid = () =>{

    let grid = []

    let marginLeft = 0;

    for(let i = 0; i < 1000; i++){
        grid[i] = <Block margin={marginLeft} key={i}/>
        marginLeft += 12
    }

    return (
    <>
    {grid}
    </>)

}

export default Grid