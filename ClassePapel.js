
var option={
isStatic:false,
restitution:0.3,
friction:0,
density:1.2
}
this.r=r;

this.body = Bodies.circle(x, y, r, options);
this.image=loadImage("paper.png");
World.add(world, this.body);
{
display()
{

var papelpos=this.body.position;

push();
translate(papelpos.x,papelpos.y);
reactmode(CENTER)

fill(255)
imageMode(CENTER);
image(this.image,0,0,2*this.r,2*this.r);
pop();
}
}
