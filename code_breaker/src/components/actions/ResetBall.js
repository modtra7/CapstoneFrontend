const ResetBall = (ballObj, canvas, paddleProps) => {
    ballObj.x = paddleProps.x - canvas.width / 2 + paddleProps.width - 30
    ballObj.y = paddleProps.y - 10
    ballObj.xMove = 6 * (Math.random() * 2 - 1)
    ballObj.yMove = -6
}

export default ResetBall