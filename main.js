import { Ball } from "./js/Ball"
import { Boundary } from "./js/Boundary"
import { Utils, Vector2d } from "./utils"

const canvas = document.getElementById("canvas")
export const c = canvas.getContext("2d")
canvas.height = innerHeight
canvas.width = innerWidth

const boundaries = new Array()



const wall = new Boundary()
wall.start.set(20, 200)
wall.end.set(220, 0)
wall.dir = Utils().sub(wall.start, wall.end).getUnit()
boundaries.push(wall)
wall.draw()

const ball = new Ball()
ball.position.set(50, 20)
ball.draw(boundaries)

const animate = () => {

  c.fillStyle = "black"
  c.fillRect(0, 0, canvas.width, canvas.height)


  ball.update(boundaries)
  wall.update()

  requestAnimationFrame(animate)
}

animate()