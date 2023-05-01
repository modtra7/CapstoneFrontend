import data from "../../data"
import ResetBall from "./ResetBall"
const Broken = (bricks, player, canvas, ballObj) => {
    let {brickObj, paddleProps} = data
    let total = 0
    for (let i = 0; i < bricks.length; i++) {
        if (bricks[i].broke === true) {
            total++
        }
    }
    if (total === bricks.length) {
        player.level++
        ballObj.y = canvas.height - 20
        ResetBall(ballObj, canvas, paddleProps)
        brickObj.y = 50
    }
}

export default Broken