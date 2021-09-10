var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["8bc48ad4-df35-49ed-81b6-e208c9b2d528"],"propsByKey":{"8bc48ad4-df35-49ed-81b6-e208c9b2d528":{"name":"volleyball2_1","sourceUrl":"assets/api/v1/animation-library/gamelab/pwucKp9Jx5Ksr1oGABFcKnFJjewfORMI/category_sports/soccer_blue.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"pwucKp9Jx5Ksr1oGABFcKnFJjewfORMI","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/pwucKp9Jx5Ksr1oGABFcKnFJjewfORMI/category_sports/soccer_blue.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var ball;
ball = createSprite(90,200,20,20);
ball.setAnimation("volleyball2_1");
ball.scale = 0.07;

var time = 0;
var timeC = 0;

var speed = 0;

var p = createSprite(200,350,55,8);
p.shapeColor="black";

createEdgeSprites();

var bricks = createGroup();

cb (65-24,"#48f542");
cb (65,"#42f584");
cb (65+24,"#42f5ad");
cb (65+24+24,"#42f5d4");
cb (65+24+24+24,"#42f5f5");

var brick;

var score=0;

function draw() {
  background("white");
  ball.bounceOff(topEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(rightEdge);
  p.x=World.mouseX;
  p.bounceOff(edges);
  if (ball.bounceOff(p)) {
    playSound("assets/category_app/app_button_1.mp3");
  }
   if (ball.bounceOff(bricks, brickHit)) {
    playSound("assets/category_accent/puzzle_game_accent_a_02.mp3");
  }
  fill("lime");
  if (!bricks[0]) {
   ball.destroy();
   p.destroy();
   timeC=0;
   text("Good Job! You won the game in "+time+" frames.",80,200);
  }
  if (timeC>0) {
    time = time+1;
  }
  if (ball.y>400) {
    end();
  }
  drawSprites();
  }

function mousePressed() {
  speed++;
  timeC++;
  if (speed===1) {
    ball.velocityX=7;
    ball.velocityY=5;
  } else {
    ball.velocityX=7+speed;
    ball.velocityY=5+speed;
  }
}

function cb(y,colour){
  for (var i=0;i<6;i++){
  brick = createSprite(65+54*i,y,50,20);
  brick.shapeColor=colour;
  bricks.add(brick);
}
}

function brickHit(ball,brick) {
  brick.destroy();
  score=score+1;
}

function end() {
  p.destroy();
  ball.destroy();
  fill("red");
  text("You Failed. Your final score was "+score+".",120,200);
  bricks.destroy();
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
