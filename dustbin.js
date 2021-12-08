class dustbin
{
	constructor(x,y)
	{
		option={
			isStatic:true,
			restitution:0.3,
			friction:0.5,
			density:1.2

		}
	
		
		this.image=loadImage("dustbingreen.png")
		this.bottomBody=Bodies.rectangle(x,y-60,100,20,option)
		this.leftWallBody=Bodies.rectangle(x-100+10+40,y-60,-10,-50,20,100,option)
		
		

		this.rightWallBody=Bodies.rectangle(x+100-40,y-60,-10,-50,20,100,option)
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			

			
		

			push()
			translate(posBottom.x, posBottom.y+10);
			rectMode(CENTER)
			//strokeWeight(4);
			
			fill(255)
			imageMode(CENTER);
			image(this.image,this.bottomBody.position.x,this.bottomBody.position.y-50,100,100)
			//rect(0,0,this.dustbinWidth, this.wallThickness);
			react(this.bottomBody.position.x,this.bottomBody.position.y,100,20)
			react(this.leftWallBody.position.x,this.leftWallBody.position.y,100,20)
			react(this.rightWallBody.position.x,this.rightWallBody.position.y,100,20)
			pop()
			
	}

}