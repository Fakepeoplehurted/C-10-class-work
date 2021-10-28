
function setup() 
{
  createCanvas(400,400);
  s1=createSprite(100,100,67,45)
  s2=createSprite(120,178,67,45)
  s3=createSprite(156,190,67,45)
  s4=createSprite(200,200,67,45)

  sprites=[s1,s2,s3,s4]
  
  console.log(sprites[0].position.x)
  console.log(sprites[1].position.x)
  console.log(sprites[2].position.y)
  console.log(sprites[3].position.y)
}

function draw() 
{
background(51);

}

