class Circle{
constructor(x,y,width,) {
var options={
isStatic:false,
restitution:0.1,
friction:1,
density:1.2
}
this.image = loadImage("trash.png")
this.body=Bodies.circle(x,y,width,options)
this.width=width
World.add(world,this.body);



}

display(){
imageMode()
image(this.image,this.body.position.x,this.body.position.y,this.width,this.width)



}









}