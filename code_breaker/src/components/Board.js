import React, {Component, useEffect, useRef} from "react";
import BallMovement from "./BallMovement";
import data from "../data";
import WallCollision from "./actions/WallCollide";
import Paddle from "./Paddle";
import MakeBrick from "./Brick";
import BrickCollision from "./actions/BrickCollide";
import PaddleHit from "./actions/PaddleCollide";
import Stats from "./PlayerStats";


let {ballObj, paddleProps, brickObj, player} = data

const Board = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        let bricks = []
      
        const render = () => {
            const canvas = canvasRef.current
            const ctx = canvas.getContext('2d')

            paddleProps.y = canvas.height - 30

            let newBrickSet = MakeBrick(2, bricks, canvas, brickObj)
            if (newBrickSet && newBrickSet.length > 0) {
                bricks = newBrickSet
            }

            
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            
            Stats(ctx, player, canvas)

            bricks.map((brick) => {
                return brick.draw(ctx)
            })
            
            BallMovement(ctx, ballObj)

            WallCollision(ballObj, canvas, player, paddleProps)
            
            let BrickBreak

            for (let i = 0; i < bricks.length; i++) {
                BrickBreak = BrickCollision(ballObj, bricks[i])

                if (BrickBreak.hit && !bricks[i].broke) {
                    if (BrickBreak.axis === "X") {
                        ballObj.xMove *= -1
                        bricks[i].broke = true
                    } else if (BrickBreak.axis === "Y") {
                        ballObj.yMove *= -1
                        bricks[i].broke = true
                    }
                    // console.log("broken:", bricks[i]);
                    player.score += 10
                    
                }
            }

            Paddle(ctx, canvas, paddleProps)

            PaddleHit(ballObj, paddleProps)
            // console.log('After PaddleHit:', ballObj.x, ballObj.y);


            requestAnimationFrame(render)
        }
        
        render()
        
    }, [])

    return <canvas 
        id="canvas"
        ref={canvasRef}
        height="500px" 
        width={window.innerWidth - 20}
        onMouseMove={(event) => paddleProps.x = event.clientX - paddleProps.width / 2} />
}

export default Board