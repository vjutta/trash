class Paper{

    constructor(x,y){
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }

    this.body=Bodies.circle(x,y,30,options)
    this.radius=30;
    this.image=loadImage("paper.png")
    World.add(world,this.body);
}

    display(){
       push()
       tanslate(this.body.position.x,this.body.position.y)
       imageMode(CENTER)
       image(this.image,0,0,this.radius)
        pop()
    }
}