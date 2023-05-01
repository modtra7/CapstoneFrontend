const MakeBrick = (level, bricks, canvas, brick) => {
    brick.width = canvas.width / 5 - 1
    let newBricks = []
    
    if (!bricks) {
        return []
    }

    if (bricks.length >= 5 * level) {
        return
    }

    for (let i = 0; i < 5 * level; i++) {
        let x = i % 5
        let y = Math.floor(i/5)
        let newBrick =  new Brick(
            brick.x + (x * (brick.width + 1)),
            brick.y + (y * (brick.height + 1)),
            brick.width,
            brick.height,
            brick.colors
        )
        newBricks.push(newBrick)

        brick.x += brick.width + 1
        if (brick.x + brick.width >= canvas.width) {
            brick.x = 0.5
            brick.y += brick.height + 1
        }
    }
    
    
    newBricks.forEach((brick) => {
        brick.draw(canvas.getContext('2d'))
    })
    
    return newBricks
}

class Brick {
    constructor(x, y, w, h, c,) {
        this.x = x 
        this.y = y
        this.width = w
        this.height = h
        this.colors = c
        this.broke = false
    }
    draw(ctx) {
        // console.log('drawing bricks');
        ctx.beginPath()
        ctx.rect(this.x, this.y, this.width, this.height)
        ctx.fillStyle = this.broke ? '#000079' : this.colors[1]
        ctx.strokeStyle = this.broke ? '#000079' : '#000079' 
        ctx.lineWidth = 5
        ctx.shadowBlur = 0
        ctx.shadowColor = "white"
        ctx.strokeRect(this.x, this.y, this.width, this.height)
        ctx.fill()
    }
}

export default MakeBrick