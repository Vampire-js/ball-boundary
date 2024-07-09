import { Ball } from "./js/Ball"
import { Boundary } from "./js/Boundary"
import { Utils, Vector2d } from "./utils"

const canvas = document.getElementById("canvas")
export const c = canvas.getContext("2d")
canvas.height = innerHeight
canvas.width = innerWidth

const boundaries = new Array()



const wall = new Boundary()
wall.start.set(400, 600)
wall.end.set(800, 600)
wall.dir = Utils().sub(wall.start, wall.end).getUnit()
boundaries.push(wall)
wall.draw()

const wall1 = new Boundary()
wall1.start.set(100, 300)
wall1.end.set(400, 600)
wall1.dir = Utils().sub(wall1.start, wall1.end).getUnit()
boundaries.push(wall1)
wall1.draw()

const wall2 = new Boundary()
wall2.start.set(900, 690)
wall2.end.set(1100, 300)
wall2.dir = Utils().sub(wall2.start, wall2.end).getUnit()
boundaries.push(wall2)
wall2.draw()

const floor = new Boundary()
floor.start.set(0, 700)
floor.end.set(innerWidth, 690)
floor.dir = Utils().sub(floor.start, floor.end).getUnit()
boundaries.push(floor)
floor.draw()

const ball = new Ball()
ball.position.set(300, 20)
ball.draw(boundaries)

const animate = () => {

  c.fillStyle = "black"
  c.fillRect(0, 0, canvas.width, canvas.height)


  ball.update(boundaries)
  wall.update()
  wall2.update()
  wall1.update()
  floor.update()

  requestAnimationFrame(animate)
}

animate()