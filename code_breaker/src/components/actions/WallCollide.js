const WallCollision = (ballObj, canvas, player, paddleProps) => {

    if (ballObj.y + ballObj.rad >= canvas.height) {
        player.lives--
        ballObj.x = paddleProps.x - canvas.width / 2 + paddleProps.width - 30
        ballObj.y = paddleProps.y - 10
        ballObj.xMove = 6 * (Math.random() * 2 - 1)
        ballObj.yMove = -6
    }

    if (ballObj.y - ballObj.rad <= 0) {
        ballObj.yMove *= -1
    }

    if(ballObj.x - ballObj.rad <= 0 || ballObj.x + ballObj.rad >= canvas.width) {
        ballObj.xMove *= -1
    }
}

export default WallCollision