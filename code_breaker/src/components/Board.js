import React, {Component, useEffect, useRef} from "react";
import BallMovement from "./BallMovement";
import data from "../data";

let x = 0
const Board = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
      
        const render = () => {
            const canvas = canvasRef.current
            const ctx = canvas.getContext('2d')

            let {ballObj} = data

            ctx.clearRect(0, 0, canvas.width, canvas.height)
            
            BallMovement(ctx, ballObj)

            requestAnimationFrame(render)
        }
        
        render()
        
    }, [])

    return <canvas id="canvas" ref={canvasRef} height="500px" width={window.innerWidth - 20} />
}

export default Board