const PaddleHit = (ballObj, paddleProps) => {
    if (
        ballObj.x < paddleProps.x + paddleProps.width &&
        ballObj.x > paddleProps.x &&
        ballObj.y + ballObj.rad > paddleProps.y &&
        ballObj.y - ballObj.rad < paddleProps.y + paddleProps.height
      ) {
        let contactPoint = ballObj.x - (paddleProps.x + paddleProps.width / 2)
        contactPoint = contactPoint / (paddleProps.width / 2)
        let angle = (contactPoint * Math.Pi) / 4
        ballObj.yMove = -ballObj.yMove;
      }
}

export default PaddleHit