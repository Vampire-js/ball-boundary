export class Vector2d {
    constructor(x,y){
        this.x = x
        this.y = y
        this.mag = Math.sqrt(x*x + y*y)
    }
    set(x,y){
        this.x = x
        this.y = y
    }
    copy(v){
        this.x = v.x
        this.y = v.y
    }
    getUnit(){
        return {
            x:this.x/this.mag,
            y:this.y/this.mag,
        }
    }
}

export function Utils () {
    function sub(v1 , v2){
        return new Vector2d(v2.x - v1.x,
        v2.y - v1.y
        )
       } 

       function dist(v1 , v2){
        return Math.sqrt(((v1.x-v2.x)^2) +((v1.y-v2.y)^2) )
       }
    return {
       sub:sub
    }
}