class Dustbin{
    constructor(x,y,width,height){
      this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=100;
		this.wallThickness=20;
		this.angle=0;
		this.image=loadImage("dustbin.png");	
		

		
		
    this.rightWall=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.rightWall, -1*this.angle);
    World.add(world, this.rightWall);
	

		
    }
    
    display()
    {
       
    
			

			image(this.image,500,250,150,150)
    }


}