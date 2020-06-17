var shopkeepers;
var database;

function setup() {
  createCanvas(displayWidth-200,displayHeight-500);
  database = firebase.database();
}

function draw() {

  background(255,255,255);  
 // form = new Form2 ();
 // form.display();

 getShopkeepers();
 text("Shopkeepers" + shopkeepers,400,500);
  drawSprites();
 
  
}
function getShopkeepers(){
  database.ref('Shopkeepers').on("value",(data)=>{
  shopkeepers = data.val();
  console.log("shopkeepers");
  })
}


