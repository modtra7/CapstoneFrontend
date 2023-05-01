export default {
    ballObj: {
        x: 20,
        y: 200,
        xMove: 5,
        yMove: 5,
        rad: 12,
        speed: 3
    },
    brickObj: {
        x: 0.5,
        y: 50,
        width: 800 / 10 - 1,
        height: 20,
        density: 2,
        colors: ["white", 'lightblue']
    },
    player: {
        lives: 3,
        score: 0,
        level: 1
    },
    paddleProps: {
        height: 20,
        width: 100,
        x: 100,
        colors: "yellow"
    }
}