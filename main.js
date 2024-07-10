import { Ball } from "./js/Ball"
import { Boundary } from "./js/Boundary"
import { Utils, Vector2d } from "./utils"

const canvas = document.getElementById("canvas")
export const c = canvas.getContext("2d")
canvas.height = innerHeight
canvas.width = innerWidth



document.onmousemove = e => {
  document.getElementById("cursor").style = `
  position:absolute;
  top:${e.clientY}px;
  left:${e.clientX}px;
  `
}



const boundaries = new Array()


const wall1 = new Boundary()
wall1.start.set(300, 300)
wall1.end.set(600, 600)
wall1.dir = Utils().sub(wall1.start, wall1.end).getUnit()
boundaries.push(wall1)
wall1.draw()

const wall2 = new Boundary()
wall2.end.set(canvas.width - 300, 300)
wall2.start.set(canvas.width - 600, 600)
wall2.dir = Utils().sub(wall2.start, wall2.end).getUnit()
boundaries.push(wall2)
wall2.draw()



const balls = []

let i = 0
setInterval(() => {
  i++
  const ball = new Ball()
  ball.position.set(400 + 400 * Math.random(), 20)
  
  ball.rad = 10
  ball.draw(boundaries)

balls.push(ball)
  if(i%10 == 0){
    balls.splice(balls.length-2 , 2)
  }

} ,300)


const animate = () => {

  c.fillStyle = "black"
  c.fillRect(0, 0, canvas.width, canvas.height)


  balls.map(ball => ball.update(boundaries))
 
  wall2.update()
  wall1.update()

  requestAnimationFrame(animate)
}

animate()