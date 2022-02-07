class AngryBird{
    constructor(x,y,w,h){
        var options={
            restitution:0.7,
            friction:0.5,
            density:1,

        }
        this.body=Bodies.circle(x,y,w,h,options);
        World.add(world,this.body);
        this.w=w;
        this.h=h;
        
        this.angryBird1 = loadImage("angrybird1.png");


    }
    display(){
        var pos=this.body.position;

        push();

        rect(pos.x,pos.y, this.w, this.h);
    //    imageMode(CENTER);
       
     //   image(this.angrybird1,0,0,pos.x,pos.y);

        pop();
        
    }
}