import { c } from "../main";
import { Utils, Vector2d } from "../utils";


export class Ball {
  constructor() {

    this.speed = 1
    this.bounceSpeed = 3
    this.rad = 20
    this.position = new Vector2d(0, 0)
    this.velocity = new Vector2d(0, 0)
    this.gravity = 0.1
  }
  draw(boundaries) {
    c.beginPath();
    c.arc(this.position.x, this.position.y, this.rad, 0, 2 * Math.PI, false);
    c.fillStyle = 'white';
    c.fill();
    c.lineWidth = 2;
    c.strokeStyle = 'black';
    c.stroke();

    this.checkCollision(boundaries)


  }

  checkCollision(boundaries) {
    boundaries.map(wall => {
      let normal = new Vector2d(wall.dir.y, -wall.dir.x)
      let normalUnit = normal.getUnit()

      //Getting params for equation of a line y = mx + k
      let m = (wall.dir.y) / (wall.dir.x)
      let k = wall.start.y - m * wall.start.x

    

      //Using DBPAL formula for distance of point from line
      if (this.position.x <= wall.end.x && this.position.x >= wall.start.x) {
        if (Utils().distPointToLine(this.position, m, k) <= this.rad) {
          let velDir = Utils().sub(this.position, normalUnit).getUnit()

          if(m < 0){
          this.velocity.x = velDir.x * this.bounceSpeed
          this.velocity.y = velDir.y * this.bounceSpeed
          }else{
            this.velocity.x = -velDir.x * this.bounceSpeed
            this.velocity.y = velDir.y * this.bounceSpeed
          }

          console.log(m)
        }
      }
    })
  }

  wallCollision(boundaries) {

    console.log(boundaries)

    boundaries.map(wall => {
      console.log(wall.dir)
      let velDir = Utils().sub(this.velocity, wall.dir).getUnit()
      // this.velocity.copy(this.velocity.mag * velDir)
      console.log(this.velocity)

    })

  }

  update(boundaries) {
    this.draw(boundaries)
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
    this.velocity.y += this.gravity
  }
} 