class Dustbin{

    constructor(x,y,w,h){
        var options={isStatic:true}
        this.body=Bodies.rectangle(x,y,w,h,options)
        this.w=w
        this.h=h

        World.add(world,this.body)

        

    }

 display(){
rectMode(CENTER)
rect(this.Image,0,0,this.w,this.h)

 }

}