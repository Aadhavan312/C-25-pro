class paper
{
	constructor(x,y,r)
    {
		var options=
		{
          restitution:0.3,
		  friction:0.5,
		  density:1.2,
          isStatic:false
		}
        
        this.x=x;
		this.y=y;
		this.r=r;
        this.image=loadImage("paper.png");
        this.body=Bodies.circle(this.x,this.y,(this.r-10)/2,options);
        World.add(world, this.body);
    }
    display()
	{
      var paperpos=this.body.position
	  
	  push()
	  translate(paperpos.x,paperpos.y)
	  imageMode(CENTER)
	  image(this.image,0,0,this.r,this.r)

	  pop()
			
	}
}