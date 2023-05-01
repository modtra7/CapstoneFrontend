const Broken = (bricks, player, canvas, ballObj) => {
    let total = 0
    for (let i = 0; i < bricks.length; i++) {
        if (bricks[i].broke === true) {
            total++
        }
    }
    if (total === bricks.length) {
        player.level++
        ballObj.y = canvas.height - 20
    }
}

export default Broken