//create new scene
const gameScene = new Phaser.Scene("Game");

gameScene.init = function(){
    //player speed
    this.playerSpeed = 2;
    // this.enemySpeed = 3;

   //  enemy speed
   this.enemyMinimumSpeed = 2;
   this.enemyMaximumSpeed = 5;

}
//load assets
gameScene.preload = function(){
    // load images
    this.load.image("background",'images/background.png');
    this.load.image("player",'images/player.png');
    this.load.image("enemy",'images/dragon.png');
    this.load.image("goal",'images/treasure.png');



}
// called once after the preload ends
gameScene.create = function(){
    // create background sprite
   let bg =  this.add.sprite(0,0,'background'); 
   console.log(bg);
   //bg.setOrigin(0,0);
   let gameWidth = this.sys.game.config.width;
   let gameHeight = this.sys.game.config.height;
   bg.setPosition(gameWidth/2,gameHeight/2);

   player = this.add.sprite(70,180,'player');
  // player.x = 200;
   player.scale = 0.5;
  // player.depth = 4;
   console.log(player);

//    this.enemy1 = this.add.sprite(250,180,'enemy');
//    this.enemy1.displayWidth = 50;
//    this.enemy1.displayHeight = 50;
//    this.enemy1.flipX = true;
  // this.enemy1.angle = 45;
  // enemy1.setAngle(315);
  // enemy1.rotation = Math.PI/4;
  // enemy1.setRotation(Math.PI/4);

 // ENEMY GROUP
   this.enemies = this.add.group({
       key: "enemy",
       repeat: 4,
       setXY:{
           x:150,
           y:100,
           stepX:80
       }

   })

   Phaser.Actions.ScaleXY(this.enemies.getChildren(),-0.4,-0.4);
   Phaser.Actions.Call(this.enemies.getChildren(),function(enemy){
       enemy.flipX = true;
       let dir = Math.random() > 0.5 ? 1 : -1;
       let speed = this.enemyMinimumSpeed + Math.random()*(
           this.enemyMaximumSpeed - this.enemyMinimumSpeed
       );
       enemy.speed = dir*speed;

   },this)

//    enemy2 = this.add.sprite(450,180,'enemy');
//    enemy2.displayWidth = 50;
//    enemy2.displayHeight = 50;
//    enemy2.flipX = true;

   goal = this.add.sprite(gameWidth-80,gameHeight/2,'goal');
   goal.scale = 0.5;

   //enemy speed
   let dir = Math.random() > 0.5 ? 1 : -1;
   let speed = this.enemyMinimumSpeed + Math.random()*(
       this.enemyMaximumSpeed - this.enemyMinimumSpeed
   );
//    this.enemy1.speed = dir*speed;

}

gameScene.update = function(){
//   this.enemy1.x += 0.1;
//   this.enemy1.angle += 1 ;

//   enemy2.x += 0.1;
//   enemy2.angle += 1 ;
  
//   if(player.scale < 2){
//   player.scale += 0.003
//   }

// check for active input
   if(this.input.activePointer.isDown){
     player.x += this.playerSpeed;
   }
  
   // overlap check
   let playerRectangle = player.getBounds();
   let treasureRectangle = goal.getBounds();
   if(Phaser.Geom.Intersects.RectangleToRectangle(playerRectangle,treasureRectangle)){
       //alert("reached goal!");

       //restart scene
       this.scene.restart();
   }
   let enemies = this.enemies.getChildren();
   let numberOfEnemies = enemies.length;
   for(let i = 0;i<numberOfEnemies; i++){
       enemies[i].y += enemies[i].speed;
       if(enemies[i].y >= 290 || enemies[i].y <60){
        enemies[i].speed *= -1;
    }
//    let enemyRectangle = enemies[i].getBounds();
//    if(Phaser.Geom.Intersects.RectangleToRectangle(playerRectangle,enemyRectangle)){
//         alert("reached goal!");
// //    }
//     //restart scene
//     this.scene.restart();
// }
   }
//    this.enemy1.y += this.enemy1.speed;

//    if(this.enemy1.y >= 290 || this.enemy1.y <60){
//        this.enemy1.speed *= -1;
//    }
}
//sets the games configuration
const config = {
    type: Phaser.AUTO, //WebGL/Canvas
    width:640,
    height:360,
    scene:gameScene
};

//create the game,pass the configuration

const game = new Phaser.Game(config);