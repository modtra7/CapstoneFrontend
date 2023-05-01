const Stats = (ctx, player, canvas) => {
    ctx.font = "20px Arial"
    ctx.fillStyle = "red"
    let gap = 0
    for (let i = 0; i < player.lives; i++) {
        ctx.fillText(('\u2764'), canvas.width / 2 + gap, 30)
        gap += 30
    }

    ctx.font = "20px Arial"
    ctx.fillStyle = "gray"
    ctx.fillText("Score:" + player.score, canvas.width - 140, 30)
} 

export default Stats