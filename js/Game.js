class Game {
  constructor() {}
  
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
 
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  start()
  {
    player = new Player();
    playerCount = player.getCount()

    form = new Form()
    form.display()

    var jet1 = createSprite(100,200,20,20)
    jet1.addImage("whitejet",whiteJet)

    var jet2 = createSprite(100,200,20,20)
    jet2.addImage("blackjet",blackJet)

    jets = [jet1,jet2]
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  play()
  {
    this.handleElements()
    Player.getPlayersInfo()

    drawSprites()

    var index = 0;
    for(var plr in allPlayers)
    {
      index = index + 1;

      var x = allPlayers[plr].positionX;
      var y = height - allPlayers[plr].positionY;

      jets[index-1].position.x = x;
      jets[index-1].position.y = y;
    }

    this.handlePlayerControls()
  }
  
  handlePlayerControls()
  {
    if(keyDown(LEFT_ARROW)){
      player.positionX -= 10;
      player.update()
    }
    if(keyDown(RIGHT_ARROW)){
      player.positionX += 10;
      player.update()
    }
    if(keyDown(UP_ARROW)){
      player.positionY += 10;
      player.update()
    }
    if(keyDown(DOWN_ARROW)){
      player.positionY -= 10;
      player.update()
    }
  }
  
}
