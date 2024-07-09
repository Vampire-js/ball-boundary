import { c } from "../main";
import { Utils, Vector2d } from "../utils";


export class Ball {
    constructor(){

        this.speed = 10

      this.position = new Vector2d(0,0)
      this.velocity = new Vector2d(0,0)
      this.gravity = 0.1
    }
    draw(boundaries){
      c.beginPath();
      c.arc(this.position.x, this.position.y, 22, 0, 2 * Math.PI, false);
      c.fillStyle = 'white';
      c.fill();
      c.lineWidth = 2;
      c.strokeStyle = 'black';
      c.stroke();

      this.wallCollision(boundaries)

    }

checkCollision(){
    Utils().dist()
}

    wallCollision(boundaries){
        
        console.log(boundaries)
    
        boundaries.map(wall => {
                console.log(wall.dir)
                let velDir = Utils().sub(this.velocity , wall.dir).getUnit()
                // this.velocity.copy(this.velocity.mag * velDir)
                console.log(this.velocity)
        
        })
    
    }

    update(boundaries){
      this.draw(boundaries)
      this.position.x += this.velocity.x
      this.position.y += this.velocity.y
      this.velocity.y += this.gravity
    }
  } 