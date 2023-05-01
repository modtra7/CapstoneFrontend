const BrickCollision = (circle, rect, bricks) => {

    var distX = Math.abs(circle.x - rect.x - rect.width / 2)
    var distY = Math.abs(circle.y - rect.y - rect.height / 2)

    if (distX > rect.width / 2 + circle.rad) {
        return {
            hit: false
        }
    }
    if (distY > rect.height / 2 + circle.rad) {
        return {
            hit: false
        }
    }
    if (distX <= rect.width / 2) {
        return {
            hit: true,
            axis: "Y"
        }
    } 
    if (distY <= rect.height / 2) {
        return {
            hit: true,
            axis: "X"
        }
    }

    var xMove = distX - rect.width / 2
    var yMove = distY - rect.height / 2
    return {
        hit: xMove * xMove + yMove * yMove <= circle.rad * circle.rad,
        axis: distX < distY ? "X" : "Y"
    }
}

export default BrickCollision